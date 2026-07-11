import type { Metadata } from "next";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { FeaturedTreatments } from "@/components/sections/featured-treatments";
import { FaqSection } from "@/components/sections/faq-section";
import { FinalCtaSection } from "@/components/sections/final-cta-section";
import { HeroSection } from "@/components/sections/hero-section";
import { LocationSection } from "@/components/sections/location-section";
import { ProcessSection } from "@/components/sections/process-section";
import { StorySection } from "@/components/sections/story-section";
import { TreatmentCategoriesSection } from "@/components/sections/treatment-categories-section";
import { ValueStripSection } from "@/components/sections/value-strip-section";
import { WhatsAppFloat } from "@/components/ui/whatsapp-float";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: siteConfig.meta.title,
  description: siteConfig.meta.description,
};

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-x-clip">
      <SiteHeader />
      <main id="inicio">
        <HeroSection />
        <ValueStripSection />
        <FeaturedTreatments />
        <StorySection />
        <TreatmentCategoriesSection />
        <ProcessSection />
        <FaqSection />
        <LocationSection />
        <FinalCtaSection />
      </main>
      <SiteFooter />
      <WhatsAppFloat />
    </div>
  );
}
