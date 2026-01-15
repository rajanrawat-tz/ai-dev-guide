# Role Guide: Developer

## Your focus
Ship features quickly **without** breaking quality gates.

## Your default path
- Read `content/phases/phase-0-foundation.md` once (understand the foundation)
- Use the phase guides during feature work:
  - Phase 0 → Phase 1 → Phase 2 → Phase 3 → Phase 4 → Phase 5
- Keep the Quick Reference accessible:
  - `content/shared/quick-reference-card.md`

## What you own in each phase (summary)

### Phase 0
- Ensure PRD exists and is understood
- Ensure Feature Specification + Implementation Guide exist

### Phase 1
- Generate/clarify spec, plan, tasks
- Ensure tasks include test-first workflow

### Phase 2
- Create issues and hierarchy (Epic → Story → Tasks)
- Create feature branch

### Phase 3
- TDD implementation
- Keep coverage >= 80%

### Phase 4
- Get independent AI review + run automated tools
- Fix critical issues

### Phase 5
- Create PR with full checklist and AI toolchain disclosure

## Non-negotiables
- TDD first: `content/shared/tdd-and-coverage.md`
- Reviewer independence: `content/shared/reviewer-independence.md`
- Emergency stops: `content/shared/troubleshooting-and-emergency-stops.md`

## Daily checklist (fast)
- [ ] I know the acceptance criteria
- [ ] I know the constitution constraints
- [ ] I wrote the test first
- [ ] Tests are green
- [ ] Coverage >= 80%
- [ ] Different model reviewed my changes
- [ ] PR includes AI toolchain
