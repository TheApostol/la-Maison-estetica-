import Image from "next/image";
import { heroActions, siteConfig } from "@/content/site";
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
            Tratamientos estéticos en Palermo Soho, con una presentación más
            elegante, más clara y mucho más enfocada en convertir la visita en una
            consulta real.
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

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {heroActions.map((item) => (
              <TrackedLink
                key={item.title}
                href={item.href}
                eventName={item.eventName}
                eventPayload={item.eventPayload}
                className="rounded-[1.4rem] border border-brand/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.84),rgba(246,213,231,0.24))] px-4 py-4 text-left shadow-[var(--shadow-soft)] transition duration-300 hover:-translate-y-1 hover:border-brand/40 hover:bg-[linear-gradient(180deg,rgba(255,255,255,0.95),rgba(246,213,231,0.4))]"
              >
                <p className="text-sm font-semibold text-brand">{item.title}</p>
                <p className="mt-2 text-xs leading-5 text-muted-foreground">
                  {item.description}
                </p>
              </TrackedLink>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-x-[10%] top-[10%] h-40 rounded-full bg-[radial-gradient(circle,rgba(193,23,122,0.36),transparent_68%)] blur-3xl sm:h-52" />
          <div className="absolute -right-8 top-8 h-24 w-24 rounded-full border border-brand/20 bg-brand-soft/50 blur-[1px]" />
          <div className="grid gap-4">
            <div className="card-surface overflow-hidden p-3">
              <div className="relative aspect-[5/4] overflow-hidden rounded-[1.4rem]">
                <Image
                  src="/images/treatments/liporganic.webp"
                  alt="Tratamiento corporal destacado en La Maison"
                  fill
                  priority
                  sizes="(min-width: 1024px) 42vw, 100vw"
                  className="object-cover"
                />
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="card-surface overflow-hidden p-3">
                <div className="relative aspect-[1/1] overflow-hidden rounded-[1.2rem]">
                  <Image
                    src="/images/treatments/ultracavitacion.webp"
                    alt="Tratamiento de ultracavitación en La Maison"
                    fill
                    sizes="(min-width: 1024px) 20vw, 50vw"
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="rounded-[2rem] border border-brand/20 bg-[linear-gradient(145deg,#c1177a,#d84c9f)] px-6 py-6 text-white shadow-[0_28px_50px_-28px_rgba(193,23,122,0.95)]">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/80">
                  Palermo Soho
                </p>
                <p className="mt-4 font-display text-4xl leading-none">
                  Una propuesta más deseable, directa y fácil de reservar.
                </p>
                <p className="mt-4 text-sm leading-6 text-white/80">
                  Dirección visible, horarios claros y un canal principal que no
                  te hace perder tiempo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
