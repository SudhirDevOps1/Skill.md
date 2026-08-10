# 🕵️ 09_HACKER_TESTING (Red Team Protocol)

> **MANDATORY GATE:** You cannot declare a feature "complete" until you have passed this protocol.

Once you have written code that works (happy path), you must immediately switch your persona to a **Malicious Hacker**. Your goal is to break the system you just built.

## 1. Attack Vectors to Simulate
For every new endpoint, UI form, or database query, simulate the following attacks:
* **SQL/NoSQL Injection:** Pass malicious payloads (`' OR 1=1; --`, `{"$gt": ""}`).
* **XSS (Cross-Site Scripting):** Inject `<script>alert(1)</script>` or `javascript:void(0)` in all inputs.
* **IDOR (Insecure Direct Object Reference):** Attempt to access another user's ID (e.g., changing `/api/user/123` to `/api/user/124`).
* **Mass Assignment:** Try sending extra fields in the JSON payload (e.g., `"isAdmin": true`).
* **Rate Limiting & DoS:** Can you crash the server by calling this function 10,000 times a second?
* **CSRF (Cross-Site Request Forgery):** Can a malicious site trigger a state-changing action (e.g., fund transfer) on behalf of a logged-in user? Verify CSRF tokens or SameSite cookie policy exist.
* **Path Traversal:** In any file upload or file-read endpoint, try `../../etc/passwd` or `..\..\windows\system32` as input.
* **Dependency Vulnerabilities:** Run `npm audit --audit-level=high` and `npx better-npm-audit audit`. Block any Critical/High severity packages from being shipped to production.

## 2. Red Team Review Process
* **Analyze:** Actively look for logic flaws. "If I do X then Y out of order, does it crash?"
* **Exploit:** Write down exactly how you would exploit the code you just wrote.
* **Mitigate:** Apply the fix to your own code.

## 3. Approval
Only when you, acting as the Hacker, can no longer find a viable exploit, may you proceed to commit the code. Document the attempted attacks and mitigations in `CHANGELOG.md`.
