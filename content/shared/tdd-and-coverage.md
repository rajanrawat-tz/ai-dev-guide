# TDD & Coverage Policy

---

## The rule

**Tests must be written before implementation code.**

### TDD Workflow

```
1. WRITE TEST → 2. RUN (FAIL/RED) → 3. IMPLEMENT → 4. RUN (PASS/GREEN) → 5. REFACTOR
```

---

## Why this is mandatory (especially with AI)

- AI-generated code often looks correct but misses edge cases
- TDD makes requirements testable and prevents “spec drift”
- Refactoring becomes safe because tests protect behavior

---

## Coverage requirement

**Coverage target:** >= 80%

Coverage is a gate at **Checkpoint 3** and must remain green during Phase 4 fixes.

---

## Practical guidance

- Start with “critical path” tests first
- Add edge cases incrementally
- Don’t delete or weaken tests to make failures go away (unless the test itself was wrong)

---

## Escalation trigger

If you can’t write tests first, it usually means one of these is true:
- requirements are unclear
- spec is missing scenarios
- design is too coupled to test effectively

**Action:** stop, clarify, and/or escalate to the tech lead.
