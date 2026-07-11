import Link from "next/link";
import { treatmentCategories } from "@/content/treatments";

export function TreatmentCategoriesSection() {
  return (
    <section className="section-gap">
      <div className="section-shell">
        <div className="max-w-2xl">
          <span className="eyebrow">Categorías</span>
          <h2 className="section-title mt-5 text-balance">
            Toda la oferta, ordenada de un vistazo.
          </h2>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {treatmentCategories.map((category) => (
            <article
              key={category.name}
              className="card-surface card-interactive border-brand/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.92),rgba(243,220,230,0.22))] p-6 sm:p-7"
            >
              <h3 className="font-display text-3xl leading-none text-brand">
                {category.name}
              </h3>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                {category.summary}
              </p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {category.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-brand/15 bg-white/70 px-3 py-1.5 text-xs font-medium text-foreground"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="mt-10">
          <Link
            href="/tratamientos"
            className="inline-flex rounded-full border border-brand/20 bg-white px-5 py-3 font-semibold text-foreground hover:border-brand hover:text-brand"
          >
            Ver índice completo
          </Link>
        </div>
      </div>
    </section>
  );
}
