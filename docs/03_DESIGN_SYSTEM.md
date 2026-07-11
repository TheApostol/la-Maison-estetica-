# 03 — Design System

## Creative direction

A warm, editorial and premium aesthetic studio. The visual language should feel closer to a boutique hotel, refined skincare brand or contemporary wellness space than to a pink beauty template.

## Color system

### Core neutrals

- `--background: #F7F4EF` — warm ivory
- `--surface: #EFE9E2` — soft stone
- `--surface-strong: #E3DAD0` — warm sand
- `--foreground: #24211F` — charcoal brown
- `--muted-foreground: #665F59` — accessible secondary text
- `--border: #D8CEC3`
- `--white: #FFFFFF`

### Brand accents

- `--brand: #76565A` — muted oxblood / dusty wine
- `--brand-hover: #62464A`
- `--brand-soft: #E7DADC`
- `--taupe: #917C70`
- `--brass: #A98A5C` — use sparingly

### Rules

- Body text must never use pale rose.
- Gold/brass is an accent, not a body-text color.
- CTA text must meet WCAG AA contrast.
- Avoid multiple accent colors in the same component.
- Pink may appear only as a muted tonal reference, never as the dominant page background.

## Typography

Recommended free stack:

- Display/headings: `Cormorant Garamond` or `DM Serif Display`.
- UI/body: `Inter`, `Manrope` or `DM Sans`.

Use one display family and one sans family only.

### Scale

- Hero: clamp approximately 48–80 px desktop, 40–52 px mobile.
- H2: 36–56 px.
- H3: 24–32 px.
- Body large: 18–20 px.
- Body: 16–18 px.
- Small/support: minimum 14 px.

Body line-height should remain around 1.6. Avoid wide text blocks; target 55–70 characters per line.

## Layout

- Maximum content width: 1200–1280 px.
- Reading content width: 680–760 px.
- Mobile side padding: 20–24 px.
- Desktop side padding: 40–64 px.
- Generous section spacing: 80–128 px desktop, 56–80 px mobile.
- Use asymmetry selectively, but keep scanning intuitive.

## Components

### Buttons

Primary:

- solid brand background;
- high-contrast light text;
- 48–52 px minimum height;
- restrained radius, 999 px only if consistently used;
- no gradient.

Secondary:

- transparent or neutral surface;
- visible border;
- strong hover and focus states.

### Cards

- image-led, editorial proportions;
- subtle border or tonal background;
- minimal shadow;
- consistent content height;
- no excessive rounded corners.

### Header

- transparent over hero only if contrast remains reliable;
- otherwise warm solid background;
- transitions to compact sticky state;
- logo remains legible and never compressed.

### Icons

Use a single outline icon set. Icons support labels; they do not replace clear text.

## Imagery

Preferred:

- authentic space and team photography;
- calm natural light;
- close details of textures, treatment environment and hospitality;
- consistent warm-neutral grading;
- inclusive and realistic subjects.

Avoid:

- glossy generic beauty stock;
- overly retouched skin;
- misleading treatment images;
- crowded collages;
- low-resolution screenshots;
- text baked into images.

## Motion

- subtle reveal transitions only;
- 150–350 ms for UI interactions;
- respect `prefers-reduced-motion`;
- no scroll hijacking;
- no large parallax effects;
- no looping decorative animation competing with content.

## Logo treatment

Until official vector assets are obtained:

- preserve the existing logo faithfully;
- do not redraw it from a screenshot as a final asset;
- create monochrome light/dark treatments only when permitted;
- maintain clear space equal to at least the height of the primary letterform;
- prepare `/public/brand` for approved SVG, PNG and favicon assets.

## Accessibility

- WCAG AA contrast minimum.
- Visible focus ring on all interactive elements.
- Do not rely on color alone to convey state.
- Text remains readable at 200% zoom.
- Heading levels remain sequential.
- Form errors are explicit and programmatically associated.