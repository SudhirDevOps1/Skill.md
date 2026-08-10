# 🎨 20_UI_COMPONENTS_GUIDE (The Consistency Enforcer)

> **Goal:** Ensure the AI builds a highly consistent, premium, and reusable UI system without reinventing the wheel for every new component.

## 1. 🏗️ The Golden Rule of UI
**NEVER write custom CSS or inline styles if a utility class or component library can do the job.**
- **Default Stack:** Tailwind CSS + Shadcn UI (Radix Primitives) + Framer Motion.
- **Why?** It guarantees 100% design consistency, accessibility (a11y), and zero CSS bloat.

## 2. 🧩 Component Library Rules (e.g., Shadcn UI)
When asked to build a UI element (Button, Modal, Dropdown, Table):
1. **Check First:** Does this component exist in Shadcn UI? (e.g., `npx shadcn-ui@latest add button`).
2. **Do Not Recreate:** Do not build a custom dropdown from scratch if a robust, accessible one already exists in the library.
3. **Extend, Don't Override:** If a component needs a specific look, use Tailwind `cn()` utility to merge classes safely without breaking the base component.

## 3. 🎨 Tailwind CSS Best Practices
- **Use Tokens, Not Magic Numbers:** Use `gap-4`, `p-6`, `text-lg`. NEVER use arbitrary values like `w-[237px]` unless absolutely necessary for pixel-perfect edge cases.
- **Color System:** Use CSS variables (e.g., `bg-background`, `text-primary`) to support automatic Light/Dark mode switching. Do not hardcode `bg-white` or `text-black`.
- **Responsive First:** Always write mobile-first classes (`flex flex-col md:flex-row`).

## 4. ♻️ Component Reusability (DRY)
- **Container vs Presentational:** Separate logic (data fetching) from UI. Pass data as props to dumb UI components.
- **The "Rule of 3":** If you build the same UI structure (like a card or a badge) more than twice, immediately refactor it into a reusable `<Component />` in the `components/ui/` folder.

## 5. ✨ Micro-Interactions & Animations
- Always add hover states (`hover:bg-accent`, `hover:text-accent-foreground`).
- Always add focus rings for accessibility (`focus-visible:ring-2 focus-visible:ring-ring`).
- Use `framer-motion` for page transitions and complex animations, but keep them subtle. Do not over-animate.

---
**Related Files:** [02_DESIGN_BRIEF.md](02_DESIGN_BRIEF.md) | [14_BRANDING_GUIDE.md](14_BRANDING_GUIDE.md) | [11_2027_WEB_ECOSYSTEM.md](11_2027_WEB_ECOSYSTEM.md) | [MANIFEST.md](MANIFEST.md)
