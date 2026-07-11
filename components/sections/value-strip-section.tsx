import { credibility } from "@/content/site";

const icons = [
  // experiencia — estrella
  <path key="i0" d="m12 3 2.6 5.3 5.9.9-4.2 4.1 1 5.8L12 16.9 6.7 19.7l1-5.8-4.2-4.1 5.9-.9L12 3Z" />,
  // credencial — insignia
  <>
    <circle key="c" cx="12" cy="9" r="5" />
    <path key="r" d="M9 13.5 8 21l4-2 4 2-1-7.5" />
  </>,
  // asesoramiento — chispa
  <path key="i2" d="M12 4v4m0 8v4m-8-8h4m8 0h4M6.3 6.3l2.8 2.8m5.8 5.8 2.8 2.8m0-11.4-2.8 2.8m-5.8 5.8-2.8 2.8" />,
  // tecnología — destello
  <path key="i3" d="M13 3 4 14h6l-1 7 9-11h-6l1-7Z" />,
  // planes — corazón
  <path key="i4" d="M12 20s-7-4.4-7-9.5A3.5 3.5 0 0 1 12 7a3.5 3.5 0 0 1 7 3.5C19 15.6 12 20 12 20Z" />,
];

export function ValueStripSection() {
  return (
    <section className="section-shell pb-4 pt-2 sm:pb-8">
      <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
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

        <ul className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
          {credibility.points.map((point, index) => (
            <li
              key={point}
              className="card-surface card-interactive flex items-center gap-3 border-brand/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.92),rgba(243,220,230,0.28))] px-4 py-4"
            >
              <span
                aria-hidden="true"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand text-white"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {icons[index % icons.length]}
                </svg>
              </span>
              <span className="text-sm font-semibold text-foreground">{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
