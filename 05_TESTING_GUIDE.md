# 🧪 05_TESTING_GUIDE

E2E Testing ensures we don't break features during vibe coding. Default to Playwright for modern web apps.

## Layer 1: Unit Tests (Vitest)
* Use **Vitest** for all utility functions, hooks, and business logic.
* Rule: Any function with >2 code paths MUST have a unit test.
* Run: `npx vitest run` or `npx vitest --ui` for visual dashboard.
* Co-locate test files: `utils/format.ts` → `utils/format.test.ts`
* Mock external dependencies (APIs, DB) — never hit real endpoints in unit tests.

## Layer 2: E2E Tests (Playwright)
1. Identify the critical user journeys (happy paths + realistic failure states).
2. Wait for user approval on the journeys BEFORE writing tests.
3. Use resilient selectors: always prefer `data-testid` or role-based selectors (`getByRole`). Add missing `data-testid` attributes to components as needed.
4. Implement an auth fixture so logged-in tests don't repeat the login flow every run.
5. Seed and clean up test data so tests are isolated.

## Integration:
* Ensure `npm run test:e2e` works locally.
* Add a CI workflow (e.g., GitHub Actions) to run tests on every PR.

---
**Related Files:** [09_HACKER_TESTING.md](09_HACKER_TESTING.md) | [17_PERFORMANCE_GUIDE.md](17_PERFORMANCE_GUIDE.md) | [06_CLEANUP_RULES.md](06_CLEANUP_RULES.md) | [MANIFEST.md](MANIFEST.md)
