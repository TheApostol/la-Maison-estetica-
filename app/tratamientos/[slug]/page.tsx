import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { TrackedLink } from "@/components/ui/tracked-link";
import { treatmentDetailCopy } from "@/content/treatments";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return Object.keys(treatmentDetailCopy).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const treatment = treatmentDetailCopy[slug];

  if (!treatment) {
    return {};
  }

  return {
    title: treatment.name,
    description: treatment.summary,
  };
}

export default async function TreatmentDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const treatment = treatmentDetailCopy[slug];

  if (!treatment) {
    notFound();
  }

  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main className="section-shell section-gap">
        <span className="eyebrow">{treatment.category}</span>
        <h1 className="display-title mt-6 text-balance">{treatment.name}</h1>
        <p className="prose-copy mt-6 max-w-3xl">{treatment.summary}</p>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <section className="card-surface p-6 sm:p-8">
            <h2 className="font-display text-4xl leading-none">Qué incluye</h2>
            <ul className="mt-6 space-y-3 text-base text-muted-foreground">
              {treatment.highlights.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brass" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="card-surface p-6 sm:p-8">
            <h2 className="font-display text-4xl leading-none">Reservá tu turno</h2>
            <p className="mt-4 text-base leading-7 text-muted-foreground">
              La cantidad de sesiones y el plan se definen en una evaluación
              personalizada. Escribinos por WhatsApp y coordinamos todo en
              minutos.
            </p>
            <TrackedLink
              href={treatment.ctaHref}
              eventName="whatsapp_click"
              eventPayload={{ placement: "treatment_detail", treatment: treatment.slug }}
              className="mt-6 inline-flex rounded-full bg-brand px-5 py-3 font-semibold text-white hover:bg-brand-hover"
            >
              Consultar por WhatsApp
            </TrackedLink>
          </section>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
