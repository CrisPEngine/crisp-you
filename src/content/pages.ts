import { site, cta } from "@/config/site";
import { privacyPolicyPage, termsOfServicePage } from "@/content/legal-pages";

export const pricingPage = {
  headline: "Pricing built around a practical content rhythm",
  subheadline:
    "Start free, build the habit and upgrade when the workflow is ready to do more. CRISP Content Engine gives founders, consultants, agencies and lean teams a structured way to plan, generate, review and publish content across LinkedIn, X, Meta and blog.",
  primaryCta: cta.primary,
  secondaryCta: "Compare plans",
  secondaryHref: "#compare-plans",
} as const;

export const pricingFaq = {
  heading: "Pricing questions",
  items: [
    {
      question: "Is Starter really free forever?",
      answer:
        "Yes. Starter is designed as a free forever plan for people who want to build consistency with structure before upgrading. It includes limited monthly export capacity, AI image prompts and manual posting. No credit card is required.",
    },
    {
      question: "Do I need a credit card to start?",
      answer:
        "No. Starter does not require a credit card, so users can create a brand profile and begin building a content rhythm before choosing a paid plan.",
    },
    {
      question: "What does export mean?",
      answer:
        "Export means CRISP prepares the content so it can be copied, reviewed and posted manually in the relevant platform or publishing workflow.",
    },
    {
      question: "What does auto-publish mean?",
      answer:
        "Auto-publish means CRISP can publish supported content directly when the plan, platform connection and permissions allow it. Human review should still happen before content is approved.",
    },
    {
      question: "Does CRISP publish to X automatically?",
      answer:
        "X should be described as export unless the app later confirms automatic publishing. The current pricing model treats X as export.",
    },
    {
      question: "Does Meta include Facebook and Instagram?",
      answer:
        "Yes. Meta refers to shared Facebook and Instagram workflows where supported by the current product setup, account connection and platform permissions.",
    },
    {
      question: "Do unused posts roll over?",
      answer:
        "No. Monthly allowances are designed around a consistent publishing rhythm and unused posts do not roll over unless the product later introduces that feature.",
    },
    {
      question: "Can agencies manage multiple brands?",
      answer:
        "Yes. Pro supports up to 3 brands and Scale is designed for custom brand limits, seats and support.",
    },
    {
      question: "What features are marked as soon?",
      answer:
        "Single idea briefing, Comment engine, Analytics layer, additional seats and reporting are marked as soon or coming soon where applicable. Keep these clearly labelled until they are released.",
    },
  ],
} as const;

export const howItWorksPage = {
  headline: "How CRISP turns ideas into a repeatable content rhythm",
  subheadline:
    "CRISP Content Engine gives content a clear path from brand context to channel-ready drafts. The process starts with the brand profile, then moves through strategy, content generation, review and publishing, so the work is easier to sustain when the business gets busy.",
  primaryCta: cta.primary,
  secondaryCta: cta.pricing,
  secondaryHref: "/pricing",
  flowHeading: "The flow",
  steps: [
    {
      title: "Create the brand profile",
      copy: "Capture the tone, audience, offers, keywords, exclusions and content rules that should shape every piece of content. This gives CRISP the context it needs before it creates anything.",
    },
    {
      title: "Set the content direction",
      copy: "Choose the channels, objectives and themes that matter for the business. The system works best when content is connected to a purpose rather than generated as a one-off task.",
    },
    {
      title: "Generate the queue",
      copy: "Turn ideas into LinkedIn posts, X drafts, Meta captions, blog outlines or blog articles depending on the plan and workflow. Each item can carry its own channel, status and publishing path.",
    },
    {
      title: "Review with context",
      copy: "Check the draft against the brand, the audience and the channel before it moves forward. CRISP should support judgement, not replace it.",
    },
    {
      title: "Export or publish",
      copy: "Approved content can be exported or auto-published where the plan and connected channel support it. The workflow stays practical because publishing is tied to the plan and platform reality.",
    },
    {
      title: "Improve the rhythm",
      copy: "As the system develops, reporting and feedback can make the workflow sharper over time. The aim is a content rhythm that becomes easier to maintain, not harder.",
    },
  ],
  differenceHeading: "What makes the workflow different",
  oldWay: {
    label: "Old way",
    items: [
      "Ideas scattered across notes",
      "Content written in bursts",
      "Prompts rebuilt each time",
      "Brand voice depends on memory",
      "Publishing happens when there is time",
    ],
  },
  crispWay: {
    label: "CRISP way",
    items: [
      "Brand context in one place",
      "Drafts generated from strategy",
      "Content queue stays visible",
      "Review happens before publishing",
      "Rhythm improves with use",
    ],
  },
  ctaHeading: "Build your first content system",
} as const;

export const useCasesPage = {
  headline: "Content workflows for people who need visibility to keep moving",
  subheadline:
    "CRISP Content Engine is built for people who understand that content matters, but cannot let content take over the business. Whether you are a founder, consultant, agency or lean marketing team, the product gives strategy, drafting, review and publishing a structure that is easier to maintain.",
  primaryCta: cta.primary,
  secondaryCta: "Compare plans",
  secondaryHref: "/pricing",
  finalCta: "Start with one brand, prove the rhythm and scale from there.",
  cases: [
    {
      id: "founders",
      title: "Founders who need to stay visible while running the business",
      copy: "A founder often has the strongest ideas in the company, but the least time to turn them into consistent content. CRISP helps capture the brand, offer and point of view, then turns those inputs into a content rhythm that can support trust, demand and market presence.",
      cta: "Build your founder content rhythm",
      workflow: [
        { need: "Regular LinkedIn presence", workflow: "Brand profile, LinkedIn drafts, review and auto-publishing on supported plans" },
        { need: "Better use of founder ideas", workflow: "Turn one idea into LinkedIn, X, Meta and blog angles" },
        { need: "Lower content burden", workflow: "Generate drafts from strategy instead of starting from a blank page" },
      ],
    },
    {
      id: "consultants",
      title: "Consultants who need authority without generic content",
      copy: "Consultants sell trust before they sell delivery. CRISP helps turn expertise, opinions and client-facing lessons into useful content that supports authority without sounding like a generic content machine.",
      cta: "Turn expertise into consistent content",
      workflow: [
        { need: "Thought leadership", workflow: "LinkedIn posts, X drafts and blog articles shaped around expertise" },
        { need: "Clearer positioning", workflow: "Brand profile and offer context guide every draft" },
        { need: "Regular publishing", workflow: "Queue, review and export or auto-publishing paths" },
      ],
    },
    {
      id: "lean-teams",
      title: "Lean teams that need one shared content process",
      copy: "Small teams often lose time because content work is spread across documents, chats, spreadsheets and publishing tools. CRISP gives the team a visible queue and a clearer process for moving work from idea to review and publication.",
      cta: "Give the team a content workflow",
      workflow: [
        { need: "Less scattered production", workflow: "Shared content queue with statuses" },
        { need: "Better approvals", workflow: "Human review before export or publishing" },
        { need: "Multi-channel output", workflow: "LinkedIn, X, Meta and blog workflows from one strategy" },
      ],
    },
    {
      id: "agencies",
      title: "Agencies and operators managing more than one brand",
      copy: "Agencies need repeatable delivery without flattening every client into the same voice. CRISP supports separate brand profiles, content queues and multi-brand workflows on higher plans, with Scale available for custom limits and support.",
      cta: "Explore multi-brand workflows",
      workflow: [
        { need: "Multi-brand production", workflow: "Separate brand profiles and queues" },
        { need: "Higher volume", workflow: "Pro and Scale plans for larger output" },
        { need: "Client review", workflow: "Review-ready drafts and visible content statuses" },
      ],
    },
  ],
} as const;

export const brandProfilePage = {
  headline: "The brand profile is where consistent content starts",
  subheadline:
    "Most AI content starts with a prompt, which means the user has to rebuild context every time. CRISP starts with a brand profile, so tone, audience, offers, keywords, exclusions and content rules stay connected to the drafts that follow.",
  primaryCta: "Create your brand profile free",
  secondaryCta: cta.pricing,
  storesHeading: "What the brand profile stores",
  stores: [
    { title: "Tone and voice", body: "How the brand should sound in public content." },
    { title: "Audience", body: "Who the content is trying to reach and influence." },
    { title: "Offers and value proposition", body: "What the business sells and why it matters." },
    { title: "Keywords and themes", body: "Recurring topics that should shape content direction." },
    { title: "Exclusions and avoidances", body: "What the brand should not say or claim." },
    { title: "Content rules", body: "Practical guardrails for drafting and review." },
    { title: "Image direction", body: "Visual cues that support the brand in prompts." },
    { title: "Publishing preferences", body: "Channel and workflow preferences where relevant." },
  ],
  storesCopy:
    "A stronger brand profile makes every draft more useful because the system does not have to guess what the business sounds like, who it is trying to reach or what the content should support.",
  whyHeading: "Why this matters",
  promptWorkflow: {
    label: "Prompt-only workflow",
    items: [
      "Context has to be repeated",
      "Voice changes between drafts",
      "Offers are easy to forget",
      "Every platform starts cold",
      "Review takes longer",
    ],
  },
  profileWorkflow: {
    label: "Brand-profile workflow",
    items: [
      "Context is stored once",
      "Voice has a reference point",
      "Offers stay connected",
      "Channels share the same strategy",
      "Review starts from a better draft",
    ],
  },
  faq: {
    heading: "Brand profile questions",
    items: [
      {
        question: "What is a brand profile?",
        answer:
          "A brand profile is the stored context that guides CRISP, including the brand voice, audience, offers, keywords, exclusions and content rules.",
      },
      {
        question: "Can I edit it later?",
        answer:
          "Yes. The brand profile should evolve as the business, offers and content strategy become clearer.",
      },
      {
        question: "Does the free plan include a brand profile?",
        answer:
          "Yes. Starter is designed to help users create structure before upgrading.",
      },
    ],
  },
} as const;

export const contentQueuePage = {
  headline: "A content queue you can actually manage",
  subheadline:
    "Content becomes harder to maintain when drafts, ideas, approvals and publishing tasks are split across too many places. CRISP gives content a visible queue, so each draft has a channel, status and next step.",
  primaryCta: cta.primary,
  secondaryCta: "See how it works",
  secondaryHref: "/how-it-works",
  organiseHeading: "What the queue helps organise",
  organise: [
    { title: "Drafts", body: "Channel-ready content waiting for review or approval." },
    { title: "Channels", body: "LinkedIn, X, Meta and blog outputs in one view." },
    { title: "Objectives", body: "Themes and campaign direction connected to each item." },
    { title: "Image prompts", body: "Visual direction tied to the draft where relevant." },
    { title: "Review status", body: "Draft, review, approved, scheduled and export states." },
    { title: "Export or auto-publish path", body: "The next step matched to plan and platform." },
    { title: "Scheduled rhythm", body: "Publishing cadence that supports consistency." },
    { title: "Future reporting signals", body: "Room for analytics and feedback as the product develops." },
  ],
  organiseCopy:
    "The queue is not just a list of posts. It is the working layer that helps content move from idea to approval and publication without losing context.",
  workflowHeading: "How work moves through the queue",
  workflowStages: [
    { stage: "Idea", happens: "A content direction or campaign theme is created", matters: "The work starts from strategy rather than urgency" },
    { stage: "Draft", happens: "CRISP generates channel-ready content", matters: "The blank page is removed without removing judgement" },
    { stage: "Review", happens: "The user checks the draft before approval", matters: "Human control stays in the workflow" },
    { stage: "Export or publish", happens: "Content moves through the available channel path", matters: "The system matches the plan and platform reality" },
    { stage: "Learn", happens: "Future feedback and reporting improve the rhythm", matters: "Content becomes more useful over time" },
  ],
  ctaHeading: "Build your first content queue",
} as const;

export const blogPage = {
  headline: "Practical thinking on content systems and consistent visibility",
  subheadline:
    "The CRISP blog is for founders, consultants, agencies and lean teams who want content to become a repeatable business function, not another weekly scramble.",
  primaryCta: cta.primary,
  categories: [
    "Content systems",
    "Founder marketing",
    "LinkedIn consistency",
    "AI-assisted workflows",
    "Brand voice",
    "Content operations",
    "Consultants",
    "Agencies",
    "Free tools",
  ],
} as const;

export const contactPage = {
  headline: "Contact CRISP Content Engine",
  subheadline:
    "For Scale plans, agency workflows, partnerships or product enquiries, contact the CRISP team and we will point you in the right direction.",
  cards: [
    {
      title: "Scale and agency plans",
      copy: "For custom brands, limits, seats and onboarding.",
      cta: "Email enquiries@crispdigital.io",
      href: "mailto:enquiries@crispdigital.io",
      event: "cce_contact_sales_click" as const,
    },
    {
      title: "Product support",
      copy: "For account, billing or product questions.",
      cta: "Open the app",
      href: site.loginUrl,
      event: "cce_login_click" as const,
    },
    {
      title: "Partnerships",
      copy: "For integrations, collaborations or commercial partnerships.",
      cta: "Email enquiries@crispdigital.io",
      href: "mailto:enquiries@crispdigital.io",
      event: "cce_contact_sales_click" as const,
    },
  ],
} as const;

/** @deprecated Use privacyPolicyPage from @/content/legal-pages */
export const privacyPage = {
  title: privacyPolicyPage.title,
  description: privacyPolicyPage.description,
  sections: [] as const,
} as const;

/** @deprecated Use termsOfServicePage from @/content/legal-pages */
export const termsPage = {
  title: termsOfServicePage.title,
  description: termsOfServicePage.description,
  sections: [] as const,
} as const;
