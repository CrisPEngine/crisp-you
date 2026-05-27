export type UseCaseDetail = {
  slug: string;
  seoTitle: string;
  description: string;
  headline: string;
  subheadline: string;
  problemHeading: string;
  problemCopy: string;
  diagnosticCards: readonly { title: string; body: string }[];
  workflowHeading: string;
  workflowRows: readonly { need: string; workflow: string; outcome: string }[];
  cta: string;
  relatedLinks: readonly { label: string; href: string }[];
};

export const useCaseDetails: readonly UseCaseDetail[] = [
  {
    slug: "founders",
    seoTitle: "Content System for Founders | CRISP Content Engine",
    description:
      "A practical content system for founders who need to stay visible on LinkedIn, X, Meta and blog without starting from scratch every week.",
    headline: "A content system for founders who need visibility to keep moving",
    subheadline:
      "Founders usually have the clearest point of view in the business, but the least time to turn it into consistent content. CRISP Content Engine helps capture the brand, offer and expertise, then turns those inputs into a workflow that supports regular publishing without making content a second full-time job.",
    problemHeading: "Why founder content breaks",
    problemCopy:
      "A founder content process often depends on memory, spare time and the energy to open another blank document. That makes content inconsistent, even when the business has strong ideas and a clear market point of view.",
    diagnosticCards: [
      { title: "Founder idea capture", body: "Strong thinking stays in calls and notes instead of becoming content." },
      { title: "Brand profile", body: "Voice, audience and offers are rebuilt every week." },
      { title: "LinkedIn rhythm", body: "Publishing depends on spare time rather than a system." },
      { title: "Content queue", body: "Drafts disappear across documents and tools." },
      { title: "Review workflow", body: "Quality checks happen too late or not at all." },
      { title: "Export or auto-publishing path", body: "Approved content still needs manual handling." },
    ],
    workflowHeading: "The founder workflow inside CRISP",
    workflowRows: [
      {
        need: "Regular LinkedIn visibility",
        workflow: "Brand profile, LinkedIn drafts, review and auto-publishing on supported plans",
        outcome: "A clearer weekly rhythm",
      },
      {
        need: "Better use of founder ideas",
        workflow: "Turn one idea into LinkedIn, X, Meta and blog angles",
        outcome: "More value from the same thinking",
      },
      {
        need: "Lower content burden",
        workflow: "Generate drafts from strategy and review before publishing",
        outcome: "Less blank-page friction",
      },
      {
        need: "Offer clarity",
        workflow: "Connect content themes to offers and audience",
        outcome: "Content supports demand",
      },
      {
        need: "Consistency",
        workflow: "Keep brand rules and tone in one place",
        outcome: "Drafts feel more aligned over time",
      },
    ],
    cta: "Start free and build your founder content rhythm",
    relatedLinks: [
      { label: "Brand profile", href: "/features/brand-profile" },
      { label: "LinkedIn content system", href: "/features/linkedin-content-system" },
      { label: "Founder content article", href: "/blog/content-system-for-founders" },
      { label: "Pricing", href: "/pricing" },
    ],
  },
  {
    slug: "consultants",
    seoTitle: "Content System for Consultants | CRISP Content Engine",
    description:
      "CRISP Content Engine helps consultants turn expertise into consistent thought leadership, LinkedIn posts, X drafts and blog content.",
    headline: "A content workflow for consultants who sell expertise",
    subheadline:
      "Consultants win trust before they win the work. CRISP Content Engine helps turn experience, opinions, client lessons and practical frameworks into consistent content that supports authority without sounding generic.",
    problemHeading: "Why consultant content needs structure",
    problemCopy:
      "Consultant content works best when it is specific, useful and connected to a clear point of view. Without a system, strong ideas stay inside client calls, proposals and private notes instead of becoming public proof of expertise.",
    diagnosticCards: [
      { title: "Thought leadership", body: "Expertise exists but does not become regular public content." },
      { title: "Offer clarity", body: "Posts drift away from what the consultant actually sells." },
      { title: "LinkedIn authority", body: "Visibility is inconsistent when delivery work gets busy." },
      { title: "Blog depth", body: "Long-form ideas stay in drafts or never get written." },
      { title: "Review before publishing", body: "Quality control depends on last-minute edits." },
      { title: "Repeatable weekly rhythm", body: "There is no stable process behind the calendar." },
    ],
    workflowHeading: "The consultant workflow inside CRISP",
    workflowRows: [
      {
        need: "Regular thought leadership",
        workflow: "Generate LinkedIn drafts from brand profile and expertise themes",
        outcome: "More consistent authority",
      },
      {
        need: "Content that sounds specific",
        workflow: "Store tone, audience and offer context",
        outcome: "Less generic output",
      },
      {
        need: "Longer-form education",
        workflow: "Use blog article workflows on paid plans",
        outcome: "Better depth for SEO and trust",
      },
      {
        need: "Short-form presence",
        workflow: "Export X drafts from the same strategy",
        outcome: "More channel variety",
      },
      {
        need: "Review control",
        workflow: "Approve or edit before publishing",
        outcome: "Quality stays with the consultant",
      },
    ],
    cta: "Turn expertise into consistent content",
    relatedLinks: [
      { label: "Brand profile", href: "/features/brand-profile" },
      { label: "LinkedIn consistency guide", href: "/blog/how-to-stay-consistent-on-linkedin" },
      { label: "Content queue", href: "/features/content-queue" },
      { label: "Pricing", href: "/pricing" },
    ],
  },
  {
    slug: "agencies",
    seoTitle: "Content Workflow for Agencies | CRISP Content Engine",
    description:
      "Manage multi-brand content workflows with brand profiles, content queues, review paths and custom Scale support in CRISP Content Engine.",
    headline: "A content workflow for agencies and multi-brand operators",
    subheadline:
      "Agencies need repeatable production without flattening every client into the same voice. CRISP Content Engine gives operators a clearer way to manage brand context, draft queues, review stages and publishing paths across multiple brands.",
    problemHeading: "The agency problem",
    problemCopy:
      "Multi-brand content gets messy when brand context, draft production, approvals and publishing live across disconnected tools. The work may be repeatable, but the quality drops if every client starts from the same generic process.",
    diagnosticCards: [
      { title: "Separate brand profiles", body: "Each client keeps distinct voice, audience and rules." },
      { title: "Content queue per brand", body: "Drafts stay visible with channel and status." },
      { title: "Review-ready drafts", body: "Approvals happen before export or publishing." },
      { title: "Export and auto-publish paths", body: "Publishing matches plan and platform reality." },
      { title: "Higher-volume plans", body: "Pro supports larger monthly output across brands." },
      { title: "Custom Scale support", body: "Custom limits, seats and onboarding when needed." },
    ],
    workflowHeading: "The agency workflow inside CRISP",
    workflowRows: [
      {
        need: "Manage multiple brands",
        workflow: "Pro supports up to 3 brands and Scale supports custom limits",
        outcome: "More structured delivery",
      },
      {
        need: "Protect client voice",
        workflow: "Separate brand profiles and rules",
        outcome: "Less generic content",
      },
      {
        need: "Increase output",
        workflow: "Higher monthly allowances on Pro and custom Scale",
        outcome: "More production capacity",
      },
      {
        need: "Support review",
        workflow: "Draft statuses and approval workflow",
        outcome: "Cleaner client-ready process",
      },
      {
        need: "Custom support",
        workflow: "Scale plan for custom limits and onboarding",
        outcome: "Better fit for serious operators",
      },
    ],
    cta: "Explore multi-brand workflows",
    relatedLinks: [
      { label: "Content queue", href: "/features/content-queue" },
      { label: "Brand profile", href: "/features/brand-profile" },
      { label: "Contact for Scale", href: "/contact" },
      { label: "Pricing", href: "/pricing" },
    ],
  },
  {
    slug: "lean-teams",
    seoTitle: "Content Workflow for Lean Marketing Teams | CRISP Content Engine",
    description:
      "CRISP Content Engine helps lean marketing teams organise strategy, drafts, approvals and publishing across LinkedIn, X, Meta and blog.",
    headline: "A shared content workflow for lean marketing teams",
    subheadline:
      "Small teams often know what needs to be published, but the process gets split across documents, chats, spreadsheets and publishing tools. CRISP Content Engine gives the team one structured workflow for brand context, drafts, review and channel outputs.",
    problemHeading: "Why small teams need a visible queue",
    problemCopy:
      "When content work is scattered, the team loses time finding the latest draft, checking the right brand direction and deciding what is ready to publish. A visible queue gives each draft a channel, status and next step.",
    diagnosticCards: [
      { title: "Shared content queue", body: "Everyone sees draft status and next actions." },
      { title: "Brand profile", body: "Strategy and voice stay connected to generation." },
      { title: "Approval workflow", body: "Review happens before export or publishing." },
      { title: "Channel outputs", body: "LinkedIn, X, Meta and blog from one process." },
      { title: "Meta and LinkedIn publishing", body: "Auto-publish where the plan supports it." },
      { title: "Blog and X export", body: "Long-form and short-form stay in the same rhythm." },
    ],
    workflowHeading: "The lean team workflow inside CRISP",
    workflowRows: [
      {
        need: "Reduce scattered work",
        workflow: "Keep drafts and statuses visible",
        outcome: "Less operational friction",
      },
      {
        need: "Support approvals",
        workflow: "Review before export or publishing",
        outcome: "More control",
      },
      {
        need: "Maintain channel rhythm",
        workflow: "LinkedIn, X, Meta and blog workflows",
        outcome: "Better content coverage",
      },
      {
        need: "Work from strategy",
        workflow: "Brand profile and themes guide drafts",
        outcome: "More aligned output",
      },
      {
        need: "Scale carefully",
        workflow: "Move from free to Growth or Pro as needed",
        outcome: "Cost matches maturity",
      },
    ],
    cta: "Give the team a content workflow",
    relatedLinks: [
      { label: "Content queue", href: "/features/content-queue" },
      { label: "How it works", href: "/how-it-works" },
      { label: "Build a content system", href: "/blog/how-to-build-a-content-system-for-your-business" },
      { label: "Pricing", href: "/pricing" },
    ],
  },
] as const;

export function getUseCaseDetail(slug: string) {
  return useCaseDetails.find((item) => item.slug === slug);
}
