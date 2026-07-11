import { processSteps } from "@/content/site";

export function ProcessSection() {
  return (
    <section className="section-gap bg-white/45">
      <div className="section-shell">
        <div className="max-w-3xl">
          <span className="eyebrow">Proceso</span>
          <h2 className="section-title mt-5 text-balance">
            De la primera consulta al seguimiento, con una lógica fácil de entender.
          </h2>
        </div>

        <ol className="mt-10 grid gap-5 lg:grid-cols-4">
          {processSteps.map((step, index) => (
            <li key={step.title} className="card-surface p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand">
                Paso {index + 1}
              </p>
              <h3 className="mt-4 font-display text-3xl leading-none text-foreground">
                {step.title}
              </h3>
              <p className="mt-4 text-base leading-7 text-muted-foreground">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
