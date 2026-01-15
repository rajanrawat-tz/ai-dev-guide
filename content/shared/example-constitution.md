# Example Constitution Template

This is a sample constitution file that you can adapt for your project. A **constitution** defines the technical constraints, patterns, and rules that all code (AI-generated or human-written) must follow.

---

## How to Use This Template

1. Copy this file to your project (e.g., `docs/CONSTITUTION.md` or `.speckit/constitution.md`)
2. Delete sections that don't apply to your stack
3. Add project-specific rules
4. Share the location with your team
5. Reference it in Phase 0 (Foundation) and Phase 4 (Review)

---

## Project Overview

```
Project: [Your Project Name]
Stack: [e.g., TypeScript, React, Node.js, PostgreSQL]
Last Updated: [Date]
Owner: [Tech Lead Name]
```

---

## Core Principles

### 1. Code Quality
- All code must pass linting with zero warnings
- All code must have corresponding tests
- No `any` types in TypeScript (use `unknown` if truly unknown)
- No `console.log` in production code (use structured logging)

### 2. Security First
- Never hardcode secrets, API keys, or credentials
- Always validate and sanitize user input
- Use parameterized queries for database access
- Follow OWASP Top 10 guidelines

### 3. Performance
- Database queries must use indexes (no full table scans)
- API responses should be under 200ms for typical operations
- Use pagination for list endpoints (max 100 items per page)
- Implement caching where appropriate

---

## Architecture Patterns

### Allowed Patterns
| Pattern | Use Case | Example |
|---------|----------|---------|
| Repository | Data access | `UserRepository.findById()` |
| Service | Business logic | `AuthService.validateToken()` |
| Controller | HTTP handling | `UserController.getProfile()` |
| Factory | Object creation | `NotificationFactory.create()` |
| Strategy | Interchangeable algorithms | `PaymentStrategy` |

### Forbidden Patterns
| Pattern | Reason | Alternative |
|---------|--------|-------------|
| God Object | Violates SRP | Split into focused classes |
| Singletons (mutable) | Testing difficulty | Dependency injection |
| Deep inheritance | Complexity | Composition over inheritance |
| Global state | Side effects | Explicit dependency passing |

---

## File Structure

```
src/
  controllers/     # HTTP request handlers
  services/        # Business logic
  repositories/    # Data access layer
  models/          # Data models/entities
  utils/           # Shared utilities
  middleware/      # Express middleware
  config/          # Configuration files
  types/           # TypeScript type definitions

tests/
  unit/            # Unit tests (mirrors src structure)
  integration/     # Integration tests
  e2e/             # End-to-end tests
  fixtures/        # Test data
```

---

## Naming Conventions

### Files
- Components: `PascalCase.tsx` (e.g., `UserProfile.tsx`)
- Utilities: `camelCase.ts` (e.g., `formatDate.ts`)
- Tests: `*.test.ts` or `*.spec.ts`
- Types: `*.types.ts`

### Code
- Classes: `PascalCase`
- Functions/methods: `camelCase`
- Constants: `SCREAMING_SNAKE_CASE`
- Private fields: `_prefixedCamelCase`
- Interfaces: `PascalCase` (no `I` prefix)
- Type aliases: `PascalCase`

### Database
- Tables: `snake_case` (plural, e.g., `user_accounts`)
- Columns: `snake_case`
- Foreign keys: `{table}_id` (e.g., `user_id`)

---

## API Design

### REST Conventions
```
GET    /api/v1/users          # List users
GET    /api/v1/users/:id      # Get single user
POST   /api/v1/users          # Create user
PUT    /api/v1/users/:id      # Update user (full)
PATCH  /api/v1/users/:id      # Update user (partial)
DELETE /api/v1/users/:id      # Delete user
```

### Response Format
```typescript
// Success
{
  "success": true,
  "data": { ... },
  "meta": {
    "page": 1,
    "limit": 20,
    "total": 100
  }
}

// Error
{
  "success": false,
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Email is required",
    "details": [...]
  }
}
```

### Status Codes
| Code | Usage |
|------|-------|
| 200 | Success (GET, PUT, PATCH) |
| 201 | Created (POST) |
| 204 | No Content (DELETE) |
| 400 | Bad Request (validation errors) |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Not Found |
| 409 | Conflict (duplicate, version mismatch) |
| 500 | Internal Server Error |

---

## Testing Requirements

### Coverage Thresholds
```
Statements: 80%
Branches: 75%
Functions: 80%
Lines: 80%
```

### Test Categories
| Type | What to Test | Tools |
|------|--------------|-------|
| Unit | Individual functions/classes | Jest, Vitest |
| Integration | Service interactions | Supertest |
| E2E | User flows | Playwright, Cypress |

### Testing Rules
- Test files must mirror source structure
- Each public function needs at least one test
- Edge cases must be covered (null, empty, boundary)
- Use descriptive test names: `should [action] when [condition]`
- No tests that depend on external services (mock them)

---

## Error Handling

### Error Classes
```typescript
// Base error
class AppError extends Error {
  constructor(
    public code: string,
    message: string,
    public statusCode: number = 500
  ) {
    super(message);
  }
}

// Specific errors
class ValidationError extends AppError { ... }
class NotFoundError extends AppError { ... }
class UnauthorizedError extends AppError { ... }
```

### Error Handling Rules
- Always use typed errors (not generic `Error`)
- Log errors with context (user ID, request ID, etc.)
- Never expose stack traces in production responses
- Distinguish between client errors (4xx) and server errors (5xx)

---

## Dependencies

### Approved Libraries
| Category | Library | Version |
|----------|---------|---------|
| HTTP | Express | ^4.18 |
| ORM | Prisma | ^5.0 |
| Validation | Zod | ^3.0 |
| Testing | Jest | ^29.0 |
| Logging | Pino | ^8.0 |

### Library Addition Process
1. Check if existing library covers the need
2. Evaluate security (npm audit, Snyk)
3. Check maintenance status (last update, open issues)
4. Discuss with team before adding
5. Document reason in PR

---

## Git Conventions

### Branch Naming
```
feature/[ticket-id]-short-description
bugfix/[ticket-id]-short-description
hotfix/[ticket-id]-short-description
chore/[ticket-id]-short-description
```

### Commit Messages
```
type(scope): short description

[optional body]

[optional footer: BREAKING CHANGE, closes #123]
```

Types: `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`

---

## Review Checklist (Constitution Compliance)

Before approving any PR, verify:

- [ ] Code follows naming conventions
- [ ] File structure is correct
- [ ] Tests are present and passing
- [ ] Coverage thresholds met
- [ ] No forbidden patterns used
- [ ] API follows REST conventions
- [ ] Error handling is typed and consistent
- [ ] No hardcoded secrets
- [ ] No `console.log` statements
- [ ] Documentation updated if needed

---

## Exceptions Process

If you need to deviate from this constitution:

1. **Document the exception** in the PR description
2. **Explain why** the constitution rule doesn't apply
3. **Get tech lead approval** before merging
4. **Create an ADR** if it's a pattern change
5. **Update constitution** if the exception should become standard

---

## Changelog

| Date | Change | Author |
|------|--------|--------|
| YYYY-MM-DD | Initial constitution | [Name] |
| YYYY-MM-DD | Added API response format | [Name] |
