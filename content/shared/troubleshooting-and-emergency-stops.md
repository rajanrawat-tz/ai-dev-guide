# Common Situations, Troubleshooting & Emergency Stops

---

## Common Situations & Troubleshooting

| Situation | Quick Action |
|-----------|--------------|
| 🐛 **Bug in production** | Create issue → Write failing test → Fix → PR |
| ❓ **Spec unclear** | `/speckit.clarify` → Update spec → Get confirmation |
| 🚫 **Constitution blocks approach** | Document in tracking → Discuss with lead → ADR if needed |
| 🤔 **AI code looks wrong** | **Trust your instincts** → Check constitution → Different AI review → Ask senior |
| 💤 **Speckit down** | Use templates → Manual spec → Senior review before Phase 2 |
| ⏰ **Tests take too long** | **Don't skip** → Start with critical path → Add edge cases incrementally |
| 🚧 **Blocked by dependency** | Update issue → Work on parallel tasks → Create mocks for testing |
| 🌙 **Working after hours** | Check constitution → Use `/speckit.clarify` (async) → Post in team chat → Document blockers |

---

## Emergency Stops ⛔

**STOP IMMEDIATELY IF:**
- ❌ Constitution check fails → Escalate to tech lead
- ❌ Can't write test first → Requirements unclear, use `/speckit.clarify`
- ❌ Security issue found → Fix before proceeding
- ❌ Coverage < 80% → Write more tests
- ❌ Same AI reviewing its own code → Use different model
- ❌ Docker tests fail → Debug before PR

**ESCALATE TO:**
- Tech lead for architecture decisions
- Create ADR if constitution change needed
- Senior developer if stuck > 2 hours

---

## “When in doubt” reminder

- If the **spec is unclear**, stop and clarify before coding.
- If you **can’t write a test**, it usually means the requirements aren’t testable yet.
- If the **constitution blocks the design**, don’t “work around it” silently—escalate.
- If a **security issue** is found, treat it as a hard stop.
