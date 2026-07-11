import type { Metadata } from "next";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";

export const metadata: Metadata = {
  title: "Términos",
  description:
    "Términos básicos de uso del sitio de La Maison · Estética & Belleza.",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main className="section-shell section-gap max-w-4xl">
        <span className="eyebrow">Términos</span>
        <h1 className="display-title mt-6">Uso del sitio y alcance del contenido.</h1>
        <div className="mt-8 space-y-6 text-base leading-7 text-muted-foreground">
          <p>
            El contenido de este sitio resume información pública visible durante la
            auditoría del proyecto. No reemplaza una evaluación profesional
            individual ni constituye una promesa de resultados.
          </p>
          <p>
            La disponibilidad de promociones, medios de pago, horarios y servicios
            puede variar. La confirmación final debe hacerse por los canales
            oficiales de la marca.
          </p>
          <p>
            Los textos, imágenes y estructura de esta implementación fueron
            reconstruidos desde cero para una nueva experiencia editorial y no
            reproducen el código compilado del sitio de referencia.
          </p>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
