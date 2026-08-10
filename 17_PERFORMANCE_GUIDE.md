# ⚡ 17_PERFORMANCE_GUIDE (Speed is a Feature)

> A slow app is a broken app. Performance is non-negotiable.

## 1. Core Web Vitals Targets (2027 Standard)
| Metric | Target | Tool |
|---|---|---|
| LCP (Largest Contentful Paint) | < 2.5s | Lighthouse, PageSpeed |
| INP (Interaction to Next Paint) | < 200ms | Chrome DevTools |
| CLS (Cumulative Layout Shift) | < 0.1 | Lighthouse |
| TTFB (Time to First Byte) | < 800ms | WebPageTest |
| Bundle Size (JS) | < 150KB (gzipped) | `npx bundle-buddy` or `@next/bundle-analyzer` |

## 2. Lighthouse CI (Automated Performance Gating)
Add to your CI pipeline (`.github/workflows/perf.yml`):
```yaml
- name: Lighthouse CI
  run: npx lhci autorun
```
```json
// lighthouserc.json
{
  "ci": {
    "assert": {
      "assertions": {
        "categories:performance": ["error", { "minScore": 0.9 }],
        "categories:accessibility": ["error", { "minScore": 0.95 }]
      }
    }
  }
}
```
**Rule:** A PR that drops Lighthouse performance below 90 MUST NOT merge.

## 3. Error Monitoring (Sentry)
```bash
npx @sentry/wizard@latest -i nextjs
```
* Capture unhandled errors + performance transactions automatically.
* Set `tracesSampleRate: 0.1` in production (10% of requests traced).
* Set up **Sentry Alerts** for error spike > 10/min.

## 4. Image Optimization Rules
* NEVER serve raw JPG/PNG. Always use `<Image>` (Next.js) or `<picture>` with AVIF/WebP fallback.
* Use `loading="lazy"` for below-fold images, `fetchpriority="high"` for hero/LCP image.
* Max image width: serve appropriately sized variants (320w, 640w, 1280w).

## 5. Code Splitting & Lazy Loading
```js
// Lazy load heavy components
const HeavyChart = lazy(() => import('./HeavyChart'));
// Dynamic import in Next.js
const Map = dynamic(() => import('./Map'), { ssr: false });
```
* Any component > 50KB that is below-fold MUST be lazy loaded.

## 6. End-of-Task Performance Check
Before declaring any feature "done":
- [ ] Run `npx lighthouse http://localhost:3000 --output html`
- [ ] Check Network tab: any render-blocking scripts? (`async`/`defer` them)
- [ ] Check bundle size: `npx next build && npx next analyze`

**Linked Files:** [09_HACKER_TESTING.md](09_HACKER_TESTING.md) | [11_2027_WEB_ECOSYSTEM.md](11_2027_WEB_ECOSYSTEM.md) | [05_TESTING_GUIDE.md](05_TESTING_GUIDE.md)
