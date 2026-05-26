import { createMetadata } from "@/lib/metadata";
import { pricingPage, pricingFaq } from "@/content/pages";
import { site } from "@/config/site";
import {
  pricingProductSchema,
  faqPageSchema,
  breadcrumbSchema,
} from "@/lib/schema";
import { StructuredData } from "@/components/marketing/StructuredData";
import { PageHero } from "@/components/marketing/PageHero";
import { PricingSection } from "@/components/marketing/PricingSection";
import { PricingComparisonTable } from "@/components/marketing/PricingComparisonTable";
import { FAQSection } from "@/components/marketing/FAQSection";
import { FinalCTA } from "@/components/marketing/FinalCTA";

export const metadata = createMetadata({
  title: "Pricing | CRISP Content Engine",
  description:
    "Start free with CRISP Content Engine, then upgrade for LinkedIn auto-publishing, X export, blog workflows, Meta publishing and multi-brand content operations.",
  path: "/pricing",
});

export default function PricingPage() {
  return (
    <>
      <StructuredData
        data={[
          pricingProductSchema(),
          faqPageSchema(pricingFaq.items),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Pricing", path: "/pricing" },
          ]),
        ]}
      />
      <PageHero
        eyebrow="Pricing"
        heading={pricingPage.headline}
        body={pricingPage.subheadline}
        primaryCta={{
          label: pricingPage.primaryCta,
          href: site.startUrl,
          event: "cce_start_free_click",
        }}
        secondaryCta={{
          label: pricingPage.secondaryCta,
          href: pricingPage.secondaryHref,
          event: "cce_pricing_cta_click",
        }}
        align="center"
      />
      <PricingSection showHeading={false} />
      <PricingComparisonTable />
      <FAQSection heading={pricingFaq.heading} items={pricingFaq.items} />
      <FinalCTA />
    </>
  );
}
