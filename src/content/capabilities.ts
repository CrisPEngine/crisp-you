export type CapabilityField = {
  label: string;
  value: string;
};

export type Capability = {
  id: string;
  number: string;
  category: string;
  title: string;
  shortDescription: string;
  detailParagraph: string;
  miniFields: readonly CapabilityField[];
  statusChip: string;
  accentKey: string;
  soon?: boolean;
};

export const capabilitySection = {
  eyebrow: "The system stack",
  heading: "Everything starts with the brand profile",
  body: "CRISP is designed to generate from context. The more clearly the system understands the brand, audience, offers, tone and content rules, the more useful the drafts become.",
} as const;

export const capabilities: readonly Capability[] = [
  {
    id: "brand-memory",
    number: "01",
    category: "Foundation",
    title: "Brand memory",
    shortDescription:
      "Store tone, audience, offers, keywords, exclusions and content rules so every draft starts with context, not a blank prompt.",
    detailParagraph:
      "The brand profile gives CRISP the context it needs before content is created. Voice, audience, offers and rules sit together, which means drafts start closer to the business and review starts from a better place.",
    miniFields: [
      { label: "Tone", value: "Confident, practical" },
      { label: "Audience", value: "Founders, consultants and operators" },
      { label: "Offers", value: "Connected to content themes" },
      { label: "Exclusions", value: "Stored before drafting" },
    ],
    statusChip: "Brand profile ready",
    accentKey: "01 Foundation",
  },
  {
    id: "strategy",
    number: "02",
    category: "Strategy",
    title: "Strategy-led generation",
    shortDescription:
      "Anchor content to campaigns, themes and objectives rather than disconnected prompts, so the message stays connected over time.",
    detailParagraph:
      "CRISP works best when content is connected to a reason. Campaigns, offers, themes and objectives help guide what gets generated, so each draft supports a wider content rhythm instead of becoming another isolated post.",
    miniFields: [
      { label: "Objective", value: "Awareness, engagement, traffic or conversion" },
      { label: "Themes", value: "Reusable content directions" },
      { label: "Campaigns", value: "Connected to offers" },
      { label: "Output", value: "Channel-ready drafts" },
    ],
    statusChip: "Strategy connected",
    accentKey: "02 Strategy",
  },
  {
    id: "content-queue",
    number: "03",
    category: "Production",
    title: "Content queue",
    shortDescription:
      "Keep drafts, channels, objectives, image prompts and statuses visible in one workflow you can actually manage.",
    detailParagraph:
      "The content queue is the working layer between idea and publishing. It keeps every draft visible with a channel, status and next step, so content production does not disappear into notes, chats or disconnected documents.",
    miniFields: [
      { label: "Drafts", value: "Organised by channel" },
      { label: "Statuses", value: "Needs review, approved, scheduled" },
      { label: "Assets", value: "Image prompts and references" },
      { label: "Rhythm", value: "Built around monthly limits" },
    ],
    statusChip: "Queue active",
    accentKey: "03 Production",
  },
  {
    id: "human-review",
    number: "04",
    category: "Governance",
    title: "Human review",
    shortDescription:
      "Approve, edit or reject every draft before it moves forward. Judgement stays with the user, not the model.",
    detailParagraph:
      "CRISP is designed to support human control. The system can help with structure and drafting, but the user decides what fits the brand, what needs editing and what is ready to move into export or publishing.",
    miniFields: [
      { label: "Review", value: "Built into the workflow" },
      { label: "Control", value: "User approval required" },
      { label: "Quality", value: "Checked before publishing" },
      { label: "Risk", value: "Reduced by clear statuses" },
    ],
    statusChip: "Review in control",
    accentKey: "04 Governance",
  },
  {
    id: "distribution",
    number: "05",
    category: "Distribution",
    title: "Export and auto-publishing paths",
    shortDescription:
      "LinkedIn and Meta auto-publish where the plan supports it. X and blog use export, so nothing goes live without intent.",
    detailParagraph:
      "Publishing paths reflect the reality of the product and the platform. Some channels can move through auto-publishing when the plan and account connection support it, while others are prepared for export so the user keeps full control.",
    miniFields: [
      { label: "LinkedIn", value: "Auto-publish on supported plans" },
      { label: "Meta", value: "Auto-publish on supported plans" },
      { label: "X", value: "Export workflow" },
      { label: "Blog", value: "Export workflow" },
    ],
    statusChip: "Publishing paths ready",
    accentKey: "05 Distribution",
  },
  {
    id: "creative",
    number: "06",
    category: "Creative",
    title: "AI image prompts",
    shortDescription:
      "Produce image direction and prompts that match the post, platform and brand instead of generic stock visuals.",
    detailParagraph:
      "Every post can carry visual direction, not just text. CRISP helps shape image prompts around the content, channel and brand so the creative feels more connected to the message.",
    miniFields: [
      { label: "Prompt", value: "Matched to post" },
      { label: "Style", value: "Guided by brand" },
      { label: "Channel", value: "Platform-aware" },
      { label: "Use", value: "AI, stock or template direction" },
    ],
    statusChip: "Image direction included",
    accentKey: "06 Creative",
  },
  {
    id: "improvement",
    number: "07",
    category: "Improvement",
    title: "Future reporting and learning",
    shortDescription:
      "Reporting and presence scoring are on the roadmap, so the system gets sharper as the rhythm settles in.",
    detailParagraph:
      "CRISP is being built toward a learning loop. As reporting and presence scoring develop, the system can help users understand what is working and improve future content with more context.",
    miniFields: [
      { label: "Reporting", value: "Coming soon" },
      { label: "Presence score", value: "Coming soon" },
      { label: "Signals", value: "Future learning layer" },
      { label: "Use", value: "Improve content rhythm" },
    ],
    statusChip: "Learning layer soon",
    accentKey: "07 Improvement",
    soon: true,
  },
] as const;
