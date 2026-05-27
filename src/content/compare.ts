export type ComparePageContent = {
  slug: string;
  seoTitle: string;
  description: string;
  headline: string;
  subheadline: string;
  tableHeaders: [string, string, string];
  tableRows: readonly [string, string, string][];
  sectionAHeading: string;
  sectionACopy: string;
  sectionBHeading: string;
  sectionBCopy: string;
  cta: string;
  relatedLinks: readonly { label: string; href: string }[];
};

export const comparePages: readonly ComparePageContent[] = [
  {
    slug: "chatgpt-vs-crisp-content-engine",
    seoTitle: "ChatGPT vs CRISP Content Engine | Which Is Better for Consistent Content?",
    description:
      "Compare ChatGPT and CRISP Content Engine for founders, consultants and teams that need brand context, content queues, review workflows and consistent publishing.",
    headline: "ChatGPT vs CRISP Content Engine",
    subheadline:
      "ChatGPT is useful for many individual tasks, including drafting, rewriting and exploring ideas. CRISP Content Engine is built for a different job, helping a brand keep its content context, queue, review process and publishing rhythm connected over time.",
    tableHeaders: ["Category", "ChatGPT", "CRISP Content Engine"],
    tableRows: [
      ["Starting point", "A prompt", "A brand profile"],
      ["Best use", "Flexible one-off assistance", "Repeatable content workflow"],
      ["Brand context", "Supplied by the user each time", "Stored in the system"],
      ["Content queue", "Managed elsewhere", "Built into the workflow"],
      ["Review", "Happens outside the tool", "Part of the content process"],
      ["Publishing", "Managed elsewhere", "Export and auto-publishing paths where supported"],
      ["Best fit", "General thinking and drafting", "Consistent visibility across channels"],
    ],
    sectionAHeading: "When ChatGPT is enough",
    sectionACopy:
      "ChatGPT can be the right option when the task is narrow, the context is simple and the user only needs a single draft or idea. It remains useful for brainstorming and flexible thinking.",
    sectionBHeading: "When CRISP makes more sense",
    sectionBCopy:
      "CRISP is designed for users who need to keep content moving across weeks and channels. The product is useful when brand context, workflow, review and publishing rhythm matter as much as the draft itself.",
    cta: "Start free and build a content system around your brand",
    relatedLinks: [
      { label: "AI generator vs content system", href: "/blog/ai-content-generator-vs-content-system" },
      { label: "Brand profile", href: "/features/brand-profile" },
      { label: "Pricing", href: "/pricing" },
    ],
  },
  {
    slug: "content-calendar-vs-content-engine",
    seoTitle: "Content Calendar vs Content Engine | CRISP Content Engine",
    description:
      "Learn the difference between planning content in a calendar and using a content engine to create, review, export and publish brand-aligned content.",
    headline: "Content calendar vs content engine",
    subheadline:
      "A content calendar helps organise when something should be published. A content engine helps create the system behind the calendar, including brand context, content generation, review workflow and channel-specific outputs.",
    tableHeaders: ["Category", "Content calendar", "Content engine"],
    tableRows: [
      ["Purpose", "Plans dates", "Connects strategy, drafts and publishing"],
      ["Content creation", "Usually happens elsewhere", "Built into the workflow"],
      ["Brand context", "Stored separately", "Connected to generation"],
      ["Review", "Managed manually", "Built into the queue"],
      ["Channel adaptation", "Planned by the user", "Supported inside the system"],
      ["Best fit", "Scheduling visibility", "Repeatable content operations"],
    ],
    sectionAHeading: "Why a calendar is not enough",
    sectionACopy:
      "A calendar can show gaps, but it does not solve the work required to fill those gaps. The business still needs ideas, drafts, review, channel formatting and publishing decisions.",
    sectionBHeading: "Why CRISP works as a content engine",
    sectionBCopy:
      "CRISP connects the brand profile, content queue and publishing paths, so the calendar view becomes part of a larger workflow rather than the whole process.",
    cta: "Start free and build your content engine",
    relatedLinks: [
      { label: "Calendar vs engine article", href: "/blog/content-calendar-vs-content-engine" },
      { label: "How it works", href: "/how-it-works" },
      { label: "Content queue", href: "/features/content-queue" },
    ],
  },
] as const;

export function getComparePage(slug: string) {
  return comparePages.find((page) => page.slug === slug);
}
