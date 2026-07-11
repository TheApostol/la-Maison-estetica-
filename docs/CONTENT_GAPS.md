# CONTENT_GAPS — La Maison Estética

Last updated: 2026-07-11

This file records facts that are missing, contradictory, demo-only or too sensitive to ship as production content without owner confirmation.

## Contradictory public claims

- Trust-strip metrics are inconsistent across the live page and should not be reused:
  - years shown as both `13+` and `15+`;
  - Instagram followers shown as both `6597+` and `7800+`;
  - WhatsApp share shown as both `85%` and `100%`.
- Action: omit all numeric trust counters from production until owner provides approved figures.

## Professional / medical credibility gaps

- `Dermocosmiatra UBA` appears publicly, but no full professional name, credential proof or approved biography is provided.
- `medicina estética` appears in supporting copy, but no verified practitioner identity or legal framing is provided on the site.
- Treatment copy mentions:
  - `HIFU 12D MAX`
  - `Endopeel`
  - `peptonas`
  - `armonización facial`
  - `aparatología de última generación`
- Action: keep treatment naming conservative, avoid stronger medical framing, and omit provider/team sections unless the owner confirms identity, title and allowed claims.

## Testimonials and social proof

- The public site explicitly says: `Testimonios de muestra para esta demo.`
- Named testimonials therefore cannot be treated as genuine production testimonials.
- Action: remove testimonials entirely from the redesign unless the owner supplies approved real testimonials and consent.

## Results / before-after content

- The public site includes before/after visuals and states: `Imagen ilustrativa · los resultados varían según cada persona y tratamiento.`
- No consent evidence, treatment context, or approval status for those images is present in the repo.
- Action: omit results gallery and before/after imagery from production unless consent and usage approval are confirmed.

## Pricing and promos

- Only one explicit price was visible:
  - `Liporganic` promo from `$60.000` to `$35.000`
- The same section also says: `Los precios pueden variar. Consultá combos y promociones del mes por WhatsApp.`
- No validity dates or promo rules are provided.
- Action: avoid hardcoding promo pricing in evergreen production content unless the owner confirms that the promotion is still current and wants it maintained.

## Payment methods

- The public site claims `Tarjeta de crédito`, `Transferencia` and `Efectivo`.
- No operational details, providers or restrictions are provided.
- Action: either omit payment-method marketing or show only after owner confirms accepted methods.

## Contact and booking gaps

- WhatsApp URL is public and usable: `https://wa.me/5491160340037`
- No public email was found.
- No verified contact-form destination exists in the repo.
- No `tel:` link was found.
- No public map link or embeddable maps URL was found in extracted links.
- Action:
  - keep WhatsApp as the primary CTA;
  - build the contact form with placeholder server-side handling only if clearly marked for configuration;
  - use address text plus an external map search link constructed from the address unless the owner supplies an approved Maps URL.

## Legal and compliance gaps

- No privacy policy copy exists in the reference site or repo.
- No terms copy exists in the reference site or repo.
- No consent language for patient images/testimonials exists in the reference site or repo.
- No data-processing notice for forms is present.
- Action: create baseline website privacy and terms pages limited to generic site/data-handling language, not medical or legal claims beyond what can be stated safely.

## Brand asset gaps

- Public logo files exist, but no official source package, SVG master or brand guidelines were provided in the repo.
- Image ownership and preferred usage set were not documented.
- Action: use only clearly public logo/image assets from the current site, preserve them faithfully, and keep the asset structure ready for replacement with owner-approved originals.

## Content completeness gaps

- No approved founder/team names.
- No approved staff portraits beyond the existing public image.
- No treatment duration, preparation instructions, contraindications, recovery guidance or treatment detail pages.
- No approved service taxonomy beyond the homepage grouping.
- No approved neighborhood/service-area wording beyond Palermo Soho / CABA references.
- No approved booking policy, cancellation policy or rescheduling policy.

## Production content decision for this build

Use in production-safe content:

- business name;
- Palermo Soho / CABA location references;
- address;
- hours;
- WhatsApp link;
- Instagram link;
- service categories and treatment names that are publicly visible;
- general, non-guaranteed copy about personalized attention and WhatsApp booking.

Do not use in production until confirmed:

- numerical trust counters;
- demo testimonials;
- before/after results;
- unverified professional bio details;
- promo pricing;
- gift cards;
- payment-method marketing;
- any stronger medical efficacy claim.
