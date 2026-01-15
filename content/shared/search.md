# Search (Static Option B)

This site uses **Option B**: a **prebuilt JSON index** + **client-side search**.

## How it works

1. A file named `search-index.json` is generated from your markdown files.
2. The UI loads `search-index.json` in the browser.
3. When the user types a query:
   - the code searches the index locally (no server)
   - results show title + snippet
   - clicking a result navigates the user to the right page and (optionally) the right heading anchor

This is fully static and works on GitHub Pages or any static host.

## Where to toggle search on/off (simple show/hide)

Add a single boolean flag in your site JavaScript (example name):

- `const SEARCH_ENABLED = true;`

Then use it in two places:
1. **Hide the search UI** (search box/button/nav item) when `SEARCH_ENABLED === false`
2. **Skip loading `search-index.json`** when `SEARCH_ENABLED === false`

That’s it—one switch controls both UI and behavior.

## Important note (local file browsing)

Many browsers block `fetch()` from `file://` pages. That can break loading:
- markdown files
- `search-index.json`

For consistent local use, run a tiny local static server.
(We’ll document one-liners later; no build system needed.)
