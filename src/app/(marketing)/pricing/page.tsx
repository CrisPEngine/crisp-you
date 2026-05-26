import { createMetadata } from "@/lib/metadata";
import { pricingPage } from "@/content/marketing";
import {
  pricingProductSchema,
  faqPageSchema,
  breadcrumbSchema,
} from "@/lib/schema";
import { StructuredData } from "@/components/marketing/StructuredData";
import { Section, SectionHeader } from "@/components/marketing/Section";
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
          faqPageSchema(),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Pricing", path: "/pricing" },
          ]),
        ]}
      />
      <Section className="pt-14 sm:pt-20">
        <SectionHeader
          eyebrow="Pricing"
          heading={pricingPage.headline}
          body={pricingPage.subheadline}
          align="center"
          className="mx-auto"
        />
      </Section>
      <PricingSection showHeading={false} />
      <PricingComparisonTable />
      <FAQSection />
      <FinalCTA />
    </>
  );
}
