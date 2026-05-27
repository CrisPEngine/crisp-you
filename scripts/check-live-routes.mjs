#!/usr/bin/env node
/**
 * Fetches all expected public URLs and reports HTTP status codes.
 * Run: BASE_URL=https://crisp-you.vercel.app npm run check:live-routes
 */

import { execSync } from "node:child_process";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");

const SEO_STATIC = ["/sitemap.xml", "/robots.txt", "/llms.txt", "/llms-full.txt"];

function loadPaths() {
  try {
    const output = execSync("npx --yes tsx scripts/get-routes.ts", {
      cwd: root,
      encoding: "utf8",
      stdio: ["ignore", "pipe", "pipe"],
    });
    const data = JSON.parse(output);
    return [...data.sitemapPaths, ...SEO_STATIC];
  } catch (err) {
    console.error("Could not load routes from scripts/get-routes.ts:", err.message);
    process.exit(1);
  }
}

const baseUrl = process.env.BASE_URL?.replace(/\/$/, "");

if (!baseUrl) {
  console.error("BASE_URL is required. Example:");
  console.error("  BASE_URL=https://crisp-you.vercel.app npm run check:live-routes");
  process.exit(1);
}

const paths = loadPaths();
const results = [];
let failures = 0;

console.log(`Checking ${paths.length} URLs at ${baseUrl}\n`);

for (const path of paths) {
  const url = `${baseUrl}${path}`;
  try {
    const res = await fetch(url, { redirect: "manual" });
    const status = res.status;
    const acceptable = status >= 200 && status < 400;
    const label = acceptable ? "ok" : "FAIL";
    console.log(`${label.padEnd(4)} ${status} ${path}`);
    results.push({ path, status, ok: acceptable });
    if (!acceptable) failures += 1;
  } catch (err) {
    console.log(`FAIL fetch ${path}: ${err.message}`);
    results.push({ path, status: "error", ok: false, error: err.message });
    failures += 1;
  }
}

console.log(`\nSummary: ${results.length - failures}/${results.length} OK`);

if (failures) {
  console.error("\nSome routes returned unexpected status codes or failed to fetch.");
  process.exit(1);
}

process.exit(0);
