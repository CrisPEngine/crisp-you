import { cta } from "@/config/site";

export const freePlannerPage = {
  seoTitle: "Free AI Content Planner for Founders | CRISP Content Engine",
  description:
    "Start free with CRISP Content Engine and build a structured content planner for LinkedIn, X and blog workflows without a credit card.",
  headline: "Free AI content planner for founders and consultants",
  subheadline:
    "Start with a free content system that helps you create structure before you upgrade. CRISP Content Engine gives you a brand profile, limited monthly exports, AI image prompts and a practical way to begin turning ideas into a content rhythm.",
  primaryCta: cta.primary,
  includesHeading: "What the free plan includes",
  includesCards: [
    { title: "4 LinkedIn posts per month, export", body: "Build a LinkedIn rhythm with copy-ready drafts." },
    { title: "4 X posts per month, export", body: "Prepare short-form content from the same strategy." },
    { title: "1 blog outline per month, export", body: "Start longer-form planning without overcommitting." },
    { title: "AI image prompts included", body: "Add visual direction connected to the post." },
    { title: "Manual posting", body: "Review and publish on your terms." },
    { title: "No credit card required", body: "Create a brand profile and test the workflow first." },
  ],
  audienceHeading: "Who the free plan is for",
  audienceCards: [
    { title: "Founders testing a content rhythm", body: "Build structure before the business scales content volume." },
    { title: "Consultants building authority", body: "Turn expertise into a repeatable publishing process." },
    { title: "Small businesses getting organised", body: "Move from scattered notes to a visible queue." },
    { title: "Creators moving beyond random posting", body: "Replace one-off prompts with brand context." },
  ],
  upgradeHeading: "What happens when you are ready to upgrade",
  upgradeRows: [
    { need: "LinkedIn auto-publishing", plan: "Creator" },
    { need: "Meta publishing", plan: "Growth" },
    { need: "More volume", plan: "Pro" },
    { need: "Multiple brands", plan: "Pro or Scale" },
    { need: "Custom limits and onboarding", plan: "Scale" },
  ],
  relatedLinks: [
    { label: "Pricing", href: "/pricing" },
    { label: "Brand profile", href: "/features/brand-profile" },
    { label: "Founders use case", href: "/use-cases/founders" },
    { label: "Build a content system", href: "/blog/how-to-build-a-content-system-for-your-business" },
  ],
} as const;
