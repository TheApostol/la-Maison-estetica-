import Link from "next/link";
import { navigationItems } from "@/content/navigation";
import { siteConfig } from "@/content/site";
import { MobileMenu } from "./mobile-menu";
import { TrackedLink } from "@/components/ui/tracked-link";
import { BrandMark } from "@/components/ui/brand-mark";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-border/60 bg-background/92 backdrop-blur-md">
      <div className="section-shell flex min-h-20 items-center justify-between gap-4">
        <Link href="/" className="shrink-0">
          <BrandMark />
        </Link>

        <nav aria-label="Principal" className="hidden items-center gap-7 lg:flex">
          {navigationItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <TrackedLink
            href={siteConfig.whatsappUrl}
            eventName="whatsapp_click"
            eventPayload={{ placement: "header" }}
            className="hidden rounded-full bg-brand px-5 py-3 text-sm font-semibold text-white hover:bg-brand-hover lg:inline-flex"
          >
            Reservar una evaluación
          </TrackedLink>
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
