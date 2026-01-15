# AI-Assisted Development Standard Operating Procedure (SOP)

**Version**: 1.4.0  
**Status**: Production Ready  
**Created**: 2026-01-13  
**Last Updated**: 2026-01-13  
**Document Owner**: To be assigned by organization  
**Applies To**: All developers using AI-assisted development workflows  
**Target Audience**: Developers with 1-3 years experience  
**Maintenance**: Review quarterly, update as needed

---

## 🎯 Document Customization Guide

**BEFORE using this SOP in your organization, customize these sections:**

### Required Customizations
1. **Line 7**: Set `Document Owner` to your tech lead or PM
2. **Constitution Path** (multiple locations): Update `.specify/memory/constitution.md` to match your project structure
3. **Document Names**: Replace generic references with your actual document names:
   - `[Project]-Feature-Spec-v1.md` → Your actual filename
   - `Implementation-Guide-[Project].md` → Your actual filename
4. **Tech Stack References**: Update code examples for your language/framework
5. **Tool Configuration**: Update tool setup sections (Sourcery, SonarQube, etc.) for your environment

### Optional Customizations
- **Story ID Format**: Examples use `US-XX` (User Story format) - adapt to your convention
- **Branch Naming**: Examples use `US-XX-feature-name` - adapt to your Git workflow
- **Milestone Names**: Update sprint/milestone references to match your process
- **Testing Tools**: Adjust test commands for your framework (npm/pytest/maven/etc.)

### Tool-Specific Paths
Throughout this document, you'll see these generic path references:
- `specs/[feature-id]/` → Your specs directory location
- `docs/templates/` → Your templates directory location  
- `.specify/memory/` → Your Speckit configuration location

**Update these consistently throughout the document for your project.**

---

## First Time Using This SOP?

**Quick Start (30 minutes):**

1. ⏱️ **Read this section first** (5 min) - Understand why this workflow exists
2. 📊 **Skim the Phase diagrams** (5 min) - Visual overview of the process
3. 📚 **Read "Core Documents Reference"** (5 min) - Know what documents exist
4. 🌳 **Start with Phase 0 Decision Tree** (15 min) - It will guide your first steps
5. 📖 **Reference detailed sections as needed** - Use as documentation, not a book

**Have Speckit access?** → Start immediately with Phase 0  
**Don't have Speckit?** → Request access from your team lead (continue reading while waiting)

**Already done 5+ features?** → Use the [Quick Reference Card](./AI-DEV-QUICK-REFERENCE.md) as your primary guide and refer back to this SOP only when needed.

---

## Why This Workflow Exists

### The Problem with Unstructured AI Development

AI tools (Claude, Copilot, Cursor, etc.) generate code incredibly fast. Without process, teams face:

- ❌ **Features don't match requirements** - AI builds the wrong thing efficiently
- ❌ **Tests are an afterthought** - Code ships with hidden bugs
- ❌ **Architecture drifts** - Each developer uses different patterns
- ❌ **Reviews catch issues too late** - Expensive to fix after implementation
- ❌ **AI blind spots persist** - Same model makes same mistakes repeatedly

### This Process Ensures

- ✅ **Spec-driven development** - AI builds exactly what's needed
- ✅ **TDD (Test-Driven Development)** - Quality is baked in from the start
- ✅ **Independent reviews** - Multiple AI models catch each other's mistakes
- ✅ **Constitution compliance** - Consistent architecture across features
- ✅ **Documentation in parallel** - Never out of sync with code

### The Trade-off

**More upfront planning → Less rework later**

You'll spend 1-2 hours in specification (Phase 0-1) to save 5-10 hours of rework, debugging, and refactoring. After your first few features, this becomes natural and fast.

---

## Traditional vs AI-Assisted Development

Understanding the differences helps you work effectively with AI tools:

| Aspect | Traditional Development | AI-Assisted Development | Why It Matters |
|--------|------------------------|------------------------|----------------|
| **Code Generation** | Write code manually, line by line | AI generates full files/functions | **Need detailed specs FIRST** - AI needs clear instructions or it guesses wrong |
| **Testing** | Write tests when convenient | **TDD is mandatory** | **AI-generated code has edge cases** - Tests catch what AI missed |
| **Code Review** | One senior developer reviews | Multiple AI models + humans review | **Same AI makes same mistakes** - Different models catch different issues |
| **Documentation** | Usually written after code | Generated during development | **AI helps write docs in parallel** - Specs become docs automatically |
| **Architecture** | Enforced through senior review | Constitution document enforces rules | **AI needs explicit constraints** - Won't guess architectural decisions |
| **Speed** | Steady, predictable pace | Fast generation, varies by prompt quality | **Quality of spec = Quality of output** - Garbage in, garbage out |

### Key Insights for AI Development

1. **Invest in specifications** - A clear 30-minute spec saves hours of AI going in circles
2. **Test-first is non-negotiable** - AI code looks correct but has hidden bugs
3. **Multiple AI perspectives** - Code by Claude, review by Copilot catches 40% more issues
4. **Constitution is your friend** - AI can memorize and enforce patterns better than humans
5. **Prompt quality matters** - Good prompts in this SOP are refined through trial and error

---

## Understanding Speckit

Before you dive into the phases, understand what Speckit does (and doesn't do):

### What Speckit Does

- ✅ **Generates specification documents** from user stories and acceptance criteria
- ✅ **Creates implementation plans** with detailed task breakdowns
- ✅ **Checks constitution compliance** automatically during planning
- ✅ **Converts tasks to GitHub issues** with proper labels and structure
- ✅ **Maintains consistency** across features and developers

### What Speckit Doesn't Do

- ❌ **Write your code** - You + your AI coding assistant do that (Claude, Copilot, etc.)
- ❌ **Replace thinking** - It structures your thinking, doesn't do it for you
- ❌ **Make architectural decisions** - You make decisions, Speckit validates them
- ❌ **Auto-fix code issues** - It identifies problems, you fix them

### Think of Speckit As

A **structured template generator** that ensures every developer follows the same high-quality process. It's like a sous chef who prepares ingredients (specs, plans, tasks) so you (the developer) can focus on cooking (writing code).

### If Speckit is Unavailable

**Don't panic.** You can still follow the process manually:

1. Use templates from your project's templates directory
2. Use your AI assistant (Claude/Copilot) to help fill in sections
3. Have a senior developer review your spec before Phase 2
4. Create GitHub issues manually from your task breakdown

---

## Purpose

This SOP ensures consistent, high-quality AI-assisted development across the team. Following this process guarantees that:

- Code matches specifications and acceptance criteria
- Implementation follows architectural patterns and constitution
- Tests provide adequate coverage before code ships
- Documentation stays current with implementation
- Code reviews catch issues early
- No spaghetti code, code smells, or performance issues slip through

---

## Quick Reference: Development Phases

```
Phase 0: Foundation           Phase 1: Specification        Phase 2: GitHub
(PRD, Feature Specification, Implementation Guide)   (Constitution, Spec, Plan)    (Issues, Branch)
        |                             |                            |
        v                             v                            v
   +---------+                  +-----------+               +-------------+
   | Context |  ------------->  | Speckit   |  ---------->  | Issue       |
   | Setup   |                  | Artifacts |              | Creation    |
   +---------+                  +-----------+               +-------------+
                                      |
                                      v
Phase 3: Implementation       Phase 4: Verification        Phase 5: Release
(TDD, Docker, Docs)           (Reviews, Feedback)          (PR, Merge)
        |                             |                            |
        v                             v                            v
   +------------+               +------------+               +-----------+
   | Code with  |  ---------->  | AI Review  |  ---------->  | Merge &   |
   | TDD        |               | (Sourcery) |               | Deploy    |
   +------------+               +------------+               +-----------+
```

---

## Time Budget by Phase (Typical Feature)

Set realistic expectations for how long each phase takes:

| Phase | First Feature | After 5 Features | What You're Doing |
|-------|---------------|------------------|-------------------|
| **Phase 0** | 60 min | 30 min | Reading context, understanding requirements |
| **Phase 1** | 90 min | 45 min | Spec generation, review, clarification |
| **Phase 2** | 15 min | 10 min | GitHub issue creation, branch setup |
| **Phase 3** | 8 hours | 4 hours | Implementation, TDD, Docker testing |
| **Phase 4** | 2 hours | 1 hour | Multi-tool review, fixing issues |
| **Phase 5** | 30 min | 20 min | PR creation, review, merge, deploy |
| **TOTAL** | ~12 hours | ~6 hours | Full feature cycle |

**Why it gets faster:**
- Phase 1-2 becomes muscle memory after 5 features
- You learn which prompts work best for you
- You understand the constitution and patterns
- AI tools learn your coding style

---

## Core Documents Reference

| Document | Typical Location | Purpose | When to Use |
|----------|----------|---------|-------------|
| **PRD** | Project-specific | Feature requirements from stakeholders | Phase 0: Understanding what to build |
| **Feature Specification** | Project root or docs/ | User stories, acceptance criteria, task breakdowns | Phase 0-1: Feature details |
| **Implementation Guide** | Project root or docs/ | Architecture patterns, code examples, Docker setup | Phase 1-3: How to build |
| **Constitution** | Project-specific (often in .specify/memory/ or docs/) | Non-negotiable technical principles | ALL phases: Compliance check |
| **Integration Guide** | docs/ | How documents work together | Reference during development |

**Note**: Exact paths vary by project. Check with your team lead for your project's document structure.

---

## Phase 0: Foundation & Context Setup

### Objective
Establish complete understanding of what needs to be built before writing any specification or code. This includes creating foundational documents (Feature Specification, Implementation Guide) from a PRD if they don't exist.

### Phase 0 Decision Tree

```
Do you have a PRD/Feature Request?
    │
    ├── YES: Does a Feature Specification document exist?
    │         │
    │         ├── NO  ──> Step 0.1: Create Feature Specification from PRD
    │         │
    │         └── YES: Does an Implementation Guide exist?
    │                   │
    │                   ├── NO  ──> Step 0.2: Create Implementation Guide
    │                   │
    │                   └── YES ──> Step 0.3: Read & Analyze
    │
    └── NO: Request PRD from stakeholders first
```

---

### Step 0.1: Creating a Feature Specification from PRD

**When**: Starting a new project or major feature set without existing feature specification

**What is a Feature Specification?**
A feature specification document breaks down PRD features into developer-focused user stories with acceptance criteria and task breakdowns.

```
PROMPT TO USE:
"I have a PRD for [PROJECT/FEATURE].

Help me create a Feature Specification document that includes:

1. **Feature Specification Overview**
   - Tech stack decisions with rationale
   - Scale targets and constraints
   - Dependencies between features

2. **For each PRD feature, create a Story section:**
   - Story ID (e.g., US-01, US-02)
   - User Story format: As a [role], I want [capability], So that [benefit]
   - Independence level: Fully Independent / Has Dependencies / Bidirectional
   - Technical Context (services, protocols, databases involved)
   - Acceptance Criteria in Gherkin format (Given/When/Then)
   - Task breakdown with AI implementation prompts
   - Files to generate
   - Validation checklist

3. **Dependency Map**
   - What this feature specification PRODUCES (tables, events, APIs)
   - What this feature specification REQUIRES (upstream dependencies)
   - Data contracts for other teams

4. **Recommended Development Order**
   - Phase 1: Independent features (start immediately)
   - Phase 2: Features with dependencies
   - Phase 3: Integration features

Output: Save as Feature Specification document in your project"
```

**Research Steps for Feature Specification Creation:**

1. **Analyze PRD Requirements**
   ```
   PROMPT TO USE:
   "Analyze this PRD and identify:
   1. All distinct features/capabilities
   2. User roles mentioned
   3. Technical constraints mentioned
   4. Scale/performance requirements
   5. Integration points with other systems
   6. Acceptance criteria (explicit or implied)"
   ```

2. **Identify Technical Decisions Needed**
   ```
   PROMPT TO USE:
   "For [PRD feature], research and recommend:
   1. Technology options (compare 2-3 alternatives)
   2. Architecture patterns that fit
   3. Database/storage approach
   4. Protocol choices (REST, MQTT, WebSocket, etc.)
   5. Trade-offs for each option

   Document in a comparison table with pros/cons."
   ```

3. **Define Story Boundaries**
   ```
   PROMPT TO USE:
   "Break down [PRD feature] into independent stories:
   1. What is the minimum viable story (can be tested alone)?
   2. What are enhancement stories (build on MVP)?
   3. What are integration stories (depend on other features)?

   Each story should be independently deployable and testable."
   ```

**Output**: Feature Specification document saved to your project's documentation location

---

### Step 0.2: Creating an Implementation Guide from Feature Specification

**When**: You have a feature specification but no technical implementation guide with implementation patterns

**What is an Implementation Guide?**
An implementation guide provides concrete implementation guidance: architecture diagrams, code patterns, Docker setup, and example code that developers follow.

```
PROMPT TO USE:
"I have a Feature Specification document for [PROJECT].

Help me create an AI Development Implementation Guide that includes:

1. **Strategy Overview**
   - Problem statement
   - Solution architecture diagram (ASCII)
   - Key design principles

2. **Infrastructure Setup**
   - Docker Compose configuration (complete, runnable)
   - Database schema with indexes
   - Message broker configuration (if applicable)
   - Environment variables

3. **Core Abstractions**
   - Interface definitions (in your language)
   - Data models/DTOs with comments
   - Type guards and validation functions

4. **Implementation Patterns**
   - Code examples for each pattern
   - Service class structures
   - Repository patterns
   - Error handling approach

5. **Testing Strategy**
   - How to test without real dependencies
   - Mock data generators
   - Scenario configurations

6. **Transition Checklist**
   - How to move from simulation to production
   - What files change
   - What stays the same

Output: Save as Implementation Guide in your project"
```

**Research Steps for Implementation Guide Creation:**

1. **Research Industry Patterns**
   ```
   PROMPT TO USE:
   "Research best practices for [your domain, e.g., e-commerce, fintech, IoT]:
   1. Common architecture patterns used
   2. Industry-standard protocols
   3. Scalability approaches
   4. Security considerations

   Provide examples from well-known implementations."
   ```

2. **Design Core Abstractions**
   ```
   PROMPT TO USE:
   "Design the core abstractions for [system]:
   1. What is the canonical data format?
   2. What interfaces allow swapping implementations?
   3. What are the extension points?
   4. How do we handle unknown/future requirements?

   Provide interfaces with documentation comments."
   ```

3. **Create Infrastructure Code**
   ```
   PROMPT TO USE:
   "Create production-ready infrastructure code:
   1. Docker Compose for local development
   2. Database initialization scripts
   3. Configuration files
   4. Health check endpoints

   Include comments explaining each section."
   ```

4. **Write Example Implementations**
   ```
   PROMPT TO USE:
   "Write reference implementations for:
   1. A complete service class following our patterns
   2. A repository with batch operations
   3. An adapter implementation
   4. Unit tests for each component

   Code should be copy-paste ready."
   ```

**Output**: Implementation Guide document saved to your project's documentation location

---

### Step 0.3: Read & Analyze Existing Documents

**When**: Feature Specification and Implementation Guide already exist, starting a specific feature

```
PROMPT TO USE:
"I'm starting work on [FEATURE_NAME/STORY-ID].

Please read and summarize the relevant context from:
1. Constitution (check your project location) - What constraints apply?
2. Implementation Guide - What patterns should I use?
3. Feature Specification - What are the acceptance criteria?

Identify any dependencies or blockers."
```

---

### Step 0.4: Pre-Implementation Analysis

Before generating specs, perform analysis to understand:
- Existing codebase structure
- Related features/code that may be impacted
- Technical decisions that need to be made
- Dependencies on other features

```
PROMPT TO USE:
"Before implementing [STORY-ID], perform a pre-implementation analysis:
1. Scan the codebase for related code
2. Identify files that will need modification
3. Identify dependencies on other features
4. Suggest an implementation approach
5. Flag any constitution concerns

Document findings in your project's session logs or documentation area"
```

**Save Output**: Document in your project's designated location for session logs or pre-implementation analysis

---

### Checkpoint 0 (GATE)

Before moving to Phase 1, verify:

- [ ] PRD or feature request exists and is understood
- [ ] Feature Specification document exists (or created in Step 0.1)
- [ ] Implementation Guide document exists (or created in Step 0.2)
- [ ] Constitution has been read
- [ ] Pre-implementation analysis complete (if applicable)
- [ ] No architectural blockers identified
- [ ] Dependencies are clear and available

**If any checkpoint fails**: Resolve before proceeding. Escalate to tech lead if blocked.

---

## Phase 1: Specification & Planning

### Objective
Generate detailed specifications, implementation plans, and task breakdowns using Speckit (or manually if Speckit is unavailable).

---

### Step 1.1: Initialize Speckit Memory

**When**: Starting work on any feature for the first time in a session

```bash
# If constitution doesn't exist yet
/speckit.constitution

# Review existing constitution (check your project's path)
cat [your-constitution-path]
```

**What this does**: Loads project-specific technical constraints into Speckit's memory so it can validate your plans against them.

---

### Step 1.2: Generate Feature Specification

**When**: Starting a new feature from a user story

```
/speckit.specify

# Speckit will prompt you for:
# - Feature ID (e.g., US-01, US-02, etc.)
# - User story text
# - Acceptance criteria
# - Context from feature specification
```

**Output**: Spec document in your project's specs directory

**Manual Alternative** (if Speckit unavailable):
```
PROMPT TO USE:
"Create a detailed specification for [STORY-ID]:

User Story: [paste from feature specification]
Acceptance Criteria: [paste from feature specification]

Generate a spec.md that includes:
1. Feature Overview
2. Technical Requirements
3. API Contracts (if applicable)
4. Data Model Changes (if applicable)
5. Test Scenarios
6. Success Criteria

Format as markdown, following industry-standard specification structure"
```

---

### Step 1.3: Review and Clarify Specification

**When**: Spec is generated but unclear or incomplete

```
/speckit.clarify

# Ask questions like:
# - "How should we handle [edge case]?"
# - "What's the expected behavior when [scenario]?"
# - "Should this API be synchronous or async?"
```

**Iterate** until spec is clear and complete.

---

### Step 1.4: Generate Implementation Plan

**When**: Spec is finalized and clear

```
/speckit.plan

# Speckit will:
# - Analyze the spec
# - Check constitution compliance
# - Generate step-by-step implementation plan
# - Identify files to create/modify
```

**Output**: Implementation plan document in your specs directory

**Review the plan for**:
- Constitution compliance section (should be explicit)
- File structure matches implementation guide patterns
- Dependencies are identified
- Risks are called out

---

### Step 1.5: Generate Task Breakdown

**When**: Plan is reviewed and approved

```
/speckit.tasks

# Speckit will:
# - Break plan into atomic tasks
# - Add TDD workflow to each task
# - Include acceptance criteria checks
# - Estimate complexity
```

**Output**: Task breakdown document in your specs directory

**Each task should include**:
- Task description
- Test file to create FIRST
- Implementation steps
- Validation criteria

---

### Step 1.6: Validate Consistency

**When**: All artifacts generated (spec, plan, tasks)

```
/speckit.analyze

# Speckit will:
# - Cross-check spec vs plan vs tasks
# - Verify all acceptance criteria covered
# - Identify inconsistencies
# - Suggest improvements
```

**Fix any issues** identified before proceeding to Phase 2.

---

### Checkpoint 1 (GATE)

Before moving to Phase 2, verify:

- [ ] Spec document exists and is clear
- [ ] Plan document has constitution compliance check
- [ ] Tasks document has TDD workflow for each task
- [ ] `/speckit.analyze` passed with no critical issues (or manual review complete)
- [ ] All acceptance criteria from feature specification are covered
- [ ] Senior developer reviewed artifacts (for first 2-3 features)

**If checkpoint fails**: Use `/speckit.clarify` to resolve issues (or iterate with your AI assistant if working manually).

---

## Phase 2: GitHub Issue Creation & Hierarchy

### Objective
Convert task breakdown into trackable GitHub issues with proper Epic → User Story → Task hierarchy and parent-child relationships.

---

### Understanding GitHub Issue Hierarchy

GitHub Projects supports a three-level hierarchy that maps to your workflow:

```
Epic (Project-level initiative)
  └─ User Story (Feature deliverable)
      └─ Task (Implementation work item)
```

**Example:**
```
Epic: "Customer Authentication System"
  └─ US-01: User Login with Email/Password
      ├─ Task: Create login API endpoint
      ├─ Task: Implement JWT token generation
      ├─ Task: Add password hashing
      └─ Task: Write integration tests
  └─ US-02: Social OAuth Integration
      ├─ Task: Setup Google OAuth
      └─ Task: Setup GitHub OAuth
```

---

### Step 2.1: Create Epic (If Needed)

**When to create an Epic:**
- Multiple related user stories
- Large feature set (2+ weeks of work)
- Cross-team coordination needed

**Using GitHub CLI**:
```bash
gh issue create \
  --title "Epic: [Epic Name]" \
  --body "## Epic Overview
[High-level description of initiative]

## User Stories
- [ ] US-01: [Story 1]
- [ ] US-02: [Story 2]
- [ ] US-03: [Story 3]

## Success Criteria
- [Overall goal 1]
- [Overall goal 2]

## Timeline
Expected completion: [Date]

## Documentation
- Feature Specification: [link or path]
- Implementation Guide: [link or path]" \
  --label "epic" \
  --milestone "[Milestone name]"
```

**Save the Epic issue number** - you'll reference it in user stories.

---

### Step 2.2: Create User Story Issue

**For each user story in your Feature Specification:**

**Using Speckit** (Recommended):
```
/speckit.taskstoissues

# Speckit will:
# - Create User Story issue from spec.md
# - Create Task issues from tasks.md
# - Link tasks to user story (parent-child)
# - Link user story to epic (if specified)
# - Add proper labels (feature, TDD, etc.)
# - Add milestone and assignees
```

**Manual Alternative**:
```bash
# Create User Story issue
gh issue create \
  --title "US-XX: [User Story Title]" \
  --body "## User Story
As a [role], I want [capability], so that [benefit].

## Acceptance Criteria
- [ ] [Criterion 1]
- [ ] [Criterion 2]
- [ ] [Criterion 3]

## Technical Context
- Services: [list]
- Dependencies: [list]
- Database changes: [Yes/No]

## Specification
See: [link or path to spec]

## Tasks
Will be created as child issues below.

## Parent Epic
Relates to: #[epic-issue-number]" \
  --label "user-story,feature" \
  --milestone "[Milestone name]" \
  --assignee "@me"
```

**Save the User Story issue number** - you'll reference it in tasks.

---

### Step 2.3: Create Task Issues (Children of User Story)

**For each task in your tasks document:**

```bash
# Create task and link to parent User Story
gh issue create \
  --title "Task: [Task description]" \
  --body "## Task Details
[Detailed description from tasks.md]

## Test File to Create FIRST
\`[test-file-path]\`

## Implementation Steps
1. Write test (RED phase)
2. Run test (should fail)
3. Implement code (GREEN phase)
4. Refactor (REFACTOR phase)

## Acceptance Criteria
- [ ] Tests written first
- [ ] Tests pass
- [ ] Code follows constitution
- [ ] Coverage >= 80%

## Parent User Story
Part of: #[user-story-issue-number]

## Documentation Reference
See: [link or path to tasks document] - Task [N]" \
  --label "task,TDD" \
  --assignee "@me"
```

**Using GitHub Projects**, link the task to its parent User Story:
```bash
# Add task as child of user story in GitHub Projects
gh project item-add [project-number] --owner [org] --url [task-issue-url]

# Then in GitHub Projects UI:
# 1. Open the task issue
# 2. Set "Parent issue" field to User Story issue number
```

---

### Step 2.4: Verify Issue Hierarchy

**Check your hierarchy is correct:**

1. **In GitHub Issues tab:**
   ```
   Epic: Customer Authentication System (#123)
     └─ US-01: User Login with Email/Password (#124)
         ├─ Task: Create login API endpoint (#125)
         ├─ Task: Implement JWT token generation (#126)
         └─ Task: Add password hashing (#127)
   ```

2. **In GitHub Projects board:**
   - Epic appears as high-level card
   - User Stories show as children of Epic
   - Tasks show as children of User Story
   - Progress rolls up automatically

**Using GitHub CLI to verify**:
```bash
# List all issues for this user story
gh issue list --label "user-story" --search "US-XX in:title"

# See child issues
gh issue view [user-story-number] --json title,body,labels
```

---

### Step 2.5: Set Up Task Board View

**In GitHub Projects:**

1. **Create custom fields** (if not already created):
   - Issue Type: Epic / User Story / Task
   - Parent Issue: Link to parent
   - Story Points: Estimation
   - Sprint: Current sprint/iteration

2. **Create filtered views**:
   - **Epic View**: Show only epics with rollup progress
   - **Current Sprint**: Show user stories + tasks for this sprint
   - **My Tasks**: Show tasks assigned to you
   - **Backlog**: Show unassigned user stories

3. **Use GitHub Projects automation**:
   - Auto-assign "Status: Todo" when task created
   - Auto-move to "In Progress" when branch created
   - Auto-move to "In Review" when PR opened
   - Auto-close when PR merged

---

### Step 2.6: Create Feature Branch

```bash
# Naming convention: [story-id]-[short-description]
git checkout -b US-XX-feature-name

# Push empty branch to track
git push -u origin US-XX-feature-name

# Link branch to User Story issue (GitHub will auto-detect)
# Branch name with issue number (#XXX) auto-links
```

---

### Step 2.7: Assign Work

**For team development:**

```bash
# Assign user story to lead/owner
gh issue edit [user-story-number] --add-assignee @username

# Assign individual tasks to developers
gh issue edit [task-number] --add-assignee @developer1
gh issue edit [task-number] --add-assignee @developer2

# Add to current sprint/milestone
gh issue edit [task-number] --milestone "Sprint 5"
```

---

### Checkpoint 2 (GATE)

Before moving to Phase 3, verify:

**Issue Creation:**
- [ ] Epic created (if applicable)
- [ ] User Story issue(s) created
- [ ] All task issues created from tasks document
- [ ] All tasks include "Test First" requirement

**Hierarchy & Relationships:**
- [ ] User Story linked to Epic (if applicable)
- [ ] All tasks linked to parent User Story
- [ ] Parent-child relationships visible in GitHub Projects
- [ ] Issue numbers documented in spec document

**Project Management:**
- [ ] All issues have appropriate labels (epic/user-story/task, TDD, etc.)
- [ ] User Story assigned to owner
- [ ] Tasks assigned to developers
- [ ] Milestone/sprint set
- [ ] Feature branch created and pushed

**Traceability:**
- [ ] Each task links back to tasks document
- [ ] User Story links to spec document
- [ ] Epic links to Feature Specification document

**If checkpoint fails**: Fix issue hierarchy before starting implementation.

---

### GitHub Issue Hierarchy Best Practices

**Naming Conventions:**
```
Epic: "Epic: [Initiative Name]"
User Story: "US-XX: [User Story Title]"
Task: "Task: [Specific Implementation Work]"
```

**Labels to Use:**
```
epic           → High-level initiatives
user-story     → Feature deliverables
task           → Implementation work
TDD            → Test-first required
documentation  → Docs update needed
dependencies   → Blocked by another issue
bug            → Defect fix
enhancement    → Improvement to existing feature
```

**Description Templates:**

**Epic Description:**
```markdown
## Overview
[High-level description]

## User Stories
- [ ] US-XX: [Story 1]
- [ ] US-XX: [Story 2]

## Success Metrics
- [Metric 1]
- [Metric 2]

## Timeline
Target: [Quarter/Date]
```

**User Story Description:**
```markdown
## User Story
As a [role], I want [capability], so that [benefit].

## Acceptance Criteria
- [ ] [Criterion 1]
- [ ] [Criterion 2]

## Technical Notes
[Architecture decisions, dependencies]

## Tasks
(Created as child issues)

## Parent Epic
#[epic-number]
```

**Task Description:**
```markdown
## Task
[Detailed implementation work]

## Test First
`tests/[test-file].test.[ext]`

## Acceptance
- [ ] Test written first
- [ ] Test passes
- [ ] Coverage >= 80%

## Parent User Story
#[user-story-number]
```

**Benefits of Proper Hierarchy:**
- ✅ Clear traceability from Epic → Story → Task
- ✅ Automatic progress rollup in GitHub Projects
- ✅ Easy filtering and reporting
- ✅ Clear ownership at each level
- ✅ Better sprint planning
- ✅ Stakeholder visibility into progress

---

## Phase 3: Implementation

### Objective
Implement features following Test-Driven Development (TDD), ensuring code quality and documentation.

---

### Step 3.1: Start with Tests (TDD)

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

### Step 3.2: Implement Code

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

### Step 3.3: Run Tests (GREEN phase)

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

### Step 3.4: Refactor (REFACTOR phase)

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

### Step 3.5: Docker Integration Testing

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

### Step 3.6: Update Documentation

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

### Step 3.7: Create Testing Quickstart Guide

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

### Checkpoint 3 (GATE)

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

---

## Phase 4: Multi-Model Review & Verification

### Objective
Use multiple AI models and automated tools to review code for issues the original AI missed.

---

### The Reviewer Independence Rule ⚠️

**CRITICAL**: The AI model that reviews your code MUST be different from the one that generated it.

```
┌─────────────────────────────────────────────────────────┐
│  REVIEWER ≠ GENERATOR                                   │
│                                                         │
│  WHY: Same AI makes same mistakes twice                │
│       Same blind spots → Same bugs missed              │
│                                                         │
│  Code by Claude  → Review by Copilot/Cursor           │
│  Code by Copilot → Review by Claude/Antigravity       │
│  Code by Cursor  → Review by Claude/Copilot           │
└─────────────────────────────────────────────────────────┘
```

**Research shows**: Different AI models catch 40% more bugs than using the same model.

---

### Step 4.1: Select Review Tools

**Use at least 2 different review tools:**

**Minimum (All developers):**
1. Different AI model than generator
2. Static analysis (ESLint/Pylint/etc.)

**Recommended (After first month):**
1. Different AI model
2. Static analysis tool
3. Code quality tool (Sourcery/SonarLint)

**Advanced (Experienced teams):**
1. Multiple AI models
2. Static analysis
3. Code quality tool
4. Security scanner (Antigravity/Snyk)

---

### Step 4.2: AI Model Review

**Use a DIFFERENT AI model from the one that generated the code:**

```
PROMPT TO USE:
"Review this code (generated by [MODEL_NAME]):

[Paste code]

Constitution: [paste relevant sections]
Spec: [paste acceptance criteria]

Check for:
1. Constitution violations
2. Security issues (injection, auth, data exposure)
3. Performance problems (N+1 queries, memory leaks)
4. Missing error handling
5. Edge cases not tested
6. Code smells (duplication, complexity)

Generate detailed review report with:
- Issue severity (Critical/High/Medium/Low)
- Specific line numbers
- Suggested fixes"
```

**Track which models you used:**
```markdown
## AI Tool Chain
- Generated by: Claude Sonnet 4
- Reviewed by: GitHub Copilot, Sourcery
```

---

### Step 4.3: Run Automated Tools

**Run multiple automated review tools:**

```bash
# Linting (style & basic errors)
npm run lint              # Node.js
pylint src/               # Python
mvn checkstyle:check      # Java
dotnet format --verify    # .NET

# Code quality analysis
sourcery review .         # Multi-language
sonarlint analyze         # IDE-based

# Security scanning (if available)
antigravity review --security-only
snyk test

# Full static analysis (if configured)
sonar-scanner
deepsource analyze
```

---

### Step 4.4: Document Review Findings

**Save review feedback** in your specs directory:

```markdown
# Review Feedback - [Feature Name]

**Date**: [Date]
**Reviewers**: [AI models + tools used]

## Critical Issues
- [ ] [Issue 1 with severity, line numbers, fix]
- [ ] [Issue 2 with severity, line numbers, fix]

## High Priority
- [ ] [Issue 3]
- [ ] [Issue 4]

## Medium Priority
- [ ] [Issue 5]
- [ ] [Issue 6]

## Improvements (Nice to Have)
- [ ] [Suggestion 1]
- [ ] [Suggestion 2]

## What Went Well
- ✅ [Positive finding 1]
- ✅ [Positive finding 2]
```

---

### Step 4.5: Fix Critical Issues

**Address all Critical and High priority issues** before creating PR.

**Iterate**:
1. Fix issue
2. Re-run tests (must stay GREEN)
3. Re-run review tools
4. Verify fix doesn't introduce new issues

---

### Checkpoint 4 (GATE)

Before moving to Phase 5, verify:

- [ ] Different AI model reviewed code (not the same one that generated it)
- [ ] At least 2 automated tools ran
- [ ] All Critical issues fixed
- [ ] All High priority issues fixed or documented as accepted risk
- [ ] Tests still pass after fixes
- [ ] Coverage still >= 80%
- [ ] Review feedback documented

**If checkpoint fails**: Continue fixing issues. Don't create PR until critical issues resolved.

---

## Phase 5: Pull Request & Release

### Objective
Create a high-quality pull request, get approval, and merge code into main branch.

---

### Step 5.1: Prepare Pull Request

**Before creating PR:**

```bash
# Ensure all code is committed
git status

# Rebase on latest main (if needed)
git fetch origin
git rebase origin/main

# Run full test suite one more time
npm run test:all  # or your test command

# Final lint check
npm run lint
```

---

### Step 5.2: Create Pull Request

**Using GitHub CLI:**

```bash
gh pr create \
  --title "feat(US-XX): [Feature name]" \
  --body-file .github/PR_TEMPLATE.md \
  --assignee @me \
  --label "feature,ready-for-review"
```

**Pull Request Description Template:**

```markdown
## Summary
[Brief description of what this PR does]

## User Story
Closes #[user-story-issue-number]

## Tasks Completed
Closes #[task-1-issue-number]
Closes #[task-2-issue-number]
Closes #[task-3-issue-number]

## AI Tool Chain
- **Generated by**: [AI model name]
- **Reviewed by**: [AI model 1], [AI model 2], [Tool 1], [Tool 2]

## Changes
- [Change 1]
- [Change 2]
- [Change 3]

## Testing
- [ ] Unit tests pass (coverage: XX%)
- [ ] Integration tests pass
- [ ] Docker tests pass
- [ ] Manual testing completed

## Documentation
- [ ] README updated
- [ ] API docs updated
- [ ] Quickstart guide created
- [ ] Configuration documented

## Constitution Compliance
- [ ] Architecture patterns followed
- [ ] TDD workflow followed
- [ ] Code quality standards met
- [ ] Security requirements met

## Review Checklist
- [ ] Code follows constitution
- [ ] All acceptance criteria met
- [ ] Tests provide adequate coverage
- [ ] No critical issues from AI review
- [ ] Documentation is complete
- [ ] Breaking changes documented (if any)

## Screenshots/Demo
[If applicable, add screenshots or demo links]

## Deployment Notes
[Any special deployment considerations]
```

---

### Step 5.3: Request Reviews

**Assign reviewers:**

```bash
# Add human reviewers
gh pr edit --add-reviewer @senior-dev
gh pr edit --add-reviewer @tech-lead

# Add to review list in team channel
```

**If automated PR review tools are configured** (CodeRabbit, etc.), they'll automatically review.

---

### Step 5.4: Address Review Comments

**For each review comment:**

1. **If it's a valid issue**: Fix it
2. **If you disagree**: Discuss with reviewer (with evidence)
3. **If it's out of scope**: Create follow-up issue

**After fixes:**
```bash
# Commit changes
git add .
git commit -m "fix: address review comments"
git push

# Notify reviewers
gh pr comment --body "Review comments addressed, ready for re-review"
```

---

### Step 5.5: Merge & Deploy

**When approved:**

```bash
# Merge PR (use your team's merge strategy)
gh pr merge --squash  # or --merge or --rebase

# Delete feature branch
git branch -d US-XX-feature-name
git push origin --delete US-XX-feature-name

# Close related issues (if not auto-closed)
gh issue close [issue-number] --comment "Completed in PR #XX"
```

---

### Step 5.6: Verify Deployment

**After merge to main:**

```bash
# Watch deployment (if CI/CD configured)
# Monitor logs, errors, metrics

# Smoke test in staging/production
# Verify feature works as expected

# Update stakeholders
```

---

### Checkpoint 5 (GATE)

Before considering feature complete:

- [ ] PR created with complete description
- [ ] All PR checklist items completed
- [ ] Human reviewers approved
- [ ] All review comments addressed
- [ ] PR merged successfully
- [ ] Deployment verified
- [ ] Stakeholders notified

**If checkpoint fails**: Address issues before closing feature.

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

## Common Prompts Reference

Quick copy-paste prompts for common tasks:

### Research Phase
```
"Analyze the codebase for [feature] and create a pre-implementation document that covers:
- Related existing code
- Files to modify
- Technical decisions needed
- Risks and dependencies"
```

### Specification Phase
```
"Generate specification for [STORY-ID]. Ensure all acceptance criteria from the feature specification are included and clear."
```

### Implementation Phase
```
"Implement [task] following TDD:
1. Write the test first at [test file path]
2. Show me the test code
3. Run it (should FAIL/RED)
4. Then implement the code to make it pass (GREEN)
5. Refactor if needed while keeping tests GREEN"
```

### Review Phase (Use Different Model)
```
"Review my implementation (generated by [MODEL]) against:
- Constitution: [paste relevant sections]
- Spec: [paste acceptance criteria]

Check for:
1. Constitution violations
2. Security issues
3. Performance problems  
4. Missing error handling
5. Edge cases not tested

Generate detailed review report."
```

### Documentation Phase
```
"Update documentation for [feature]:
1. README.md - Add new setup steps if any
2. API docs - Update endpoints
3. Configuration - Document new variables

Keep updates concise and accurate to implementation."
```

---

## Artifacts Checklist

For a complete feature, you should have:

### In specs directory
- [ ] `spec.md` - Feature specification
- [ ] `plan.md` - Implementation plan with constitution check
- [ ] `tasks.md` - Task breakdown with TDD workflow
- [ ] `review-feedback.md` - AI + tool review results
- [ ] `research.md` - (if applicable) Technology decisions
- [ ] `data-model.md` - (if applicable) Entity definitions
- [ ] `quickstart.md` - Testing guide
- [ ] `contracts/*.yaml` or `*.md` - API/Event contracts (if applicable)
- [ ] `checklists/requirements.md` - Validation checklist

### In docs directory
- [ ] Pre-implementation analysis (if applicable)
- [ ] Architecture Decision Records (if architecture changed)

### In Code
- [ ] Source files per plan structure
- [ ] Test files per tasks (with >= 80% coverage)
- [ ] Migration files (if DB schema changes)
- [ ] Updated README.md (if setup changed)
- [ ] Updated configuration examples

---

## AI Review Tools Setup

### Sourcery Setup
```bash
# Install
pip install sourcery

# Authenticate
sourcery login

# Configure in project (.sourcery.yaml)
echo "
rule_settings:
  enable:
    - default
  python_version: '3.11'
refactor:
  skip: []
" > .sourcery.yaml

# Use in workflow
# Review: sourcery review .
# Auto-fix: sourcery review --fix .
```

### Antigravity Setup
```bash
# Install (check latest docs for your language)
npm install -g antigravity-cli

# Configure
antigravity init

# Use in workflow
# Review: antigravity review [file-or-dir]
# Security focus: antigravity review --security-only
```

### CodeRabbit Setup (GitHub)
```yaml
# 1. Install CodeRabbit GitHub App from marketplace
# 2. Add configuration file: .coderabbit.yaml

reviews:
  auto_review:
    enabled: true
    base_branches:
      - main
  path_instructions:
    - path: "src/**"
      instructions: "Review for best practices, strict compliance, and constitution adherence"
    - path: "**/*.test.*"
      instructions: "Verify test coverage, edge cases, and TDD compliance"
```

### SonarQube/SonarLint Setup
```bash
# sonar-project.properties
sonar.projectKey=[your-project-key]
sonar.sources=src
sonar.tests=tests
sonar.coverage.exclusions=**/*.test.*,**/*.spec.*

# Run analysis
npm run test:coverage  # Generate coverage
sonar-scanner  # Run analysis
```

---

## Version History

| Version | Date | Changes |
|---------|------|---------|
| 1.4.0 | 2026-01-13 | **PRODUCTION READY**: Removed all placeholders, added customization guide, standardized paths, added tool setup documentation, clarified Phase 2 GitHub hierarchy, added quickstart guide to Phase 3 |
| 1.3.0 | 2026-01-13 | **Terminology Update**: "Feature Specification" (was "Workstream") and "Implementation Guide" (was "Playbook") for industry clarity |
| 1.2.0 | 2026-01-13 | **Genericized**: Removed domain-specific references; generic Story ID format; domain-agnostic constitution examples |
| 1.1.0 | 2026-01-13 | **Major Update**: Added onboarding, workflow rationale, time budgets, troubleshooting, Speckit clarification, reviewer independence |
| 1.0.0 | 2026-01-13 | Initial SOP creation with Phase 0-5 workflow, Speckit integration, TDD requirements, multi-model review |

---

## References

**Core Documents** (Check your project for exact locations):
- Constitution - Non-negotiable technical principles
- Implementation Guide - Architecture patterns and code examples
- Feature Specification - User stories and acceptance criteria
- Integration Guide - How documents work together
- Quick Reference Card - Printable cheat sheet

**External Resources**:
- [GitHub Projects Documentation](https://docs.github.com/en/issues/planning-and-tracking-with-projects)
- [Test-Driven Development](https://en.wikipedia.org/wiki/Test-driven_development)
- [GitHub CLI Reference](https://cli.github.com/manual/)

---

## Feedback & Improvements

This SOP is a living document. If you find:
- ❓ Confusing sections
- 🐛 Process gaps or issues
- 💡 Better ways to do something
- 🚀 Tools that should be added

**Please**: Create an issue or PR with your suggestions. The best SOPs are built by the developers who use them.

---

**Remember**: This process exists to help you ship high-quality code faster. After your first few features, it will feel natural. The upfront investment in specifications and tests pays off in reduced debugging, clearer architecture, and confidence in your code.

Happy coding! 🚀
