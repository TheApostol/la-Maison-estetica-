import { storyPoints } from "@/content/site";

export function StorySection() {
  return (
    <section id="nosotros" className="section-gap pt-6">
      <div className="section-shell">
        <div className="max-w-3xl">
          <span className="eyebrow">Enfoque</span>
          <h2 className="section-title mt-5 text-balance">
            Más fluidez visual, más intención comercial y menos bloques que enfrían la decisión.
          </h2>
          <p className="prose-copy mt-5 max-w-2xl">
            Reordenamos el relato para que la página acompañe mejor el deseo de
            reservar: primero atrae, después orienta y finalmente empuja a la
            acción con más claridad.
          </p>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
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
    </section>
  );
}
