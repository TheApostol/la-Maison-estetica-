import { siteConfig } from "@/content/site";
import { TrackedLink } from "@/components/ui/tracked-link";

export function LocationSection() {
  return (
    <section id="contacto" className="section-gap">
      <div className="section-shell">
        <div className="max-w-2xl">
          <span className="eyebrow">Ubicación y contacto</span>
          <h2 className="section-title mt-5 text-balance">
            Te esperamos en Palermo Soho.
          </h2>
          <p className="prose-copy mt-4">
            {siteConfig.address.street}, {siteConfig.address.neighborhood},{" "}
            {siteConfig.address.city} ({siteConfig.address.postalCode}). Coordiná
            tu turno por WhatsApp en minutos.
          </p>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <TrackedLink
            href={siteConfig.whatsappUrl}
            eventName="whatsapp_click"
            eventPayload={{ placement: "location_primary" }}
            className="card-surface border-brand/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.9),rgba(243,220,230,0.3))] p-6 card-interactive"
          >
            <p className="section-eyebrow">WhatsApp</p>
            <p className="mt-3 text-xl font-semibold text-foreground">
              Reservá una evaluación
            </p>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              El canal más directo para consultar disponibilidad.
            </p>
          </TrackedLink>

          <TrackedLink
            href={siteConfig.mapUrl}
            eventName="map_click"
            eventPayload={{ placement: "location_map" }}
            className="card-surface border-brand/10 bg-white/80 p-6 card-interactive"
          >
            <p className="section-eyebrow">Cómo llegar</p>
            <p className="mt-3 text-xl font-semibold text-foreground">
              Abrir ubicación
            </p>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              {siteConfig.address.street}, {siteConfig.address.neighborhood}.
            </p>
          </TrackedLink>

          <TrackedLink
            href={siteConfig.instagramUrl}
            eventName="instagram_click"
            eventPayload={{ placement: "location_instagram" }}
            className="card-surface border-brand/10 bg-white/80 p-6 card-interactive"
          >
            <p className="section-eyebrow">Instagram</p>
            <p className="mt-3 text-xl font-semibold text-foreground">
              @lamaisonbelleza
            </p>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              Mirá tratamientos, novedades y promociones.
            </p>
          </TrackedLink>

          <div className="card-surface p-6">
            <p className="section-eyebrow">Horarios</p>
            <p className="mt-3 text-sm leading-7 text-muted-foreground">
              {siteConfig.hours[0]}
              <br />
              {siteConfig.hours[1]}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
