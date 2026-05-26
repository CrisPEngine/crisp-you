import { site } from "@/config/site";

export const siteConfig = {
  name: site.name,
  domain: site.domain,
  tagline:
    "A practical content operating system for founders, consultants, agencies and lean teams.",
  urls: {
    login: site.loginUrl,
    signup: site.startUrl,
    billing: site.billingUrl,
    contact: site.contactUrl,
  },
} as const;

export { navLinks, cta } from "@/config/site";

export const hero = {
  eyebrow: "CRISP Content Engine",
  headline: "A content system for people who cannot keep starting from scratch",
  subheadline:
    "CRISP Content Engine helps founders, consultants and lean teams turn brand strategy into consistent content across LinkedIn, X, Meta and blog, without relying on spare time, scattered notes or another blank writing box.",
  supporting:
    "Build the brand profile once, create from strategy, review every draft and keep a publishing rhythm that still works when the business gets busy.",
  trustStrip:
    "Built for founders, consultants, agencies and lean teams who need practical content out the door, consistently.",
} as const;

export const problem = {
  heading: "Content usually breaks long before the idea runs out",
  body: [
    "Most businesses do not stop publishing because they have nothing useful to say. The process breaks because the work is scattered. Strategy lives in someone's head, ideas sit in notes, posts are written in bursts and publishing stops as soon as delivery, clients or operations take over.",
    "CRISP Content Engine gives that process a home. The brand, audience, offer, content queue and publishing rhythm stay connected, so content becomes something you can review and improve rather than something you restart every week.",
  ],
  cards: [
    {
      title: "Strategy is separated from execution",
      copy: "The brand voice, offer, audience and positioning are often stored somewhere else from the content being created.",
    },
    {
      title: "Publishing depends on spare time",
      copy: "The business only shows up when someone has the energy to start again.",
    },
    {
      title: "Every draft starts cold",
      copy: "Without memory and structure, each post begins from zero, even when the message already exists.",
    },
  ],
} as const;

export const product = {
  heading: "Not a writing box. A content operating system.",
  body: [
    "CRISP Content Engine is built around the way useful marketing content actually gets made. The system starts with the brand, turns strategy into channel-ready drafts, keeps work in a visible queue and gives every piece of content a review path before it goes live.",
    "The point is not to replace judgement. The point is to remove the empty-page problem, protect the message and make consistent publishing easier to sustain.",
  ],
  capabilities: [
    {
      id: "brand-memory",
      title: "Brand Memory",
      copy: "Store the tone, audience, value proposition, offers, keywords, exclusions and rules that should shape the work.",
      layer: "Foundation",
    },
    {
      id: "strategy-engine",
      title: "Strategy Engine",
      copy: "Generate content from campaigns, themes, offers and objectives instead of disconnected prompts.",
      layer: "Strategy",
    },
    {
      id: "content-queue",
      title: "Content Queue",
      copy: "Keep drafts, channels, objectives, image prompts, statuses and scheduled dates visible in one workflow.",
      layer: "Production",
    },
    {
      id: "channel-adaptation",
      title: "Channel Adaptation",
      copy: "Create LinkedIn, X, Meta and blog content as platform-aware drafts, not copied versions of the same post.",
      layer: "Distribution",
    },
    {
      id: "review-control",
      title: "Review Control",
      copy: "Move content through review, approval, scheduling and publishing states with human judgement in the loop.",
      layer: "Governance",
    },
    {
      id: "visual-direction",
      title: "Visual Direction",
      copy: "Produce image prompts and creative direction that match the post, platform and brand.",
      layer: "Creative",
    },
    {
      id: "learning-loop",
      title: "Learning Loop",
      copy: "Use performance signals and editorial feedback over time to sharpen future content.",
      layer: "Improvement",
    },
  ],
} as const;

export const workflow = {
  heading: "One connected flow from strategy to published content",
  subheading:
    "The system is simple on purpose. Define the brand, build the queue, review the work and keep improving the rhythm.",
  steps: [
    {
      title: "Define the brand",
      copy: "Capture tone, audience, offers, positioning, keywords, exclusions and content rules.",
    },
    {
      title: "Choose the objective",
      copy: "Anchor content around awareness, engagement, traffic, conversion or a specific campaign.",
    },
    {
      title: "Generate the queue",
      copy: "Create post ideas, hooks, captions, blog drafts, image prompts and channel-specific versions.",
    },
    {
      title: "Review with context",
      copy: "Check each draft against the brand, audience, objective and platform before it moves forward.",
    },
    {
      title: "Publish and learn",
      copy: "Schedule or export approved content, then use results and editorial feedback to improve future work.",
    },
  ],
} as const;

export const audience = {
  heading: "Built for people who need content to work while they do",
  cta: "Find your workflow",
  cards: [
    {
      title: "Founders",
      copy: "Stay visible while running the business. Turn your ideas, offers and market point of view into a repeatable content rhythm.",
    },
    {
      title: "Consultants",
      copy: "Build authority with useful, regular thought leadership that sounds like your expertise, not like generic marketing copy.",
    },
    {
      title: "Lean marketing teams",
      copy: "Give the team one shared workflow for strategy, drafting, approval and publishing instead of managing content across disconnected documents.",
    },
    {
      title: "Agencies and operators",
      copy: "Run multi-brand content production with clearer profiles, queues, approvals and repeatable delivery.",
    },
  ],
} as const;

export const differentiation = {
  heading: "The difference is continuity",
  body: "CRISP Content Engine is not trying to win by producing the most posts in the shortest time. It is built to help a brand keep showing up with a consistent message, useful ideas and a workflow that can survive real business pressure.",
  typical: [
    "Starts with a prompt",
    "Produces isolated drafts",
    "Depends on what you remember to include",
    "Treats channels as rewrites",
    "Leaves review and scheduling elsewhere",
    "Optimises for faster writing",
  ],
  crisp: [
    "Starts with the brand",
    "Builds a connected content queue",
    "Uses stored tone, rules, audience and offers",
    "Treats each channel as its own format",
    "Includes review, approval and publishing workflow",
    "Optimises for consistent visibility",
  ],
} as const;

export const aiPositioning = {
  heading: "AI helps with the work. The system protects the brand.",
  body: [
    "AI can help with drafting, structure, variation, repurposing and image direction. It cannot decide what your business should be known for, what your audience needs to hear or which ideas deserve to become repeatable marketing assets.",
    "CRISP Content Engine uses AI inside a wider workflow. The system gives the work context, the user gives it judgement and the process keeps everything moving.",
  ],
  aiHelps: ["Drafts", "Variations", "Hooks", "Image prompts", "Repurposed formats", "Campaign ideas"],
  systemProtects: [
    "Brand voice",
    "Audience relevance",
    "Offer clarity",
    "Human approval",
    "Publishing rhythm",
    "Long-term consistency",
  ],
} as const;

export const channels = {
  heading: "One strategy, shaped for every channel",
  body: "Your audience does not experience your brand in one place. CRISP Content Engine helps turn a core idea into platform-aware content across the channels that matter, while keeping the message connected.",
  note: "Some publishing paths may depend on account connection, platform permissions or current rollout stage.",
  items: [
    {
      name: "LinkedIn",
      copy: "Founder posts, consultant thought leadership, business updates and authority-building content.",
    },
    {
      name: "X",
      copy: "Sharper observations, short-form ideas, threads and fast market commentary.",
    },
    {
      name: "Meta",
      copy: "Visual-first awareness, community engagement and campaign support.",
    },
    {
      name: "Blog",
      copy: "Long-form SEO articles, educational content, comparison pages and deeper strategic content.",
    },
  ],
} as const;

export const ideaBranch = {
  heading: "One idea should not become one post",
  body: "A useful idea can become a LinkedIn post, a short X thread, a Meta caption, a blog angle and a future campaign theme. CRISP Content Engine helps you reuse the thinking without flattening every channel into the same message.",
  coreIdea: "Marketing works best when it is built as a system",
  outputs: [
    { channel: "LinkedIn", format: "Authority post" },
    { channel: "X", format: "Short thread" },
    { channel: "Meta", format: "Visual caption" },
    { channel: "Blog", format: "SEO article" },
  ],
} as const;

export const systemHealth = {
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
        "Yes. Starter is designed as a free forever plan for users who want to build consistency with structure before upgrading. It includes limited monthly export capacity and does not require a credit card.",
    },
    {
      question: "Is CRISP Content Engine just another AI content generator?",
      answer:
        "No. AI helps with drafting and variation, but the product is built around brand strategy, content structure, review, approval and publishing rhythm. The value is the connected system, not isolated drafts.",
    },
    {
      question: "Who is CRISP Content Engine for?",
      answer:
        "It is built for founders, consultants, small teams, agencies and operators who need to stay visible without rebuilding their content process every week.",
    },
    {
      question: "What counts as a post?",
      answer:
        "A post is a generated social content item for a supported channel, such as LinkedIn, X or Meta. Blog outlines and blog articles are counted separately according to the plan limits.",
    },
    {
      question: "Does Meta mean Facebook and Instagram?",
      answer:
        "Yes. Meta refers to shared Facebook and Instagram workflows where supported by the current product setup, account connection and platform permissions.",
    },
    {
      question: "Can I publish to X automatically?",
      answer:
        "X is currently positioned as an export workflow unless the app confirms otherwise. The marketing site describes X as export until automatic publishing is available.",
    },
    {
      question: "Do unused posts roll over?",
      answer:
        "No. Monthly allowances are designed for a consistent publishing rhythm and unused posts do not roll over unless the product later introduces that feature.",
    },
    {
      question: "Can I manage multiple brands?",
      answer:
        "Yes, Pro supports up to 3 brands and Scale is designed for custom brand limits. Lower plans are built around one brand unless the billing configuration changes.",
    },
    {
      question: "What are the seats on Pro?",
      answer:
        "Pro includes an additional seat coming soon, designed for operators who need another person involved in the workflow. Keep this marked as coming soon until it is live.",
    },
    {
      question: "Are Single idea, Comment engine and Reporting available?",
      answer:
        "These are marked as soon on the billing page. Keep them clearly labelled as soon or coming soon until they are released.",
    },
    {
      question: "How does a blog outline differ from a blog article?",
      answer:
        "A blog outline gives structure, direction and key points for a future article. A blog article is a fuller long-form draft that can be edited and prepared for publishing.",
    },
    {
      question: "Can I review content before it is published?",
      answer:
        "Yes. Human review is central to the workflow. Content should be checked, edited and approved before it goes live.",
    },
    {
      question: "Will the content sound like my brand?",
      answer:
        "The system uses brand profiles, tone rules, audience details, offers, keywords, exclusions and content rules. The better the setup, the more useful and aligned the drafts become.",
    },
  ],
} as const;

export const finalCta = {
  heading: "Stop restarting your content process every week",
  body: "Start free, build the brand profile and give your content a workflow that can keep moving even when the business gets busy.",
} as const;

export const footer = {
  tagline:
    "CRISP Content Engine is a practical content operating system for founders, consultants, agencies and lean teams.",
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
  headline: "A clearer way to move from idea to published content",
  subheadline:
    "CRISP Content Engine gives your content process a structure, so the strategy, drafts, approvals and publishing rhythm stay connected.",
  sections: workflow.steps,
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
  headline: "Simple pricing for a more consistent content system",
  subheadline:
    "Start free with structure, then upgrade for LinkedIn auto-publishing, X export, blog workflows, Meta publishing and multi-brand content operations.",
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
    body: "CRISP Content Engine is a practical content operating system built for founders, consultants, agencies and lean marketing teams who need to stay consistently visible without spending hours every week planning, writing, formatting and scheduling content.",
  },
} as const;
