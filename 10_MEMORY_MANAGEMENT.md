# 🗜️ 10_MEMORY_MANAGEMENT (Ultra Compression)

> **CRITICAL:** AI Context windows are limited and expensive. You must keep `brain.md` clean, concise, and highly compressed to save exactly 30%+ tokens.

## Strict Compression Rules for `brain.md`
1. **Zero Conversational Text:** Use ONLY strict bullet points, symbols, and shorthand. 
   - *Bad:* "We decided to use PostgreSQL because it is reliable for relational data."
   - *Good:* `DB: PostgreSQL (relational sync)`
2. **Purge Ruthlessly:** When a task is marked `[x]` and successfully deployed, DELETE the detailed sub-tasks immediately. Leave only a 1-line trace.
3. **Archive Old Decisions:** If "Architectural Decisions" > 5 items, summarize them into a single string (e.g., `Arch: Next15+React19+Tailwind4+WebNN`) and delete the long entries.
4. **No Failure Logs:** Never record failed attempts or bugs in `brain.md`. Only document the *final working state*.

## The End-of-Turn Cleanup
Before you end your turn, you MUST look at `brain.md` and ask yourself: "Can I remove 20 words from this without losing the core technical context?" If yes, delete them.
