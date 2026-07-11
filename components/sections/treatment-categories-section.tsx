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

        <div className="mt-10 grid gap-x-10 gap-y-8 sm:grid-cols-2">
          {treatmentCategories.map((category) => (
            <div
              key={category.name}
              className="border-t border-border pt-5"
            >
              <h3 className="font-display text-2xl leading-none text-foreground">
                {category.name}
              </h3>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                {category.summary}
              </p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {category.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-border/80 bg-white/60 px-3 py-1.5 text-xs text-foreground"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
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
