# 🤖 AI-Assisted Development Guide

> A rigorous Standard Operating Procedure (SOP) for shipping high-quality code with AI agents.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)

## Why This Exists
Most AI coding advice stops at "tips and tricks." This guide provides a **process**:

1.  **Phase 0 (Foundation)**: Creating Specs & Implementation Guides *before* coding.
2.  **Phase 1 (Planning)**: Using AI to break down tasks and generate implementation plans.
3.  **Phase 3 (Execution)**: Mandatory **TDD (Test Driven Development)** to catch edge cases AI misses.
4.  **Phase 4 (Review)**: The **Reviewer Independence Rule**—if Claude writes the code, Copilot must review it.

## 🚀 Getting Started

### Method A: View the Docs
*   📖 [**Standard Operating Procedure (SOP)**](./AI-DEVELOPMENT-SOP-v1.4.0-FINAL.md): The full manual (1700+ lines of detailed workflows).
*   ⚡ [**Quick Reference Card**](./AI-DEV-QUICK-REFERENCE-v1.4.0-FINAL.md): For daily use during development.

### Method B: Run Locally
You can run the full documentation site locally to use the interactive viewers (`index.html`, `docs.html`):

```bash
# Serves the current directory
npx serve .
```
Then open `http://localhost:3000`.

## 🛠️ Tools & Setup
This workflow references a specific toolchain designed for reliability.

👉 **Read the [AI Tools Setup Guide](content/shared/ai-tools-and-setup.md)** to learn about:
*   **Speckit**: The specification generator used in Phase 1.
*   **Review Tools**: How to configure Sourcery, Antigravity, and SonarQube.
*   **Manual Alternatives**: How to run the workflow even if you don't have the specific scripts.

## 📂 Project Structure

*   `AI-DEVELOPMENT-SOP-*.md`: The core process documentation.
*   `AI-DEV-QUICK-REFERENCE-*.md`: Condensed guide for experienced users.
*   `content/`: detailed markdown knowledge base.
*   `scripts/`: Utilities for building the search index.
*   `*.html`: Web viewers for the documentation.

## 🤝 Contributing
We welcome contributions to make this the standard for AI engineering!
Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on how to submit changes.

## 📜 License
This project is licensed under the [MIT License](LICENSE).
