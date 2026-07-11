import { siteConfig } from "@/content/site";
import { TrackedLink } from "@/components/ui/tracked-link";

export function LocationSection() {
  return (
    <section id="contacto" className="section-gap">
      <div className="section-shell grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="card-surface overflow-hidden">
          <div className="relative aspect-[4/3] overflow-hidden bg-[radial-gradient(circle_at_top_left,rgba(193,23,122,0.18),transparent_30%),linear-gradient(145deg,rgba(255,255,255,0.96),rgba(246,213,231,0.72))]">
            <div className="absolute inset-6 rounded-[1.5rem] border border-brand/15" />
            <div className="absolute bottom-6 left-6 right-6 rounded-[1.5rem] border border-white/80 bg-[linear-gradient(145deg,rgba(255,255,255,0.78),rgba(246,213,231,0.82))] p-5 shadow-[var(--shadow-soft)]">
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
              Todo listo para que pasar de mirar a escribir sea natural.
            </h2>
            <p className="prose-copy mt-4">
              En vez de esconder la información útil dentro de cajas sueltas, la
              dejamos concentrada en accesos directos y más tentadores de tocar.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <TrackedLink
              href={siteConfig.whatsappUrl}
              eventName="whatsapp_click"
              eventPayload={{ placement: "location_primary" }}
              className="card-surface border-brand/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.9),rgba(246,213,231,0.26))] p-6 hover:-translate-y-1 hover:border-brand/30"
            >
              <p className="inline-flex rounded-full bg-brand-soft px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-brand">
                Hablar por WhatsApp
              </p>
              <p className="mt-3 text-2xl font-semibold text-foreground">
                Reservá una evaluación
              </p>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                El canal más directo para consultar disponibilidad y coordinar tu turno.
              </p>
            </TrackedLink>
            <TrackedLink
              href={siteConfig.mapUrl}
              eventName="map_click"
              eventPayload={{ placement: "location_map" }}
              className="card-surface border-brand/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.9),rgba(246,213,231,0.2))] p-6 hover:-translate-y-1 hover:border-brand/30"
            >
              <p className="inline-flex rounded-full bg-brand-soft px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-brand">
                Palermo Soho, CABA
              </p>
              <p className="mt-3 text-2xl font-semibold text-foreground">
                Abrir ubicación
              </p>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                {siteConfig.address.street}. Ver mapa, barrio y punto exacto.
              </p>
            </TrackedLink>
            <TrackedLink
              href={siteConfig.instagramUrl}
              eventName="instagram_click"
              eventPayload={{ placement: "location_instagram" }}
              className="card-surface border-brand/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.9),rgba(246,213,231,0.2))] p-6 hover:-translate-y-1 hover:border-brand/30"
            >
              <p className="inline-flex rounded-full bg-brand-soft px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-brand">
                Instagram
              </p>
              <p className="mt-3 text-2xl font-semibold text-foreground">
                Ver el perfil
              </p>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                Un acceso directo al canal social público de la marca.
              </p>
            </TrackedLink>
            <div className="card-surface p-6">
              <p className="inline-flex rounded-full bg-brand-soft px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-brand">
                Horarios
              </p>
              <p className="mt-3 text-base leading-7 text-muted-foreground">
                {siteConfig.hours[0]}
                <br />
                {siteConfig.hours[1]}
              </p>
            </div>
          </div>

          <div className="card-surface border-brand/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.92),rgba(246,213,231,0.28))] p-6 sm:p-8">
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-brand">
              Próximo paso
            </p>
            <p className="mt-4 text-base leading-7 text-muted-foreground">
              Para esta etapa, el sitio prioriza una acción que ya funciona y no
              genera dudas: contacto directo por WhatsApp. Cuando la marca confirme
              el destino del formulario, se puede sumar sin romper este recorrido.
            </p>
            <TrackedLink
              href={siteConfig.whatsappUrl}
              eventName="whatsapp_click"
              eventPayload={{ placement: "contact_placeholder" }}
              className="mt-6 inline-flex rounded-full bg-brand px-5 py-3 font-semibold text-white shadow-[0_16px_28px_-18px_rgba(193,23,122,0.75)] hover:bg-brand-hover"
            >
              Ir a WhatsApp
            </TrackedLink>
          </div>
        </div>
      </div>
    </section>
  );
}
