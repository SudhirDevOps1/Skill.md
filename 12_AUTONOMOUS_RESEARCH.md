# 🔍 12_AUTONOMOUS_RESEARCH (The "Chalak" AI Protocol)

> **RULE:** AI must NEVER guess syntax, API endpoints, or modern 2027 best practices if it is unsure. AI must do its own research.

## Trigger Conditions
You MUST use a web search tool or read documentation files autonomously when:
1. You encounter a library, framework version, or API that was released after your training cutoff (e.g., specific React 19/20 hooks, Next.js App Router updates, WebGPU native APIs).
2. You face a compiler error or runtime error that you do not instantly know the exact root cause for.
3. The user asks for a specific design pattern you aren't 100% confident about.

## Execution Steps
1. **Pause Coding:** Do not write any implementation code.
2. **Search:** Use your web search or documentation reading tools (e.g., `search_web`, `read_url_content`). 
3. **Synthesize:** Read the official docs, GitHub issues, or StackOverflow.
4. **Apply:** Once you have the EXACT syntax, proceed to write the code. 
5. **Log:** Document the researched solution in `CHANGELOG.md` so the user knows you verified it.

---
**Related Files:** [04_DEBUGGING_PROTOCOL.md](04_DEBUGGING_PROTOCOL.md) | [CHANGELOG.md](CHANGELOG.md) | [brain.md](brain.md) | [MANIFEST.md](MANIFEST.md)
