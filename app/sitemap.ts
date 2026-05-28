import type { MetadataRoute } from "next";
import { products } from "@/app/lib/products";

const SITE = "https://grindfactory.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    {
      url: `${SITE}/`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    ...products.map((p) => ({
      url: `${SITE}/projects/${p.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
