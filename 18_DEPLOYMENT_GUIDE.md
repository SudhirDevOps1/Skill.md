# 🚀 18_DEPLOYMENT_GUIDE (Ship It Right)

> Code that isn't deployed is just homework. Ship with confidence.

## Decision Matrix: Where to Deploy?
| App Type | Platform | Command |
|---|---|---|
| Next.js / React | **Vercel** (first choice) | `npx vercel --prod` |
| Static Site / SPA | **Cloudflare Pages** | `npx wrangler pages deploy ./dist` |
| API / Worker | **Cloudflare Workers** | `npx wrangler deploy` |
| Full-stack Docker | **Railway / Render** | Push to `main` (auto-deploy) |
| Mobile (PWA) | Vercel + manifest.json | Same as Next.js |

## Vercel Deployment (Step-by-Step)
```bash
# 1. Install Vercel CLI (first time only)
npm i -g vercel

# 2. Link project (first time only)
vercel link

# 3. Set environment variables
vercel env add DATABASE_URL production
vercel env add NEXTAUTH_SECRET production

# 4. Deploy to preview
vercel

# 5. Promote to production (after testing preview URL)
vercel --prod
```

## Cloudflare Workers (Step-by-Step)
```bash
# 1. Install Wrangler
npm install -g wrangler

# 2. Login
wrangler login

# 3. Init (first time)
wrangler init my-worker

# 4. Deploy
wrangler deploy
```

## Environment Variables Checklist
Before EVERY deployment, verify:
- [ ] No hardcoded secrets in client bundle (`NEXT_PUBLIC_` prefix only for public keys)
- [ ] `.env.local` is in `.gitignore`
- [ ] Production env vars set in platform dashboard (Vercel/CF)
- [ ] `NODE_ENV=production` is set

## Post-Deploy Verification
After every deployment:
1. Open the live URL in an **incognito window**.
2. Check the Network tab: any 404 errors on assets?
3. Check console: any runtime errors?
4. Run Lighthouse on the live URL.
5. Test the critical user journey (auth → core action → logout).

## Rollback Protocol
```bash
# Vercel: instant rollback to previous deployment
vercel rollback

# Cloudflare: rollback via dashboard
# Workers > your-worker > Deployments > previous > Rollback
```

**Linked Files:** [07_GIT_COMMITS.md](07_GIT_COMMITS.md) | [17_PERFORMANCE_GUIDE.md](17_PERFORMANCE_GUIDE.md) | [03_SECURITY_AUDIT.md](03_SECURITY_AUDIT.md)
