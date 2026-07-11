import Image from "next/image";
import Link from "next/link";
import { featuredTreatments } from "@/content/treatments";
import { TrackedLink } from "@/components/ui/tracked-link";

export function FeaturedTreatments() {
  return (
    <section id="tratamientos" className="section-gap">
      <div className="section-shell">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <span className="eyebrow">Tratamientos destacados</span>
            <h2 className="section-title mt-5 text-balance">
              Una selección clara para empezar a explorar.
            </h2>
            <p className="prose-copy mt-4">
              Organizamos la oferta visible del sitio actual en una grilla más
              legible, con nombres y descripciones verificables y sin promesas
              exageradas.
            </p>
          </div>

          <Link
            href="/tratamientos"
            className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-brand hover:text-brand-hover"
          >
            Ver todos los tratamientos
            <span aria-hidden="true">→</span>
          </Link>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {featuredTreatments.map((treatment) => (
            <article
              key={treatment.slug}
              className="card-surface overflow-hidden lg:grid lg:grid-cols-[0.95fr_1.05fr]"
            >
              <div className="relative min-h-72 bg-surface">
                <Image
                  src={treatment.image.src}
                  alt={treatment.image.alt}
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col p-6 sm:p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
                  {treatment.category}
                </p>
                <h3 className="mt-3 font-display text-4xl leading-none tracking-[-0.03em]">
                  {treatment.name}
                </h3>
                {treatment.label ? (
                  <p className="mt-4 text-sm font-medium text-taupe">{treatment.label}</p>
                ) : null}
                <p className="mt-4 text-base leading-7 text-muted-foreground">
                  {treatment.summary}
                </p>
                <ul className="mt-6 space-y-2 text-sm text-foreground">
                  {treatment.highlights.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brass" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    href={`/tratamientos/${treatment.slug}`}
                    className="inline-flex rounded-full border border-border bg-white px-5 py-3 font-semibold text-foreground hover:border-brand hover:text-brand"
                  >
                    Ver detalle
                  </Link>
                  <TrackedLink
                    href={treatment.ctaHref}
                    eventName="whatsapp_click"
                    eventPayload={{ placement: "featured_treatment", treatment: treatment.slug }}
                    className="inline-flex rounded-full bg-brand px-5 py-3 font-semibold text-white hover:bg-brand-hover"
                  >
                    Hablar por WhatsApp
                  </TrackedLink>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
