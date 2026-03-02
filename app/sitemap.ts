import type { MetadataRoute } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://osnabruecker-otter.de";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/entstehung",
    "/unterstuetzen",
    "/jugendschutz",
    "/team",
    "/was-steht-an",
    "/dokumente",
    "/impressum",
  ];

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : ("monthly" as const),
    priority: route === "" ? 1 : 0.8,
  }));
}
