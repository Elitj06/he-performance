import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/", disallow: ["/app", "/dashboard"] },
    sitemap: "https://he-performance.vercel.app/sitemap.xml",
  };
}
