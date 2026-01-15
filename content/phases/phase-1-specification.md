# Phase 1: Specification & Planning

**Source of truth**: `AI-DEVELOPMENT-SOP-v1.4.0-FINAL.md` (Phase 1 section)

---

## Objective
Generate detailed specifications, implementation plans, and task breakdowns using Speckit (or manually if Speckit is unavailable).

---

## Step 1.1: Initialize Speckit Memory

**When**: Starting work on any feature for the first time in a session

```bash
# If constitution doesn't exist yet
/speckit.constitution

# Review existing constitution (check your project's path)
cat [your-constitution-path]
```

**What this does**: Loads project-specific technical constraints into Speckit's memory so it can validate your plans against them.

---

## Step 1.2: Generate Feature Specification

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

### Manual Alternative (if Speckit unavailable)
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

## Step 1.3: Review and Clarify Specification

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

## Step 1.4: Generate Implementation Plan

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

## Step 1.5: Generate Task Breakdown

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

## Step 1.6: Validate Consistency

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

<a id="checkpoint-1"></a>
## Checkpoint 1 (GATE)

Before moving to Phase 2, verify:

- [ ] Spec document exists and is clear
- [ ] Plan document has constitution compliance check
- [ ] Tasks document has TDD workflow for each task
- [ ] `/speckit.analyze` passed with no critical issues (or manual review complete)
- [ ] All acceptance criteria from feature specification are covered
- [ ] Senior developer reviewed artifacts (for first 2-3 features)

**If checkpoint fails**: Use `/speckit.clarify` to resolve issues (or iterate with your AI assistant if working manually).
