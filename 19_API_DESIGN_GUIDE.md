# 🔌 19_API_DESIGN_GUIDE (Contract-First APIs)

> Never build a UI before you've designed the API contract. The contract is the truth.

## Decision Matrix: Which API Style?
| Scenario | Use | Why |
|---|---|---|
| Full-stack Next.js / same team | **tRPC** | End-to-end type safety, no codegen, no schema drift |
| Public API / third-party consumers | **REST** | Universal compatibility, easy to document with OpenAPI |
| Complex data requirements / multiple clients | **GraphQL** | Client queries exactly what it needs, no over-fetching |
| Real-time data | **WebSockets / SSE** | See `11_2027_WEB_ECOSYSTEM.md` |
| Simple CRUD, small team | **REST** | Lowest overhead |

## tRPC Setup (Recommended for Full-Stack)
```ts
// server/trpc.ts
import { initTRPC } from '@trpc/server';
const t = initTRPC.context<Context>().create();
export const router = t.router;
export const publicProcedure = t.procedure;
export const protectedProcedure = t.procedure.use(isAuthed); // middleware

// routers/user.ts
export const userRouter = router({
  getProfile: protectedProcedure
    .input(z.object({ userId: z.string() }))
    .query(async ({ input, ctx }) => {
      return ctx.db.user.findUnique({ where: { id: input.userId } });
    }),
});
```

## REST API Rules
1. **Versioning:** Always prefix with `/api/v1/`. Breaking changes → bump to `v2`.
2. **Naming:** Plural nouns only. `/api/v1/users`, NOT `/api/v1/getUser`.
3. **HTTP Verbs:** `GET` (read), `POST` (create), `PUT` (full replace), `PATCH` (partial update), `DELETE`.
4. **Status Codes (Strict):**
   * `200` OK, `201` Created, `204` No Content (for DELETE)
   * `400` Bad Request (validation error), `401` Unauthenticated, `403` Forbidden
   * `404` Not Found, `409` Conflict (duplicate), `429` Rate Limited
   * `500` Server Error (never expose stack trace to client)
5. **Response Format:**
```json
{
  "success": true,
  "data": { "id": "123", "name": "Rohit" },
  "meta": { "page": 1, "totalPages": 10 }
}
```
Error format:
```json
{ "success": false, "error": { "code": "UNAUTHORIZED", "message": "Token expired" } }
```

## Input Validation (Mandatory)
* Use **Zod** for all API inputs. No raw `req.body` access without parsing first.
```ts
const schema = z.object({ email: z.string().email(), age: z.number().min(18) });
const result = schema.safeParse(req.body);
if (!result.success) return res.status(400).json({ error: result.error.flatten() });
```

## Rate Limiting (All Public Routes)
```ts
import { Ratelimit } from '@upstash/ratelimit';
const ratelimit = new Ratelimit({ redis, limiter: Ratelimit.slidingWindow(10, '10s') });
// 10 requests per 10 seconds per IP
```

**Linked Files:** [03_SECURITY_AUDIT.md](03_SECURITY_AUDIT.md) | [09_HACKER_TESTING.md](09_HACKER_TESTING.md) | [11_2027_WEB_ECOSYSTEM.md](11_2027_WEB_ECOSYSTEM.md)
