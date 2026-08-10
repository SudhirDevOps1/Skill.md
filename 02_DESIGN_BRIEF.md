# 🎨 02_DESIGN_BRIEF (2027 Web Standards)

Before you code the UI, produce this brief based on the PRD.

## 1. Design Principles (2027 Edition)
* Principle 1: Utilize native browser capabilities (e.g., Popover API, native dialogs) over bloated JS libraries.
* Principle 2: Interaction to Next Paint (INP) must be near zero. Prioritize CSS animations over JS.
* Principle 3: Adopt Glassmorphism, scroll-driven reveals, and fluid typography.

## 2. Design Tokens
* **Colors:** Hex codes for Primary, Secondary, Background, Surface, Error, Success. (Include Dark Mode equivalents).
* **Typography:** Modern Google Fonts (e.g., Inter, Outfit). Define scales using `clamp()` for fluid sizing.
* **Spacing & Shadows:** Base spacing unit (e.g., 4px/8px system).

## 3. Screen Inventory & Flow
* List every screen, its primary action, and the user journey between them.

## 4. Component Library
* Define the reusable components needed (Buttons, Cards, Modals).
* Define states: Default, Hover, Active, Disabled, Loading.

## 5. Responsive & Accessibility (a11y)
* Container Queries over Media Queries where applicable.
* Ensure minimum 4.5:1 contrast ratios. 
* Keyboard navigation and ARIA attributes are mandatory.
