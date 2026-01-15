# Complete Feature Walkthrough

This example walks through building a **User Profile Edit** feature from start to finish, demonstrating every phase of the AI-assisted development workflow.

---

## The Feature

**User Story**: As a logged-in user, I want to edit my profile information (name, email, avatar) so that I can keep my account details up to date.

**Acceptance Criteria**:
- User can update display name (2-50 characters)
- User can update email (must be valid, unique)
- User can upload avatar (max 2MB, JPG/PNG only)
- Changes require current password confirmation
- Email changes require re-verification

---

## Phase 0: Foundation (30-45 minutes)

### Step 0.1: Understand Requirements

Read the user story and acceptance criteria carefully. Note:
- This involves user authentication (security-sensitive)
- File upload handling
- Email verification flow

### Step 0.2: Review Constitution

Check your project's constitution for relevant rules:

```markdown
Relevant constitution sections:
- API Design: REST conventions, response format
- Security: Password handling, input validation
- File Upload: Size limits, allowed types
- Error Handling: Typed errors, no stack traces
```

### Step 0.3: Pre-Implementation Research Prompt

```
I need to implement a user profile edit feature. Before writing any code, help me understand:

1. What existing code handles user profiles?
2. How is authentication currently implemented?
3. Is there existing file upload infrastructure?
4. What validation patterns are used?

Project structure: [describe your structure]
Tech stack: TypeScript, Express, PostgreSQL, S3
```

**AI Response Summary** (example):
- User model at `src/models/User.ts`
- Auth middleware at `src/middleware/auth.ts`
- No file upload yet - will need S3 integration
- Validation uses Zod schemas in `src/schemas/`

### Checkpoint 0

- [x] User story and acceptance criteria understood
- [x] Constitution reviewed (API, security, validation sections)
- [x] Existing codebase analyzed
- [x] Dependencies identified (S3 for file upload)
- [x] No blockers identified

---

## Phase 1: Specification (45-60 minutes)

### Step 1.1: Generate Specification

Using Speckit (or manual prompt):

```
/speckit.specify

Feature ID: US-042
User Story: As a logged-in user, I want to edit my profile...
Acceptance Criteria: [paste from above]
Context: Express API, PostgreSQL, S3 for files
```

### Generated Specification (summarized)

```markdown
# US-042: User Profile Edit

## Technical Requirements

### API Endpoints
- PATCH /api/v1/users/me - Update profile fields
- POST /api/v1/users/me/avatar - Upload avatar
- POST /api/v1/users/me/verify-email - Initiate email verification

### Data Model Changes
- Add `avatar_url` column to users table
- Add `email_verified` boolean column
- Create `email_verifications` table

### Validation Rules
- display_name: string, 2-50 chars, trimmed
- email: valid email format, unique in DB
- avatar: max 2MB, image/jpeg or image/png
- current_password: required for all changes

### Security Considerations
- Rate limit profile updates (5/hour)
- Sanitize display name (no HTML)
- Validate file MIME type on server
- Use signed S3 URLs for avatar
```

### Step 1.2: Generate Implementation Plan

```
/speckit.plan
```

**Output** (summarized):
1. Database migration for new columns
2. S3 service for file uploads
3. Email service for verification
4. Zod schemas for validation
5. Controller and route implementation
6. Integration tests

### Step 1.3: Generate Task Breakdown

```
/speckit.tasks
```

**Output**: 8 atomic tasks with TDD approach for each.

### Checkpoint 1

- [x] Spec document complete with all sections
- [x] Plan has constitution compliance check
- [x] Tasks have TDD workflow
- [x] All acceptance criteria covered
- [x] Senior review completed (for complex feature)

---

## Phase 2: GitHub Planning (15-20 minutes)

### Step 2.1: Create Parent Issue

```markdown
# [US-042] User Profile Edit Feature

## Overview
Implement ability for users to edit their profile (name, email, avatar).

## Acceptance Criteria
- [ ] User can update display name (2-50 chars)
- [ ] User can update email (with re-verification)
- [ ] User can upload avatar (max 2MB, JPG/PNG)
- [ ] Changes require password confirmation

## Technical Approach
- PATCH /api/v1/users/me endpoint
- S3 integration for avatar storage
- Email verification flow

## Tasks
- [ ] #101 - Database migration
- [ ] #102 - S3 service implementation
- [ ] #103 - Email verification service
- [ ] #104 - Validation schemas
- [ ] #105 - Profile update endpoint
- [ ] #106 - Avatar upload endpoint
- [ ] #107 - Email verification endpoint
- [ ] #108 - Integration tests

## Definition of Done
- [ ] All tasks complete
- [ ] 80%+ test coverage
- [ ] Security review passed
- [ ] Documentation updated
```

### Step 2.2: Create Sub-Tasks

Example for Task #105:

```markdown
# [US-042-05] Profile Update Endpoint

Parent: #100

## Description
Implement PATCH /api/v1/users/me endpoint for updating profile fields.

## TDD Approach
1. Write tests for validation errors
2. Write tests for successful updates
3. Write tests for password verification
4. Implement controller
5. Verify all tests pass

## Acceptance
- [ ] Validates display_name length
- [ ] Validates email format and uniqueness
- [ ] Requires current_password
- [ ] Returns 200 with updated user
- [ ] Returns appropriate errors

## Files
- `src/controllers/UserController.ts`
- `src/schemas/updateProfile.schema.ts`
- `tests/controllers/UserController.test.ts`
```

### Checkpoint 2

- [x] Parent issue created with all context
- [x] Sub-tasks created with TDD workflow
- [x] Tasks linked to parent
- [x] Assignees and labels set

---

## Phase 3: Implementation (4-6 hours)

### Task #104: Validation Schemas (TDD Example)

#### Step 1: Write Tests First (RED)

```typescript
// tests/schemas/updateProfile.schema.test.ts
import { updateProfileSchema } from '@/schemas/updateProfile.schema';

describe('updateProfileSchema', () => {
  describe('display_name', () => {
    it('should reject names shorter than 2 characters', () => {
      const result = updateProfileSchema.safeParse({
        display_name: 'A',
        current_password: 'password123'
      });
      expect(result.success).toBe(false);
    });

    it('should reject names longer than 50 characters', () => {
      const result = updateProfileSchema.safeParse({
        display_name: 'A'.repeat(51),
        current_password: 'password123'
      });
      expect(result.success).toBe(false);
    });

    it('should trim whitespace', () => {
      const result = updateProfileSchema.safeParse({
        display_name: '  John Doe  ',
        current_password: 'password123'
      });
      expect(result.success).toBe(true);
      expect(result.data?.display_name).toBe('John Doe');
    });

    it('should sanitize HTML', () => {
      const result = updateProfileSchema.safeParse({
        display_name: '<script>alert("xss")</script>John',
        current_password: 'password123'
      });
      expect(result.success).toBe(true);
      expect(result.data?.display_name).not.toContain('<script>');
    });
  });

  describe('email', () => {
    it('should reject invalid email formats', () => {
      const result = updateProfileSchema.safeParse({
        email: 'not-an-email',
        current_password: 'password123'
      });
      expect(result.success).toBe(false);
    });

    it('should accept valid email formats', () => {
      const result = updateProfileSchema.safeParse({
        email: 'user@example.com',
        current_password: 'password123'
      });
      expect(result.success).toBe(true);
    });
  });

  describe('current_password', () => {
    it('should require current_password for any update', () => {
      const result = updateProfileSchema.safeParse({
        display_name: 'John Doe'
        // missing current_password
      });
      expect(result.success).toBe(false);
    });
  });
});
```

Run tests: `npm test -- updateProfile.schema.test.ts`

Result: **5 failing tests** (RED)

#### Step 2: Implement to Pass (GREEN)

```typescript
// src/schemas/updateProfile.schema.ts
import { z } from 'zod';
import sanitizeHtml from 'sanitize-html';

export const updateProfileSchema = z.object({
  display_name: z
    .string()
    .min(2, 'Display name must be at least 2 characters')
    .max(50, 'Display name must be at most 50 characters')
    .transform(val => val.trim())
    .transform(val => sanitizeHtml(val, { allowedTags: [] }))
    .optional(),

  email: z
    .string()
    .email('Invalid email format')
    .optional(),

  current_password: z
    .string()
    .min(1, 'Current password is required')
});

export type UpdateProfileInput = z.infer<typeof updateProfileSchema>;
```

Run tests: `npm test -- updateProfile.schema.test.ts`

Result: **5 passing tests** (GREEN)

#### Step 3: Refactor (CLEAN)

Review code for improvements:
- Error messages are clear
- Types are exported
- No duplication

No refactoring needed.

#### Step 4: Check Coverage

```bash
npm test -- --coverage updateProfile.schema.test.ts
```

Result: 95% coverage - exceeds 80% threshold.

### Checkpoint 3 (per task)

- [x] Tests written first (RED)
- [x] Implementation passes tests (GREEN)
- [x] Code refactored if needed (CLEAN)
- [x] Coverage >= 80%
- [x] Constitution compliant
- [x] Self-review complete

---

## Phase 4: Review (30-45 minutes)

### Step 4.1: Multi-Model Review

**Model 1: Claude (Generator)** - Already used for implementation

**Model 2: GitHub Copilot (Reviewer)**

```
Review this PR for:
1. Security vulnerabilities
2. Performance issues
3. Code quality
4. Test coverage gaps

Constitution rules:
- No hardcoded secrets
- Parameterized queries only
- Input validation at boundaries
- Typed error handling
```

**Review Findings**:
- Warning: Email uniqueness check has race condition
- Suggestion: Add database unique constraint
- Suggestion: Add rate limiting to prevent enumeration

### Step 4.2: Address Review Findings

```typescript
// Fix: Add unique constraint in migration
await db.schema.alterTable('users', table => {
  table.unique('email');
});

// Fix: Add rate limiting
router.patch('/me',
  rateLimiter({ windowMs: 60 * 60 * 1000, max: 5 }),
  updateProfile
);
```

### Step 4.3: Human Review

Senior developer reviews:
- Architecture alignment
- Business logic correctness
- Security considerations

### Checkpoint 4

- [x] Different AI model reviewed code
- [x] All review findings addressed
- [x] Human review completed
- [x] All tests still passing
- [x] Coverage maintained

---

## Phase 5: Release (15-20 minutes)

### Step 5.1: Final Verification

```bash
# Run full test suite
npm test

# Check coverage
npm run test:coverage

# Run linting
npm run lint

# Type check
npm run typecheck
```

All checks pass.

### Step 5.2: Create PR

```markdown
# [US-042] Implement User Profile Edit

## Summary
Adds ability for users to edit their profile information including display name, email, and avatar.

## Changes
- Added PATCH /api/v1/users/me endpoint
- Added POST /api/v1/users/me/avatar endpoint
- Added POST /api/v1/users/me/verify-email endpoint
- Added S3 integration for avatar storage
- Added email verification flow

## Test Plan
- [x] Unit tests for validation schemas
- [x] Unit tests for S3 service
- [x] Integration tests for all endpoints
- [x] Manual testing of avatar upload
- [x] Manual testing of email verification

## Coverage
- Overall: 84%
- New code: 91%

## Security Checklist
- [x] Input validation at all boundaries
- [x] Rate limiting implemented
- [x] File type validation (server-side)
- [x] Password required for changes
- [x] No secrets in code

## Constitution Compliance
- [x] REST API conventions followed
- [x] Response format matches standard
- [x] Error handling uses typed errors
- [x] Database queries parameterized
```

### Step 5.3: Merge and Monitor

After PR approval:
1. Merge to main
2. Deploy to staging
3. Smoke test key flows
4. Monitor logs for 30 minutes
5. Deploy to production (if staging successful)

### Checkpoint 5

- [x] All tests passing
- [x] Coverage thresholds met
- [x] PR created with full context
- [x] Code review approved
- [x] Merged and deployed
- [x] Monitoring confirmed stable

---

## Summary

| Phase | Time | Key Output |
|-------|------|------------|
| Phase 0: Foundation | 35 min | Requirements understood, dependencies identified |
| Phase 1: Specification | 50 min | Spec, plan, and task breakdown |
| Phase 2: GitHub | 20 min | Parent issue + 8 sub-tasks |
| Phase 3: Implementation | 5 hrs | All code with 84% coverage |
| Phase 4: Review | 40 min | Multi-model + human review |
| Phase 5: Release | 20 min | PR merged, deployed |
| **Total** | **~7.5 hrs** | Feature complete |

### What Made This Successful

1. **Upfront Investment**: 2 hours of planning saved rework
2. **TDD Approach**: Tests caught edge cases early
3. **Constitution**: Consistent patterns across the feature
4. **Multi-Model Review**: Caught race condition bug
5. **Checkpoint Discipline**: No phase skipped

---

## Your Turn

Use this walkthrough as a template for your next feature. Key tips:

- Don't skip Phase 0 (it's tempting but costly)
- Write tests before implementation (really)
- Use a different AI for review (not the same one)
- Keep constitution rules visible during coding
- Document everything in GitHub issues
