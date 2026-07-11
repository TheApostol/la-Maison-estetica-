import type { Metadata } from "next";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { LocationSection } from "@/components/sections/location-section";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Dirección, horarios y canal principal de contacto de La Maison · Estética & Belleza.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main>
        <LocationSection />
      </main>
      <SiteFooter />
    </div>
  );
}
