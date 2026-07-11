import { valuePillars } from "@/content/site";
import { TrackedLink } from "@/components/ui/tracked-link";

export function ValueStripSection() {
  return (
    <section className="section-shell -mt-2 pb-10 sm:-mt-6 sm:pb-16">
      <div className="card-surface grid gap-4 p-6 sm:grid-cols-2 lg:grid-cols-4 lg:p-8">
        {valuePillars.map((pillar) => (
          <TrackedLink
            key={pillar.title}
            href={pillar.href}
            eventName={pillar.eventName}
            eventPayload={pillar.eventPayload}
            className="rounded-[1.35rem] border border-brand/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.88),rgba(246,213,231,0.22))] px-5 py-5 transition duration-300 hover:-translate-y-1 hover:border-brand/30 hover:bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(246,213,231,0.38))]"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
              {pillar.title}
            </p>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">
              {pillar.description}
            </p>
          </TrackedLink>
        ))}
      </div>
    </section>
  );
}
