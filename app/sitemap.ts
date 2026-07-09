import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://he-performance.vercel.app", lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
    { url: "https://he-performance.vercel.app/login", lastModified: new Date(), changeFrequency: "yearly", priority: 0.5 },
  ];
}
