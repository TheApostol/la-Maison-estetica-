import { faqs } from "@/content/faqs";
import { TrackedLink } from "@/components/ui/tracked-link";
import { siteConfig } from "@/content/site";

export function FaqSection() {
  return (
    <section id="faq" className="section-gap">
      <div className="section-shell grid gap-10 lg:grid-cols-[0.92fr_1.08fr]">
        <div>
          <span className="eyebrow">Preguntas frecuentes</span>
          <h2 className="section-title mt-5 text-balance">
            Respuestas claras para bajar fricción antes de reservar.
          </h2>
          <p className="prose-copy mt-4">
            Resolvemos las dudas más habituales antes de reservar. Si te queda
            algo por consultar, escribinos por WhatsApp y te respondemos.
          </p>
          <TrackedLink
            href={siteConfig.whatsappFaqUrl}
            eventName="whatsapp_click"
            eventPayload={{ placement: "faq" }}
            className="mt-8 inline-flex rounded-full bg-brand px-5 py-3 font-semibold text-white hover:bg-brand-hover"
          >
            Hacer otra consulta
          </TrackedLink>
        </div>

        <div className="space-y-4">
          {faqs.map((faq) => (
            <details key={faq.question} className="card-surface group p-6">
              <summary className="cursor-pointer list-none pr-10 text-lg font-semibold text-foreground marker:content-none">
                {faq.question}
              </summary>
              <p className="mt-4 text-base leading-7 text-muted-foreground">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
