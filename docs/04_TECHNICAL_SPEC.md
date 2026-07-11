# 04 — Technical Specification

## Stack

- Next.js App Router
- TypeScript strict mode
- Tailwind CSS
- ESLint
- Prettier
- `next/image`
- `next/font`
- Optional lightweight form provider or server action after destination is confirmed

## Project structure

```text
app/
  layout.tsx
  page.tsx
  tratamientos/
  nosotros/
  contacto/
  privacidad/
  terminos/
components/
  layout/
  sections/
  ui/
content/
lib/
public/
  brand/
  images/
styles/
docs/
```

## Rendering approach

- Prefer Server Components.
- Use Client Components only for mobile navigation, accordions, sliders or forms that require client state.
- Avoid introducing a CMS in phase 1.
- Keep content in typed data modules so migration to a CMS remains simple.

## SEO

Implement:

- title and description templates;
- canonical URL configuration;
- Open Graph and Twitter metadata;
- `robots.ts` and `sitemap.ts`;
- LocalBusiness/BeautySalon structured data only with verified details;
- treatment detail metadata when pages exist;
- descriptive image alt text;
- one H1 per page;
- semantic internal links.

Do not add fake ratings, aggregate review markup or unsupported medical schema.

## Analytics

Prepare integration points, but do not hardcode IDs:

- Google Analytics 4;
- Meta Pixel;
- conversion events for WhatsApp, booking, phone, map and form submit.

Expected environment variables:

```text
NEXT_PUBLIC_SITE_URL=
NEXT_PUBLIC_WHATSAPP_URL=
NEXT_PUBLIC_GA_ID=
NEXT_PUBLIC_META_PIXEL_ID=
```

## Forms

- Minimum fields only: name, preferred contact, reason/message, consent.
- Native labels; no placeholder-only fields.
- Server-side validation.
- Honeypot or equivalent anti-spam.
- Clear success and failure states.
- Privacy consent linked to `/privacidad`.
- Destination/provider must be confirmed before production.

## Performance

- Optimize and resize all local images.
- Use AVIF/WebP through Next Image.
- Define image dimensions to prevent layout shift.
- Avoid loading all treatment images above the fold.
- Minimize third-party scripts.
- Lazy-load map embeds or use a static map/link before interaction.
- Avoid animation libraries unless CSS cannot satisfy the requirement.

## Security

- No credentials in source control.
- Validate and sanitize form input.
- Add security headers in Next configuration where appropriate.
- Use `rel="noopener noreferrer"` for external blank-target links.
- Keep dependencies current and minimal.

## Quality gates

Required commands should exist and pass:

```bash
npm run lint
npm run typecheck
npm run build
```

Recommended tests:

- component tests for navigation, treatment data and forms;
- Playwright smoke test for primary CTA, mobile navigation and contact flow.

## Deployment

- Vercel target.
- Preview deployments per pull request.
- Production domain and redirects configured only after owner confirmation.
- Environment variables set through Vercel, never committed.

## Migration rule

The current public site is a content and visual reference only. Do not copy compiled JS chunks, framework output, analytics IDs, hidden configuration or third-party credentials. Rebuild the experience with original source code.