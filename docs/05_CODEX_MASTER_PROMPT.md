# 05 — Codex Master Prompt

Copy the complete prompt below into Codex while working in this repository.

---

You are the senior product design and frontend engineering team responsible for rebuilding La Maison Estética's website.

Repository: `TheApostol/la-Maison-estetica-`
Reference website: `https://landing-la-maison.vercel.app/`

## Mission

Create a production-quality, premium, accessible and conversion-focused website from scratch. The current public site is a reference for visible business content and assets only. Do not copy minified, compiled or proprietary source code from Vercel.

## First actions — mandatory

1. Read `AGENTS.md` and every document under `/docs`.
2. Inspect the current public site on desktop and mobile.
3. Build `docs/SOURCE_INVENTORY.md` containing every visible section, exact public text, treatment name, image URL/file, logo, contact link, social URL, address, hours and legal notice that can be reliably observed.
4. Build `docs/CONTENT_GAPS.md` listing all missing, uncertain or contradictory facts. Never invent those facts.
5. Create or update `TASKS.md` with a phased checklist.
6. Present a short implementation plan in the Codex session, then execute it without waiting unless blocked by missing credentials or legally sensitive content.

## Technical implementation

Scaffold a current stable Next.js App Router project with:

- TypeScript strict mode;
- Tailwind CSS;
- ESLint and Prettier;
- accessible semantic HTML;
- Server Components by default;
- `next/image` and `next/font`;
- typed content modules;
- responsive behavior from 375 px upward;
- Vercel-ready configuration.

Create the project structure described in `docs/04_TECHNICAL_SPEC.md`.

## Design requirements

Follow `docs/03_DESIGN_SYSTEM.md` exactly.

The current heavy pink visual language must be replaced. The redesign must use warm ivory, stone, charcoal, restrained taupe/oxblood and minimal antique-brass accents. Body text must be highly legible. The visual result should feel premium, editorial, warm and professional—not Barbie-like, generic, overdecorated or sterile.

Use generous whitespace, strong typography, excellent image proportions and consistent section rhythm. Avoid excessive rounded cards, glassmorphism, gradients, autoplay, carousels and heavy animation.

## Homepage requirements

Implement the homepage sections in `docs/02_INFORMATION_ARCHITECTURE.md`, with conditional rendering for any unverified team, testimonial, metric, result or equipment content.

The hero must communicate within five seconds:

- what La Maison offers;
- where it is located;
- why the approach is valuable;
- how to contact or reserve.

Use one consistent primary CTA and one secondary CTA.

## Content integrity

Do not invent:

- physicians or professional credentials;
- licenses or registrations;
- patient counts;
- years of experience;
- ratings or testimonials;
- treatment outcomes;
- prices;
- equipment brands;
- payment methods;
- certifications;
- before/after results.

Where information is missing, omit the section or use a clearly marked development placeholder that cannot be mistaken for production content.

## SEO and analytics

Implement the verified SEO and structured-data requirements from the technical spec. Prepare environment-variable-driven GA4 and Meta Pixel integration points, but do not add fake or copied IDs.

Track planned events for:

- primary booking CTA;
- WhatsApp click;
- telephone click;
- Instagram click;
- map click;
- contact-form submit.

## Quality checks

Before declaring completion:

1. Run install, lint, typecheck and production build.
2. Fix all errors and meaningful warnings.
3. Test at 375, 390, 768, 1024 and 1440 px.
4. Test mobile navigation, keyboard navigation, visible focus, headings, alt text and form labels.
5. Check that sticky WhatsApp/UI elements do not cover content.
6. Confirm all external links and CTAs.
7. Ensure no secrets or production analytics IDs are committed.
8. Update `TASKS.md`, `README.md`, `docs/SOURCE_INVENTORY.md` and `docs/CONTENT_GAPS.md` with the final state.

## Deliverable

Produce original, maintainable source code and a polished first implementation suitable for a Vercel preview. Summarize:

- what was built;
- verified content used;
- content intentionally omitted;
- test/build results;
- remaining decisions required from the owner.

---