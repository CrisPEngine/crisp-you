/**
 * Site URLs and domain configuration.
 * Update these once final signup routes and Stripe checkout URLs are confirmed.
 *
 * The canonical production domain for the public CCE marketing site is https://crisp.you.
 * Vercel preview URLs should never be used in canonical metadata, sitemap, llms files or structured data.
 */
export const site = {
  name: "CRISP Content Engine",
  legalName: "ABL International FZE",
  creator: "CrisP Digital",
  contactEmail: "enquiries@crispdigital.io",
  url: "https://crisp.you",
  // App and billing URLs, confirm against production routing
  startUrl: "https://app.crispdigital.io",
  loginUrl: "https://app.crispdigital.io",
  billingUrl: "https://app.crispdigital.io/billing",
  contactUrl: "mailto:enquiries@crispdigital.io",
} as const;

/** Brand assets in /public. Logo and wordmark are for dark backgrounds only. */
export const brand = {
  logo: "/CrispContentEngineLogo_white_1200x627.png",
  wordmark: "/CCE_wordmark_1080x200.png",
  favicon: "/favicon_crispContentEngine_128x128.png",
  ogImage: "/og/CCE-og.jpg",
} as const;

/** CrisP Digital social and content channels */
export const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/crispdigital/",
  },
  {
    label: "X",
    href: "https://x.com/crisp_digi",
  },
  {
    label: "Meta",
    href: "https://www.instagram.com/crisp_digital/",
  },
  {
    label: "Blog",
    href: "https://www.crispdigital.io/insights",
  },
] as const;

export const navLinks = [
  { label: "How it works", href: "/how-it-works" },
  { label: "Use cases", href: "/use-cases" },
  { label: "Pricing", href: "/pricing" },
  { label: "Blog", href: "/blog" },
] as const;

export const cta = {
  primary: "Start free, no card required",
  secondary: "See how it works",
  pricing: "View pricing",
  upgrade: "Upgrade on billing",
  contactSales: "Contact sales",
} as const;
