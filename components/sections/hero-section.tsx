import Image from "next/image";
import { hero, heroStats, siteConfig } from "@/content/site";
import { TrackedLink } from "@/components/ui/tracked-link";

export function HeroSection() {
  return (
    <section className="editorial-grid overflow-hidden">
      <div className="section-shell section-gap grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div className="relative z-10">
          <span className="eyebrow">{hero.eyebrow}</span>
          <h1 className="display-title mt-6 max-w-3xl text-balance">
            {hero.titleLead}{" "}
            <em className="italic text-brand">{hero.titleEmphasis}</em>
          </h1>
          <p className="prose-copy mt-6 max-w-2xl">{hero.description}</p>

          <ul className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-2 text-xs font-semibold uppercase tracking-[0.18em] text-taupe">
            {hero.treatments.map((item, index) => (
              <li key={item} className="flex items-center gap-3">
                {index > 0 ? (
                  <span aria-hidden="true" className="text-brand/50">
                    ·
                  </span>
                ) : null}
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <TrackedLink
              href={siteConfig.whatsappUrl}
              eventName="primary_booking_cta"
              eventPayload={{ placement: "hero" }}
              className="inline-flex justify-center rounded-full bg-brand px-6 py-3.5 font-semibold text-white hover:bg-brand-hover"
            >
              Reservar turno
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

          <dl className="mt-10 grid max-w-lg grid-cols-3 gap-4">
            {heroStats.map((stat) => (
              <div key={stat.label} className="border-l border-brand/20 pl-4">
                <dt className="font-display text-3xl leading-none text-brand sm:text-4xl">
                  {stat.value}
                </dt>
                <dd className="mt-2 text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                  {stat.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative">
          <div className="absolute -right-6 top-6 h-24 w-24 rounded-full border border-brand/15 bg-brand-soft/40 blur-[1px]" />
          <div className="card-surface relative overflow-hidden p-3">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.4rem]">
              <Image
                src="/images/hero/facial.webp"
                alt="Profesional de La Maison realizando un tratamiento facial"
                fill
                priority
                sizes="(min-width: 1024px) 42vw, 100vw"
                className="object-cover object-top"
              />
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,transparent_45%,rgba(42,35,32,0.72))]" />
              <div className="absolute inset-x-4 bottom-4 rounded-[1.2rem] border border-white/20 bg-white/10 p-5 backdrop-blur-sm">
                <p className="font-display text-2xl leading-tight text-white">
                  {hero.imageCaption.title}
                </p>
                <p className="mt-2 text-sm leading-6 text-white/85">
                  {hero.imageCaption.description}
                </p>
                <TrackedLink
                  href={siteConfig.whatsappUrl}
                  eventName="whatsapp_click"
                  eventPayload={{ placement: "hero_image_caption" }}
                  className="mt-4 inline-flex text-xs font-semibold uppercase tracking-[0.2em] text-white hover:text-brand-soft"
                >
                  Conocer más →
                </TrackedLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
