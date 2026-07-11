import Image from "next/image";
import { ownerSection, siteConfig } from "@/content/site";
import { TrackedLink } from "@/components/ui/tracked-link";

export function OwnerSection() {
  return (
    <section className="section-gap pt-0">
      <div className="section-shell">
        <div className="card-surface overflow-hidden lg:grid lg:grid-cols-[0.9fr_1.1fr]">
          <div className="relative min-h-80 bg-[radial-gradient(circle_at_top_left,rgba(193,23,122,0.16),transparent_34%),linear-gradient(145deg,rgba(255,255,255,0.96),rgba(246,213,231,0.3))]">
            <Image
              src="/images/team/cosmetologa.webp"
              alt="Imagen de presentación de La Maison"
              fill
              sizes="(min-width: 1024px) 36vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="p-6 sm:p-8 lg:p-10">
            <span className="eyebrow">{ownerSection.eyebrow}</span>
            <h2 className="section-title mt-5 text-balance">{ownerSection.title}</h2>
            <p className="prose-copy mt-5">{ownerSection.description}</p>
            <ul className="mt-6 space-y-3">
              {ownerSection.points.map((point) => (
                <li key={point} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brass" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <TrackedLink
                href={siteConfig.whatsappUrl}
                eventName="whatsapp_click"
                eventPayload={{ placement: "owner_section" }}
                className="inline-flex justify-center rounded-full bg-brand px-6 py-3.5 font-semibold text-white hover:bg-brand-hover"
              >
                Hablar ahora
              </TrackedLink>
              <TrackedLink
                href={siteConfig.instagramUrl}
                eventName="instagram_click"
                eventPayload={{ placement: "owner_section" }}
                className="inline-flex justify-center rounded-full border border-border bg-white px-6 py-3.5 font-semibold text-foreground hover:border-brand hover:text-brand"
              >
                Ver Instagram
              </TrackedLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
