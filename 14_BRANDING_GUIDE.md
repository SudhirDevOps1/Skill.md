# 🎨 14_BRANDING_GUIDE (Autonomous Design System)

> The user just gives an idea. YOU must design the entire brand identity BEFORE coding any UI.

## Step 1: Brand Personality Matrix
First, define the emotional identity:
| Dimension | Options | Choose One |
|---|---|---|
| Energy | High-energy vs. Calm | ? |
| Trust | Playful vs. Professional | ? |
| Style | Minimal vs. Bold | ? |
| Audience | Consumer vs. Developer | ? |

## Step 2: Color System (HSL-based, Not Hex)
Use HSL for theme flexibility and dark mode auto-generation:
```css
--color-primary:    hsl(220, 90%, 56%);   /* Electric Blue */
--color-secondary:  hsl(260, 80%, 60%);   /* Deep Purple */
--color-accent:     hsl(145, 70%, 50%);   /* Mint Green */
--color-bg:         hsl(220, 20%, 8%);    /* Near Black */
--color-surface:    hsl(220, 15%, 14%);   /* Card surface */
--color-text:       hsl(220, 10%, 92%);   /* Off-white */
--color-error:      hsl(0, 85%, 60%);
--color-success:    hsl(145, 70%, 45%);
```
* **Rule:** Primary color Hue must be ≥40° apart from Secondary to avoid muddiness.
* **Contrast:** Text on surface must meet 4.5:1 WCAG AA minimum.
* **Dark Mode:** Flip `--color-bg` and `--color-text` hsl L values; keep Hue/Saturation.

## Step 3: Typography Stack
```css
/* Import from Google Fonts */
font-family: 'Outfit', sans-serif;    /* Headers: geometric, modern */
font-family: 'Inter', sans-serif;     /* Body: humanist, readable */
font-family: 'JetBrains Mono', mono; /* Code blocks */

/* Fluid Type Scale (clamp: min, ideal, max) */
--text-xs:   clamp(0.75rem, 1.5vw, 0.875rem);
--text-sm:   clamp(0.875rem, 2vw, 1rem);
--text-base: clamp(1rem, 2.5vw, 1.125rem);
--text-lg:   clamp(1.125rem, 3vw, 1.25rem);
--text-xl:   clamp(1.5rem, 4vw, 2rem);
--text-2xl:  clamp(2rem, 5vw, 3rem);
--text-hero: clamp(3rem, 8vw, 5rem);
```

## Step 4: Logo Assets to Generate
1. **Primary Logo:** Full lockup — icon + wordmark side-by-side. SVG with viewBox="0 0 200 60".
2. **Secondary Logo / Icon:** Icon only (32x32, 64x64). Used for favicon, app icon.
3. **Wordmark:** Text-only. Font: Outfit Bold. Letter-spacing: -0.02em.
4. **Dark / Light variants** of all three above.

### SVG Logo Template:
```svg
<svg viewBox="0 0 200 60" xmlns="http://www.w3.org/2000/svg">
  <!-- Icon: geometric shape representing brand concept -->
  <g id="icon"><!-- shape here --></g>
  <!-- Wordmark -->
  <text x="52" y="38" font-family="Outfit" font-weight="700"
        font-size="24" fill="var(--color-primary)">AppName</text>
</svg>
```

## Step 5: Spacing & Shadow System
```css
--space-1: 4px;   --space-2: 8px;   --space-3: 12px;  --space-4: 16px;
--space-6: 24px;  --space-8: 32px;  --space-12: 48px; --space-16: 64px;

--shadow-sm: 0 1px 3px hsl(220 40% 0% / 0.3);
--shadow-md: 0 4px 16px hsl(220 40% 0% / 0.4);
--shadow-lg: 0 8px 32px hsl(220 40% 0% / 0.5);
--shadow-glow: 0 0 24px hsl(var(--primary-hue) 90% 60% / 0.4); /* Brand glow */
```

**Linked Files:** [02_DESIGN_BRIEF.md](02_DESIGN_BRIEF.md) | [00_SYSTEM_INSTRUCTIONS.md](00_SYSTEM_INSTRUCTIONS.md)
