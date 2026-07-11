import { storyPoints } from "@/content/site";

export function StorySection() {
  return (
    <section id="nosotros" className="section-gap pt-6">
      <div className="section-shell">
        <div className="max-w-3xl">
          <span className="eyebrow">Por qué elegirnos</span>
          <h2 className="section-title mt-5 text-balance">
            Estética profesional, cercana y a tu medida.
          </h2>
          <p className="prose-copy mt-5 max-w-2xl">
            Combinamos tecnología de vanguardia con una atención personalizada
            para acompañarte en cada paso hacia tu mejor versión.
          </p>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {storyPoints.map((point) => (
            <div key={point.title} className="card-surface card-interactive p-6">
                <h3 className="text-lg font-semibold text-foreground">{point.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  {point.description}
                </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
