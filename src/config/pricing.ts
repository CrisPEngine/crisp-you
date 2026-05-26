export type BillingInterval = "monthly" | "annual";

export type PricingTier = {
  id: string;
  name: string;
  badge?: string;
  monthlyPrice: number | null;
  annualPrice: number | null;
  priceLabel?: string;
  annualEquivalent?: string;
  bestFor: string;
  includes: readonly string[];
  cta: string;
  ctaHref: "start" | "billing" | "contact";
  highlighted?: boolean;
};

export const pricingContent = {
  heading: "Start free, upgrade when the rhythm is working",
  subheading:
    "Build consistency on Starter, then move into auto-publishing, multi-channel workflows and multi-brand operations as your content system matures.",
  annualSaveLabel: "Annual, save 20%",
  notes: [
    "Taxes may apply. Upgrade or cancel anytime.",
    "Payment is collected via Stripe. Merchant name on statement: ABL International.",
    "Export means copy-ready content for manual posting. Auto-publish applies only where listed and account connection allows.",
    "Meta refers to shared Facebook and Instagram workflows where supported.",
  ],
  tiers: [
    {
      id: "starter",
      name: "Starter",
      badge: "Free Forever",
      monthlyPrice: 0,
      annualPrice: 0,
      priceLabel: "Free",
      bestFor: "Founders getting consistent with structure.",
      includes: [
        "4 LinkedIn posts per month, export",
        "4 X posts per month, export",
        "1 blog outline per month, export",
        "AI image prompts included",
        "Manual posting",
        "No credit card required",
        "Efficient generation to keep Free sustainable",
      ],
      cta: "Start free, no card required",
      ctaHref: "start",
    },
    {
      id: "creator",
      name: "Creator",
      monthlyPrice: 15,
      annualPrice: 144,
      annualEquivalent: "$12/month when billed yearly",
      bestFor: "Solo operators who want LinkedIn on autopilot.",
      includes: [
        "12 LinkedIn posts per month, auto-publish",
        "12 X posts per month, export",
        "2 blog articles per month, export",
        "Brand onboarding",
        "AI image prompts included",
        "Single idea briefing, soon",
        "Comment engine, soon",
      ],
      cta: "Upgrade to Creator",
      ctaHref: "billing",
    },
    {
      id: "growth",
      name: "Growth",
      monthlyPrice: 29,
      annualPrice: 278,
      annualEquivalent: "approximately $23/month when billed yearly",
      bestFor: "Serious visibility across every core channel.",
      includes: [
        "20 LinkedIn posts per month, auto-publish",
        "40 X posts per month, export",
        "4 blog articles per month, export",
        "20 Meta posts per month, shared Facebook and Instagram, auto-publish",
        "One brand, up to 5 channels",
        "Single idea briefing, soon",
        "Comment engine, soon",
        "Analytics layer, soon",
      ],
      cta: "Upgrade to Growth",
      ctaHref: "billing",
      highlighted: true,
    },
    {
      id: "pro",
      name: "Pro",
      monthlyPrice: 49,
      annualPrice: 470,
      annualEquivalent: "approximately $39/month when billed yearly",
      bestFor: "Multi-brand operators and agencies running volume.",
      includes: [
        "75 LinkedIn posts per month, auto-publish",
        "150 X posts per month, export",
        "12 blog articles per month, export",
        "75 Meta posts per month, shared Facebook and Instagram, auto-publish",
        "Up to 3 brands",
        "Additional seat included, coming soon",
        "Presence score and reporting, soon",
      ],
      cta: "Upgrade to Pro",
      ctaHref: "billing",
    },
    {
      id: "scale",
      name: "Scale",
      monthlyPrice: null,
      annualPrice: null,
      priceLabel: "Custom",
      bestFor: "Teams and agencies that need custom limits and support.",
      includes: [
        "Custom brands, limits and seats",
        "Onboarding and priority support",
      ],
      cta: "Contact sales",
      ctaHref: "contact",
    },
  ] satisfies readonly PricingTier[],
  comparisonRows: [
    { key: "price", label: "Price" },
    { key: "bestFor", label: "Best for" },
    { key: "linkedin", label: "LinkedIn" },
    { key: "x", label: "X" },
    { key: "blog", label: "Blog" },
    { key: "meta", label: "Meta" },
    { key: "brands", label: "Brands" },
    { key: "publishing", label: "Publishing" },
    { key: "imagePrompts", label: "AI image prompts" },
    { key: "onboarding", label: "Brand onboarding" },
    { key: "briefing", label: "Single idea briefing" },
    { key: "commentEngine", label: "Comment engine" },
    { key: "analytics", label: "Analytics or reporting" },
    { key: "seats", label: "Seats" },
    { key: "support", label: "Support" },
  ],
  comparisonData: {
    starter: {
      price: "Free",
      linkedin: "Export, 4/mo",
      x: "Export, 4/mo",
      blog: "1 outline/mo",
      meta: "No Meta",
      brands: "1 brand",
      publishing: "Manual posting",
      imagePrompts: "Included",
      onboarding: "Not included",
      briefing: "Not included",
      commentEngine: "Not included",
      analytics: "Not included",
      seats: "1",
      support: "Self-serve",
      bestFor: "Founders getting consistent with structure",
    },
    creator: {
      price: "$15/mo",
      linkedin: "Auto-publish, 12/mo",
      x: "Export, 12/mo",
      blog: "2 articles/mo",
      meta: "No Meta",
      brands: "1 brand",
      publishing: "LinkedIn auto-publish, X export",
      imagePrompts: "Included",
      onboarding: "Included",
      briefing: "Soon",
      commentEngine: "Soon",
      analytics: "Not included",
      seats: "1",
      support: "Self-serve",
      bestFor: "Solo operators who want LinkedIn on autopilot",
    },
    growth: {
      price: "$29/mo",
      linkedin: "Auto-publish, 20/mo",
      x: "Export, 40/mo",
      blog: "4 articles/mo",
      meta: "20/mo, Facebook and Instagram, auto-publish",
      brands: "1 brand, up to 5 channels",
      publishing: "LinkedIn and Meta auto-publish, X export",
      imagePrompts: "Included",
      onboarding: "Included",
      briefing: "Soon",
      commentEngine: "Soon",
      analytics: "Analytics layer, soon",
      seats: "1",
      support: "Self-serve",
      bestFor: "Serious visibility across every core channel",
    },
    pro: {
      price: "$49/mo",
      linkedin: "Auto-publish, 75/mo",
      x: "Export, 150/mo",
      blog: "12 articles/mo",
      meta: "75/mo, Facebook and Instagram, auto-publish",
      brands: "Up to 3 brands",
      publishing: "LinkedIn and Meta auto-publish, X export",
      imagePrompts: "Included",
      onboarding: "Included",
      briefing: "Not listed",
      commentEngine: "Not listed",
      analytics: "Presence score and reporting, soon",
      seats: "Additional seat, coming soon",
      support: "Self-serve",
      bestFor: "Multi-brand operators and agencies running volume",
    },
    scale: {
      price: "Custom",
      linkedin: "Custom",
      x: "Custom",
      blog: "Custom",
      meta: "Custom",
      brands: "Custom brands, limits and seats",
      publishing: "Custom",
      imagePrompts: "Custom",
      onboarding: "Included",
      briefing: "Custom",
      commentEngine: "Custom",
      analytics: "Custom",
      seats: "Custom",
      support: "Onboarding and priority support",
      bestFor: "Teams and agencies that need custom limits and support",
    },
  },
} as const;

export function formatTierPrice(
  tier: PricingTier,
  interval: BillingInterval,
): { price: string; sublabel?: string } {
  if (tier.priceLabel === "Custom") {
    return { price: "Custom" };
  }
  if (tier.monthlyPrice === 0) {
    return { price: "Free", sublabel: tier.badge };
  }
  if (interval === "annual" && tier.annualPrice != null) {
    return {
      price: `$${tier.annualPrice}/year`,
      sublabel: tier.annualEquivalent,
    };
  }
  if (tier.monthlyPrice != null) {
    return { price: `$${tier.monthlyPrice}/mo` };
  }
  return { price: tier.priceLabel ?? "Custom" };
}
