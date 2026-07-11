import type { Metadata } from "next";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";

export const metadata: Metadata = {
  title: "Privacidad",
  description:
    "Aviso básico de privacidad para el sitio de La Maison · Estética & Belleza.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main className="section-shell section-gap max-w-4xl">
        <span className="eyebrow">Privacidad</span>
        <h1 className="display-title mt-6">Tratamiento básico de datos del sitio.</h1>
        <div className="mt-8 space-y-6 text-base leading-7 text-muted-foreground">
          <p>
            Esta implementación técnica no incorpora una base de datos propia ni un
            destino de formulario activo. Mientras el canal definitivo no se
            configure, el contacto principal de la marca sigue siendo WhatsApp.
          </p>
          <p>
            Cuando se habilite un formulario, la recomendación es solicitar solo los
            datos mínimos necesarios para responder una consulta: nombre, medio de
            contacto, mensaje y consentimiento expreso.
          </p>
          <p>
            Las herramientas analíticas quedan condicionadas a variables de entorno.
            No se publica ningún identificador real en este repositorio.
          </p>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
