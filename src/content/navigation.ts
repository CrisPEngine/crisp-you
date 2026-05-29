export const productLinks = [
  { label: "Product overview", href: "/#product" },
  { label: "Brand profile", href: "/features/brand-profile" },
  { label: "Content queue", href: "/features/content-queue" },
  { label: "LinkedIn system", href: "/features/linkedin-content-system" },
  { label: "AI image prompts", href: "/features/ai-image-prompts" },
] as const;

export const mobileNavGroups = [
  {
    title: "Product",
    links: [
      { label: "How it works", href: "/how-it-works" },
      { label: "Pricing", href: "/pricing" },
      { label: "Brand profile", href: "/features/brand-profile" },
      { label: "Content queue", href: "/features/content-queue" },
      { label: "LinkedIn content system", href: "/features/linkedin-content-system" },
      { label: "AI image prompts", href: "/features/ai-image-prompts" },
    ],
  },
  {
    title: "Use cases",
    links: [
      { label: "Founders", href: "/use-cases/founders" },
      { label: "Consultants", href: "/use-cases/consultants" },
      { label: "Agencies", href: "/use-cases/agencies" },
      { label: "Lean teams", href: "/use-cases/lean-teams" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Blog", href: "/blog" },
      { label: "Free AI content planner", href: "/free-ai-content-planner" },
      { label: "ChatGPT vs CRISP", href: "/compare/chatgpt-vs-crisp-content-engine" },
      { label: "Content calendar vs content engine", href: "/compare/content-calendar-vs-content-engine" },
    ],
  },
  {
    title: "Account",
    links: [
      { label: "Login", href: "https://app.crispdigital.io", external: true },
    ],
  },
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
      { label: "Pricing", href: "/pricing" },
      { label: "Brand profile", href: "/features/brand-profile" },
      { label: "Content queue", href: "/features/content-queue" },
      { label: "LinkedIn system", href: "/features/linkedin-content-system" },
      { label: "AI image prompts", href: "/features/ai-image-prompts" },
    ],
  },
  {
    title: "Use cases",
    links: [
      { label: "Founders", href: "/use-cases/founders" },
      { label: "Consultants", href: "/use-cases/consultants" },
      { label: "Agencies", href: "/use-cases/agencies" },
      { label: "Lean teams", href: "/use-cases/lean-teams" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Blog", href: "/blog" },
      { label: "Free content planner", href: "/free-ai-content-planner" },
      { label: "ChatGPT vs CRISP", href: "/compare/chatgpt-vs-crisp-content-engine" },
      { label: "Calendar vs engine", href: "/compare/content-calendar-vs-content-engine" },
      { label: "Build a content system", href: "/blog/how-to-build-a-content-system-for-your-business" },
      { label: "Content system for founders", href: "/blog/content-system-for-founders" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Contact", href: "/contact" },
      { label: "Privacy", href: "/privacy" },
      { label: "Cookies", href: "/cookies" },
      { label: "Terms", href: "/terms" },
    ],
  },
] as const;

/** @deprecated Import sitemapPaths from ./routes instead. Re-exported for backward compatibility. */
export { sitemapPaths as sitemapRoutes } from "./routes";
