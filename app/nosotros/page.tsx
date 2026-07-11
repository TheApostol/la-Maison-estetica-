import type { Metadata } from "next";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { storyPoints } from "@/content/site";

export const metadata: Metadata = {
  title: "Nosotros",
  description:
    "Filosofía de marca, tono y criterios de contenido de La Maison · Estética & Belleza.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main className="section-shell section-gap">
        <div className="max-w-3xl">
          <span className="eyebrow">Nosotros</span>
          <h1 className="display-title mt-6 text-balance">
            Una presencia más sobria para una marca que ya tenía señales públicas
            valiosas.
          </h1>
          <p className="prose-copy mt-6">
            El sitio auditado habla de una experiencia cálida, atención
            personalizada, Palermo Soho como ancla geográfica y una mezcla de
            tratamientos faciales y corporales. Esta página conserva ese marco sin
            inventar equipo, credenciales adicionales ni historia empresarial no
            confirmada.
          </p>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {storyPoints.map((point) => (
            <article key={point.title} className="card-surface p-6 sm:p-8">
              <h2 className="font-display text-4xl leading-none">{point.title}</h2>
              <p className="mt-4 text-base leading-7 text-muted-foreground">
                {point.description}
              </p>
            </article>
          ))}
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
