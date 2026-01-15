# Phase 3: Implementation

**Source of truth**: `AI-DEVELOPMENT-SOP-v1.4.0-FINAL.md` (Phase 3 section)

---

## Objective
Implement features following Test-Driven Development (TDD), ensuring code quality and documentation.

---

## Step 3.1: Start with Tests (TDD)

**CRITICAL**: Tests MUST be written before implementation code.

```
PROMPT TO USE:
"I'm starting [Task from tasks document].

Following TDD:
1. Write the test file FIRST: [test file path from tasks]
2. Write tests for [acceptance criteria]
3. Show me the tests
4. Run them (they should FAIL - RED phase)
5. Only then implement the code"
```

**TDD Workflow**:
```
1. WRITE TEST → 2. RUN (FAIL/RED) → 3. IMPLEMENT → 4. RUN (PASS/GREEN) → 5. REFACTOR
```

**Why this matters**: AI-generated code looks correct but often has edge case bugs. Test-first catches these immediately.

---

## Step 3.2: Implement Code

**When**: Tests are written and failing (RED phase)

```
PROMPT TO USE:
"Now implement the code to make these tests pass:

Tests: [paste test file]

Requirements from spec: [reference specific section]
Constitution constraints: [reference relevant rules]

Implementation should:
- Follow patterns in the Implementation Guide
- Match the file structure from plan
- Use interfaces/types defined in Implementation Guide
- Handle error cases explicitly"
```

---

## Step 3.3: Run Tests (GREEN phase)

```bash
# Run tests (adjust command for your language/framework)
npm test [test-file]           # Node.js/JavaScript
pytest tests/[test-file]       # Python
mvn test -Dtest=[TestClass]    # Java/Maven
dotnet test --filter [test]    # .NET

# Verify coverage
npm run test:coverage          # Node.js
pytest --cov                   # Python
mvn test jacoco:report         # Java
dotnet test /p:CollectCoverage=true  # .NET

# Coverage should be >= 80%
```

**If tests fail**: Fix implementation, don't change tests (unless test is wrong).

---

## Step 3.4: Refactor (REFACTOR phase)

```
PROMPT TO USE:
"Tests are passing. Review this code for:
1. Constitution compliance
2. Code smells (duplication, long functions, etc.)
3. Implementation Guide pattern adherence
4. Performance optimization opportunities

Suggest refactorings that maintain test coverage."
```

**Refactor → Re-run tests → Verify still GREEN**.

---

## Step 3.5: Docker Integration Testing

**When**: Unit tests pass, need to verify in realistic environment

```bash
# Start services
docker-compose up -d

# Run integration tests (adjust for your setup)
npm run test:integration
pytest tests/integration/
mvn verify
dotnet test --filter Category=Integration

# Check logs
docker-compose logs [service-name]

# Stop services
docker-compose down
```

---

## Step 3.6: Update Documentation

**When**: Code is working and tested

```
PROMPT TO USE:
"Update documentation for [feature]:
1. README.md - Add new setup steps if any
2. API docs - Update endpoints/functions
3. Configuration - Document new variables
4. Architecture docs - If patterns changed

Keep updates concise and accurate to implementation."
```

---

## Step 3.7: Create Testing Quickstart Guide

**When**: After implementation is complete and tests pass

**Purpose**: Create a quickstart guide so anyone can quickly validate your feature works.

```
PROMPT TO USE:
"Create a quickstart testing guide for [feature]:

Generate a testing guide that includes:
1. **Prerequisites** - What needs to be installed/running
2. **Setup Steps** - How to get the environment ready
3. **Quick Test** - Simplest way to verify it works (< 2 minutes)
4. **Full Test Suite** - How to run all tests
5. **Common Issues** - Troubleshooting guide
6. **Example Usage** - Sample requests/commands with expected output

Make it copy-paste friendly for someone testing this for the first time." 
```

**Save** this guide with your spec artifacts for future reference.

---

<a id="checkpoint-3"></a>
## Checkpoint 3 (GATE)

Before moving to Phase 4, verify:

- [ ] All tests pass (unit + integration)
- [ ] Test coverage >= 80%
- [ ] Docker tests work (if applicable)
- [ ] Documentation updated (README, API docs, etc.)
- [ ] Testing quickstart guide created
- [ ] Constitution compliant
- [ ] No code smells or performance issues
- [ ] All acceptance criteria met

**If checkpoint fails**: Fix issues before review. Don't skip to Phase 4.
