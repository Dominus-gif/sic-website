---
name: Forge & Precision
colors:
  surface: '#faf8ff'
  surface-dim: '#d6d9ef'
  surface-bright: '#faf8ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f2ff'
  surface-container: '#ebedff'
  surface-container-high: '#e4e7fd'
  surface-container-highest: '#dee1f7'
  on-surface: '#171b2a'
  on-surface-variant: '#424751'
  inverse-surface: '#2c3040'
  inverse-on-surface: '#eff0ff'
  outline: '#737782'
  outline-variant: '#c3c6d2'
  surface-tint: '#2e5ea5'
  primary: '#003874'
  on-primary: '#ffffff'
  primary-container: '#1a4f95'
  on-primary-container: '#a3c3ff'
  inverse-primary: '#aac7ff'
  secondary: '#934b00'
  on-secondary: '#ffffff'
  secondary-container: '#fe8e26'
  on-secondary-container: '#653200'
  tertiary: '#592e00'
  on-tertiary: '#ffffff'
  tertiary-container: '#7a4100'
  on-tertiary-container: '#ffb16e'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d6e3ff'
  primary-fixed-dim: '#aac7ff'
  on-primary-fixed: '#001b3e'
  on-primary-fixed-variant: '#08458b'
  secondary-fixed: '#ffdcc4'
  secondary-fixed-dim: '#ffb781'
  on-secondary-fixed: '#2f1400'
  on-secondary-fixed-variant: '#6f3800'
  tertiary-fixed: '#ffdcc2'
  tertiary-fixed-dim: '#ffb77b'
  on-tertiary-fixed: '#2e1500'
  on-tertiary-fixed-variant: '#6d3a00'
  background: '#faf8ff'
  on-background: '#171b2a'
  surface-variant: '#dee1f7'
  industrial-blue: '#1A4F95'
  safety-orange: '#FF8F27'
  copper-alloy: '#B87333'
  deep-obsidian: '#12141D'
  steel-gray: '#4A5568'
  cad-background: '#F8FAFC'
typography:
  display-lg:
    fontFamily: Geist
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Geist
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Geist
    fontSize: 28px
    fontWeight: '600'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Geist
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Geist
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Geist
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-caps:
    fontFamily: Geist
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1.0'
    letterSpacing: 0.1em
  mono-data:
    fontFamily: Geist Mono
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1.4'
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 8px
  container-max: 1280px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 40px
  stack-sm: 12px
  stack-md: 32px
  stack-lg: 80px
---

## Brand & Style

This design system embodies the "Modern Industrial" aesthetic, specifically tailored for the engineering and B2B procurement sector. The personality is grounded in **engineering excellence**, evoking a sense of structural integrity, precision, and unwavering reliability.

The visual direction follows a **Corporate / Modern** framework with a distinct **Minimalist** edge. It utilizes a "blueprint-informed" layout—clean lines, structured grids, and significant whitespace that allows technical specifications and heavy machinery imagery to breathe. By balancing high-contrast dark surfaces with crisp light backgrounds, the UI mimics the transition from a darkened control room to a bright, modern factory floor. 

The emotional response should be one of "Mission-Critical Trust." Every element must feel intentional and robust, avoiding decorative "fluff" in favor of functional clarity.

## Colors

The palette is derived from the core identity of industrial materials and environments. 

- **Primary (Industrial Blue):** Represents the stability of heavy machinery and corporate trust.
- **Secondary (Safety Orange):** Used sparingly for high-visibility CTAs, critical alerts, and focal points, echoing industrial safety standards.
- **Tertiary (Copper Alloy):** A sophisticated metallic accent that references raw materials and electrical components.
- **Neutral (Deep Obsidian & Steel Gray):** These colors provide the structural framework. The default mode is **Light**, utilizing a "CAD-background" off-white for main surfaces to reduce eye strain during long procurement sessions, with **Dark** modes reserved for technical dashboards and footer regions.

## Typography

The design system exclusively uses **Geist** to achieve a technical, developer-centric, and highly legible look. 

- **Headlines:** Use tight tracking and heavy weights to convey strength. 
- **Body:** Generous line-height (1.6) ensures that dense technical descriptions remain readable.
- **Data Labels:** The system introduces a "Mono" variant for part numbers, dimensions, and technical specifications, reinforcing the engineering narrative.
- **Hierarchy:** Use the `label-caps` role as an "eyebrow" above section headings to categorize content (e.g., "MINING EQUIPMENT").

## Layout & Spacing

This design system employs a **Fixed Grid** philosophy for desktop to maintain structural precision, while transitioning to a **Fluid Grid** for mobile.

- **Grid:** A 12-column grid on desktop with 24px gutters. Content should align strictly to these columns to evoke a sense of blueprint-like accuracy.
- **Rhythm:** An 8px base unit drives all spacing. 
- **Adaptation:** On mobile, margins reduce to 16px, and multi-column service blocks reflow into a single-column stack. Heavy usage of `stack-lg` (80px) between major sections ensures the "Premium" feel by preventing content overcrowding.

## Elevation & Depth

Visual hierarchy is established through **Tonal Layers** and **Low-Contrast Outlines** rather than aggressive shadows.

- **Surfaces:** Use subtle shifts in background color (e.g., White to CAD-background) to define different content zones.
- **Outlines:** Instead of shadows, use 1px borders in `steel-gray` at low opacity (10-15%) to define cards and containers.
- **Ambient Depth:** When depth is required (e.g., for modal windows), use a very diffused, low-opacity shadow (#12141D at 8% alpha) with no blur offset, keeping the element feeling grounded and heavy rather than floating.

## Shapes

The shape language is **Soft (Level 1)**. 

Large rounded corners are avoided as they conflict with the industrial, "machined" aesthetic. A 0.25rem (4px) radius is applied to buttons and input fields—just enough to feel modern and "finished" without losing the sharpness associated with engineering precision. Container components like cards may use 0.5rem (8px) for a slightly softer container feel against the sharp typography.

## Components

### Buttons
- **Primary:** Solid `industrial-blue` with white text. High-contrast, rectangular with 4px radius.
- **Secondary:** Outlined `industrial-blue` with 1px stroke. 
- **Action (CTA):** Solid `safety-orange` for "Request Quote" or "Emergency Support."

### Cards
- White background with a 1px `steel-gray` border. No shadow. 
- Headers within cards should use the `label-caps` style.

### Input Fields
- Subtle gray backgrounds with a bottom-only border or a light 1px border.
- Focus states must use `industrial-blue` with a 2px stroke.

### Chips & Technical Tags
- Used for categories like "In Stock" or "Mining Gear." 
- Small, uppercase text with light gray background and square corners.

### Lists
- For technical specs, use a striped (zebra) list pattern with `cad-background` to ensure horizontal readability of data rows.

### Special Industrial Component: The "Blueprint Overlay"
- Use semi-transparent grid line patterns as background elements for hero sections or image overlays to reinforce the engineering theme.