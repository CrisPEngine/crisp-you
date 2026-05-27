import type { LandingPageContent } from "@/content/landing-page";

export const featureLandingPages: readonly LandingPageContent[] = [
  {
    path: "/features/linkedin-content-system",
    seoTitle: "LinkedIn Content System | CRISP Content Engine",
    description:
      "Build a LinkedIn content system with brand profiles, strategy-led drafts, review workflows and auto-publishing on supported CRISP plans.",
    eyebrow: "LinkedIn Content System",
    headline: "A LinkedIn content system built around your brand",
    heroCopy:
      "LinkedIn works best when content is consistent, specific and connected to a clear point of view. CRISP Content Engine helps users create LinkedIn drafts from brand context, review them before publishing and use auto-publishing on supported paid plans.",
    primaryCta: "Start free",
    primaryCtaHref: "start",
    primaryCtaEvent: "cce_start_free_click",
    sections: [
      {
        type: "cards",
        heading: "What a LinkedIn content system includes",
        cards: [
          { title: "Brand profile", body: "Tone, audience, offers and content rules guide every draft." },
          { title: "Founder or consultant voice", body: "Content sounds like the person behind the business." },
          { title: "Content themes", body: "Repeatable topics reduce the weekly restart." },
          { title: "LinkedIn drafts", body: "Channel-ready posts generated from strategy." },
          { title: "Review workflow", body: "Approve or edit before anything moves forward." },
          {
            title: "Auto-publishing on supported plans",
            body: "Creator, Growth and Pro include LinkedIn auto-publishing where connected.",
          },
        ],
      },
      {
        type: "table",
        heading: "How the system solves the real problems",
        table: {
          headers: ["Problem", "CRISP response", "Result"],
          rows: [
            [
              "Starting from scratch each week",
              "Brand profile and reusable themes",
              "Faster drafting with less friction",
            ],
            [
              "Generic posts that miss the brand",
              "Tone, audience and offer context",
              "Content that sounds like the business",
            ],
            [
              "Missed publishing rhythm",
              "Draft queue and review flow",
              "Consistent presence without manual effort",
            ],
            [
              "Manual publishing friction",
              "Auto-publishing on Creator, Growth and Pro where connected",
              "Less time spent on logistics",
            ],
            [
              "No connection to broader strategy",
              "LinkedIn content sits alongside X, Meta and blog workflows",
              "Aligned output across channels",
            ],
          ],
        },
      },
      {
        type: "cards",
        heading: "Which plan fits your LinkedIn needs",
        body: "CRISP plans scale with the volume and automation you need for LinkedIn.",
        cards: [
          {
            title: "Free",
            body: "Four LinkedIn posts per month with export. Build your rhythm without a credit card.",
          },
          {
            title: "Creator",
            body: "More volume and LinkedIn auto-publishing where connected.",
          },
          {
            title: "Growth",
            body: "Expanded channel support including Meta and higher content volume.",
          },
          {
            title: "Pro",
            body: "Full volume, multiple brands and all publishing paths.",
          },
        ],
      },
    ],
    faq: [
      {
        question: "Does CRISP auto-publish directly to LinkedIn?",
        answer:
          "LinkedIn auto-publishing is available on Creator, Growth and Pro plans where a LinkedIn connection is active. Free plan users can export and publish manually.",
      },
      {
        question: "How does CRISP use my brand profile for LinkedIn?",
        answer:
          "The brand profile stores your tone, target audience, offers and content rules. Every LinkedIn draft is generated using this context so the output sounds like your business rather than a generic post.",
      },
      {
        question: "Can I review posts before they are published?",
        answer:
          "Yes. Every draft goes through a review workflow before anything is exported or published. You can approve, edit or discard each post before it moves forward.",
      },
    ],
    finalCtaHeading: "Start building your LinkedIn content system",
    finalCtaCopy:
      "Create a brand profile, generate your first drafts and build a publishing rhythm that holds over time.",
    finalCta: "Start free",
    finalCtaHref: "start",
    finalCtaEvent: "cce_start_free_click",
    relatedLinks: [
      { label: "LinkedIn consistency guide", href: "/blog/how-to-stay-consistent-on-linkedin" },
      { label: "Founders use case", href: "/use-cases/founders" },
      { label: "Brand profile", href: "/features/brand-profile" },
      { label: "Pricing", href: "/pricing" },
    ],
  },
  {
    path: "/features/ai-image-prompts",
    seoTitle: "AI Image Prompts for Brand Content | CRISP Content Engine",
    description:
      "Create AI image prompts and visual direction that match your post, platform and brand instead of relying on generic stock-style creative.",
    eyebrow: "AI Image Prompts",
    headline: "AI image prompts that support the message, not generic decoration",
    heroCopy:
      "Visual content works better when the image direction is connected to the post, platform and brand. CRISP Content Engine includes AI image prompts to help users move from written content to stronger creative direction without relying on generic stock visuals.",
    primaryCta: "Start free",
    primaryCtaHref: "start",
    primaryCtaEvent: "cce_start_free_click",
    sections: [
      {
        type: "cards",
        heading: "What the prompt layer considers",
        cards: [
          { title: "Post topic", body: "The prompt reflects what the content is actually about." },
          { title: "Platform", body: "Visual direction adapts to LinkedIn, Meta or other channels." },
          { title: "Brand tone", body: "Style cues come from the brand profile." },
          { title: "Visual style", body: "Direction stays closer to the brand than random stock." },
          { title: "Image purpose", body: "Support awareness, education or campaign goals." },
          { title: "Avoidances", body: "Exclusions reduce off-brand visual choices." },
        ],
      },
      {
        type: "table",
        heading: "What changes when image direction is connected to the content",
        table: {
          headers: ["Without prompt direction", "With CRISP image prompts", "Why it matters"],
          rows: [
            [
              "Generic visual ideas",
              "Prompt tied to the post",
              "The image supports the message rather than sitting beside it",
            ],
            [
              "Weak platform fit",
              "Platform-aware direction",
              "Creative decisions match where the content will appear",
            ],
            [
              "Disconnected style",
              "Brand-informed prompt",
              "Visuals feel like part of the brand, not a random choice",
            ],
            [
              "Repeated stock clichés",
              "Clearer visual avoidances",
              "Prompts exclude the generic options by design",
            ],
            [
              "More manual work",
              "Draft image direction included",
              "Visual thinking is part of the content workflow",
            ],
          ],
        },
      },
      {
        type: "steps",
        heading: "How image prompts fit into the workflow",
        body: "AI image prompts are generated alongside the written content so visual direction is ready when the draft is ready.",
        steps: [
          {
            title: "Draft your content",
            body: "Generate a post, article or caption using your brand profile and chosen channel.",
          },
          {
            title: "Review the image prompt",
            body: "CRISP produces an AI image prompt connected to the content topic, platform and brand tone.",
          },
          {
            title: "Use or adjust the direction",
            body: "Take the prompt into your preferred image tool or edit it to match a specific brief.",
          },
          {
            title: "Publish with aligned visuals",
            body: "Post with a visual that supports the message rather than distracting from it.",
          },
        ],
      },
    ],
    faq: [
      {
        question: "What tool should I use with the image prompts?",
        answer:
          "CRISP provides the image prompt. You can take it into any AI image generator you prefer, such as Midjourney, DALL-E or Adobe Firefly. The prompt gives you structured direction rather than a vague request.",
      },
      {
        question: "Are image prompts available on the free plan?",
        answer:
          "Yes. AI image prompts are included on the free plan alongside LinkedIn and X post exports. You can test the workflow before upgrading.",
      },
      {
        question: "How does the prompt know what style to suggest?",
        answer:
          "The prompt draws on the brand profile, post topic, platform and any visual tone cues you have set. The output is specific to the content rather than a generic image request.",
      },
    ],
    finalCtaHeading: "Create content with image direction built in",
    finalCtaCopy:
      "Start with a brand profile, generate your first posts and get image prompts that match the message and the platform.",
    finalCta: "Start free",
    finalCtaHref: "start",
    finalCtaEvent: "cce_start_free_click",
    relatedLinks: [
      { label: "Free content planner", href: "/free-ai-content-planner" },
      { label: "Brand profile", href: "/features/brand-profile" },
      { label: "Content queue", href: "/features/content-queue" },
      { label: "Pricing", href: "/pricing" },
    ],
  },
] as const;

export function getFeatureLandingPage(slug: string) {
  return featureLandingPages.find((page) => page.path.endsWith("/" + slug));
}

export function getFeatureLandingSlugs() {
  return featureLandingPages.map((page) => page.path.split("/").pop() as string);
}
