import type { MetadataRoute } from "next";
import { site } from "@/config/site";
import { sitemapRoutes } from "@/content/navigation";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return sitemapRoutes.map((path) => ({
    url: `${site.domain}${path}`,
    lastModified,
    changeFrequency:
      path === "" || path === "/pricing" || path.startsWith("/blog")
        ? "weekly"
        : "monthly",
    priority:
      path === ""
        ? 1
        : path === "/pricing"
          ? 0.9
          : path.startsWith("/blog/")
            ? 0.75
            : 0.7,
  }));
}
