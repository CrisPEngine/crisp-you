#!/usr/bin/env node
/**
 * Verifies public route wiring before deploy.
 * Run: npm run verify:routes
 * Optional live check: BASE_URL=http://localhost:3000 npm run verify:routes
 */

import { execSync } from "node:child_process";
import { readFileSync, existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");

const CANONICAL_DOMAIN = "https://crisp.you";

/** Required public paths (no domain prefix). */
const REQUIRED_PATHS = [
  "",
  "/pricing",
  "/how-it-works",
  "/use-cases",
  "/blog",
  "/contact",
  "/privacy",
  "/terms",
  "/use-cases/founders",
  "/use-cases/consultants",
  "/use-cases/agencies",
  "/use-cases/lean-teams",
  "/features/brand-profile",
  "/features/content-queue",
  "/features/linkedin-content-system",
  "/features/ai-image-prompts",
  "/compare/chatgpt-vs-crisp-content-engine",
  "/compare/content-calendar-vs-content-engine",
  "/free-ai-content-planner",
  "/blog/content-system-for-founders",
  "/blog/ai-content-generator-vs-content-system",
  "/blog/how-to-stay-consistent-on-linkedin",
  "/blog/how-to-build-a-content-system-for-your-business",
  "/blog/content-calendar-vs-content-engine",
  "/blog/best-ai-content-tools-for-founders",
  "/blog/turn-one-idea-into-a-month-of-content",
  "/blog/ai-content-with-brand-voice",
  "/blog/content-workflow-for-consultants",
  "/blog/multi-brand-content-management-for-agencies",
];

const REQUIRED_BLOG_SLUGS = REQUIRED_PATHS.filter((p) => p.startsWith("/blog/")).map((p) =>
  p.replace("/blog/", ""),
);

const REQUIRED_LLMS_URLS = REQUIRED_PATHS.filter((p) => p !== "").map((p) => `${CANONICAL_DOMAIN}${p}`);

const errors = [];
const checks = [];

function read(relativePath) {
  return readFileSync(join(root, relativePath), "utf8");
}

function ok(label) {
  checks.push(`[ok] ${label}`);
}

function fail(label, detail) {
  errors.push(`[fail] ${label}: ${detail}`);
}

function missingFrom(source, required, actual) {
  return required.filter((item) => !actual.includes(item));
}

function loadRouteRegistry() {
  try {
    const output = execSync("npx --yes tsx scripts/get-routes.ts", {
      cwd: root,
      encoding: "utf8",
      stdio: ["ignore", "pipe", "pipe"],
    });
    return JSON.parse(output);
  } catch (err) {
    fail("route registry", `Could not run scripts/get-routes.ts via tsx: ${err.message}`);
    return null;
  }
}

function verifyBlogSourceFiles() {
  const blogTs = read("src/content/blog.ts");
  const blogExtra = read("src/content/blog-extra.ts");
  const slugPattern = /slug: "([^"]+)"/g;
  const blogSlugs = [...blogTs.matchAll(slugPattern)].map((m) => m[1]);
  const extraSlugs = [...blogExtra.matchAll(slugPattern)].map((m) => m[1]);
  const merged = [...new Set([...blogSlugs, ...extraSlugs])];

  if (merged.length !== 10) {
    fail("blog source", `Expected 10 unique slugs in blog.ts + blog-extra.ts, found ${merged.length}`);
  } else {
    ok(`blog source files export 10 unique slugs`);
  }

  const missingSlugs = missingFrom("blog slugs", REQUIRED_BLOG_SLUGS, merged);
  if (missingSlugs.length) {
    fail("blog slugs in source", `Missing: ${missingSlugs.join(", ")}`);
  } else {
    ok("all required blog slugs present in blog.ts + blog-extra.ts");
  }
}

function verifySitemapSource() {
  const sitemapTs = read("src/app/sitemap.ts");
  if (!sitemapTs.includes("@/content/routes") || !sitemapTs.includes("buildSitemapPaths")) {
    fail("sitemap.ts", "Must import buildSitemapPaths from @/content/routes");
  } else {
    ok("sitemap.ts derives paths from src/content/routes.ts");
  }

  const routesTs = read("src/content/routes.ts");
  if (!routesTs.includes("blogSlugs")) {
    fail("routes.ts", "Must derive blog routes from blogSlugs");
  } else {
    ok("routes.ts derives blog routes from blogSlugs");
  }
}

function verifyLlmsFiles() {
  for (const file of ["public/llms.txt", "public/llms-full.txt"]) {
    if (!existsSync(join(root, file))) {
      fail(file, "File not found");
      continue;
    }
    const content = read(file);
    if (content.includes("vercel.app")) {
      fail(file, "Contains vercel.app URL; use https://crisp.you");
    }
    const missing = REQUIRED_LLMS_URLS.filter((url) => !content.includes(url));
    if (missing.length) {
      fail(file, `Missing URLs: ${missing.join(", ")}`);
    } else {
      ok(`${file} includes all ${REQUIRED_LLMS_URLS.length} required page URLs`);
    }
  }
}

function verifyRouteRegistry(registry) {
  if (!registry) return;

  if (registry.blogCount !== 10) {
    fail("blogPosts via registry", `Expected 10 posts, got ${registry.blogCount}`);
  } else {
    ok(`blogPosts exports ${registry.blogCount} posts`);
  }

  const missingBlog = missingFrom("blog slugs", REQUIRED_BLOG_SLUGS, registry.blogSlugs);
  if (missingBlog.length) {
    fail("blogSlugs registry", `Missing: ${missingBlog.join(", ")}`);
  } else {
    ok("blogSlugs matches required list");
  }

  const missingSitemap = missingFrom("sitemap", REQUIRED_PATHS, registry.sitemapPaths);
  if (missingSitemap.length) {
    fail("sitemap registry", `Missing paths: ${missingSitemap.join(", ")}`);
  } else {
    ok(`sitemap registry includes all ${REQUIRED_PATHS.length} required paths (${registry.sitemapCount} total)`);
  }

  const missingLlms = missingFrom("llms registry", REQUIRED_PATHS, registry.llmsPaths);
  if (missingLlms.length) {
    fail("llms registry", `Missing paths: ${missingLlms.join(", ")}`);
  } else {
    ok(`llms registry includes all ${REQUIRED_PATHS.length} required paths`);
  }
}

async function verifyLiveBaseUrl(baseUrl) {
  const normalized = baseUrl.replace(/\/$/, "");
  checks.push(`\nLive check against ${normalized}:`);

  for (const path of ["/blog", "/sitemap.xml", "/llms.txt"]) {
    try {
      const res = await fetch(`${normalized}${path}`, { redirect: "manual" });
      const status = res.status;
      if (status >= 200 && status < 400) {
        ok(`live ${path} -> ${status}`);
      } else {
        fail(`live ${path}`, `HTTP ${status}`);
      }
    } catch (err) {
      fail(`live ${path}`, err.message);
    }
  }

  try {
    const res = await fetch(`${normalized}/blog`);
    const html = await res.text();
    let articleCount = 0;
    for (const slug of REQUIRED_BLOG_SLUGS) {
      if (html.includes(`/blog/${slug}`)) articleCount += 1;
    }
    if (articleCount === REQUIRED_BLOG_SLUGS.length) {
      ok(`live /blog lists all ${REQUIRED_BLOG_SLUGS.length} articles`);
    } else {
      fail("live /blog", `Only ${articleCount}/${REQUIRED_BLOG_SLUGS.length} article links found`);
    }
  } catch (err) {
    fail("live /blog article links", err.message);
  }
}

console.log("CRISP public route verification\n");

verifyBlogSourceFiles();
verifySitemapSource();
verifyLlmsFiles();
verifyRouteRegistry(loadRouteRegistry());

const baseUrl = process.env.BASE_URL;
if (baseUrl) {
  await verifyLiveBaseUrl(baseUrl);
} else {
  checks.push("\n[skip] BASE_URL not set (optional live check)");
}

console.log(checks.join("\n"));

if (errors.length) {
  console.error("\nVerification failed:\n" + errors.join("\n"));
  process.exit(1);
}

console.log("\nAll route checks passed.");
process.exit(0);
