# Role Guide: QA

## Your focus
Ensure the feature is **testable**, **covered**, and **safe to change**.

## Where you engage
- Phase 1: validate spec scenarios are testable
- Phase 3: ensure test strategy covers critical + edge paths
- Phase 4: validate review findings + ensure tests remain green
- Phase 5: validate PR evidence (coverage, test results, docs)

## What “good” looks like
- Acceptance criteria translate cleanly into test cases
- Tests include:
  - happy path
  - negative cases
  - boundary conditions
  - permission/auth cases (when applicable)
  - data validation and error handling

## QA checklist per phase

### Phase 1 (Specification)
- [ ] Acceptance criteria are specific and testable
- [ ] Edge cases are explicitly documented
- [ ] Non-functional requirements are present (performance/security) where needed

### Phase 3 (Implementation)
- [ ] Tests exist before implementation code
- [ ] Tests exercise the acceptance criteria
- [ ] Test naming and structure are consistent
- [ ] Coverage constraint is met (>= 80%)

### Phase 4 (Review)
- [ ] An independent AI reviewer was used
- [ ] At least 2 automated tools were run
- [ ] High/critical issues have tests or strong justification

### Phase 5 (Release)
- [ ] PR checklist is complete
- [ ] CI status is green
- [ ] Quickstart exists for validating the feature

## Key references
- Prompt library: `content/shared/prompt-library.md`
- TDD policy: `content/shared/tdd-and-coverage.md`
- Troubleshooting & emergency stops: `content/shared/troubleshooting-and-emergency-stops.md`
