# AGENTS.md — La Maison Estética

## Mission

Build a premium, high-conversion website for La Maison Estética. Reconstruct the public experience from scratch; do not copy minified or compiled production code.

## Product priorities

1. Trust and medical/professional credibility.
2. Immediate comprehension of services and differentiation.
3. Conversion to WhatsApp or appointment booking.
4. Excellent mobile usability.
5. Strong contrast, accessibility and page speed.
6. Maintainable content and components.

## Mandatory workflow

Before changing code:

1. Read every file in `/docs`.
2. Inspect the current public website at `https://landing-la-maison.vercel.app/` on desktop and mobile.
3. Inventory all visible copy, links, treatment names, images, logos and contact details.
4. Record uncertain or missing business information in `docs/CONTENT_GAPS.md`; never invent medical credentials, patient counts, certifications, prices, testimonials or treatment outcomes.
5. Plan the implementation in `TASKS.md`.

After changing code:

1. Run typecheck, lint and production build.
2. Test widths 375, 390, 768, 1024 and 1440 px.
3. Check keyboard navigation, visible focus, heading order, alt text and color contrast.
4. Confirm every CTA works and external links are safe.
5. Update `TASKS.md` and document remaining gaps.

## Technical standards

- Next.js App Router
- TypeScript strict mode
- Tailwind CSS
- Semantic HTML
- Server Components by default
- Client Components only for real interactivity
- `next/image` and `next/font`
- Centralized content/data objects; avoid repeated hardcoded copy
- No unnecessary animation library
- No autoplay video or heavy parallax
- No fake counters, reviews, badges or before/after results
- No secrets committed to Git

## Visual guardrails

Avoid:

- hot pink or Barbie-like palettes;
- low-contrast pink text on pale backgrounds;
- excessive gradients, glassmorphism or decorative blobs;
- tiny uppercase body copy;
- generic stock-template layouts;
- overuse of gold;
- clinical coldness or beauty-salon kitsch.

Target:

- warm ivory and stone backgrounds;
- charcoal typography;
- restrained taupe, oxblood and antique-brass accents;
- editorial spacing and premium typography;
- professional, reassuring and human imagery;
- subtle, purposeful motion.

## Content and legal safety

- Do not make medical or therapeutic claims not present in approved source material.
- Do not promise guaranteed results.
- Do not fabricate doctors, licenses, associations, equipment brands or patient statistics.
- Before publishing testimonials or patient images, require evidence of consent.
- Treat before/after imagery as sensitive marketing content and include appropriate qualification language if used.

## Definition of done

A page is complete only when it is responsive, accessible, performant, uses approved content, contains no broken interactions, and passes production build.