import { credibility } from "@/content/site";

export function ValueStripSection() {
  return (
    <section className="section-shell pb-4 pt-2 sm:pb-8">
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <span className="section-eyebrow">{credibility.eyebrow}</span>
          <h2 className="section-title-plain mt-4 text-balance">
            {credibility.titleLead}{" "}
            <em className="italic text-brand">{credibility.titleEmphasis}</em>
          </h2>
          <p className="mt-4 max-w-md text-base leading-7 text-muted-foreground">
            {credibility.description}
          </p>
        </div>

        <ul className="grid gap-x-8 gap-y-4 sm:grid-cols-2">
          {credibility.points.map((point) => (
            <li key={point} className="flex items-center gap-3">
              <span
                aria-hidden="true"
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-soft text-brand"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20 6 9 17l-5-5" />
                </svg>
              </span>
              <span className="text-sm font-medium text-foreground">{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
