import type { LandingPageContent } from "@/content/landing-page";

export const compareLandingPages: readonly LandingPageContent[] = [
  {
    path: "/compare/chatgpt-vs-crisp-content-engine",
    seoTitle: "ChatGPT vs CRISP Content Engine | Which Is Better for Consistent Content?",
    description:
      "Compare ChatGPT and CRISP Content Engine for founders, consultants and teams that need brand context, content queues, review workflows and consistent publishing.",
    eyebrow: "Comparison",
    headline: "ChatGPT vs CRISP Content Engine",
    heroCopy:
      "ChatGPT is useful for many individual tasks, including drafting, rewriting and exploring ideas. CRISP Content Engine is built for a different job, helping a brand keep its content context, queue, review process and publishing rhythm connected over time.",
    primaryCta: "Start free",
    primaryCtaHref: "start",
    primaryCtaEvent: "cce_start_free_click",
    sections: [
      {
        type: "table",
        heading: "How they compare across the content workflow",
        table: {
          headers: ["Category", "ChatGPT", "CRISP Content Engine"],
          rows: [
            ["Starting point", "A prompt", "A brand profile"],
            ["Best use", "Flexible one-off assistance", "Repeatable content workflow"],
            ["Brand context", "Supplied by the user each time", "Stored in the system"],
            ["Content queue", "Managed elsewhere", "Built into the workflow"],
            ["Review", "Happens outside the tool", "Part of the content process"],
            ["Publishing", "Managed elsewhere", "Export and auto-publishing paths where supported"],
            ["Best fit", "General thinking and drafting", "Consistent visibility across channels"],
          ],
        },
      },
      {
        type: "cards",
        heading: "When ChatGPT is enough",
        body: "ChatGPT can be the right option when the task is narrow, the context is simple and the user only needs a single draft or idea.",
        cards: [
          {
            title: "One-off drafts",
            body: "You need a single piece of content and have the context ready to paste in.",
          },
          {
            title: "Exploratory thinking",
            body: "You are brainstorming ideas and want flexible, open-ended responses.",
          },
          {
            title: "Rewriting existing copy",
            body: "You have a draft and want help tightening or adjusting the tone.",
          },
        ],
      },
      {
        type: "cards",
        heading: "When CRISP makes more sense",
        body: "CRISP is designed for users who need to keep content moving across weeks and channels.",
        cards: [
          {
            title: "Repeatable publishing rhythm",
            body: "You need to produce content consistently and want a system that holds the context between sessions.",
          },
          {
            title: "Multiple channels",
            body: "You are publishing across LinkedIn, X, blog and Meta and need a unified workflow.",
          },
          {
            title: "Brand consistency over time",
            body: "You want every piece of content to reflect the same tone, audience and positioning without reloading context each time.",
          },
        ],
      },
    ],
    faq: [
      {
        question: "Can I use ChatGPT inside CRISP?",
        answer:
          "CRISP is a standalone content engine with its own generation layer. It is not built on top of ChatGPT, though the workflows serve different purposes and some users use both.",
      },
      {
        question: "Is CRISP more expensive than ChatGPT?",
        answer:
          "CRISP has a free plan that includes four LinkedIn posts, four X posts and one blog outline per month. Paid plans start from a low monthly rate. The comparison depends on whether you are looking for a general assistant or a dedicated content system.",
      },
      {
        question: "Why does brand context matter so much in a content tool?",
        answer:
          "Without stored brand context, every content session starts from scratch. CRISP holds your tone, audience, offers and content rules so each draft is already aligned to your positioning without you needing to re-explain it.",
      },
    ],
    finalCtaHeading: "Build a content system around your brand",
    finalCtaCopy:
      "Start free and see how a workflow built for consistency compares to starting from a prompt each time.",
    finalCta: "Start free",
    finalCtaHref: "start",
    finalCtaEvent: "cce_start_free_click",
    relatedLinks: [
      { label: "AI generator vs content system", href: "/blog/ai-content-generator-vs-content-system" },
      { label: "Brand profile", href: "/features/brand-profile" },
      { label: "Pricing", href: "/pricing" },
    ],
  },
  {
    path: "/compare/content-calendar-vs-content-engine",
    seoTitle: "Content Calendar vs Content Engine | CRISP Content Engine",
    description:
      "Learn the difference between planning content in a calendar and using a content engine to create, review, export and publish brand-aligned content.",
    eyebrow: "Comparison",
    headline: "Content calendar vs content engine",
    heroCopy:
      "A content calendar helps organise when something should be published. A content engine helps create the system behind the calendar, including brand context, content generation, review workflow and channel-specific outputs.",
    primaryCta: "Start free",
    primaryCtaHref: "start",
    primaryCtaEvent: "cce_start_free_click",
    sections: [
      {
        type: "table",
        heading: "How a calendar and a content engine differ",
        table: {
          headers: ["Category", "Content calendar", "Content engine"],
          rows: [
            ["Purpose", "Plans dates", "Connects strategy, drafts and publishing"],
            ["Content creation", "Usually happens elsewhere", "Built into the workflow"],
            ["Brand context", "Stored separately", "Connected to generation"],
            ["Review", "Managed manually", "Built into the queue"],
            ["Channel adaptation", "Planned by the user", "Supported inside the system"],
            ["Best fit", "Scheduling visibility", "Repeatable content operations"],
          ],
        },
      },
      {
        type: "cards",
        heading: "Why a calendar is not enough on its own",
        body: "A calendar can show gaps, but it does not solve the work required to fill those gaps.",
        cards: [
          {
            title: "Gaps do not fill themselves",
            body: "A calendar shows what is missing but does not help create the content to fill the space.",
          },
          {
            title: "Brand context lives elsewhere",
            body: "Most calendar tools do not store tone, audience or positioning, so every piece starts without that grounding.",
          },
          {
            title: "Review is a separate step",
            body: "Approvals and edits happen outside the calendar, which adds friction to the publishing process.",
          },
        ],
      },
      {
        type: "cards",
        heading: "Why CRISP works as a content engine",
        body: "CRISP connects the brand profile, content queue and publishing paths so the calendar view becomes part of a larger workflow.",
        cards: [
          {
            title: "Strategy connected to creation",
            body: "Brand context, themes and audience sit alongside the drafting workflow rather than in a separate document.",
          },
          {
            title: "Queue and review built in",
            body: "Content moves through a structured process from draft to approval to export or publishing.",
          },
          {
            title: "Channel-specific outputs",
            body: "LinkedIn, X, blog and Meta outputs come from the same strategy rather than being managed in separate places.",
          },
        ],
      },
    ],
    faq: [
      {
        question: "Can I still use a content calendar alongside CRISP?",
        answer:
          "Yes. CRISP does not replace a calendar tool if you need one. The content engine handles the creation and review workflow, and you can use a separate calendar for broader scheduling visibility if that is useful.",
      },
      {
        question: "Does CRISP have a calendar view?",
        answer:
          "CRISP includes a content queue with scheduling support. The focus is on the creation and review workflow rather than a visual calendar interface.",
      },
      {
        question: "What is the main advantage of a content engine over a calendar?",
        answer:
          "A content engine connects strategy, drafting, review and publishing in one place. A calendar organises dates but relies on separate tools for everything else. The engine reduces the number of steps and the amount of context-switching in a content workflow.",
      },
    ],
    finalCtaHeading: "Build your content engine",
    finalCtaCopy:
      "Start free and move from planning in a calendar to running a connected content workflow.",
    finalCta: "Start free",
    finalCtaHref: "start",
    finalCtaEvent: "cce_start_free_click",
    relatedLinks: [
      { label: "Calendar vs engine article", href: "/blog/content-calendar-vs-content-engine" },
      { label: "How it works", href: "/how-it-works" },
      { label: "Content queue", href: "/features/content-queue" },
    ],
  },
] as const;

export function getCompareLandingPage(slug: string) {
  return compareLandingPages.find((page) => page.path.endsWith("/" + slug));
}

export function getCompareLandingSlugs() {
  return compareLandingPages.map((page) => page.path.split("/").pop() as string);
}
