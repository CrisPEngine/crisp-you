/**
 * Prints route registry data as JSON for verify-public-routes.mjs.
 * Run: npx tsx scripts/get-routes.ts
 */
import { blogSlugs } from "../src/content/blog";
import {
  buildLlmsPagePaths,
  buildSitemapPaths,
  blogArticleRoutes,
  compareRoutes,
  featureRoutes,
  useCaseRoutes,
  utilityRoutes,
} from "../src/content/routes";

const payload = {
  blogSlugs,
  blogCount: blogSlugs.length,
  sitemapPaths: buildSitemapPaths(),
  sitemapCount: buildSitemapPaths().length,
  llmsPaths: buildLlmsPagePaths(),
  llmsCount: buildLlmsPagePaths().length,
  useCasePaths: useCaseRoutes.map((r) => r.path),
  featurePaths: featureRoutes.map((r) => r.path),
  comparePaths: compareRoutes.map((r) => r.path),
  utilityPaths: utilityRoutes.map((r) => r.path),
  blogPaths: blogArticleRoutes.map((r) => r.path),
};

console.log(JSON.stringify(payload, null, 2));
