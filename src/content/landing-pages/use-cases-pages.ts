import type { LandingPageContent } from "@/content/landing-page";

export const useCaseLandingPages: readonly LandingPageContent[] = [
  // ─── Founders ────────────────────────────────────────────────────────────
  {
    path: "/use-cases/founders",
    seoTitle: "Content System for Founders | CRISP Content Engine",
    description:
      "A practical content system for founders who need to stay visible on LinkedIn, X, Meta and blog without starting from scratch every week.",
    eyebrow: "Use cases",
    headline: "A content system for founders who need visibility to keep moving",
    heroCopy:
      "Founders usually have the clearest point of view in the business, but the least time to turn it into consistent content. CRISP Content Engine captures the brand, offer and expertise, then turns those inputs into a workflow that supports regular publishing without making content a second full-time job.",
    primaryCta: "Start free, no card required",
    primaryCtaHref: "start",
    primaryCtaEvent: "cce_start_free_click",
    secondaryCta: "See founder workflow",
    secondaryCtaHref: "/how-it-works",
    secondaryCtaEvent: "cce_feature_cta_click",
    sections: [
      {
        type: "cards",
        heading: "Why founder content breaks",
        body: "A founder content process often depends on memory, spare time and the energy to open another blank document. That makes content inconsistent, even when the business has strong ideas and a clear market point of view.",
        cards: [
          {
            title: "Founder idea capture",
            body: "Strong thinking stays in calls and notes instead of becoming content.",
          },
          {
            title: "Brand profile",
            body: "Voice, audience and offers are rebuilt every week instead of being stored once.",
          },
          {
            title: "LinkedIn rhythm",
            body: "Publishing depends on spare time rather than a system that holds the structure.",
          },
          {
            title: "Content queue",
            body: "Drafts disappear across documents and tools without a visible status or next step.",
          },
          {
            title: "Review workflow",
            body: "Quality checks happen too late or not at all, which makes publishing feel risky.",
          },
          {
            title: "Export or auto-publishing path",
            body: "Approved content still needs manual handling even after the hard work is done.",
          },
        ],
      },
      {
        type: "steps",
        heading: "A simple founder rhythm",
        body: "CRISP gives the founder content process a clear path from brand context to channel-ready drafts, so publishing becomes easier to maintain when the business gets busy.",
        steps: [
          {
            title: "Build the brand profile once",
            body: "Capture voice, audience, offers, keywords and content rules in one place. The system uses this context for every draft it generates, so the founder does not have to rebuild it each session.",
          },
          {
            title: "Set a content direction",
            body: "Choose the channels, themes and objectives that matter for the current phase of the business. Connecting content to a purpose makes it easier to decide what to publish next.",
          },
          {
            title: "Generate the queue",
            body: "Turn ideas into LinkedIn posts, X drafts, Meta captions and blog content depending on the plan. Each item carries its own channel, status and publishing path.",
          },
          {
            title: "Review with context",
            body: "Check the draft against the brand, the audience and the channel before it moves forward. CRISP supports the founder's judgement rather than replacing it.",
          },
          {
            title: "Export or publish",
            body: "Approved content can be exported or auto-published where the plan and connected channel support it. The workflow stays practical because publishing is matched to the plan and platform reality.",
          },
        ],
      },
      {
        type: "table",
        heading: "The founder workflow inside CRISP",
        body: "Each row shows a common founder content need, the CRISP workflow that addresses it and why the outcome matters for the business.",
        table: {
          headers: ["Founder need", "CRISP workflow", "Why it matters"],
          rows: [
            [
              "Regular LinkedIn visibility",
              "Brand profile, LinkedIn drafts, review and auto-publishing on supported plans",
              "A clearer weekly rhythm that does not depend on finding spare time",
            ],
            [
              "Better use of founder ideas",
              "Turn one idea into LinkedIn, X, Meta and blog angles from the same strategy",
              "More value from the same thinking without starting over for each channel",
            ],
            [
              "Lower content burden",
              "Generate drafts from the stored brand profile and review before publishing",
              "Less blank-page friction so content happens more consistently",
            ],
            [
              "Offer clarity",
              "Connect content themes to offers and audience context in the brand profile",
              "Content supports demand because it is tied to what the business actually sells",
            ],
            [
              "Consistent brand voice",
              "Keep brand rules, tone and exclusions in one place across all drafts",
              "Drafts feel more aligned over time without manual correction every session",
            ],
          ],
        },
      },
    ],
    faq: [
      {
        question: "Do I need to be a writer to use CRISP?",
        answer:
          "No. CRISP is designed to work from the context you store in the brand profile. The system generates draft content from that context, so the writing process starts from a structured base rather than a blank page. You review and approve before anything is published.",
      },
      {
        question: "How long does it take to set up?",
        answer:
          "Most founders can complete the brand profile in one session. The profile can be updated as the business, offers and content strategy become clearer over time. You do not need everything finished before you can start generating drafts.",
      },
      {
        question: "Can I start on the free plan?",
        answer:
          "Yes. Starter is a free forever plan that includes a brand profile and limited monthly content generation. No credit card is required, so you can build the structure and test the workflow before deciding whether to upgrade.",
      },
    ],
    finalCtaHeading: "Start free and build your founder content rhythm",
    finalCtaCopy:
      "Create a brand profile, generate your first drafts and see whether the workflow fits how you actually work. No credit card required on Starter.",
    finalCta: "Start free, no card required",
    finalCtaHref: "start",
    finalCtaEvent: "cce_start_free_click",
    relatedLinks: [
      { label: "Brand profile", href: "/features/brand-profile" },
      { label: "LinkedIn content system", href: "/features/linkedin-content-system" },
      { label: "Founder content article", href: "/blog/content-system-for-founders" },
      { label: "Pricing", href: "/pricing" },
    ],
  },

  // ─── Consultants ─────────────────────────────────────────────────────────
  {
    path: "/use-cases/consultants",
    seoTitle: "Content System for Consultants | CRISP Content Engine",
    description:
      "CRISP Content Engine helps consultants turn expertise into consistent thought leadership, LinkedIn posts, X drafts and blog content.",
    eyebrow: "Use cases",
    headline: "A content workflow for consultants who sell expertise",
    heroCopy:
      "Consultants win trust before they win the work. CRISP Content Engine helps turn experience, opinions, client lessons and practical frameworks into consistent content that supports authority without sounding generic.",
    primaryCta: "Start free, no card required",
    primaryCtaHref: "start",
    primaryCtaEvent: "cce_start_free_click",
    secondaryCta: "See consultant workflow",
    secondaryCtaHref: "/how-it-works",
    secondaryCtaEvent: "cce_feature_cta_click",
    sections: [
      {
        type: "cards",
        heading: "Why consultant content needs structure",
        body: "Consultant content works best when it is specific, useful and connected to a clear point of view. Without a system, strong ideas stay inside client calls, proposals and private notes instead of becoming public proof of expertise.",
        cards: [
          {
            title: "Thought leadership",
            body: "Expertise exists but does not become regular public content without a system to move it forward.",
          },
          {
            title: "Offer clarity",
            body: "Posts drift away from what the consultant actually sells when there is no brand profile to anchor them.",
          },
          {
            title: "LinkedIn authority",
            body: "Visibility becomes inconsistent when delivery work gets busy and there is no queue to fall back on.",
          },
          {
            title: "Blog depth",
            body: "Long-form ideas stay in drafts or never get written because the production process is too slow.",
          },
          {
            title: "Review before publishing",
            body: "Quality control depends on last-minute edits rather than a defined review step in the workflow.",
          },
          {
            title: "Repeatable weekly rhythm",
            body: "There is no stable process behind the calendar, so publishing depends on energy rather than structure.",
          },
        ],
      },
      {
        type: "ideaOutputs",
        heading: "From one idea to every channel",
        body: "A single consultant insight can generate content across LinkedIn, X, blog and Meta without having to rewrite from scratch each time.",
        module: {
          core: "A client lesson, framework or opinion from delivery work",
          outputs: [
            { channel: "LinkedIn", format: "Authority post with a clear point of view and a direct takeaway" },
            { channel: "X", format: "Short-form thread or standalone post for quick visibility" },
            { channel: "Blog", format: "Long-form article with depth, context and search value" },
            { channel: "Meta", format: "Caption for Instagram or Facebook with visual direction" },
          ],
        },
      },
      {
        type: "table",
        heading: "The consultant workflow inside CRISP",
        body: "Each row shows a common consultant content challenge, the CRISP workflow that addresses it and the outcome the consultant can expect.",
        table: {
          headers: ["Consultant need", "CRISP workflow", "Outcome"],
          rows: [
            [
              "Regular thought leadership",
              "Generate LinkedIn drafts from the brand profile and stored expertise themes",
              "More consistent authority with less manual effort each week",
            ],
            [
              "Content that sounds specific to the practice",
              "Store tone, audience, offer context and exclusions in the brand profile",
              "Less generic output that reads more like the consultant actually sounds",
            ],
            [
              "Longer-form education and SEO depth",
              "Use blog article workflows available on paid plans",
              "Better depth for search visibility and client trust over time",
            ],
            [
              "Short-form presence on X",
              "Export X drafts from the same strategy used for LinkedIn",
              "More channel variety without doubling the production work",
            ],
            [
              "Quality control before publishing",
              "Review and approve or edit each draft before it moves to export or publishing",
              "The consultant keeps quality control and is not relying on the AI to self-approve",
            ],
          ],
        },
      },
    ],
    faq: [
      {
        question: "Will the content sound like me?",
        answer:
          "The brand profile stores the consultant's tone, voice, audience and offer context. Drafts generated from a detailed profile are more specific and less generic than prompts written without that stored context. The quality improves as the profile becomes more complete.",
      },
      {
        question: "Can I use CRISP during a busy delivery period?",
        answer:
          "Yes. That is one of the reasons consultants use it. When client work gets heavy, having a queue of review-ready drafts means publishing does not stop. The system maintains a content rhythm even when the consultant cannot focus on content creation.",
      },
      {
        question: "Does the blog workflow require a paid plan?",
        answer:
          "Blog article generation is available on paid plans. Starter includes LinkedIn and X drafts so consultants can build the habit and test the workflow before upgrading for longer-form content.",
      },
    ],
    finalCtaHeading: "Turn expertise into consistent content",
    finalCtaCopy:
      "Build a brand profile, set your thought leadership themes and start generating drafts. No credit card required on Starter.",
    finalCta: "Start free, no card required",
    finalCtaHref: "start",
    finalCtaEvent: "cce_start_free_click",
    relatedLinks: [
      { label: "Brand profile", href: "/features/brand-profile" },
      { label: "LinkedIn consistency guide", href: "/blog/how-to-stay-consistent-on-linkedin" },
      { label: "Content queue", href: "/features/content-queue" },
      { label: "Pricing", href: "/pricing" },
    ],
  },

  // ─── Agencies ─────────────────────────────────────────────────────────────
  {
    path: "/use-cases/agencies",
    seoTitle: "Content Workflow for Agencies | CRISP Content Engine",
    description:
      "Manage multi-brand content workflows with brand profiles, content queues, review paths and custom Scale support in CRISP Content Engine.",
    eyebrow: "Use cases",
    headline: "A content workflow for agencies and multi-brand operators",
    heroCopy:
      "Agencies need repeatable production without flattening every client into the same voice. CRISP Content Engine gives operators a clearer way to manage brand context, draft queues, review stages and publishing paths across multiple brands.",
    primaryCta: "Contact sales",
    primaryCtaHref: "contact",
    primaryCtaEvent: "cce_contact_sales_click",
    secondaryCta: "View pricing",
    secondaryCtaHref: "/pricing",
    secondaryCtaEvent: "cce_pricing_cta_click",
    sections: [
      {
        type: "cards",
        heading: "The agency content problem",
        body: "Multi-brand content gets messy when brand context, draft production, approvals and publishing live across disconnected tools. The work may be repeatable, but quality drops when every client starts from the same generic process.",
        cards: [
          {
            title: "Separate brand profiles",
            body: "Each client needs distinct voice, audience and rules that do not bleed into other client work.",
          },
          {
            title: "Content queue per brand",
            body: "Drafts need to stay visible with channel, status and next action clearly labelled per client.",
          },
          {
            title: "Review-ready drafts",
            body: "Approvals need to happen before export or publishing so quality checks are built into the workflow.",
          },
          {
            title: "Export and auto-publish paths",
            body: "Publishing needs to match the plan and the platform reality for each client, not a one-size approach.",
          },
          {
            title: "Higher-volume plans",
            body: "Pro supports larger monthly output across multiple brands without having to manage separate tools.",
          },
          {
            title: "Custom Scale support",
            body: "Scale is available for agencies that need custom limits, additional seats and structured onboarding.",
          },
        ],
      },
      {
        type: "cards",
        heading: "Where CRISP fits in an agency stack",
        body: "CRISP does not replace the tools agencies already use for client communication, scheduling or reporting. It gives the production layer a structure so brand context, drafts and approvals stay organised across clients.",
        cards: [
          {
            title: "Brand context layer",
            body: "Store each client's voice, audience, offers, exclusions and content rules in a separate brand profile so every draft starts from the right foundation.",
          },
          {
            title: "Draft production layer",
            body: "Generate LinkedIn, X, Meta and blog drafts from stored brand context rather than starting from a blank prompt for every client session.",
          },
          {
            title: "Review and approval layer",
            body: "Keep a visible queue with draft statuses so the team and clients can see what is in review, what is approved and what still needs attention.",
          },
          {
            title: "Publishing and export layer",
            body: "Move approved content through auto-publish or export paths depending on the plan, the channel and the client's preferences.",
          },
        ],
      },
      {
        type: "table",
        heading: "The agency workflow inside CRISP",
        body: "Each row shows a common agency content challenge, the CRISP workflow that addresses it and the outcome the agency can expect.",
        table: {
          headers: ["Agency need", "CRISP workflow", "Outcome"],
          rows: [
            [
              "Manage multiple client brands",
              "Pro supports up to 3 brands and Scale supports custom brand limits with tailored onboarding",
              "More structured delivery without tools bleeding across client accounts",
            ],
            [
              "Protect each client's voice",
              "Separate brand profiles with distinct tone, audience, offers and content rules per client",
              "Less generic content and a clearer quality baseline for each brand",
            ],
            [
              "Increase monthly output",
              "Higher monthly allowances on Pro and custom content limits on Scale",
              "More production capacity without adding manual effort per draft",
            ],
            [
              "Support client review and approval",
              "Draft statuses and approval workflow keep every item in a reviewable state before export",
              "A cleaner client-ready process that does not depend on spreadsheets or email threads",
            ],
            [
              "Custom support and onboarding",
              "Scale plan for custom limits, additional seats and structured agency onboarding",
              "A better fit for operators who need the workflow to match their delivery standards",
            ],
          ],
        },
      },
    ],
    faq: [
      {
        question: "How many brands can I manage?",
        answer:
          "Pro supports up to 3 brands. Scale is designed for agencies that need custom brand limits, additional seats and dedicated onboarding. Contact the CRISP team to discuss Scale requirements.",
      },
      {
        question: "Can my team members access the same account?",
        answer:
          "Additional seats are part of the Scale plan roadmap. If your team needs shared access now, contact the CRISP team through the Scale enquiry route to discuss what is currently possible.",
      },
      {
        question: "What is Scale and how do I access it?",
        answer:
          "Scale is the custom plan for agencies and larger operators that need limits, seats and onboarding tailored to their delivery model. Use the contact form or email enquiries@crispdigital.io to start a conversation.",
      },
    ],
    finalCtaHeading: "Explore multi-brand workflows with CRISP",
    finalCtaCopy:
      "For agencies ready to move content production onto a structured platform, contact the CRISP team to discuss Scale or start with Pro and build from there.",
    finalCta: "Contact sales",
    finalCtaHref: "contact",
    finalCtaEvent: "cce_contact_sales_click",
    relatedLinks: [
      { label: "Content queue", href: "/features/content-queue" },
      { label: "Brand profile", href: "/features/brand-profile" },
      { label: "Contact for Scale", href: "/contact" },
      { label: "Pricing", href: "/pricing" },
    ],
  },

  // ─── Lean Teams ───────────────────────────────────────────────────────────
  {
    path: "/use-cases/lean-teams",
    seoTitle: "Content Workflow for Lean Marketing Teams | CRISP Content Engine",
    description:
      "CRISP Content Engine helps lean marketing teams organise strategy, drafts, approvals and publishing across LinkedIn, X, Meta and blog.",
    eyebrow: "Use cases",
    headline: "A shared content workflow for lean marketing teams",
    heroCopy:
      "Small teams often know what needs to be published, but the process gets split across documents, chats, spreadsheets and publishing tools. CRISP Content Engine gives the team one structured workflow for brand context, drafts, review and channel outputs.",
    primaryCta: "Start free, no card required",
    primaryCtaHref: "start",
    primaryCtaEvent: "cce_start_free_click",
    secondaryCta: "Compare plans",
    secondaryCtaHref: "/pricing",
    secondaryCtaEvent: "cce_pricing_cta_click",
    sections: [
      {
        type: "cards",
        heading: "Why small teams need a visible queue",
        body: "When content work is scattered, the team loses time finding the latest draft, checking the right brand direction and deciding what is ready to publish. A visible queue gives each draft a channel, status and next step.",
        cards: [
          {
            title: "Shared content queue",
            body: "Everyone sees draft status and next actions without checking multiple tools or asking for updates.",
          },
          {
            title: "Brand profile",
            body: "Strategy and voice stay connected to generation so drafts do not drift from the brand direction.",
          },
          {
            title: "Approval workflow",
            body: "Review happens before export or publishing so the team keeps quality control in the process.",
          },
          {
            title: "Channel outputs",
            body: "LinkedIn, X, Meta and blog outputs come from one workflow rather than separate processes per platform.",
          },
          {
            title: "Meta and LinkedIn publishing",
            body: "Auto-publish is available where the plan and platform connection support it, reducing manual steps.",
          },
          {
            title: "Blog and X export",
            body: "Long-form and short-form content stay in the same rhythm so no channel gets left behind when things get busy.",
          },
        ],
      },
      {
        type: "table",
        heading: "The lean team workflow inside CRISP",
        body: "Each row shows a common challenge for small marketing teams, the CRISP workflow that addresses it and the business value it creates.",
        table: {
          headers: ["Team challenge", "CRISP workflow", "Business value"],
          rows: [
            [
              "Scattered drafts and unclear statuses",
              "Keep all drafts in a visible queue with channel and status labels",
              "Less time spent locating work and more time moving it forward",
            ],
            [
              "Approval process that depends on manual chasing",
              "Review and approve each draft before it moves to export or publishing",
              "More control over what goes out and a cleaner record of what was approved",
            ],
            [
              "Inconsistent channel coverage",
              "LinkedIn, X, Meta and blog workflows run from the same brand profile and strategy",
              "Better content coverage across channels without doubling the production effort",
            ],
            [
              "Drafts that drift from the brand",
              "Brand profile and content themes guide every draft generated",
              "More aligned output that does not need heavy editing to sound on-brand",
            ],
            [
              "Uncertainty about when to upgrade",
              "Move from Starter to Growth or Pro as output needs grow",
              "Cost matches the team's content maturity rather than requiring an upfront commitment",
            ],
          ],
        },
      },
    ],
    faq: [
      {
        question: "Can the whole team work from the same account?",
        answer:
          "Multi-seat access is part of the Scale plan roadmap. For now, lean teams typically use a shared account or a single owner account with a clear internal handoff process. If team access is a priority, contact the CRISP team to discuss what is currently available.",
      },
      {
        question: "Which plan is right for a small team?",
        answer:
          "Starter is free and works well for teams that want to build the structure before committing to a plan. Growth and Pro add more monthly output, blog article workflows and additional brand support as the team's needs grow. The pricing page has a full plan comparison.",
      },
      {
        question: "Does CRISP work with our existing tools?",
        answer:
          "CRISP does not replace scheduling or analytics tools the team already uses. It handles the content production layer, which includes brand context, drafts, review and publishing paths. Approved content can be exported for use in other tools or auto-published where the plan and platform support it.",
      },
    ],
    finalCtaHeading: "Give the team a content workflow",
    finalCtaCopy:
      "Start with a shared brand profile, build a visible draft queue and give the team a process that does not fall apart when delivery gets busy.",
    finalCta: "Start free, no card required",
    finalCtaHref: "start",
    finalCtaEvent: "cce_start_free_click",
    relatedLinks: [
      { label: "Content queue", href: "/features/content-queue" },
      { label: "How it works", href: "/how-it-works" },
      { label: "Build a content system", href: "/blog/how-to-build-a-content-system-for-your-business" },
      { label: "Pricing", href: "/pricing" },
    ],
  },
] as const;

export function getUseCaseLandingPage(slug: string) {
  return useCaseLandingPages.find((p) => p.path === `/use-cases/${slug}`);
}

export function getUseCaseLandingSlugs() {
  return useCaseLandingPages.map((p) => p.path.replace("/use-cases/", ""));
}
