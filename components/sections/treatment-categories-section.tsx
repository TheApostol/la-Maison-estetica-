import Link from "next/link";
import { treatmentCategories } from "@/content/treatments";

export function TreatmentCategoriesSection() {
  return (
    <section className="section-gap">
      <div className="section-shell">
        <div className="max-w-2xl">
          <span className="eyebrow">Categorías</span>
          <h2 className="section-title mt-5 text-balance">
            La oferta pública reorganizada para que se entienda de un vistazo.
          </h2>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          {treatmentCategories.map((category) => (
            <article key={category.name} className="card-surface p-6 sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
                {category.name}
              </p>
              <p className="mt-4 text-base leading-7 text-muted-foreground">
                {category.summary}
              </p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {category.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-border bg-background px-4 py-2 text-sm text-foreground"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="mt-8">
          <Link
            href="/tratamientos"
            className="inline-flex rounded-full border border-border bg-white px-5 py-3 font-semibold text-foreground hover:border-brand hover:text-brand"
          >
            Ver índice completo
          </Link>
        </div>
      </div>
    </section>
  );
}
