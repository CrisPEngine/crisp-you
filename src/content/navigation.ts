export const productLinks = [
  { label: "Product overview", href: "/#product" },
  { label: "Brand profile", href: "/features/brand-profile" },
  { label: "Content queue", href: "/features/content-queue" },
] as const;

export const navLinks = [
  { label: "How it works", href: "/how-it-works" },
  { label: "Use cases", href: "/use-cases" },
  { label: "Pricing", href: "/pricing" },
  { label: "Blog", href: "/blog" },
] as const;

export const footerColumns = [
  {
    title: "Product",
    links: [
      { label: "How it works", href: "/how-it-works" },
      { label: "Use cases", href: "/use-cases" },
      { label: "Brand profile", href: "/features/brand-profile" },
      { label: "Content queue", href: "/features/content-queue" },
      { label: "Pricing", href: "/pricing" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Contact", href: "/contact" },
      { label: "Privacy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
    ],
  },
  {
    title: "Resources",
    links: [
      {
        label: "Content system for founders",
        href: "/blog/content-system-for-founders",
      },
      {
        label: "AI generator vs content system",
        href: "/blog/ai-content-generator-vs-content-system",
      },
      {
        label: "LinkedIn consistency guide",
        href: "/blog/how-to-stay-consistent-on-linkedin",
      },
      { label: "All articles", href: "/blog" },
    ],
  },
] as const;

export const sitemapRoutes = [
  "",
  "/pricing",
  "/how-it-works",
  "/use-cases",
  "/features/brand-profile",
  "/features/content-queue",
  "/blog",
  "/blog/content-system-for-founders",
  "/blog/ai-content-generator-vs-content-system",
  "/blog/how-to-stay-consistent-on-linkedin",
  "/contact",
  "/privacy",
  "/terms",
] as const;
