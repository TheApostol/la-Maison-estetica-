import Link from "next/link";
import { navigationItems } from "@/content/navigation";
import { siteConfig } from "@/content/site";
import { TrackedLink } from "@/components/ui/tracked-link";
import { BrandMark } from "@/components/ui/brand-mark";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/70 bg-[#f3ede6]">
      <div className="section-shell grid gap-10 py-12 lg:grid-cols-[1.3fr_0.8fr_1fr]">
        <div className="max-w-md">
          <BrandMark compact />
          <p className="mt-3 text-sm leading-6 text-muted-foreground">
            Tratamientos estéticos faciales y corporales en Palermo Soho, con
            atención personalizada y reserva directa por WhatsApp.
          </p>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">
            Navegación
          </h2>
          <ul className="mt-4 space-y-2">
            {navigationItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/privacidad"
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                Privacidad
              </Link>
            </li>
            <li>
              <Link
                href="/terminos"
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                Términos
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">
            Dónde estamos
          </h2>
          <p className="mt-4 text-sm text-muted-foreground">
            {siteConfig.address.street}
            <br />
            {siteConfig.address.neighborhood}, {siteConfig.address.city}
          </p>
          <p className="mt-4 text-sm text-muted-foreground">
            {siteConfig.hours[0]}
            <br />
            {siteConfig.hours[1]}
          </p>
          <div className="mt-5 flex flex-wrap gap-4 text-sm">
            <TrackedLink
              href={siteConfig.whatsappUrl}
              eventName="whatsapp_click"
              eventPayload={{ placement: "footer" }}
              className="font-semibold text-foreground hover:text-brand"
            >
              WhatsApp
            </TrackedLink>
            <TrackedLink
              href={siteConfig.instagramUrl}
              eventName="instagram_click"
              eventPayload={{ placement: "footer" }}
              className="font-semibold text-foreground hover:text-brand"
            >
              Instagram
            </TrackedLink>
          </div>
        </div>
      </div>
      <div className="section-shell border-t border-border/60 py-5 text-sm text-muted-foreground">
        © 2026 La Maison · Estética & Belleza. Todos los derechos reservados.
      </div>
    </footer>
  );
}
