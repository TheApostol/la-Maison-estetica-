# TASKS — La Maison Estética

## Phase 0 — Strategy and source audit

- [x] Initialize repository.
- [x] Add project operating instructions.
- [x] Define product, UX, design and technical direction.
- [x] Add Codex master prompt.
- [x] Capture desktop and mobile screenshots of the current public site.
- [x] Complete `docs/SOURCE_INVENTORY.md`.
- [x] Complete `docs/CONTENT_GAPS.md`.
- [x] Download only authorized public brand and image assets.

## Phase 1 — Foundation

- [x] Scaffold Next.js App Router with TypeScript and Tailwind.
- [x] Configure strict TypeScript, ESLint and Prettier.
- [x] Add global design tokens and typography.
- [x] Create typed content model.
- [x] Add base metadata, sitemap and robots.
- [x] Add environment-variable template.
- [x] Add analytics/event hooks behind environment variables only.

## Phase 2 — Homepage

- [x] Header and mobile navigation.
- [x] Hero and conversion CTAs using verified Palermo Soho/WhatsApp content only.
- [x] Trust/value strip without unsupported metrics.
- [x] Featured treatments.
- [x] Brand approach section.
- [x] Treatment categories.
- [x] Process section.
- [x] Conditional results/team/testimonials with all unverified sections omitted by default.
- [x] FAQ.
- [x] Location and contact.
- [x] Final CTA and footer.
- [x] Floating WhatsApp control without content obstruction.

## Phase 3 — Supporting pages

- [x] Treatments index.
- [x] Reusable treatment detail template for verified treatment names only.
- [x] About page without invented founder/team details.
- [x] Contact page.
- [x] Privacy page.
- [x] Terms/qualification page.

## Phase 4 — Integrations

- [x] Confirm WhatsApp number and URL.
- [ ] Confirm contact-form destination.
- [x] Add form validation and spam protection with safe placeholder handling until destination is confirmed.
- [x] Prepare GA4 integration.
- [x] Prepare Meta Pixel integration.
- [x] Add conversion event hooks.
- [x] Confirm map implementation or use safe address search fallback.

## Phase 6 — Design refinements (owner feedback)

- [x] New hero phrase "Belleza que se siente, resultados que se notan." with softer, warmer rose palette.
- [x] Add owner-approved stats (7800+, 100%, 15+) and credentials (Dermocosmiatra UBA, etc.).
- [x] Fix repeated/broken images: portrait in hero, 3 unique treatment photos, removed duplicate and broken asset files.
- [x] Reduce vertical spacing between sections and remove redundant owner section.
- [x] De-box small-content sections (categories, credibility, location) into lighter section titles.
- [x] Replace internal redesign-note copy across home and supporting pages with customer-facing copy.
- [ ] Owner to supply additional professional photography (only 3 real treatment photos available; featured grid limited to 3).

## Phase 5 — QA and launch

- [ ] Validate content with owner against `docs/CONTENT_GAPS.md`.
- [ ] Validate professional and legal claims before enabling omitted sections.
- [x] Test 375/390/768/1024/1440 px.
- [x] Test keyboard and screen-reader basics.
- [x] Run lint, typecheck and build.
- [ ] Run Lighthouse and improve critical issues.
- [ ] Create Vercel preview.
- [ ] Final visual review.
- [ ] Production deployment and domain configuration.
