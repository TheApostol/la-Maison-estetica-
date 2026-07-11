import { storyPoints } from "@/content/site";

export function StorySection() {
  return (
    <section id="nosotros" className="section-gap pt-6">
      <div className="section-shell grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="rounded-[2rem] bg-brand px-6 py-8 text-white sm:px-8 sm:py-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/75">
            La Maison
          </p>
          <h2 className="mt-5 font-display text-5xl leading-none text-balance">
            Un tono más sereno, sin perder cercanía ni calidez.
          </h2>
        </div>

        <div>
          <span className="eyebrow">Enfoque</span>
          <p className="prose-copy mt-5">
            El nuevo lenguaje visual busca ordenar mejor la misma promesa pública:
            atención personalizada, un espacio cuidado en Palermo Soho y un acceso
            directo a la consulta por WhatsApp.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {storyPoints.map((point) => (
              <div key={point.title} className="card-surface p-6">
                <h3 className="text-lg font-semibold text-foreground">{point.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  {point.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
