import type { MetadataRoute } from "next";
import { siteConfig } from "@/content/site";
import { featuredTreatments } from "@/content/treatments";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/tratamientos",
    "/nosotros",
    "/contacto",
    "/privacidad",
    "/terminos",
  ].map((path) => ({
    url: `${siteConfig.siteUrl}${path}`,
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.7,
  }));

  const treatmentRoutes = featuredTreatments.map((treatment) => ({
    url: `${siteConfig.siteUrl}/tratamientos/${treatment.slug}`,
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...treatmentRoutes];
}
