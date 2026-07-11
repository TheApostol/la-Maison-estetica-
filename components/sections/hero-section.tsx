import Image from "next/image";
import { siteConfig } from "@/content/site";
import { TrackedLink } from "@/components/ui/tracked-link";

export function HeroSection() {
  return (
    <section className="editorial-grid overflow-hidden">
      <div className="section-shell section-gap grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
        <div className="relative z-10">
          <span className="eyebrow">Tratamientos estéticos en Palermo Soho</span>
          <h1 className="display-title mt-6 max-w-3xl text-balance">
            Una experiencia más clara, cálida y profesional para reservar tu
            próximo turno.
          </h1>
          <p className="prose-copy mt-6 max-w-2xl">
            Estética facial y corporal en Palermo Soho, CABA, con atención
            personalizada, horarios visibles y contacto directo por WhatsApp.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <TrackedLink
              href={siteConfig.whatsappUrl}
              eventName="primary_booking_cta"
              eventPayload={{ placement: "hero" }}
              className="inline-flex justify-center rounded-full bg-brand px-6 py-3.5 font-semibold text-white hover:bg-brand-hover"
            >
              Reservar una evaluación
            </TrackedLink>
            <TrackedLink
              href={siteConfig.whatsappUrl}
              eventName="whatsapp_click"
              eventPayload={{ placement: "hero_secondary" }}
              className="inline-flex justify-center rounded-full border border-border bg-white px-6 py-3.5 font-semibold text-foreground hover:border-brand hover:text-brand"
            >
              Hablar por WhatsApp
            </TrackedLink>
          </div>

          <ul className="mt-8 grid gap-3 sm:grid-cols-3">
            {siteConfig.heroHighlights.map((item) => (
              <li
                key={item}
                className="rounded-2xl border border-border/80 bg-white/70 px-4 py-3 text-sm font-medium text-muted-foreground"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative">
          <div className="absolute inset-x-[12%] top-[8%] h-40 rounded-full bg-brand-soft/70 blur-3xl sm:h-52" />
          <div className="relative overflow-hidden rounded-[2rem] border border-border/70 bg-surface p-3 shadow-[var(--shadow-soft)]">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.4rem]">
              <Image
                src="/images/team/cosmetologa.webp"
                alt="La Maison · Estética & Belleza en Palermo Soho"
                fill
                priority
                sizes="(min-width: 1024px) 42vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="grid gap-4 px-3 py-5 sm:grid-cols-2">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
                  Dónde
                </p>
                <p className="mt-2 text-lg font-semibold text-foreground">
                  Palermo Soho, CABA
                </p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
                  Horarios
                </p>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {siteConfig.hours[0]}
                  <br />
                  {siteConfig.hours[1]}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
