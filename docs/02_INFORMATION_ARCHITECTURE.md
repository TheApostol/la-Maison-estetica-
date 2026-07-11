# 02 — Information Architecture

## Phase 1 sitemap

### `/`
Primary conversion landing page.

### `/tratamientos`
All approved treatments grouped by category.

### `/tratamientos/[slug]`
Reusable detail-page template, enabled only when enough verified content exists.

### `/nosotros`
Brand philosophy, space and team/professional information.

### `/contacto`
Location, hours, WhatsApp, form and map.

### `/privacidad`
Privacy notice and form-data treatment.

### `/terminos`
Website terms and marketing qualification notices where applicable.

## Homepage section specification

### 1. Header

- Logo with sufficient clear space.
- Navigation: Inicio, Tratamientos, Nosotros, Contacto.
- Primary CTA.
- Mobile menu with focus management and escape-to-close.

### 2. Hero

- One headline, maximum two lines on desktop.
- One concise supporting paragraph.
- Primary and secondary CTA.
- One strong approved image or restrained split composition.
- No carousel.

### 3. Trust/value strip

Use three or four verified propositions, not fabricated metrics. Examples of structure:

- Atención personalizada.
- En Palermo Soho.
- Seguimiento cercano.
- Protocolos adaptados a cada persona.

Final wording requires source validation.

### 4. Featured treatments

Three to six cards maximum. Each card includes:

- category or treatment name;
- one-sentence benefit-oriented description without medical promises;
- image;
- link or enquiry CTA.

### 5. Approach

Explain evaluation, personalization, comfort and follow-up in a concise editorial section.

### 6. Treatment categories

Recommended provisional categories:

- Facial.
- Corporal.
- Tecnología estética.
- Bienestar / belleza, only if supported by current services.

Do not force treatments into these groups until the source inventory is complete.

### 7. Process

Four steps:

1. Consulta.
2. Evaluación.
3. Propuesta personalizada.
4. Tratamiento y seguimiento.

Language must match the actual operating model.

### 8. Results / gallery

Conditional section. Render only with approved media and appropriate consent. Never use misleading stock before/after images.

### 9. Team

Conditional section. Render only with verified identity, role, credentials and approved portrait.

### 10. Testimonials

Conditional section. Render only with real, approved testimonials. Avoid fake avatars or unverified review counts.

### 11. FAQ

Questions should reduce conversion friction: booking, evaluation, preparation, duration, cancellation and location. Treatment-specific medical answers require professional approval.

### 12. Location and contact

- address;
- neighborhood/city;
- map link/embed;
- opening hours;
- WhatsApp;
- Instagram;
- accessible contact form.

### 13. Final CTA

Single decisive action with concise reassurance.

### 14. Footer

Logo, navigation, contact, social links, privacy, terms, copyright and qualification notice.

## Content model

Keep editable content in typed objects under `/content` or `/data`:

- `site.ts`
- `navigation.ts`
- `treatments.ts`
- `faqs.ts`
- `team.ts`
- `testimonials.ts`

Conditional data arrays should render nothing when empty. This prevents placeholder or invented content from reaching production.