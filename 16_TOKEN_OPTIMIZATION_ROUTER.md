# 🚦 16_TOKEN_OPTIMIZATION_ROUTER (The Context Toll Plaza)

> **CRITICAL RULE:** DO NOT blindly read all `.md` files in `_ai_core_brain` when starting a task. Doing so wastes tokens and slows down execution. Use this router to determine your required context tier.

## How to use this router:
When the user gives a prompt, analyze the scope and classify into ONE tier. Read ONLY that tier's files.

### ⚫ Tier 0: Zero Context (Saves 90% Tokens)
**Trigger:** User asks a one-word/one-liner factual question (e.g., "what is flex-wrap?", "git command for stash?", "what does `map()` do?"). No code changes needed.
**Required Context:** NONE. Answer directly from your 25-year veteran knowledge.
*Do not open any file.*
### 🟢 Tier 1: Small Fix / Iteration (Saves 60% Tokens)
**Trigger:** User asks for a simple CSS tweak, a typo fix, changing a color, fixing a small bug in a single file, or running a terminal command.
**Required Context:**
- `00_SYSTEM_INSTRUCTIONS.md` (Always)
- `15_MANDATORY_RULES.md` (Always)
- `CHANGELOG.md` (To log the fix)
- `brain.md` (For core memory)
- The specific target file(s) you are editing.
*Ignore everything else.*

### 🟡 Tier 2: New Feature in Existing App (Saves 30% Tokens)
**Trigger:** User asks to add a new page, integrate an API, create a new UI component, or add a database table to an already existing project.
**Required Context:**
- Tier 1 Files + 
- `01_PRD_TEMPLATE.md` (To scope the feature)
- `02_DESIGN_BRIEF.md` (To ensure UI consistency)
- `03_SECURITY_AUDIT.md` (To ensure the new API/DB is secure)
*Ignore testing/cleanup/skill creation files unless specifically needed.*

### 🔴 Tier 3: Full App Generation / Major Refactor (Deep Work)
**Trigger:** User asks to build a completely new app from scratch, perform a massive architecture change, or do a full system migration.
**Required Context:**
- Read ALL files in the `_ai_core_brain` directory to establish the complete 25-Year Veteran persona and strict workflow.
