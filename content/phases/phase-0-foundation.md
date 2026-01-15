# Phase 0: Foundation & Context Setup

**Source of truth**: `AI-DEVELOPMENT-SOP-v1.4.0-FINAL.md` (Phase 0 section)

---

## Objective
Establish complete understanding of what needs to be built before writing any specification or code. This includes creating foundational documents (Feature Specification, Implementation Guide) from a PRD if they don't exist.

## Phase 0 Decision Tree

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

## Step 0.1: Creating a Feature Specification from PRD

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

### Research Steps for Feature Specification Creation

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

## Step 0.2: Creating an Implementation Guide from Feature Specification

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

### Research Steps for Implementation Guide Creation

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

## Step 0.3: Read & Analyze Existing Documents

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

## Step 0.4: Pre-Implementation Analysis

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

<a id="checkpoint-0"></a>
## Checkpoint 0 (GATE)

Before moving to Phase 1, verify:

- [ ] PRD or feature request exists and is understood
- [ ] Feature Specification document exists (or created in Step 0.1)
- [ ] Implementation Guide document exists (or created in Step 0.2)
- [ ] Constitution has been read
- [ ] Pre-implementation analysis complete (if applicable)
- [ ] No architectural blockers identified
- [ ] Dependencies are clear and available

**If any checkpoint fails**: Resolve before proceeding. Escalate to tech lead if blocked.
