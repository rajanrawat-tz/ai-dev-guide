# Agent Mode (Preview)

---

## What it is

**Agent Mode** extends the current spec-driven workflow with specialized AI agents that can draft, verify, and propose changes across multiple phases—while maintaining the same quality gates and independence principles you already follow.

Think of it as a team of specialists (research, spec, implementation, QA, review) that work in parallel, hand off structured artifacts, and require your approval before anything ships.

---

## The Agents (roles + scope)

| Agent | What it does | Permissions |
|-------|-------------|-------------|
| **Orchestrator** | Assigns work, enforces gates | Read-only + planning |
| **Research** | Gathers context, lists tradeoffs | Read repo + write notes to `/docs/research/` |
| **Spec/Docs** | Writes specs, acceptance criteria, tasks | Write to `/specs/` and `/docs/` |
| **Implementation (Thor)** | Writes code + tests in small commits | Edit files + run tests + git commit locally |
| **QA** | Adds edge case tests, runs test suites | Edit tests + run commands |
| **Review/Security** | Reviews code, flags risks | Read-only + comment |

---

## Guardrails (how safety is enforced)

- **All tests must pass** before any agent can push or open a PR
- **Reviewer independence**: Review agent is a different persona/session than Implementation
- **Manual approval required** for any GitHub PR creation (no auto-merge)
- **Structured handoffs**: every agent outputs summary, files changed, risks, and verification steps
- **Traceability**: each task links to commits/tests; each AC maps to test cases

---

## How to try it (start small)

1. **Pick one feature** from your backlog (small, well-defined)
2. **Enable MCP tools**: GitHub (read + write issues) + filesystem (local repo)
3. **Run Phase 1** (Spec) with the Spec/Docs agent to generate `/specs/<feature>/spec.md` and `tasks.md`
4. **Review the output** and iterate until the spec is solid
5. **Run Phase 3** (Implementation) with Thor agent—let it write code + tests locally, then review before allowing a push
6. **Track quality**: compare bug count, rework time, and coverage % vs. your baseline

---

## When to adopt this

- **Not yet**: if your team is still learning the current 5-phase SOP
- **Soon**: after 5–10 features using the manual workflow, when gates feel routine
- **Now (experimental)**: if you have a small side project or sandbox feature to test agent handoffs

---

## What's different from "just using Copilot"

| Traditional AI coding | Agent Mode |
|----------------------|------------|
| One tool, one session | Multiple specialists, parallel work |
| You manage all context | Orchestrator tracks handoffs + gates |
| Manual test writing | QA agent adds edge cases proactively |
| Self-review or none | Independent Review agent enforces blind review |
| Ad-hoc workflow | Structured phases with checkpoints |

---

## Feedback & evolution

This is a **preview**—we're testing guardrails and handoff contracts in real projects. If you try Agent Mode, track:
- Time saved (or lost) in each phase
- Bug escape rate (production issues)
- Test coverage delta
- Developer confidence vs. anxiety

Your feedback shapes the next iteration.

---

**Next steps:**
- Return to [Start Here](?doc=content/shared/start-here.md) for the core workflow
- Review [AI Tools & Setup](?doc=content/shared/ai-tools-and-setup.md) for current toolchain guidance
