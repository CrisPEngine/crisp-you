import { site } from "@/config/site";

export const siteConfig = {
  name: site.name,
  domain: site.domain,
  tagline:
    "A structured content system for founders, consultants, agencies and lean teams.",
  urls: {
    login: site.loginUrl,
    signup: site.startUrl,
    billing: site.billingUrl,
    contact: site.contactUrl,
  },
} as const;

export { navLinks, cta } from "@/config/site";
export { productLinks, footerColumns } from "@/content/navigation";

export const hero = {
  eyebrow: "CRISP Content Engine",
  headline: "Build consistent visibility without burning out",
  subheadline:
    "CRISP turns your ideas, offers and expertise into a structured content system for LinkedIn, X, Meta and blog, so you can keep showing up without starting from scratch every week.",
  supporting:
    "Start free, create your brand profile, generate useful drafts and move approved content into a rhythm you can actually maintain.",
  trustStrip:
    "Built for founders, consultants, agencies and lean teams who need practical content out the door, consistently.",
} as const;

export const problem = {
  heading: "The problem is not ideas. It is the weekly restart.",
  body: [
    "Most founders and small teams have plenty to say, but content becomes hard to sustain when every week starts from zero. Ideas live in notes, offers live somewhere else, publishing depends on available energy and the brand voice has to be rebuilt every time someone opens a blank document.",
    "CRISP gives the process structure. Your brand profile, content queue, review flow and channel outputs stay connected, so content becomes a repeatable system instead of another task that disappears when the business gets busy.",
  ],
  scattered: {
    title: "The scattered way",
    label: "Without a system",
    items: [
      "Notes scattered across docs",
      "Random prompts each time",
      "One-off posts that disappear",
      "Manual copy and paste",
      "No publishing rhythm",
    ],
  },
  crisp: {
    title: "The CRISP way",
    label: "With a content system",
    items: [
      "Brand profile in one place",
      "Strategy-led drafts",
      "Review queue you can see",
      "Export or auto-publish paths",
      "Repeatable weekly rhythm",
    ],
  },
} as const;

export const ideaBranch = {
  heading: "One idea should not become one post",
  body: "A useful idea can become a LinkedIn post, an X thread, a Meta caption and a blog angle. CRISP helps reuse the thinking without flattening every channel into the same message.",
  bridgeLabel: "One strategic idea becomes channel-ready content.",
  coreIdeaLabel: "Core idea",
  coreIdea: "Marketing works best when it is built as a system.",
  outputs: [
    {
      channel: "LinkedIn",
      format: "Founder-style authority post",
      preview:
        "Most content tools help you write faster. The harder problem is keeping every post connected to the same brand and commercial direction.",
      status: "Approved",
      publish: "Auto-publish",
    },
    {
      channel: "X",
      format: "Sharp short-form thread",
      preview:
        "Faster writing is not a content strategy. The harder problem is staying connected to the brand when every channel moves at a different speed.",
      status: "Review",
      publish: "Export",
    },
    {
      channel: "Meta",
      format: "Visual-first caption",
      preview:
        "Marketing is not a content sprint. It is a system. Here is what changes when you treat it that way.",
      status: "Draft",
      publish: "Auto-publish",
    },
    {
      channel: "Blog",
      format: "Long-form SEO article angle",
      preview:
        "Why marketing only compounds when it is built as a system, and how a brand profile changes every draft that follows it.",
      status: "Scheduled",
      publish: "Export",
    },
  ],
} as const;

export const product = {
  heading: "Everything starts with the brand profile",
  body: [
    "CRISP is designed to generate from context. The more clearly the system understands the brand, audience, offers, tone and content rules, the more useful the drafts become.",
  ],
  layers: [
    {
      id: "brand-memory",
      layer: "01 Foundation",
      title: "Brand memory",
      copy: "Store tone, audience, offers, keywords, exclusions and content rules so every draft starts with context, not a blank prompt.",
    },
    {
      id: "strategy",
      layer: "02 Strategy",
      title: "Strategy-led generation",
      copy: "Anchor content to campaigns, themes and objectives rather than disconnected prompts, so the message stays connected over time.",
    },
    {
      id: "queue",
      layer: "03 Production",
      title: "Content queue",
      copy: "Keep drafts, channels, objectives, image prompts and statuses visible in one workflow you can actually manage.",
    },
    {
      id: "review",
      layer: "04 Governance",
      title: "Human review",
      copy: "Approve, edit or reject every draft before it moves forward. Judgement stays with the user, not the model.",
    },
    {
      id: "publish",
      layer: "05 Distribution",
      title: "Export and auto-publishing paths",
      copy: "LinkedIn and Meta auto-publish where the plan supports it. X and blog use export, so nothing goes live without intent.",
    },
    {
      id: "image",
      layer: "06 Creative",
      title: "AI image prompts",
      copy: "Produce image direction and prompts that match the post, platform and brand instead of generic stock visuals.",
    },
    {
      id: "learn",
      layer: "07 Improvement",
      title: "Future reporting and learning",
      copy: "Reporting and presence scoring are on the roadmap, so the system gets sharper as the rhythm settles in.",
      soon: true,
    },
  ],
} as const;

export const workflow = {
  heading: "Plan. Generate. Review. Publish.",
  subheading:
    "Four steps the team can actually keep up with, plus a fifth that makes the system better the longer you use it.",
  steps: [
    {
      verb: "Plan",
      title: "Plan with structure",
      copy: "Turn scattered ideas into a clear brand profile, content themes and channel priorities.",
    },
    {
      verb: "Generate",
      title: "Generate with intent",
      copy: "Create drafts that connect to your voice, niche, goals and publishing rhythm.",
    },
    {
      verb: "Review",
      title: "Review before it goes live",
      copy: "Keep human judgement in the loop before anything is exported, scheduled or published.",
    },
    {
      verb: "Publish",
      title: "Publish when ready",
      copy: "Use export or auto-publishing depending on your plan, platform and connected accounts.",
    },
    {
      verb: "Improve",
      title: "Improve the rhythm",
      copy: "Use feedback and future reporting to make the system more useful over time.",
    },
  ],
} as const;

export const audience = {
  heading: "Built for operators who need visibility to keep moving",
  cta: "Find your workflow",
  cards: [
    {
      title: "Founders",
      role: "Solo or early team",
      copy: "Stay visible while running the business, without turning content into a second full-time job.",
      signals: ["Brand profile", "LinkedIn rhythm", "Auto-publish"],
    },
    {
      title: "Consultants",
      role: "Independent expertise",
      copy: "Turn expertise into regular thought leadership that feels useful, specific and commercially relevant.",
      signals: ["Authority posts", "Thread workflows", "Blog angles"],
    },
    {
      title: "Lean marketing teams",
      role: "2 to 6 people",
      copy: "Give strategy, drafting, approval and publishing one shared workflow.",
      signals: ["Shared queue", "Approval flow", "Multi-channel"],
    },
    {
      title: "Agencies",
      role: "Multi-brand operators",
      copy: "Manage more than one brand with clearer profiles, queues and approvals.",
      signals: ["Up to 3 brands", "Queue per brand", "Scale on request"],
    },
  ],
} as const;

export const differentiation = {
  heading: "CRISP is not trying to replace your judgement",
  body: "The product is designed to remove the repeated setup work around content. It helps with structure, drafting, formatting, review and publishing flow, but the user stays in control of what gets approved and what the brand should stand for.",
  typical: {
    label: "Generic AI writer",
    items: [
      "Prompt first",
      "One-off drafts",
      "Brand context depends on what you remember",
      "Review happens somewhere else",
      "Publishing is disconnected",
      "The goal is faster writing",
    ],
  },
  crisp: {
    label: "CRISP Content Engine",
    items: [
      "Brand profile first",
      "Connected content queue",
      "Stored rules, offers, audience and tone",
      "Review is part of the workflow",
      "Export and auto-publishing paths are connected",
      "The goal is consistent visibility",
    ],
  },
} as const;

export const channels = {
  heading: "One strategy, shaped for every channel",
  body: "Your audience does not experience your brand in one place. CRISP helps turn a core idea into platform-aware content across the channels that matter, while keeping the message connected.",
  note: "Some publishing paths may depend on account connection, platform permissions or current rollout stage.",
  items: [
    {
      name: "LinkedIn",
      copy: "Founder posts, consultant thought leadership, business updates and authority-building content.",
      publish: "Auto-publish on Creator and above",
    },
    {
      name: "X",
      copy: "Sharper observations, short-form ideas, threads and fast market commentary.",
      publish: "Export, ready to paste",
    },
    {
      name: "Meta",
      copy: "Visual-first awareness, community engagement and campaign support across Facebook and Instagram.",
      publish: "Auto-publish on Growth and above",
    },
    {
      name: "Blog",
      copy: "Long-form SEO articles, educational content, comparison pages and deeper strategic content.",
      publish: "Export, ready to publish",
    },
  ],
} as const;

export const systemHealth = {
  title: "Brand profile",
  status: "Ready",
  items: [
    { label: "Brand profile complete", status: "complete" as const },
    { label: "Audience defined", status: "complete" as const },
    { label: "Offers connected", status: "complete" as const },
    { label: "Queue active", status: "active" as const },
    { label: "Review flow ready", status: "ready" as const },
    { label: "Publishing rhythm set", status: "ready" as const },
  ],
} as const;

export const faq = {
  heading: "Questions before you start",
  items: [
    {
      question: "Is Starter really free forever?",
      answer:
        "Yes. Starter is a free forever plan for people who want to build consistency with structure before upgrading. It includes a limited monthly export capacity and never asks for a credit card.",
    },
    {
      question: "Do I need a credit card?",
      answer:
        "No. Starter does not require a credit card. You only enter payment details if you decide to upgrade to a paid plan.",
    },
    {
      question: "What does export mean?",
      answer:
        "Export means CRISP prepares the content as a ready-to-publish draft and you paste it into the platform. Nothing is sent to the channel automatically on export.",
    },
    {
      question: "What does auto-publish mean?",
      answer:
        "Auto-publish means CRISP can send approved content directly to the connected account where the plan supports it. Auto-publish only applies to LinkedIn and Meta on the plans that list it.",
    },
    {
      question: "Does CRISP publish to X automatically?",
      answer:
        "No. X is currently positioned as an export workflow. You review and paste the draft until automatic publishing is available.",
    },
    {
      question: "Does Meta include Facebook and Instagram?",
      answer:
        "Yes. Meta refers to shared Facebook and Instagram workflows on the plans that list Meta publishing, and depends on account connection and platform permissions.",
    },
    {
      question: "Can I review content first?",
      answer:
        "Yes. Human review sits inside the workflow. Every draft can be checked, edited and approved before it is exported or auto-published.",
    },
    {
      question: "Can agencies use it?",
      answer:
        "Yes. Pro supports up to 3 brands and Scale is designed for custom brand limits, separate queues and onboarding support.",
    },
    {
      question: "What are the soon features?",
      answer:
        "Single idea briefing, comment engine, analytics, presence score and reporting and additional Pro seats are marked as coming soon on the billing page. They are labelled clearly until they are released.",
    },
    {
      question: "How is this different from ChatGPT?",
      answer:
        "ChatGPT is a general assistant that depends on what you type into it. CRISP is a content system. Your brand profile, content queue, review flow and publishing paths are connected, so the work compounds instead of starting from zero every week.",
    },
  ],
} as const;

export const finalCta = {
  heading: "Start free and build the rhythm first",
  body: "Create your brand profile, generate your first drafts and see how a structured content system changes the way you show up.",
} as const;

export const footer = {
  tagline:
    "CRISP Content Engine is a structured content system for founders, consultants, agencies and lean teams.",
  legalLine:
    "CRISP Content Engine is created and developed by CrisP Digital trading as ABL International FZE.",
  columns: [
    {
      title: "Product",
      links: [
        { label: "How it works", href: "/how-it-works" },
        { label: "Use cases", href: "/use-cases" },
        { label: "Pricing", href: "/pricing" },
        { label: "Blog", href: "/blog" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About", href: "/about" },
        { label: "Contact", href: "/contact" },
        { label: "Privacy", href: "/privacy" },
        { label: "Terms", href: "/terms" },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "Content systems", href: "/blog" },
        { label: "Founder marketing", href: "/blog" },
        { label: "LinkedIn content", href: "/blog" },
        { label: "Blog strategy", href: "/blog" },
      ],
    },
  ],
} as const;

export const howItWorksPage = {
  headline: "Plan, generate, review, publish",
  subheadline:
    "CRISP gives content a structure your team can actually keep up with, so the strategy, drafts, approvals and publishing rhythm stay connected.",
  sections: workflow.steps,
} as const;

export const useCasesPage = {
  headline: "Content workflows for people who have to stay visible",
  subheadline:
    "Whether you are building your own authority, managing a small team or operating multiple brands, CRISP gives content a repeatable process.",
  cases: [
    {
      title: "Founder visibility",
      copy: "Stay visible while running the business. Build a content rhythm around your ideas, offers and market point of view without turning publishing into a second job.",
    },
    {
      title: "Consultant authority",
      copy: "Turn expertise into steady thought leadership. Create credible, regular content that supports trust and demand without sounding like everyone else in your space.",
    },
    {
      title: "Agency production",
      copy: "Manage client content with clearer structure, better queues and a repeatable process. Keep multiple brands organised without losing the thread on strategy.",
    },
    {
      title: "Small business marketing",
      copy: "Give a lean team a shared content workflow. Strategy, drafting, approval and publishing stay connected instead of living across disconnected documents.",
    },
    {
      title: "Multi-brand content operations",
      copy: "Run separate brand profiles and content queues for each client or business unit. Scale production without flattening each brand into generic output.",
    },
  ],
} as const;

export const blogPage = {
  headline: "Ideas on content systems, founder marketing and practical AI workflows",
  subheadline:
    "Guides and articles for people who want content to become a repeatable business function, not another weekly scramble.",
  posts: [
    {
      title: "Why content needs a system, not just more ideas",
      excerpt:
        "Most businesses have enough ideas. What they lack is a process that turns those ideas into consistent, on-brand content.",
      slug: "why-content-needs-a-system",
    },
    {
      title: "How founders can stay visible without burning out",
      excerpt:
        "Visibility matters, but so does sustainability. A practical approach to founder-led content that fits around real business pressure.",
      slug: "founders-stay-visible-without-burnout",
    },
    {
      title: "The difference between AI content and a content operating system",
      excerpt:
        "AI can draft faster. A content system decides what gets drafted, why it exists and how it connects to your brand.",
      slug: "ai-content-vs-content-operating-system",
    },
    {
      title: "How to turn one strategic idea into a month of content",
      excerpt:
        "One strong idea can fuel LinkedIn posts, threads, Meta content and a blog article when you have the right structure.",
      slug: "one-idea-month-of-content",
    },
    {
      title: "Why brand memory matters in AI-assisted marketing",
      excerpt:
        "Without stored brand context, every AI draft starts cold. Brand profiles turn isolated prompts into connected content.",
      slug: "brand-memory-ai-marketing",
    },
  ],
} as const;

export const pricingPage = {
  headline: "Start free, upgrade when the rhythm is working",
  subheadline:
    "Begin with structure on Starter, then move into LinkedIn auto-publishing, X export, blog workflows, Meta publishing and multi-brand content operations.",
} as const;

export const legalPages = {
  privacy: {
    title: "Privacy Policy",
    description: "Privacy policy for CRISP Content Engine.",
  },
  terms: {
    title: "Terms of Service",
    description: "Terms of service for CRISP Content Engine.",
  },
  contact: {
    title: "Contact",
    description: "Get in touch with the CRISP Content Engine team.",
    body: "Questions about CRISP Content Engine, pricing or getting started? Email enquiries@crispdigital.io and we will get back to you.",
  },
  about: {
    title: "About",
    description: "About CRISP Content Engine.",
    body: "CRISP Content Engine is a structured content system built for founders, consultants, agencies and lean marketing teams who need to stay consistently visible without burning out or restarting from zero every week.",
  },
} as const;
