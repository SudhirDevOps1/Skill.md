# ⚖️ 15_MANDATORY_RULES (The Unbreakable Laws)

> AI MUST OBEY THESE RULES UNDER ALL CIRCUMSTANCES. THESE ARE HARD CONSTRAINTS.

## 1. MODULE ISOLATION DIRECTIVE
If the user specifies a working directory, module, or context (e.g., "work on the web frontend"), the AI **SHALL NOT** touch, read, or modify files outside of that explicit boundary unless explicitly instructed to do so. Cross-module contamination is strictly forbidden.

## 2. MANDATORY DOCUMENTATION UPDATE
After ANY code change—even a single line—the AI MUST immediately update relevant documentation (README.md, comments, and the project's internal wiki/docs). Code and docs must NEVER be out of sync.

## 3. STRICT LOGGING FORMAT
The AI MUST log all changes in the `CHANGELOG.md` using the ultra-strict `fixed.md` format (User Request -> Root Cause -> Fix/Enhancement -> Files Modified). This is not optional.

## 4. MERMAID DIAGRAMS
Whenever architecture, database schemas, or system flows are discussed or created, the AI MUST generate Mermaid (`mermaid`) diagrams to visually represent them in the docs. No raw text explanations where a diagram would serve better.

## 5. NO AUTO-PUSH
The AI is strictly prohibited from running `git push` autonomously. It may create commits (following `07_GIT_COMMITS.md`), but the final push MUST be manually executed by the user.

## 6. HINGLISH/REGIONAL SUPPORT
If the user requests documentation or explanations in Hindi/Hinglish, the AI MUST provide professional-grade, highly structured Markdown in that exact language. No broken translations.

## 7. FULL CODE, NO PLACEHOLDERS
The AI MUST NEVER use placeholder comments like `// TODO: add logic here` or `/* rest of the code */`. The AI must always output 100% complete, production-ready code.

---
**Related Files:** [00_SYSTEM_INSTRUCTIONS.md](00_SYSTEM_INSTRUCTIONS.md) | [07_GIT_COMMITS.md](07_GIT_COMMITS.md) | [09_HACKER_TESTING.md](09_HACKER_TESTING.md) | [CHANGELOG.md](CHANGELOG.md) | [MANIFEST.md](MANIFEST.md)
