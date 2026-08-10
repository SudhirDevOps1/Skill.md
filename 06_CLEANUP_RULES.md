# 🧹 06_CLEANUP_RULES

Vibe coding leaves a mess. A smaller codebase makes your future AI responses smarter. Run this pass periodically.

## PHASE 1: Audit (Make zero changes)
Identify and list with evidence:
* Unused files, components, hooks, utils.
* Unused imports, variables, functions.
* Unused dependencies in `package.json`.
* Logic duplicated in 2+ places.
* Files that have grown >300 lines and should be split.

Present a table with a risk level for each deletion. Stop and wait for user approval.

## PHASE 2: Execute
* Delete ONLY what the user approved.
* Extract duplicated logic into shared utilities.
* Split oversized files strictly along responsibility lines.
* **Rule:** System behavior must remain identical. No new dependencies. No renaming public APIs.
