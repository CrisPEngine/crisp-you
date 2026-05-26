import type { MetadataRoute } from "next";
import { site } from "@/config/site";

const routes = [
  "",
  "/pricing",
  "/how-it-works",
  "/use-cases",
  "/blog",
  "/privacy",
  "/terms",
  "/contact",
  "/about",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return routes.map((path) => ({
    url: `${site.domain}${path}`,
    lastModified,
    changeFrequency: path === "" || path === "/pricing" ? "weekly" : "monthly",
    priority: path === "" ? 1 : path === "/pricing" ? 0.9 : 0.7,
  }));
}
