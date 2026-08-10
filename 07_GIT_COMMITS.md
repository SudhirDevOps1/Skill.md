# 📦 07_GIT_COMMITS

Your history is your documentation. Keep it pristine.

## Branch Strategy
* `main` — Production only. **Protected.** Direct push NEVER allowed.
* `dev` — Integration branch. All features merge here first.
* `feature/[ticket-name]` — One branch per feature/fix.
* `hotfix/[issue]` — Critical prod bugs only. Merges to both `main` + `dev`.
* PR Rule: Minimum 1 approval before merge. No self-merging.

## Commit Rules:
1. Split work into atomic commits. One logical change = one commit. Never mix a fix and a refactor in the same commit.
2. Use Conventional Commits format:
   `type(scope): short imperative summary under 60 chars`
   *(Types: feat, fix, refactor, perf, docs, test, chore, style, build, ci)*
3. Add a blank line and a body explaining WHY the change was needed and any tradeoffs.
4. Mark breaking changes with `BREAKING CHANGE:`.
5. Never write vague messages like "update", "fix stuff", or "wip".
