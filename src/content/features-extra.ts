/** Legacy: superseded by src/content/landing-pages/features-pages.ts. Not used by routes. Kept for reference. */
export type FeaturePageContent = {
  slug: string;
  seoTitle: string;
  description: string;
  headline: string;
  subheadline: string;
  includesHeading: string;
  includesCards: readonly { title: string; body: string }[];
  problemHeading: string;
  problemCopy: string;
  comparisonTable: {
    headers: [string, string];
    rows: readonly [string, string][];
  };
  cta: string;
  relatedLinks: readonly { label: string; href: string }[];
};

export const extraFeaturePages: readonly FeaturePageContent[] = [
  {
    slug: "linkedin-content-system",
    seoTitle: "LinkedIn Content System | CRISP Content Engine",
    description:
      "Build a LinkedIn content system with brand profiles, strategy-led drafts, review workflows and auto-publishing on supported CRISP plans.",
    headline: "A LinkedIn content system built around your brand",
    subheadline:
      "LinkedIn works best when content is consistent, specific and connected to a clear point of view. CRISP Content Engine helps users create LinkedIn drafts from brand context, review them before publishing and use auto-publishing on supported paid plans.",
    includesHeading: "What a LinkedIn content system includes",
    includesCards: [
      { title: "Brand profile", body: "Tone, audience, offers and content rules guide every draft." },
      { title: "Founder or consultant voice", body: "Content sounds like the person behind the business." },
      { title: "Content themes", body: "Repeatable topics reduce the weekly restart." },
      { title: "LinkedIn drafts", body: "Channel-ready posts generated from strategy." },
      { title: "Review workflow", body: "Approve or edit before anything moves forward." },
      { title: "Auto-publishing on supported plans", body: "Creator, Growth and Pro include LinkedIn auto-publishing where connected." },
    ],
    problemHeading: "Why LinkedIn consistency is difficult",
    problemCopy:
      "LinkedIn consistency is not only a writing problem. It is a workflow problem. The content needs a point of view, a set of themes, a realistic rhythm and enough structure to keep publishing when other work gets busy.",
    comparisonTable: {
      headers: ["Problem", "CRISP answer"],
      rows: [
        ["Starting from scratch", "Brand profile and reusable themes"],
        ["Generic posts", "Tone, audience and offer context"],
        ["Missed publishing rhythm", "Draft queue and review flow"],
        ["Manual friction", "Auto-publishing on Creator, Growth and Pro where connected"],
        ["No connection to broader strategy", "LinkedIn content sits alongside X, Meta and blog workflows"],
      ],
    },
    cta: "Start free and build your LinkedIn rhythm",
    relatedLinks: [
      { label: "LinkedIn consistency guide", href: "/blog/how-to-stay-consistent-on-linkedin" },
      { label: "Founders use case", href: "/use-cases/founders" },
      { label: "Brand profile", href: "/features/brand-profile" },
      { label: "Pricing", href: "/pricing" },
    ],
  },
  {
    slug: "ai-image-prompts",
    seoTitle: "AI Image Prompts for Brand Content | CRISP Content Engine",
    description:
      "Create AI image prompts and visual direction that match your post, platform and brand instead of relying on generic stock-style creative.",
    headline: "AI image prompts that support the message, not generic decoration",
    subheadline:
      "Visual content works better when the image direction is connected to the post, platform and brand. CRISP Content Engine includes AI image prompts to help users move from written content to stronger creative direction without relying on generic stock visuals.",
    includesHeading: "What the prompt layer considers",
    includesCards: [
      { title: "Post topic", body: "The prompt reflects what the content is actually about." },
      { title: "Platform", body: "Visual direction adapts to LinkedIn, Meta or other channels." },
      { title: "Brand tone", body: "Style cues come from the brand profile." },
      { title: "Visual style", body: "Direction stays closer to the brand than random stock." },
      { title: "Image purpose", body: "Support awareness, education or campaign goals." },
      { title: "Avoidances", body: "Exclusions reduce off-brand visual choices." },
    ],
    problemHeading: "Why image prompts matter",
    problemCopy:
      "A good image prompt can help turn an article, LinkedIn post or Meta caption into a more complete creative direction. The goal is not to make every image look the same, but to make the visual feel connected to the message.",
    comparisonTable: {
      headers: ["Without prompt direction", "With CRISP image prompts"],
      rows: [
        ["Generic visual ideas", "Prompt tied to the post"],
        ["Weak platform fit", "Platform-aware direction"],
        ["Disconnected style", "Brand-informed prompt"],
        ["Repeated stock clichés", "Clearer visual avoidances"],
        ["More manual work", "Draft image direction included"],
      ],
    },
    cta: "Start free and create content with image prompts",
    relatedLinks: [
      { label: "Free content planner", href: "/free-ai-content-planner" },
      { label: "Brand profile", href: "/features/brand-profile" },
      { label: "Content queue", href: "/features/content-queue" },
      { label: "Pricing", href: "/pricing" },
    ],
  },
] as const;

export function getFeaturePage(slug: string) {
  return extraFeaturePages.find((page) => page.slug === slug);
}
