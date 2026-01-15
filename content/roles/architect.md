# Role Guide: Architect

## Your focus
Prevent architectural drift by enforcing the constitution and promoting consistent patterns.

## Where you engage
- Phase 0: ensure foundation docs are correct and aligned
- Phase 1: ensure plans are constitution-compliant
- Phase 4: review architecture/security/performance risks

## Your core responsibilities
- Define and maintain the constitution (non-negotiables)
- Provide Implementation Guide patterns and reference implementations
- Decide when an ADR is required
- Unblock teams when constitution constraints conflict with new requirements

## Architect checklists

### Foundation (Phase 0)
- [ ] Feature Specification template exists and yields consistent stories
- [ ] Implementation Guide reflects current architecture and patterns
- [ ] Constitution is discoverable and up to date

### Specification (Phase 1)
- [ ] Plan includes an explicit constitution compliance section
- [ ] Dependencies and integration contracts are defined
- [ ] Risk areas are called out early (data migrations, auth, performance)

### Review (Phase 4)
- [ ] Independent AI reviewer used
- [ ] Security review performed for relevant changes
- [ ] Performance review performed for relevant changes
- [ ] Any constitution exceptions are documented + approved

## Key references
- Phase guides: `content/phases/phase-0-foundation.md` … `content/phases/phase-5-release.md`
- Reviewer independence: `content/shared/reviewer-independence.md`
- Tools and setup: `content/shared/ai-tools-and-setup.md`
