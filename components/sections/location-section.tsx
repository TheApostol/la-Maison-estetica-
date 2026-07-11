import { siteConfig } from "@/content/site";
import { TrackedLink } from "@/components/ui/tracked-link";

export function LocationSection() {
  return (
    <section id="contacto" className="section-gap">
      <div className="section-shell grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="card-surface overflow-hidden">
          <div className="relative aspect-[4/3] overflow-hidden bg-[radial-gradient(circle_at_top_left,rgba(169,138,92,0.22),transparent_32%),linear-gradient(145deg,rgba(255,255,255,0.94),rgba(231,218,220,0.7))]">
            <div className="absolute inset-6 rounded-[1.5rem] border border-border/70" />
            <div className="absolute bottom-6 left-6 right-6 rounded-[1.5rem] border border-white/80 bg-white/70 p-5 shadow-[var(--shadow-soft)]">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
                Palermo Soho
              </p>
              <p className="mt-3 font-display text-3xl leading-none text-foreground">
                Un cierre claro para decidir cuándo y cómo escribir.
              </p>
            </div>
          </div>
          <div className="p-6 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
              Te esperamos en Palermo Soho
            </p>
            <h2 className="mt-3 font-display text-4xl leading-none">
              {siteConfig.name}
            </h2>
            <p className="mt-4 text-base leading-7 text-muted-foreground">
              {siteConfig.address.street}
              <br />
              {siteConfig.address.neighborhood}, {siteConfig.address.city} (
              {siteConfig.address.postalCode})
            </p>
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <span className="eyebrow">Ubicación y contacto</span>
            <h2 className="section-title mt-5 text-balance">
              Todo lo necesario para coordinar sin dar vueltas.
            </h2>
            <p className="prose-copy mt-4">
              Dejamos la información esencial al alcance: dirección, horarios,
              Instagram y el acceso directo al canal principal de reserva.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="card-surface p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
                Horarios
              </p>
              <p className="mt-3 text-base leading-7 text-muted-foreground">
                {siteConfig.hours[0]}
                <br />
                {siteConfig.hours[1]}
              </p>
            </div>
            <div className="card-surface p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
                Canales
              </p>
              <div className="mt-3 flex flex-col gap-3">
                <TrackedLink
                  href={siteConfig.whatsappUrl}
                  eventName="whatsapp_click"
                  eventPayload={{ placement: "location" }}
                  className="font-semibold text-foreground hover:text-brand"
                >
                  WhatsApp
                </TrackedLink>
                <TrackedLink
                  href={siteConfig.instagramUrl}
                  eventName="instagram_click"
                  eventPayload={{ placement: "location" }}
                  className="font-semibold text-foreground hover:text-brand"
                >
                  Instagram
                </TrackedLink>
                <TrackedLink
                  href={siteConfig.mapUrl}
                  eventName="map_click"
                  eventPayload={{ placement: "location" }}
                  className="font-semibold text-foreground hover:text-brand"
                >
                  Abrir mapa
                </TrackedLink>
              </div>
            </div>
          </div>

          <div className="card-surface p-6 sm:p-8">
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-brand">
              Formulario
            </p>
            <p className="mt-4 text-base leading-7 text-muted-foreground">
              El destino final del formulario todavía no fue confirmado por la
              marca. Para no crear una experiencia engañosa, esta versión deja el
              canal de contacto activo en WhatsApp y prepara la estructura para
              habilitar el envío cuando se defina el destino.
            </p>
            <TrackedLink
              href={siteConfig.whatsappUrl}
              eventName="whatsapp_click"
              eventPayload={{ placement: "contact_placeholder" }}
              className="mt-6 inline-flex rounded-full bg-wa px-5 py-3 font-semibold text-white hover:bg-wa-hover"
            >
              Ir a WhatsApp
            </TrackedLink>
          </div>
        </div>
      </div>
    </section>
  );
}
