import { createMetadata } from "@/lib/metadata";
import { pricingPage } from "@/content/marketing";
import { Section, SectionHeader } from "@/components/marketing/Section";
import { PricingCards } from "@/components/marketing/PricingCards";
import { PricingComparisonTable } from "@/components/marketing/PricingComparisonTable";
import { FAQAccordion } from "@/components/marketing/FAQAccordion";
import { CTASection } from "@/components/marketing/CTASection";

export const metadata = createMetadata({
  title: "Pricing | CRISP Content Engine",
  description:
    "Simple pricing for founders, consultants, agencies and lean teams building a more consistent content workflow.",
  path: "/pricing",
});

export default function PricingPage() {
  return (
    <>
      <Section className="pt-12 sm:pt-16">
        <SectionHeader
          heading={pricingPage.headline}
          body={pricingPage.subheadline}
          align="center"
          className="mx-auto"
        />
      </Section>
      <PricingCards showHeading={false} />
      <PricingComparisonTable />
      <FAQAccordion />
      <CTASection />
    </>
  );
}
