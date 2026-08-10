# 🛡️ 03_SECURITY_AUDIT

Run this checklist BEFORE deploying any code. Do NOT modify code during the audit, just list the findings.

## Check For:
1. **Authentication & Session:** Are tokens stored securely? (No localStorage for JWTs, use HttpOnly cookies).
2. **Authorization:** Can User A access User B's data? (IDOR checks).
3. **Secrets:** Are there any hardcoded API keys or tokens in the client bundle?
4. **Injection:** Are all database queries parameterized? Is user input sanitized to prevent XSS?
5. **Rate Limiting:** Are public API routes protected against brute force?
6. **CORS & Headers:** Are security headers set (CSP, Strict-Transport-Security)? Is CORS overly permissive?

## Output Format:
* **Severity:** Critical / High / Medium / Low
* **File & Line:** 
* **Exploit Scenario:** How an attacker would abuse this.
* **Proposed Fix:** The exact code fix (wait for user approval to apply).

---
**Related Files:** [09_HACKER_TESTING.md](09_HACKER_TESTING.md) | [19_API_DESIGN_GUIDE.md](19_API_DESIGN_GUIDE.md) | [15_MANDATORY_RULES.md](15_MANDATORY_RULES.md) | [MANIFEST.md](MANIFEST.md)
