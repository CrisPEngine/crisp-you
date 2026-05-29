import { blogSlugs } from "./blog";
import { compareLandingPages } from "./landing-pages/compare-pages";
import { featureLandingPages } from "./landing-pages/features-pages";
import { freePlannerLandingPage } from "./landing-pages/free-planner-page";
import { useCaseLandingPages } from "./landing-pages/use-cases-pages";

export type RouteType =
  | "core"
  | "use-case"
  | "feature"
  | "compare"
  | "utility"
  | "blog"
  | "legal"
  | "seo-static";

export type PublicRoute = {
  path: string;
  label: string;
  type: RouteType;
  includeInSitemap: boolean;
  includeInLlms: boolean;
  changeFrequency?: "weekly" | "monthly";
  priority?: number;
};

function defineRoute(route: PublicRoute): PublicRoute {
  return route;
}

/** Core marketing pages (static app routes). */
export const publicRoutes: PublicRoute[] = [
  defineRoute({
    path: "",
    label: "Home",
    type: "core",
    includeInSitemap: true,
    includeInLlms: true,
    changeFrequency: "weekly",
    priority: 1,
  }),
  defineRoute({
    path: "/pricing",
    label: "Pricing",
    type: "core",
    includeInSitemap: true,
    includeInLlms: true,
    changeFrequency: "weekly",
    priority: 0.9,
  }),
  defineRoute({
    path: "/how-it-works",
    label: "How it works",
    type: "core",
    includeInSitemap: true,
    includeInLlms: true,
    changeFrequency: "monthly",
    priority: 0.7,
  }),
  defineRoute({
    path: "/use-cases",
    label: "Use cases",
    type: "core",
    includeInSitemap: true,
    includeInLlms: true,
    changeFrequency: "monthly",
    priority: 0.7,
  }),
  defineRoute({
    path: "/blog",
    label: "Blog",
    type: "blog",
    includeInSitemap: true,
    includeInLlms: true,
    changeFrequency: "weekly",
    priority: 0.7,
  }),
  defineRoute({
    path: "/contact",
    label: "Contact",
    type: "core",
    includeInSitemap: true,
    includeInLlms: true,
    changeFrequency: "monthly",
    priority: 0.7,
  }),
];

/** Static feature pages (not driven by landing-pages/[slug]). */
export const staticFeatureRoutes: PublicRoute[] = [
  defineRoute({
    path: "/features/brand-profile",
    label: "Brand profile",
    type: "feature",
    includeInSitemap: true,
    includeInLlms: true,
    changeFrequency: "monthly",
    priority: 0.7,
  }),
  defineRoute({
    path: "/features/content-queue",
    label: "Content queue",
    type: "feature",
    includeInSitemap: true,
    includeInLlms: true,
    changeFrequency: "monthly",
    priority: 0.7,
  }),
];

/** Dynamic feature landing pages from landing-pages/features-pages.ts */
export const dynamicFeatureRoutes: PublicRoute[] = featureLandingPages.map((page) =>
  defineRoute({
    path: page.path,
    label: page.headline,
    type: "feature",
    includeInSitemap: true,
    includeInLlms: true,
    changeFrequency: "monthly",
    priority: 0.7,
  }),
);

export const featureRoutes: PublicRoute[] = [...staticFeatureRoutes, ...dynamicFeatureRoutes];

/** Use case landing pages from landing-pages/use-cases-pages.ts */
export const useCaseRoutes: PublicRoute[] = useCaseLandingPages.map((page) =>
  defineRoute({
    path: page.path,
    label: page.headline,
    type: "use-case",
    includeInSitemap: true,
    includeInLlms: true,
    changeFrequency: "monthly",
    priority: 0.7,
  }),
);

/** Comparison landing pages from landing-pages/compare-pages.ts */
export const compareRoutes: PublicRoute[] = compareLandingPages.map((page) =>
  defineRoute({
    path: page.path,
    label: page.headline,
    type: "compare",
    includeInSitemap: true,
    includeInLlms: true,
    changeFrequency: "monthly",
    priority: 0.7,
  }),
);

/** Free acquisition page from landing-pages/free-planner-page.ts */
export const utilityRoutes: PublicRoute[] = [
  defineRoute({
    path: freePlannerLandingPage.path,
    label: freePlannerLandingPage.headline,
    type: "utility",
    includeInSitemap: true,
    includeInLlms: true,
    changeFrequency: "monthly",
    priority: 0.7,
  }),
];

export const legalRoutes: PublicRoute[] = [
  defineRoute({
    path: "/privacy",
    label: "Privacy Policy",
    type: "legal",
    includeInSitemap: true,
    includeInLlms: true,
    changeFrequency: "monthly",
    priority: 0.5,
  }),
  defineRoute({
    path: "/cookies",
    label: "Cookies Policy",
    type: "legal",
    includeInSitemap: true,
    includeInLlms: true,
    changeFrequency: "monthly",
    priority: 0.5,
  }),
  defineRoute({
    path: "/terms",
    label: "Terms of Service",
    type: "legal",
    includeInSitemap: true,
    includeInLlms: true,
    changeFrequency: "monthly",
    priority: 0.5,
  }),
];

/** Blog article routes derived from blogPosts via blogSlugs in blog.ts */
export const blogArticleRoutes: PublicRoute[] = blogSlugs.map((slug) =>
  defineRoute({
    path: `/blog/${slug}`,
    label: slug,
    type: "blog",
    includeInSitemap: true,
    includeInLlms: true,
    changeFrequency: "weekly",
    priority: 0.75,
  }),
);

export const blogRoutes: PublicRoute[] = [
  ...publicRoutes.filter((route) => route.path === "/blog"),
  ...blogArticleRoutes,
];

/** SEO static files served from /public (not Next.js pages). */
export const seoStaticRoutes: PublicRoute[] = [
  defineRoute({
    path: "/sitemap.xml",
    label: "Sitemap",
    type: "seo-static",
    includeInSitemap: false,
    includeInLlms: false,
  }),
  defineRoute({
    path: "/robots.txt",
    label: "Robots",
    type: "seo-static",
    includeInSitemap: false,
    includeInLlms: false,
  }),
  defineRoute({
    path: "/llms.txt",
    label: "LLMs summary",
    type: "seo-static",
    includeInSitemap: false,
    includeInLlms: false,
  }),
  defineRoute({
    path: "/llms-full.txt",
    label: "LLMs extended",
    type: "seo-static",
    includeInSitemap: false,
    includeInLlms: false,
  }),
];

const allRegisteredRoutes: PublicRoute[] = [
  ...publicRoutes,
  ...useCaseRoutes,
  ...featureRoutes,
  ...compareRoutes,
  ...utilityRoutes,
  ...legalRoutes,
  ...blogArticleRoutes,
];

export function buildSitemapPaths(): string[] {
  const paths = allRegisteredRoutes.filter((route) => route.includeInSitemap).map((route) => route.path);
  return [...new Set(paths)];
}

/** Precomputed sitemap paths for consumers that need a static array. */
export const sitemapPaths = buildSitemapPaths();

export function buildLlmsPagePaths(): string[] {
  const paths = allRegisteredRoutes.filter((route) => route.includeInLlms).map((route) => route.path);
  return [...new Set(paths)];
}

export function getRouteMeta(path: string): Pick<PublicRoute, "changeFrequency" | "priority"> {
  const route = allRegisteredRoutes.find((entry) => entry.path === path);
  return {
    changeFrequency: route?.changeFrequency ?? "monthly",
    priority: route?.priority ?? 0.7,
  };
}

/** All internal marketing paths (excludes app URLs and SEO static files). */
export function getAllMarketingPaths(): string[] {
  return buildSitemapPaths();
}
