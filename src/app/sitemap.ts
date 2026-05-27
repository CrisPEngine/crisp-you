import type { MetadataRoute } from "next";
import { site } from "@/config/site";
import { buildSitemapPaths, getRouteMeta } from "@/content/routes";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return buildSitemapPaths().map((path) => {
    const meta = getRouteMeta(path);
    return {
      url: `${site.domain}${path}`,
      lastModified,
      changeFrequency: meta.changeFrequency ?? "monthly",
      priority: meta.priority ?? 0.7,
    };
  });
}
