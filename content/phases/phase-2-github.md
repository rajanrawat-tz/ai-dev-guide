# Phase 2: GitHub Issue Creation & Hierarchy

---

## Objective
Convert task breakdown into trackable GitHub issues with proper Epic → User Story → Task hierarchy and parent-child relationships.

---

## Understanding GitHub Issue Hierarchy

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

## 🚀 AI-Assisted Workflow (RECOMMENDED)

**For teams using AI agents with Speckit**, this bottom-up approach is faster and more practical:

### Step 2.1: Auto-Create Tasks from Specification

Since you already have detailed `tasks.md` from Phase 1, use Speckit to create all task issues at once:

```bash
# In your AI chat (Cursor, Windsurf, etc.)
/speckit.taskstoissues

# Speckit will automatically:
# ✅ Read your tasks.md file
# ✅ Create individual task issues in GitHub
# ✅ Add appropriate labels (task, TDD, etc.)
# ✅ Include test-first requirements
# ✅ Link to task document sections
```

**Output**: You now have all task issues created (e.g., #125, #126, #127, #128)

---

### Step 2.2: Create User Story and Link Tasks

Prompt your AI agent to create the User Story issue and establish parent-child relationships:

**AI Prompt:**
```
Create a GitHub User Story issue for [feature name] with:
- Title: "US-XX: [User Story Title from spec.md]"
- Body including: user story, acceptance criteria, technical context
- Labels: user-story, feature
- Link tasks #125, #126, #127, #128 as child issues
- Assign to @me
- Add to milestone [Sprint/Milestone name]
```

**AI will execute:**
```bash
gh issue create \
  --title "US-01: User Login with Email/Password" \
  --body "[full description with acceptance criteria]" \
  --label "user-story,feature" \
  --assignee "@me" \
  --milestone "Sprint 5"

# Then link child tasks in GitHub Projects
# (AI can use GitHub API or gh CLI to set parent-child relationships)
```

**Output**: User Story issue #124 created with tasks #125-128 as children

---

### Step 2.3: Create Epic (If Needed) and Link User Stories

For larger features spanning multiple user stories, create an Epic:

**AI Prompt:**
```
Create a GitHub Epic issue for [initiative name] with:
- Title: "Epic: [Initiative Name]"
- Body including: overview, user stories checklist, success metrics
- Labels: epic
- Link User Stories #124, #130, #135 as children
- Add to milestone [Milestone name]
```

**Output**: Epic issue #123 created with User Stories as children

---

### Step 2.4: Verify Hierarchy in GitHub Projects

Check that the hierarchy is correctly established:

```
Epic: Customer Authentication System (#123)
  └─ US-01: User Login with Email/Password (#124)
      ├─ Task: Create login API endpoint (#125)
      ├─ Task: Implement JWT token generation (#126)
      ├─ Task: Add password hashing (#127)
      └─ Task: Write integration tests (#128)
```

**Using GitHub CLI:**
```bash
# View User Story with children
gh issue view 124

# List all tasks for this user story
gh issue list --search "parent:US-01 in:title"
```

**In GitHub Projects UI:**
- Epic shows progress rollup from User Stories
- User Stories show progress rollup from Tasks
- Parent-child links are visible

---

## 📋 Manual Workflow (Alternative)

**For teams not using AI agents**, follow the traditional top-down approach:

### Manual Step 2.1: Create Epic (If Needed)

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

### Manual Step 2.2: Create User Story Issue

**For each user story in your Feature Specification:**

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

### Manual Step 2.3: Create Task Issues (Children of User Story)

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

## Common Steps (Both Workflows)

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

<a id="checkpoint-2"></a>
## Checkpoint 2 (GATE)

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

## GitHub Issue Hierarchy Best Practices

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
