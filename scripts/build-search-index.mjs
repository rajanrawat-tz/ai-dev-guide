import { promises as fs } from 'node:fs';
import path from 'node:path';

const ROOT = process.cwd();
const CONTENT_DIR = path.join(ROOT, 'content');

function slugify(text) {
  return String(text)
    .toLowerCase()
    .trim()
    .replace(/[\s]+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-');
}

async function exists(p) {
  try {
    await fs.access(p);
    return true;
  } catch {
    return false;
  }
}

async function walk(dir) {
  const out = [];
  const entries = await fs.readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      out.push(...(await walk(full)));
    } else if (entry.isFile() && entry.name.toLowerCase().endsWith('.md')) {
      out.push(full);
    }
  }
  return out;
}

function extractTitle(markdown, fallback) {
  const lines = markdown.split(/\r?\n/);
  for (const line of lines) {
    const m = line.match(/^#\s+(.+)\s*$/);
    if (m) return m[1].trim();
  }
  return fallback;
}

function normalizeForSearch(markdown) {
  // Keep it simple/robust: strip fenced code blocks, inline code markers, and most markdown syntax.
  let t = markdown;

  // Remove fenced code blocks
  t = t.replace(/```[\s\S]*?```/g, ' ');

  // Remove inline code ticks
  t = t.replace(/`([^`]+)`/g, '$1');

  // Remove images/links but keep label
  t = t.replace(/!\[[^\]]*\]\([^\)]*\)/g, ' ');
  t = t.replace(/\[([^\]]+)\]\([^\)]*\)/g, '$1');

  // Remove headings markers
  t = t.replace(/^#{1,6}\s+/gm, '');

  // Remove blockquote markers
  t = t.replace(/^>\s?/gm, '');

  // Remove list markers (-, *, +, 1.)
  t = t.replace(/^\s*(?:[-*+]\s+|\d+\.\s+)/gm, '');

  // Collapse whitespace
  t = t.replace(/\s+/g, ' ').trim();

  return t;
}

function chunkText(markdown) {
  const chunks = [];

  const lines = markdown.split(/\r?\n/);
  let current = { heading: '', anchor: '', text: '' };

  function pushCurrent() {
    const text = normalizeForSearch(current.text);
    if (text.length > 0) {
      chunks.push({
        heading: current.heading,
        anchor: current.anchor,
        text
      });
    }
    current = { heading: '', anchor: '', text: '' };
  }

  for (const line of lines) {
    const h2 = line.match(/^##\s+(.+)\s*$/);
    if (h2) {
      // New section
      pushCurrent();
      current.heading = h2[1].trim();
      current.anchor = slugify(current.heading);
      current.text = '';
      continue;
    }

    current.text += line + '\n';
  }

  pushCurrent();

  // If file had no H2s, chunk as a single blob
  if (chunks.length === 0) {
    const all = normalizeForSearch(markdown);
    if (all) chunks.push({ heading: '', anchor: '', text: all });
  }

  return chunks;
}

async function main() {
  if (!(await exists(CONTENT_DIR))) {
    console.error(`content directory not found at: ${CONTENT_DIR}`);
    process.exit(1);
  }

  const files = await walk(CONTENT_DIR);
  files.sort();

  const docs = [];
  for (const file of files) {
    const rel = path.relative(ROOT, file).split(path.sep).join('/');
    const raw = await fs.readFile(file, 'utf8');
    const fallbackTitle = path.basename(file, '.md');
    const title = extractTitle(raw, fallbackTitle);

    const chunks = chunkText(raw);

    // A short description from the first chunk (or whole doc)
    const description = chunks[0]?.text?.slice(0, 180) || '';

    docs.push({
      title,
      path: rel,
      description,
      chunks
    });
  }

  const index = {
    version: 1,
    generatedAt: new Date().toISOString(),
    docs
  };

  const outPath = path.join(ROOT, 'search-index.json');
  await fs.writeFile(outPath, JSON.stringify(index, null, 2) + '\n', 'utf8');

  console.log(`search-index.json written with ${docs.length} docs`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
