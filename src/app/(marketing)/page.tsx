import { createMetadata } from "@/lib/metadata";
import {
  organizationSchema,
  websiteSchema,
  softwareApplicationSchema,
  faqPageSchema,
} from "@/lib/schema";
import { StructuredData } from "@/components/marketing/StructuredData";
import { HeroSection } from "@/components/marketing/HeroSection";
import { ProblemDiagnostic } from "@/components/marketing/ProblemDiagnostic";
import { IdeaBranchSection } from "@/components/marketing/IdeaBranchSection";
import { CapabilitySystem } from "@/components/marketing/CapabilitySystem";
import { WorkflowMap } from "@/components/marketing/WorkflowMap";
import { UseCasePanels } from "@/components/marketing/UseCasePanels";
import { DifferentiationTable } from "@/components/marketing/DifferentiationTable";
import { AIPositioningPanel } from "@/components/marketing/AIPositioningPanel";
import { ChannelCards } from "@/components/marketing/ChannelCards";
import { PricingSection } from "@/components/marketing/PricingSection";
import { FAQSection } from "@/components/marketing/FAQSection";
import { FinalCTA } from "@/components/marketing/FinalCTA";
import { MidPageCTA } from "@/components/marketing/MidPageCTA";

export const metadata = createMetadata({
  title: "CRISP Content Engine | Build Consistent Visibility Without Burning Out",
  description:
    "CRISP Content Engine helps founders, consultants and lean teams turn ideas into a structured content system for LinkedIn, X, Meta and blog. Start free with no credit card required.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <StructuredData
        data={[
          organizationSchema(),
          websiteSchema(),
          softwareApplicationSchema(),
          faqPageSchema(),
        ]}
      />
      <HeroSection />
      <ProblemDiagnostic />
      <IdeaBranchSection />
      <CapabilitySystem />
      <div className="bg-background-elevated pb-16 sm:pb-20">
        <MidPageCTA />
      </div>
      <WorkflowMap />
      <UseCasePanels />
      <DifferentiationTable />
      <AIPositioningPanel />
      <ChannelCards />
      <PricingSection id="pricing" />
      <FAQSection />
      <FinalCTA />
    </>
  );
}
