export const siteConfig = {
  name: "CRISP Content Engine",
  domain: "https://crisp.you",
  tagline: "A practical content operating system for founders, consultants, agencies and lean teams.",
  urls: {
    login: "/login",
    signup: "/login",
    contact: "/contact",
  },
} as const;

export const navLinks = [
  { label: "Product", href: "/#product" },
  { label: "How it works", href: "/how-it-works" },
  { label: "Use cases", href: "/use-cases" },
  { label: "Pricing", href: "/pricing" },
  { label: "Blog", href: "/blog" },
] as const;

export const cta = {
  primary: "Start building your content system",
  secondary: "See how it works",
  pricing: "See pricing",
} as const;

export const hero = {
  headline: "Your content system, built around your brand",
  subheadline:
    "CRISP Content Engine helps founders, consultants and lean teams turn strategy into consistent content across LinkedIn, X, Meta and blog, without starting from a blank page every week.",
  supporting:
    "Plan the message, generate the drafts, review the work and keep publishing with a system that remembers the brand, the audience and the reason each post exists.",
  trustStrip:
    "Built for founders, consultants, agencies and lean marketing teams who need useful content out the door, consistently.",
} as const;

export const problem = {
  heading: "Content breaks when it depends on spare time",
  body: [
    "Most businesses do not struggle with content because they have nothing to say. They struggle because the process is scattered. Ideas sit in notes, strategy lives in someone's head, posts are written in bursts and publishing stops as soon as client work, operations or delivery takes over.",
    "CRISP Content Engine gives that process a home. It connects the brand, the audience, the offer and the publishing rhythm, so content becomes something you can review and improve rather than something you restart every week.",
  ],
  cards: [
    {
      title: "Strategy gets lost",
      copy: "The brand voice, offer, audience and positioning are often separated from the content being written.",
    },
    {
      title: "Publishing becomes reactive",
      copy: "Content happens when someone has time, not when the business needs visibility.",
    },
    {
      title: "Every draft starts cold",
      copy: "Without memory and structure, each post starts from zero, even when the message already exists.",
    },
  ],
} as const;

export const product = {
  heading: "A practical content engine, not another blank writing box",
  body: [
    "CRISP Content Engine is designed around the way useful marketing content is actually created. Start with a brand profile, define the audience and strategy, generate channel-ready content, review the drafts and move approved work into a publishing rhythm.",
    "The aim is not to replace judgement. The aim is to remove the empty-page problem, keep the message connected and make content easier to produce without flattening the brand into generic output.",
  ],
  features: [
    {
      title: "Brand profiles",
      copy: "Store the tone, audience, value proposition, offers, keywords, exclusions and content rules that should shape every piece of content.",
      icon: "profile" as const,
    },
    {
      title: "Strategy-led generation",
      copy: "Generate content from a defined strategy, not from isolated prompts. The system can work from campaigns, themes, offers and content objectives.",
      icon: "strategy" as const,
    },
    {
      title: "Multi-channel drafts",
      copy: "Create content for LinkedIn, X, Meta and blog, with each channel treated as its own format rather than a copied version of the same post.",
      icon: "channels" as const,
    },
    {
      title: "Approval workflow",
      copy: "Move content through review, approval, scheduling and publishing states so the process is visible and manageable.",
      icon: "approval" as const,
    },
    {
      title: "Image direction",
      copy: "Create stronger image prompts and visual direction that match the post, platform and brand instead of relying on generic creative.",
      icon: "image" as const,
    },
    {
      title: "Learning loop",
      copy: "Use performance data over time to understand what is working and improve future content with more context.",
      icon: "learning" as const,
    },
  ],
} as const;

export const workflow = {
  heading: "From strategy to scheduled content in one connected flow",
  steps: [
    {
      title: "Define the brand",
      copy: "Capture the tone, audience, offer, positioning, keywords, exclusions and rules that should guide the content.",
    },
    {
      title: "Build the content queue",
      copy: "Create campaign ideas, post topics, hooks, captions, blog drafts, image prompts and channel-specific versions.",
    },
    {
      title: "Review with context",
      copy: "Edit the work before it goes live, with each draft connected to its objective, target audience and platform.",
    },
    {
      title: "Approve and publish",
      copy: "Move approved content into a publishing workflow for LinkedIn, Meta, X or blog depending on the connected channels.",
    },
    {
      title: "Learn and improve",
      copy: "Bring performance signals back into the system so future content becomes sharper and more aligned with what the audience responds to.",
    },
  ],
} as const;

export const audience = {
  heading: "Built for people who cannot afford a messy content process",
  cards: [
    {
      title: "Founders",
      copy: "Stay visible without turning content into a second full-time job. Build a repeatable rhythm around your ideas, offers and market point of view.",
    },
    {
      title: "Consultants",
      copy: "Turn expertise into steady thought leadership that supports trust, authority and demand without sounding like everyone else.",
    },
    {
      title: "Lean marketing teams",
      copy: "Give the team a shared content workflow, so strategy, drafting, approval and publishing do not live across disconnected documents.",
    },
    {
      title: "Agencies and operators",
      copy: "Manage multiple brands with clearer structure, better queues and a repeatable process for content production.",
    },
  ],
} as const;

export const differentiation = {
  heading: "Why CRISP is different",
  body: "CRISP Content Engine is built around continuity. It is not trying to win by producing the highest number of posts in the shortest time. It is designed to help a brand show up with a consistent message, useful ideas and a workflow that can survive real business pressure.",
  comparison: {
    columns: ["Typical AI writer", "CRISP Content Engine"] as const,
    rows: [
      { label: "Starting point", values: ["Prompt first", "Brand and strategy first"] },
      { label: "Output", values: ["Isolated drafts", "Connected content queue"] },
      { label: "Channels", values: ["Same idea reformatted", "Channel-aware drafts"] },
      { label: "Brand memory", values: ["Depends on the prompt", "Stored brand profile and rules"] },
      { label: "Workflow", values: ["Copy, paste and manage elsewhere", "Review, approval, scheduling and publishing flow"] },
      { label: "Goal", values: ["Faster writing", "More consistent visibility"] },
    ],
  },
} as const;

export const aiPositioning = {
  heading: "AI is useful, but the system matters more",
  body: [
    "AI can help with drafting, structure, variation and speed. It cannot decide what your business should be known for, what your audience needs to hear or which ideas deserve to become repeatable marketing assets.",
    "CRISP Content Engine uses AI as part of a wider content workflow. The system gives the work context, the user gives it judgement and the process keeps everything moving.",
  ],
  aiHelps: ["Drafting", "Variations", "Image prompts", "Repurposing", "Ideation"],
  systemProtects: ["Brand voice", "Strategy", "Audience relevance", "Approval control", "Publishing rhythm"],
} as const;

export const channels = {
  heading: "One strategy, multiple channels",
  body: "Your audience does not experience your brand in one place. CRISP Content Engine helps turn a core idea into platform-aware content across the channels that matter, while keeping the message connected.",
  items: [
    {
      name: "LinkedIn",
      copy: "For founder posts, consultant thought leadership, business updates and authority-building content.",
    },
    {
      name: "X",
      copy: "For sharper observations, short-form ideas, threads and fast market commentary.",
    },
    {
      name: "Meta",
      copy: "For visual-first awareness, community engagement and campaign support.",
    },
    {
      name: "Blog",
      copy: "For long-form SEO articles, educational content, comparison pieces and deeper strategic content.",
    },
  ],
} as const;

export const roadmap = {
  heading: "Built for today, designed to improve with you",
  body: "The first version of CRISP Content Engine focuses on creating a reliable strategy-to-content workflow. From there, the system can become more powerful as publishing, analytics, learning and operator workflows are connected.",
  stages: [
    {
      title: "Create",
      copy: "Define the brand, generate content, prepare image direction and build a usable content queue.",
    },
    {
      title: "Publish",
      copy: "Move approved content into scheduled publishing across supported channels, with manual review where it matters.",
    },
    {
      title: "Improve",
      copy: "Use metrics and editorial feedback to sharpen future content, strengthen campaigns and reduce repeated manual work.",
    },
  ],
} as const;

export type PricingTier = {
  id: string;
  name: string;
  price: string;
  bestFor: string;
  includes: readonly string[];
  cta: string;
  highlighted?: boolean;
};

export const pricing = {
  heading: "Start small, build the system as you grow",
  note: "Pricing can change as the product develops. Early users keep access to the best available launch terms for their plan where possible.",
  tiers: [
    {
      id: "starter",
      name: "Starter",
      price: "$5/month",
      bestFor: "Testing the system with one brand.",
      includes: [
        "LinkedIn content",
        "X content",
        "One brand profile",
        "Copy and paste workflow",
        "Basic content queue",
      ],
      cta: "Start with Starter",
    },
    {
      id: "creator",
      name: "Creator",
      price: "$9/month",
      bestFor: "Solo founders and consultants who need a practical weekly rhythm.",
      includes: [
        "LinkedIn content",
        "Blog drafts",
        "X content",
        "One brand profile",
        "Direct LinkedIn publishing where available",
        "Content queue and review workflow",
      ],
      cta: "Start with Creator",
      highlighted: true,
    },
    {
      id: "growth",
      name: "Growth",
      price: "$29/month",
      bestFor: "Small businesses and lean teams publishing across more than one channel.",
      includes: [
        "LinkedIn and Meta publishing where available",
        "Blog and X copy workflow",
        "Up to 150 posts per month",
        "Two brand profiles",
        "Image prompt support",
        "Approval workflow",
      ],
      cta: "Choose Growth",
    },
    {
      id: "pro",
      name: "Pro",
      price: "$49/month",
      bestFor: "Operators managing a serious content workflow.",
      includes: [
        "Up to 500 posts per month",
        "Up to five brands",
        "Advanced briefings",
        "Image-first Instagram briefing",
        "Priority content workflows",
        "Publishing support where available",
      ],
      cta: "Choose Pro",
    },
    {
      id: "scale",
      name: "Scale",
      price: "$199/month",
      bestFor: "Agencies and multi-brand operators.",
      includes: [
        "Up to 20 brands",
        "Up to 500 posts per month",
        "Advanced briefings",
        "Multi-brand workflow",
        "Approval support",
        "Publishing support where available",
      ],
      cta: "Talk to us",
    },
  ] satisfies readonly PricingTier[],
  addOns: [
    { name: "CRISP Comments", price: "$9/month" },
    { name: "CRISP Images", price: "$29/month" },
  ],
  comparisonFields: [
    { key: "brandProfiles", label: "Brand profiles" },
    { key: "monthlyPosts", label: "Monthly post allowance" },
    { key: "linkedin", label: "LinkedIn content" },
    { key: "x", label: "X content" },
    { key: "meta", label: "Meta content" },
    { key: "blog", label: "Blog drafts" },
    { key: "directPublishing", label: "Direct publishing" },
    { key: "approvalWorkflow", label: "Approval workflow" },
    { key: "imagePrompts", label: "Image prompt support" },
    { key: "advancedBriefings", label: "Advanced briefings" },
    { key: "multiBrand", label: "Multi-brand support" },
    { key: "bestFor", label: "Best for" },
  ],
  comparisonData: {
    starter: {
      brandProfiles: "1",
      monthlyPosts: "Basic queue",
      linkedin: "Yes",
      x: "Yes",
      meta: "No",
      blog: "No",
      directPublishing: "Copy and paste",
      approvalWorkflow: "Basic",
      imagePrompts: "No",
      advancedBriefings: "No",
      multiBrand: "No",
      bestFor: "Testing the system",
    },
    creator: {
      brandProfiles: "1",
      monthlyPosts: "Standard",
      linkedin: "Yes",
      x: "Yes",
      meta: "No",
      blog: "Yes",
      directPublishing: "LinkedIn where available",
      approvalWorkflow: "Review workflow",
      imagePrompts: "No",
      advancedBriefings: "No",
      multiBrand: "No",
      bestFor: "Solo founders and consultants",
    },
    growth: {
      brandProfiles: "2",
      monthlyPosts: "150",
      linkedin: "Yes",
      x: "Yes",
      meta: "Yes",
      blog: "Yes",
      directPublishing: "LinkedIn and Meta where available",
      approvalWorkflow: "Yes",
      imagePrompts: "Yes",
      advancedBriefings: "No",
      multiBrand: "Limited",
      bestFor: "Small businesses and lean teams",
    },
    pro: {
      brandProfiles: "5",
      monthlyPosts: "500",
      linkedin: "Yes",
      x: "Yes",
      meta: "Yes",
      blog: "Yes",
      directPublishing: "Where available",
      approvalWorkflow: "Priority workflows",
      imagePrompts: "Yes",
      advancedBriefings: "Yes",
      multiBrand: "Yes",
      bestFor: "Serious content operators",
    },
    scale: {
      brandProfiles: "20",
      monthlyPosts: "500",
      linkedin: "Yes",
      x: "Yes",
      meta: "Yes",
      blog: "Yes",
      directPublishing: "Where available",
      approvalWorkflow: "Approval support",
      imagePrompts: "Yes",
      advancedBriefings: "Yes",
      multiBrand: "Yes",
      bestFor: "Agencies and multi-brand operators",
    },
  },
  publishingNote:
    "Some publishing integrations may depend on account connection, platform permissions or current rollout stage.",
} as const;

export const faq = {
  heading: "Questions before you start",
  items: [
    {
      question: "Is CRISP Content Engine just another AI content generator?",
      answer:
        "No. AI helps with parts of the workflow, but the product is built around brand strategy, content structure, review, approval and publishing rhythm. The value is the connected system, not isolated drafts.",
    },
    {
      question: "Do I need a full marketing team to use it?",
      answer:
        "No. It is built for founders, consultants and small teams who need a practical way to stay visible without creating a complicated internal process.",
    },
    {
      question: "Can I review content before it is published?",
      answer:
        "Yes. Human review is central to the workflow. Content should be checked, edited and approved before it goes live.",
    },
    {
      question: "Which platforms does it support?",
      answer:
        "CRISP Content Engine is designed around LinkedIn, X, Meta and blog workflows. Some channels may support direct publishing, while others may begin as copy and paste depending on the current product setup.",
    },
    {
      question: "Can agencies use it for multiple brands?",
      answer:
        "Yes. Higher plans are designed for multi-brand workflows, with separate brand profiles and content queues.",
    },
    {
      question: "Will the content sound like my brand?",
      answer:
        "The system is designed to use brand profiles, tone rules, audience details, keywords, exclusions and content rules. The better the brand setup, the more useful the drafts become.",
    },
    {
      question: "Can I use it without publishing automatically?",
      answer:
        "Yes. The system should support review-first workflows. Automatic publishing should be useful, not forced.",
    },
  ],
} as const;

export const finalCta = {
  heading: "Stop restarting your content process every week",
  body: "Build the brand profile once, create from strategy and give your content a workflow that can keep moving even when the business gets busy.",
} as const;

export const footer = {
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
  note: "CRISP Content Engine is part of the CrisP Digital ecosystem.",
} as const;

export const howItWorksPage = {
  headline: "A clearer way to move from idea to published content",
  subheadline:
    "CRISP Content Engine gives your content process a structure, so the strategy, drafts, approvals and publishing rhythm stay connected.",
  sections: [
    {
      title: "Set the brand foundation",
      copy: "Start by capturing what should guide every piece of content. Tone, audience, offer, positioning, keywords, exclusions and content rules live in one brand profile instead of scattered documents.",
    },
    {
      title: "Create from strategy",
      copy: "Generate content from defined campaigns, themes and objectives rather than one-off prompts. Each draft connects to a reason it exists and the audience it is meant to reach.",
    },
    {
      title: "Build the queue",
      copy: "Turn ideas into a structured content queue with channel-specific drafts, hooks, captions, blog posts and image direction ready for review.",
    },
    {
      title: "Review and approve",
      copy: "Edit drafts with full context before anything goes live. Move content through review and approval states so the process stays visible and manageable.",
    },
    {
      title: "Publish and learn",
      copy: "Schedule approved content across LinkedIn, X, Meta and blog. Bring performance signals back into the system to sharpen future content over time.",
    },
  ],
} as const;

export const useCasesPage = {
  headline: "Content workflows for people who have to stay visible",
  subheadline:
    "Whether you are building your own authority, managing a small team or operating multiple brands, CRISP Content Engine gives content a repeatable process.",
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
      excerpt: "Most businesses have enough ideas. What they lack is a process that turns those ideas into consistent, on-brand content.",
      slug: "why-content-needs-a-system",
    },
    {
      title: "How founders can stay visible without burning out",
      excerpt: "Visibility matters, but so does sustainability. A practical approach to founder-led content that fits around real business pressure.",
      slug: "founders-stay-visible-without-burnout",
    },
    {
      title: "The difference between AI content and a content operating system",
      excerpt: "AI can draft faster. A content system decides what gets drafted, why it exists and how it connects to your brand.",
      slug: "ai-content-vs-content-operating-system",
    },
    {
      title: "How to turn one strategic idea into a month of content",
      excerpt: "One strong idea can fuel LinkedIn posts, threads, Meta content and a blog article when you have the right structure.",
      slug: "one-idea-month-of-content",
    },
    {
      title: "Why brand memory matters in AI-assisted marketing",
      excerpt: "Without stored brand context, every AI draft starts cold. Brand profiles turn isolated prompts into connected content.",
      slug: "brand-memory-ai-marketing",
    },
  ],
} as const;

export const pricingPage = {
  headline: "Simple pricing for a more consistent content system",
  subheadline:
    "Start with one brand and a practical publishing rhythm, then grow into multi-channel and multi-brand workflows as your content operation becomes more serious.",
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
    body: "Questions about CRISP Content Engine, pricing or getting started? Reach out and we will get back to you.",
  },
  about: {
    title: "About",
    description: "About CRISP Content Engine.",
    body: "CRISP Content Engine is a practical content operating system built for founders, consultants, agencies and lean marketing teams who need to stay consistently visible without spending hours every week planning, writing, formatting and scheduling content.",
  },
} as const;
