# AI Tools Ecosystem & Setup

---

## Speckit (Specification Tool)

**Speckit** is GitHub's specification toolkit that helps you generate detailed specifications, implementation plans, and task breakdowns using AI. It's a core part of Phase 1 (Specification & Planning) of this workflow.

### What Speckit Does
- `/speckit.constitution` — Load project-specific technical constraints
- `/speckit.specify` — Generate feature specifications from user stories
- `/speckit.clarify` — Ask questions to clarify unclear requirements
- `/speckit.plan` — Generate step-by-step implementation plans
- `/speckit.tasks` — Break plans into atomic, TDD-ready tasks
- `/speckit.analyze` — Cross-check consistency across all artifacts

### Resources
- **GitHub Repository**: [github/spec-kit](https://github.com/github/spec-kit)
- **Documentation**: See the repository README for installation and usage

### Manual Alternative
If Speckit is unavailable, you can follow the manual prompts provided in [Phase 1: Specification](?doc=content/phases/phase-1-specification.md) to achieve similar results using any LLM (Claude, ChatGPT, etc.).

---

## How to choose your toolchain

### Minimum (everyone)
- 1 coding assistant
- 1 different reviewer model/tool
- 1 linter/static analysis tool

### Recommended (after 1 month)
- add a code quality tool (e.g., Sourcery/SonarLint)

### Advanced (成熟 teams)
- add security scanning and PR auto-review

---

## Tool comparison (from Quick Reference)

| Tool | Type | Best For | When to Use |
|------|------|----------|-------------|
| **Speckit** | AI Spec | Specifications, planning, tasks | Phase 1 (every feature) |
| **Sourcery** | Static | Code quality, refactoring | Every PR |
| **ESLint** | Static | Style, standards | Every commit |
| **Antigravity** | AI | Architecture, security | Complex features |
| **Claude** | LLM | Deep analysis, constitution | Code generation & review |
| **Copilot** | LLM | Quick fixes, inline help | Code generation & review |
| **Cursor** | LLM IDE | Full-file review, editing | Code generation & review |
| **CodeRabbit** | AI | PR auto-review | Every PR (if installed) |
| **SonarQube** | Static | Bugs, vulnerabilities, debt | Weekly/release |
| **DeepSource** | Static | Multi-language, auto-fix | CI pipeline |

---

## Setup snippets (from SOP)

### Sourcery Setup
```bash
# Install
pip install sourcery

# Authenticate
sourcery login

# Configure in project (.sourcery.yaml)
echo "
rule_settings:
  enable:
    - default
  python_version: '3.11'
refactor:
  skip: []
" > .sourcery.yaml

# Use in workflow
# Review: sourcery review .
# Auto-fix: sourcery review --fix .
```

### Antigravity Setup
```bash
# Install (check latest docs for your language)
npm install -g antigravity-cli

# Configure
antigravity init

# Use in workflow
# Review: antigravity review [file-or-dir]
# Security focus: antigravity review --security-only
```

### CodeRabbit Setup (GitHub)
```yaml
# 1. Install CodeRabbit GitHub App from marketplace
# 2. Add configuration file: .coderabbit.yaml

reviews:
  auto_review:
    enabled: true
    base_branches:
      - main
  path_instructions:
    - path: "src/**"
      instructions: "Review for best practices, strict compliance, and constitution adherence"
    - path: "**/*.test.*"
      instructions: "Verify test coverage, edge cases, and TDD compliance"
```

### SonarQube/SonarLint Setup
```bash
# sonar-project.properties
sonar.projectKey=[your-project-key]
sonar.sources=src
sonar.tests=tests
sonar.coverage.exclusions=**/*.test.*,**/*.spec.*

# Run analysis
npm run test:coverage  # Generate coverage
sonar-scanner  # Run analysis
```

---

## Where this fits in the phases

- Phase 3: run tests + coverage continuously
- Phase 4: run multi-model review + automated tools
- Phase 5: document toolchain in PR
