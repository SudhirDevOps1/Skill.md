# 🌐 11_2027_WEB_ECOSYSTEM (Deep Tech Spec)

When building applications in this ecosystem, you are targeting the modern 2027 web stack. Do NOT use outdated 2023-2024 patterns.

## 1. AI-Native Architecture
* **Local Inference First:** For any AI feature, attempt to run it locally in the browser using the WebNN API or WebGPU. Only fallback to cloud APIs (OpenAI/Anthropic) for heavy reasoning tasks.
* **On-Device Embedding:** Use Wasm-compiled models to handle semantic search and embeddings directly on the client.

## 2. Ultra-Performance (Zero-JS & Edge)
* **Zero-JS Hydration:** Avoid heavy React/SPA hydration. Use frameworks that support partial hydration or island architecture (e.g., Astro, React Server Components, Nuxt). 
* **Edge Compute:** Deploy middleware and API routes to the Edge (Vercel Edge/Cloudflare Workers). Latency must be < 50ms.
* **WebAssembly (Wasm):** Use Rust/Go compiled to Wasm for any intensive client-side data processing, image manipulation, or cryptography. Do NOT do heavy math in JavaScript.

## 3. Next-Gen UI/UX
* **View Transitions API:** All page navigations and state changes must use native View Transitions for fluid, app-like feeling without complex Framer Motion overhead.
* **Scroll-Driven Animations:** Use CSS `animation-timeline: scroll()` instead of JS intersection observers.
* **Native Popovers & Dialogs:** Use the HTML `<dialog>` and Popover APIs. Do not build custom Z-index heavy modals.
* **CSS:** Use CSS nesting, `color-mix()`, relative colors, and `@container` queries natively.

## 4. Default Stack (Unless overridden in `brain.md`)
* **Frontend:** Next.js (App Router) or Vite (React/Vue) + Tailwind V4 / Native CSS.
* **Backend/DB:** Edge Functions + Serverless PostgreSQL (Neon/Supabase) or SQLite (Turso).
* **Testing:** Vitest (unit) + Playwright (E2E).
* **Deployment:** Vercel / Cloudflare.

## 5. PWA & Offline-First (2027 Default)
* Every web app MUST work offline for at least read operations. Use Service Workers + Cache API.
* Use the **Background Sync API** for queuing writes made offline.
* Implement a Web App Manifest (`manifest.json`) with all icon sizes (72px → 512px).
* Target: **Lighthouse PWA score ≥ 90** on every deploy.

## 6. Real-Time & AI Integration Patterns
### Real-Time:
* **WebSockets:** Use for bidirectional, low-latency features (chat, collaborative editing, live dashboards). Use Ably, Pusher, or Supabase Realtime.
* **Server-Sent Events (SSE):** Use for unidirectional server push (AI token streaming, notifications). Prefer SSE over WebSockets when the client never sends data back.

### AI/LLM Integration:
* **Streaming:** Always stream LLM responses via SSE/ReadableStream. Never block the UI waiting for a full response.
* **Local-First AI:** For classification, embedding, sentiment — run `transformers.js` (Xenova) in a Web Worker. Never block the main thread.
* **Cloud Fallback:** Only route to OpenAI/Anthropic/Gemini APIs when the task requires heavy reasoning that local models can’t handle.
* **Prompt Security:** Always sanitize user input before injecting into prompts. Implement server-side prompt injection detection.
