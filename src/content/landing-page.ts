export type ContentCard = {
  title: string;
  body: string;
};

export type ContentTable = {
  headers: readonly string[];
  rows: readonly (readonly string[])[];
};

export type ContentStep = {
  title: string;
  body: string;
};

export type IdeaOutputModule = {
  core: string;
  outputs: readonly { channel: string; format: string }[];
};

export type LandingSection =
  | {
      type: "cards";
      heading: string;
      body?: string;
      cards: readonly ContentCard[];
    }
  | {
      type: "table";
      heading: string;
      body?: string;
      table: ContentTable;
    }
  | {
      type: "steps";
      heading: string;
      body?: string;
      steps: readonly ContentStep[];
    }
  | {
      type: "ideaOutputs";
      heading: string;
      body?: string;
      module: IdeaOutputModule;
    };

export type LandingFaqItem = {
  question: string;
  answer: string;
};

export type LandingPageContent = {
  path: string;
  seoTitle: string;
  description: string;
  eyebrow: string;
  headline: string;
  heroCopy: string;
  primaryCta: string;
  primaryCtaHref: "start" | "contact" | "billing";
  primaryCtaEvent: "cce_start_free_click" | "cce_contact_sales_click" | "cce_pricing_cta_click";
  secondaryCta?: string;
  secondaryCtaHref?: string;
  secondaryCtaEvent?: "cce_pricing_cta_click" | "cce_feature_cta_click" | "cce_blog_cta_click";
  sections: readonly LandingSection[];
  faq?: readonly LandingFaqItem[];
  finalCtaHeading: string;
  finalCtaCopy: string;
  finalCta: string;
  finalCtaHref?: "start" | "contact" | "billing";
  finalCtaEvent?: "cce_start_free_click" | "cce_contact_sales_click" | "cce_pricing_cta_click";
  relatedLinks: readonly { label: string; href: string }[];
};

export function resolveCtaHref(target: LandingPageContent["primaryCtaHref"]) {
  if (target === "contact") return "/contact";
  if (target === "billing") return "https://app.crispdigital.io/billing";
  return "https://app.crispdigital.io";
}
