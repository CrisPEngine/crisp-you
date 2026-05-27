import type { LandingPageContent } from "@/content/landing-page";

export const freePlannerLandingPage: LandingPageContent = {
  path: "/free-ai-content-planner",
  seoTitle: "Free AI Content Planner for Founders | CRISP Content Engine",
  description:
    "Start free with CRISP Content Engine and build a structured content planner for LinkedIn, X and blog workflows without a credit card.",
  eyebrow: "Free Plan",
  headline: "Free AI content planner for founders and consultants",
  heroCopy:
    "Start with a free content system that helps you create structure before you upgrade. CRISP Content Engine gives you a brand profile, limited monthly exports, AI image prompts and a practical way to begin turning ideas into a content rhythm.",
  primaryCta: "Start free, no credit card",
  primaryCtaHref: "start",
  primaryCtaEvent: "cce_start_free_click",
  sections: [
    {
      type: "cards",
      heading: "What the free plan includes",
      cards: [
        { title: "4 LinkedIn posts per month, export", body: "Build a LinkedIn rhythm with copy-ready drafts." },
        { title: "4 X posts per month, export", body: "Prepare short-form content from the same strategy." },
        { title: "1 blog outline per month, export", body: "Start longer-form planning without overcommitting." },
        { title: "AI image prompts included", body: "Add visual direction connected to the post." },
        { title: "Manual posting", body: "Review and publish on your terms." },
        { title: "No credit card required", body: "Create a brand profile and test the workflow first." },
      ],
    },
    {
      type: "cards",
      heading: "Who the free plan is for",
      cards: [
        {
          title: "Founders testing a content rhythm",
          body: "Build structure before the business scales content volume.",
        },
        {
          title: "Consultants building authority",
          body: "Turn expertise into a repeatable publishing process.",
        },
        {
          title: "Small businesses getting organised",
          body: "Move from scattered notes to a visible queue.",
        },
        {
          title: "Creators moving beyond random posting",
          body: "Replace one-off prompts with brand context.",
        },
      ],
    },
    {
      type: "table",
      heading: "What happens when you are ready to upgrade",
      table: {
        headers: ["When you need", "Plan"],
        rows: [
          ["LinkedIn auto-publishing", "Creator"],
          ["Meta publishing", "Growth"],
          ["More content volume", "Pro"],
          ["Multiple brands", "Pro or Scale"],
          ["Custom limits and onboarding", "Scale"],
        ],
      },
    },
  ],
  faq: [
    {
      question: "Is the free plan actually free?",
      answer:
        "Yes. The free plan does not require a credit card. You can create a brand profile, generate posts and export content without paying anything.",
    },
    {
      question: "What is the difference between the free plan and paid plans?",
      answer:
        "The free plan includes four LinkedIn posts, four X posts and one blog outline per month with manual export. Paid plans add higher volume, auto-publishing, more channels and additional workflow features depending on the plan.",
    },
    {
      question: "Can I upgrade later without losing my content?",
      answer:
        "Yes. Your brand profile, drafts and queue carry over when you upgrade. Upgrading adds new capabilities rather than replacing what you have already set up.",
    },
  ],
  finalCtaHeading: "Start building your content system for free",
  finalCtaCopy:
    "Create a brand profile, generate your first drafts and build a publishing rhythm without a credit card.",
  finalCta: "Start free",
  finalCtaHref: "start",
  finalCtaEvent: "cce_start_free_click",
  relatedLinks: [
    { label: "Pricing", href: "/pricing" },
    { label: "Brand profile", href: "/features/brand-profile" },
    { label: "Founders use case", href: "/use-cases/founders" },
    { label: "Build a content system", href: "/blog/how-to-build-a-content-system-for-your-business" },
  ],
};
