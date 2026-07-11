# La Maison Estética — Rediseño Web Premium

Reconstrucción integral del sitio público de La Maison Estética, con foco en:

- legibilidad y contraste;
- identidad premium, sobria y contemporánea;
- conversión a WhatsApp y reserva;
- experiencia mobile-first;
- SEO local para Palermo Soho y CABA;
- arquitectura mantenible en Next.js.

## Sitio de referencia

- Producción actual: https://landing-la-maison.vercel.app/

El sitio de referencia se utilizará únicamente para relevar contenido, estructura pública y activos disponibles. La nueva implementación debe escribirse desde cero y no copiar código compilado de Vercel.

## Documentación principal

1. [`docs/00_MASTER_BRIEF.md`](docs/00_MASTER_BRIEF.md)
2. [`docs/01_UX_CONTENT_AUDIT.md`](docs/01_UX_CONTENT_AUDIT.md)
3. [`docs/02_INFORMATION_ARCHITECTURE.md`](docs/02_INFORMATION_ARCHITECTURE.md)
4. [`docs/03_DESIGN_SYSTEM.md`](docs/03_DESIGN_SYSTEM.md)
5. [`docs/04_TECHNICAL_SPEC.md`](docs/04_TECHNICAL_SPEC.md)
6. [`docs/05_CODEX_MASTER_PROMPT.md`](docs/05_CODEX_MASTER_PROMPT.md)

## Estado

- [x] Repositorio inicializado
- [x] Dirección estratégica definida
- [x] Inventario completo de textos y activos
- [x] Scaffold Next.js
- [x] Implementación UI
- [x] QA responsive y accesibilidad básica
- [ ] Integraciones finales y deploy

## Implementación actual

- Next.js App Router con TypeScript estricto, Tailwind CSS, ESLint y Prettier.
- Home premium/editorial reconstruida desde cero con foco en Palermo Soho, WhatsApp y claridad de servicios.
- Páginas de apoyo: `tratamientos`, `tratamientos/[slug]`, `nosotros`, `contacto`, `privacidad`, `terminos`.
- SEO base con metadata, `robots.ts` y `sitemap.ts`.
- Hooks de analítica listos para GA4 y Meta Pixel vía variables de entorno.

## Contenido utilizado y omitido

Se usó únicamente contenido público verificable del sitio de referencia: nombre de marca, ubicación, horarios, WhatsApp, Instagram, estructura de servicios y nombres de tratamientos visibles.

Se omitieron deliberadamente:

- métricas inconsistentes;
- testimonios marcados como demo;
- antes/después e imágenes de resultados;
- claims profesionales o médicos no suficientemente validados;
- precios/promociones evergreen no confirmadas;
- un formulario funcional sin destino aprobado.

## Pendientes del owner

- confirmar destino real del formulario;
- validar qué claims profesionales pueden publicarse;
- confirmar si deben volver promociones, medios de pago o una sección de resultados;
- revisar `docs/CONTENT_GAPS.md` antes de deploy productivo.

## Regla central

La nueva marca no debe verse rosa saturada, juvenil o genérica. Debe comunicar medicina estética premium, confianza profesional, naturalidad y atención personalizada.
