import { siteConfig } from "@/content/site";
import { TrackedLink } from "@/components/ui/tracked-link";

export function FinalCtaSection() {
  return (
    <section className="section-gap pt-0">
      <div className="section-shell">
        <div className="card-surface overflow-hidden border-brand/10 bg-[linear-gradient(135deg,rgba(246,213,231,0.7),rgba(255,255,255,0.94),rgba(246,213,231,0.45))] px-6 py-10 sm:px-10 sm:py-14">
          <div className="mx-auto max-w-3xl text-center">
            <span className="eyebrow">Último paso</span>
            <h2 className="section-title mt-5 text-balance">
              Tu mejor versión empieza con un mensaje.
            </h2>
            <p className="prose-copy mt-4">
              Reservá tu valoración personalizada por WhatsApp y coordinamos el
              turno que mejor se adapte a vos.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <TrackedLink
                href={siteConfig.whatsappUrl}
                eventName="primary_booking_cta"
                eventPayload={{ placement: "final_cta" }}
                className="inline-flex justify-center rounded-full bg-brand px-6 py-3.5 font-semibold text-white shadow-[0_18px_32px_-18px_rgba(193,23,122,0.8)] hover:bg-brand-hover"
              >
                Reservar una evaluación
              </TrackedLink>
              <TrackedLink
                href={siteConfig.instagramUrl}
                eventName="instagram_click"
                eventPayload={{ placement: "final_cta" }}
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
