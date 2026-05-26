import { createMetadata } from "@/lib/metadata";
import { HeroSection } from "@/components/marketing/HeroSection";
import { ProblemSection } from "@/components/marketing/ProblemSection";
import { FeatureGrid } from "@/components/marketing/FeatureGrid";
import { WorkflowSection } from "@/components/marketing/WorkflowSection";
import { AudienceCards } from "@/components/marketing/AudienceCards";
import { ComparisonTable } from "@/components/marketing/ComparisonTable";
import { AIPositioningPanel } from "@/components/marketing/AIPositioningPanel";
import { ChannelCards } from "@/components/marketing/ChannelCards";
import { RoadmapSection } from "@/components/marketing/RoadmapSection";
import { PricingCards } from "@/components/marketing/PricingCards";
import { FAQAccordion } from "@/components/marketing/FAQAccordion";
import { CTASection } from "@/components/marketing/CTASection";

export const metadata = createMetadata({
  title: "CRISP Content Engine | Your Content System, Built Around Your Brand",
  description:
    "CRISP Content Engine helps founders, consultants and lean teams turn strategy into consistent content across LinkedIn, X, Meta and blog without starting from a blank page every week.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ProblemSection />
      <FeatureGrid />
      <WorkflowSection />
      <AudienceCards />
      <ComparisonTable />
      <AIPositioningPanel />
      <ChannelCards />
      <RoadmapSection />
      <PricingCards id="pricing" />
      <FAQAccordion />
      <CTASection />
    </>
  );
}
