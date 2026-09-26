import { MetadataRoute } from "next";
import { site } from "@/lib/site-data";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "/",
    "/approach",
    "/aeo",
    "/geo",
    "/contribution",
    "/testing",
    "/roadmap",
    "/contact",
    "/terms",
    "/privacy",
  ];

  return routes.map((route) => ({
    url: `${site.url}${route}`,
    lastModified: new Date().toISOString().split("T")[0],
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : 0.8,
  }));
}
