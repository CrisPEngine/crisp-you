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
      { label: "Use cases", href: "/use-cases" },
      { label: "Brand profile", href: "/features/brand-profile" },
      { label: "Content queue", href: "/features/content-queue" },
      { label: "LinkedIn system", href: "/features/linkedin-content-system" },
      { label: "Pricing", href: "/pricing" },
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
      { label: "Free content planner", href: "/free-ai-content-planner" },
      { label: "ChatGPT vs CRISP", href: "/compare/chatgpt-vs-crisp-content-engine" },
      { label: "Calendar vs engine", href: "/compare/content-calendar-vs-content-engine" },
      { label: "Content system for founders", href: "/blog/content-system-for-founders" },
      { label: "All articles", href: "/blog" },
    ],
  },
] as const;

export const sitemapRoutes = [
  "",
  "/pricing",
  "/how-it-works",
  "/use-cases",
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
  "/blog",
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
  "/contact",
  "/privacy",
  "/terms",
] as const;
