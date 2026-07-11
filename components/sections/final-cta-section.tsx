import { siteConfig } from "@/content/site";
import { TrackedLink } from "@/components/ui/tracked-link";

export function FinalCtaSection() {
  return (
    <section className="section-gap pt-0">
      <div className="section-shell">
        <div className="card-surface overflow-hidden bg-[linear-gradient(135deg,rgba(231,218,220,0.65),rgba(255,255,255,0.92))] px-6 py-10 sm:px-10 sm:py-14">
          <div className="mx-auto max-w-3xl text-center">
            <span className="eyebrow">Último paso</span>
            <h2 className="section-title mt-5 text-balance">
              Tu próximo turno puede empezar con un mensaje simple.
            </h2>
            <p className="prose-copy mt-4">
              Mantenemos la reserva por WhatsApp como acción principal porque es el
              canal público verificado y el más directo para esta etapa.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <TrackedLink
                href={siteConfig.whatsappUrl}
                eventName="primary_booking_cta"
                eventPayload={{ placement: "final_cta" }}
                className="inline-flex justify-center rounded-full bg-brand px-6 py-3.5 font-semibold text-white hover:bg-brand-hover"
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
