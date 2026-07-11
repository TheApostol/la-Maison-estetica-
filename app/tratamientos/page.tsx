import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { TrackedLink } from "@/components/ui/tracked-link";
import { siteConfig } from "@/content/site";
import {
  featuredTreatments,
  treatmentCategories,
  treatmentDetailCopy,
} from "@/content/treatments";

export const metadata: Metadata = {
  title: "Tratamientos",
  description:
    "Índice de tratamientos y categorías visibles de La Maison · Estética & Belleza.",
};

export default function TreatmentsPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main className="section-shell section-gap">
        <div className="max-w-3xl">
          <span className="eyebrow">Tratamientos</span>
          <h1 className="display-title mt-6 text-balance">
            Un índice más claro para entender la oferta pública actual.
          </h1>
          <p className="prose-copy mt-6">
            Solo incluimos nombres y categorías visibles en el sitio auditado. Los
            detalles clínicos ampliados quedan limitados a los tratamientos con
            información suficiente para no inventar nada.
          </p>
        </div>

        <section className="mt-14">
          <div className="grid gap-5 lg:grid-cols-2">
            {featuredTreatments.map((treatment) => (
              <article key={treatment.slug} className="card-surface p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
                  {treatment.category}
                </p>
                <h2 className="mt-3 font-display text-4xl leading-none">
                  {treatment.name}
                </h2>
                <p className="mt-4 text-base leading-7 text-muted-foreground">
                  {treatment.summary}
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Link
                    href={`/tratamientos/${treatment.slug}`}
                    className="inline-flex rounded-full border border-border bg-white px-5 py-3 font-semibold text-foreground hover:border-brand hover:text-brand"
                  >
                    Ver detalle
                  </Link>
                  <TrackedLink
                    href={treatment.ctaHref}
                    eventName="whatsapp_click"
                    eventPayload={{ placement: "treatments_index", treatment: treatment.slug }}
                    className="inline-flex rounded-full bg-brand px-5 py-3 font-semibold text-white hover:bg-brand-hover"
                  >
                    Consultar por WhatsApp
                  </TrackedLink>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-16 space-y-5">
          {treatmentCategories.map((category) => (
            <article key={category.name} className="card-surface p-6 sm:p-8">
              <h2 className="font-display text-4xl leading-none">{category.name}</h2>
              <p className="mt-4 max-w-3xl text-base leading-7 text-muted-foreground">
                {category.summary}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {category.items.map((item) => {
                  const detail = Object.values(treatmentDetailCopy).find(
                    (entry) => entry.name === item,
                  );

                  return detail ? (
                    <Link
                      key={item}
                      href={`/tratamientos/${detail.slug}`}
                      className="rounded-full border border-border bg-background px-4 py-2 text-sm text-foreground hover:border-brand hover:text-brand"
                    >
                      {item}
                    </Link>
                  ) : (
                    <span
                      key={item}
                      className="rounded-full border border-border bg-background px-4 py-2 text-sm text-foreground"
                    >
                      {item}
                    </span>
                  );
                })}
              </div>
            </article>
          ))}
        </section>

        <section className="mt-16 card-surface p-6 sm:p-8">
          <h2 className="font-display text-4xl leading-none">Qué quedó fuera</h2>
          <p className="mt-4 max-w-3xl text-base leading-7 text-muted-foreground">
            Esta versión no publica testimonios demo, contadores inconsistentes,
            resultados ilustrativos ni claims profesionales que todavía requieran
            validación adicional.
          </p>
          <TrackedLink
            href={siteConfig.whatsappUrl}
            eventName="whatsapp_click"
            eventPayload={{ placement: "treatments_page" }}
            className="mt-6 inline-flex rounded-full bg-brand px-5 py-3 font-semibold text-white hover:bg-brand-hover"
          >
            Pedir una evaluación
          </TrackedLink>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
