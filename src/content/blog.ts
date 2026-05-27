import { additionalBlogPosts } from "./blog-extra";

export type ArticleBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string; id?: string }
  | { type: "cards"; items: { title: string; body: string }[] }
  | { type: "table"; headers: readonly string[]; rows: readonly (readonly string[])[] }
  | { type: "steps"; items: { title: string; body: string }[] }
  | {
      type: "ideaOutputs";
      core: string;
      outputs: { channel: string; format: string }[];
    }
  | { type: "faq"; items: { question: string; answer: string }[] };

export type BlogPost = {
  slug: string;
  title: string;
  seoTitle: string;
  description: string;
  category: string;
  excerpt: string;
  publishedAt: string;
  cta: string;
  ctaHref?: string;
  featured?: boolean;
  relatedLinks?: readonly { label: string; href: string }[];
  blocks: ArticleBlock[];
};

const coreBlogPosts: BlogPost[] = [
  {
    slug: "content-system-for-founders",
    title: "A content system for founders who need to stay visible without burning out",
    seoTitle: "A Content System for Founders Who Need to Stay Visible | CRISP Content Engine",
    description:
      "Learn how founders can build a practical content system that turns ideas, offers and expertise into consistent visibility without burning out.",
    category: "Founder marketing",
    excerpt:
      "Founders usually do not have a shortage of ideas. The harder problem is turning those ideas into a steady publishing rhythm while running the business.",
    publishedAt: "2026-05-01",
    cta: "Start free and build your founder content rhythm",
    relatedLinks: [
      { label: "Founders use case", href: "/use-cases/founders" },
      { label: "Brand profile", href: "/features/brand-profile" },
      { label: "LinkedIn system", href: "/features/linkedin-content-system" },
      { label: "Pricing", href: "/pricing" },
    ],
    blocks: [
      {
        type: "paragraph",
        text: "Founders usually do not have a shortage of ideas. The harder problem is turning those ideas into a steady publishing rhythm while also managing sales, delivery, hiring, operations and the daily pressure of running the business.",
      },
      {
        type: "paragraph",
        text: "A practical content system gives that work a structure. It helps the founder capture the brand, clarify the audience, connect the offer and turn recurring ideas into content that can be reviewed, reused and published with less friction.",
      },
      { type: "heading", text: "Why founder content breaks" },
      {
        type: "paragraph",
        text: "Founder content often starts strongly because the business has a clear story, a sharp opinion or a new offer to explain. The problem appears a few weeks later, when the content process depends on memory, spare time and the energy to start again from a blank page.",
      },
      {
        type: "cards",
        items: [
          { title: "The idea is in the founder's head", body: "Useful thinking never becomes a reusable asset." },
          { title: "The offer is not connected to the content", body: "Posts drift away from what the business is trying to sell." },
          { title: "The channel plan changes every week", body: "There is no rhythm, only reaction." },
          { title: "Drafts sound different each time", body: "The brand voice depends on whatever mood the week brings." },
          { title: "Publishing stops when client work gets busy", body: "Visibility disappears exactly when consistency matters most." },
        ],
      },
      { type: "heading", text: "What a founder content system needs" },
      {
        type: "table",
        headers: ["Part of the system", "What it does", "Why it matters"],
        rows: [
          ["Brand profile", "Stores voice, audience, offers and content rules", "Keeps the content connected to the business"],
          ["Content themes", "Turns expertise into repeatable topics", "Prevents the founder from chasing random ideas"],
          ["Channel workflow", "Shapes content for LinkedIn, X, Meta and blog", "Makes the same thinking useful in different formats"],
          ["Review process", "Keeps judgement before publishing", "Protects quality and trust"],
          ["Publishing rhythm", "Creates a realistic cadence", "Makes visibility easier to sustain"],
        ],
      },
      { type: "heading", text: "How CRISP helps" },
      {
        type: "paragraph",
        text: "CRISP Content Engine is designed to help founders build this rhythm without turning content into a second full-time job. The system starts with a brand profile, generates channel-ready drafts from that context and keeps work in a visible queue so the founder can review and approve content before it moves forward.",
      },
      { type: "heading", text: "A simple founder workflow" },
      {
        type: "steps",
        items: [
          { title: "Capture the brand", body: "Define tone, audience, offers and content rules once." },
          { title: "Choose the core themes", body: "Turn expertise into topics worth repeating." },
          { title: "Generate weekly drafts", body: "Create channel-ready content from strategy, not urgency." },
          { title: "Review before publishing", body: "Keep human judgement in the workflow." },
          { title: "Use feedback to improve the next cycle", body: "Make the rhythm sharper over time." },
        ],
      },
      {
        type: "paragraph",
        text: "A founder's content should not depend on whether there is enough spare time at the end of the week. When the brand, offer, ideas and workflow are connected, content becomes easier to sustain and more useful to the business.",
      },
      {
        type: "faq",
        items: [
          {
            question: "Can founders start without a credit card?",
            answer:
              "Yes. CRISP Starter is free forever and includes a brand profile, limited monthly exports and AI image prompts with no credit card required.",
          },
          {
            question: "Does CRISP auto-publish LinkedIn for founders?",
            answer:
              "LinkedIn auto-publishing is available on Creator, Growth and Pro where the account connection and plan support it. Starter uses export workflows.",
          },
        ],
      },
    ],
  },
  {
    slug: "ai-content-generator-vs-content-system",
    title: "AI content generator vs content system, why the difference matters",
    seoTitle: "AI Content Generator vs Content System | CRISP Content Engine",
    description:
      "Understand the difference between using an AI content generator for isolated drafts and using a content system to build consistent brand visibility.",
    category: "Content systems",
    excerpt:
      "AI content generators can be useful for isolated drafts. A content system solves a different problem: consistency across weeks, channels and campaigns.",
    publishedAt: "2026-05-08",
    cta: "Start free and build a content system around your brand",
    relatedLinks: [
      { label: "ChatGPT vs CRISP", href: "/compare/chatgpt-vs-crisp-content-engine" },
      { label: "Content queue", href: "/features/content-queue" },
      { label: "Build a content system", href: "/blog/how-to-build-a-content-system-for-your-business" },
    ],
    blocks: [
      {
        type: "paragraph",
        text: "AI content generators can be useful, especially when the job is to produce a quick draft, explore an angle or rewrite a piece of content. The limitation appears when a business needs consistency across weeks, channels and campaigns.",
      },
      {
        type: "paragraph",
        text: "A content system solves a different problem. It connects the brand, audience, offer, content queue, review process and publishing rhythm, so the work is not rebuilt from scratch every time someone needs a post.",
      },
      { type: "heading", text: "What an AI content generator is good at" },
      {
        type: "paragraph",
        text: "AI tools are useful when the task is narrow and the context is clear. They can help draft, summarise, reframe, expand and generate options quickly, especially when a user already knows what they want.",
      },
      {
        type: "cards",
        items: [
          { title: "Drafting", body: "Turn a prompt into a first version quickly." },
          { title: "Variation", body: "Explore alternate hooks, angles or formats." },
          { title: "Summaries", body: "Condense longer material into shorter outputs." },
          { title: "Hooks", body: "Generate opening lines and attention lines." },
          { title: "Repurposing", body: "Adapt one idea into another format." },
          { title: "Image prompt ideas", body: "Support visual direction for campaigns." },
        ],
      },
      { type: "heading", text: "Where a generator falls short" },
      {
        type: "paragraph",
        text: "The challenge is that most businesses do not only need more words. They need content that connects to a brand, supports an offer, reaches the right audience and moves through a workflow that someone can maintain.",
      },
      {
        type: "table",
        headers: ["Generator problem", "Business impact", "System answer"],
        rows: [
          ["Context has to be repeated", "Drafts become inconsistent", "Brand profile stores context once"],
          ["Prompts change every time", "Output quality varies", "Strategy guides generation"],
          ["Review happens elsewhere", "Approval becomes messy", "Review sits in the queue"],
          ["Publishing is disconnected", "Content gets stuck", "Export or publish paths are visible"],
          ["No memory of the queue", "Ideas are repeated or lost", "Work stays organised in one place"],
        ],
      },
      { type: "heading", text: "What a content system adds" },
      {
        type: "paragraph",
        text: "A content system gives AI a structured place to work. It stores brand context, organises the queue, separates channels, supports review and helps the user maintain a rhythm.",
      },
      {
        type: "cards",
        items: [
          { title: "Brand memory", body: "Voice, audience and offers stay connected." },
          { title: "Strategy layer", body: "Themes and objectives guide what gets created." },
          { title: "Content queue", body: "Drafts, statuses and next steps stay visible." },
          { title: "Channel adaptation", body: "One idea can become LinkedIn, X, Meta and blog outputs." },
          { title: "Review workflow", body: "Human judgement stays in the process." },
          { title: "Publishing path", body: "Export and auto-publish match the plan and platform." },
        ],
      },
      { type: "heading", text: "Where CRISP fits" },
      {
        type: "paragraph",
        text: "CRISP Content Engine uses AI inside a broader content workflow. The aim is not to replace judgement, but to reduce repeated setup work and help users keep publishing useful, brand-aligned content with less friction.",
      },
      {
        type: "paragraph",
        text: "An AI content generator can help create a draft. A content system helps a brand keep showing up with a clearer message, a stronger workflow and a more sustainable rhythm.",
      },
      {
        type: "faq",
        items: [
          {
            question: "Can I use ChatGPT and CRISP together?",
            answer:
              "Yes. Many users keep a general AI assistant for brainstorming while CRISP handles brand context, queue, review and publishing workflow for repeatable content.",
          },
          {
            question: "Is CRISP just another AI writer?",
            answer:
              "No. CRISP is a content system built around brand profiles, queues, review and publishing paths. AI supports drafting inside that workflow.",
          },
        ],
      },
    ],
  },
  {
    slug: "how-to-stay-consistent-on-linkedin",
    title: "How to stay consistent on LinkedIn without burning out",
    seoTitle: "How to Stay Consistent on LinkedIn Without Burning Out | CRISP Content Engine",
    description:
      "A practical guide for founders and consultants who want to stay consistent on LinkedIn without starting from scratch every week.",
    category: "LinkedIn consistency",
    excerpt:
      "LinkedIn consistency is difficult because it asks for more than writing. It asks for a point of view, a rhythm and a set of repeatable themes.",
    publishedAt: "2026-05-15",
    cta: "Start free and build your LinkedIn content rhythm",
    relatedLinks: [
      { label: "LinkedIn content system", href: "/features/linkedin-content-system" },
      { label: "Turn one idea into a month", href: "/blog/turn-one-idea-into-a-month-of-content" },
      { label: "Consultants use case", href: "/use-cases/consultants" },
    ],
    blocks: [
      {
        type: "paragraph",
        text: "LinkedIn consistency is difficult because it asks for more than writing. It asks for a point of view, a rhythm, a set of repeatable themes and the discipline to keep showing up when client work, delivery and operations compete for attention.",
      },
      {
        type: "paragraph",
        text: "The solution is not to force yourself to post more through willpower. A better approach is to build a system that makes useful content easier to create, review and publish.",
      },
      { type: "heading", text: "Why LinkedIn consistency is hard" },
      {
        type: "cards",
        items: [
          { title: "The content starts from a blank page", body: "Every week feels like a restart." },
          { title: "The audience is too broad", body: "Posts become generic because the message is unclear." },
          { title: "The offer is not connected", body: "Visibility does not support demand." },
          { title: "The founder's ideas are not captured", body: "Good thinking disappears into notes and calls." },
          { title: "The cadence is unrealistic", body: "Ambition outruns capacity." },
          { title: "Review takes too long", body: "Publishing slips when the week gets busy." },
        ],
      },
      { type: "heading", text: "Build a repeatable LinkedIn rhythm" },
      {
        type: "table",
        headers: ["System part", "Practical action", "Result"],
        rows: [
          ["Brand profile", "Define tone, audience and offer", "Posts sound more consistent"],
          ["Content pillars", "Choose recurring themes", "Ideas become easier to find"],
          ["Weekly queue", "Prepare drafts in batches", "Publishing depends less on mood"],
          ["Review window", "Edit before the week starts", "Quality improves without daily pressure"],
          ["Publishing path", "Export or auto-publish where supported", "Content moves forward reliably"],
        ],
      },
      { type: "heading", text: "Turn one idea into several posts" },
      {
        type: "paragraph",
        text: "A strong LinkedIn rhythm does not require a completely new idea every day. One useful thought can become a founder story, a practical lesson, a short framework, a client-facing insight and a longer blog angle.",
      },
      {
        type: "ideaOutputs",
        core: "Marketing works best when it is built as a system.",
        outputs: [
          { channel: "LinkedIn", format: "A founder-style post explaining why scattered content stops compounding." },
          { channel: "X", format: "A short thread on why faster writing does not solve inconsistent strategy." },
          { channel: "Blog", format: "A deeper article on content systems for small businesses." },
          { channel: "Meta", format: "A visual-first post showing the difference between scattered content and a connected workflow." },
        ],
      },
      { type: "heading", text: "How CRISP helps LinkedIn consistency" },
      {
        type: "paragraph",
        text: "CRISP Content Engine helps users build a brand profile, generate LinkedIn drafts from strategy and move approved work into a practical publishing rhythm. Creator, Growth and Pro plans include LinkedIn auto-publishing where the account connection and plan support it.",
      },
      {
        type: "paragraph",
        text: "LinkedIn consistency becomes easier when the system does more of the preparation. The user still provides judgement and direction, but the blank page, scattered notes and weekly restart are no longer carrying the whole process.",
      },
      {
        type: "faq",
        items: [
          {
            question: "How often should founders post on LinkedIn?",
            answer:
              "The right cadence depends on capacity and strategy. CRISP helps users set a realistic rhythm based on plan limits and review workflow rather than forcing daily posting.",
          },
          {
            question: "Does CRISP write LinkedIn posts automatically without review?",
            answer:
              "No. CRISP supports human review before export or auto-publishing. The user approves what fits the brand and the channel.",
          },
        ],
      },
    ],
  },
];

export const blogPosts: BlogPost[] = [...coreBlogPosts, ...additionalBlogPosts];

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}

export function extractArticleFaq(blocks: ArticleBlock[]) {
  return blocks
    .filter((block): block is Extract<ArticleBlock, { type: "faq" }> => block.type === "faq")
    .flatMap((block) => block.items);
}
