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
import { CapabilitySystem } from "@/components/marketing/CapabilitySystem";
import { WorkflowMap } from "@/components/marketing/WorkflowMap";
import { UseCasePanels } from "@/components/marketing/UseCasePanels";
import { DifferentiationTable } from "@/components/marketing/DifferentiationTable";
import { AIPositioningPanel } from "@/components/marketing/AIPositioningPanel";
import { ChannelCards } from "@/components/marketing/ChannelCards";
import { IdeaBranchSection } from "@/components/marketing/IdeaBranchSection";
import { PricingSection } from "@/components/marketing/PricingSection";
import { FAQSection } from "@/components/marketing/FAQSection";
import { FinalCTA } from "@/components/marketing/FinalCTA";
import { MidPageCTA } from "@/components/marketing/MidPageCTA";

export const metadata = createMetadata({
  title: "CRISP Content Engine | A Content System Built Around Your Brand",
  description:
    "CRISP Content Engine helps founders, consultants and lean teams turn brand strategy into consistent content across LinkedIn, X, Meta and blog without starting from a blank page every week.",
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
      <CapabilitySystem />
      <div className="pb-16 sm:pb-20">
        <MidPageCTA />
      </div>
      <WorkflowMap />
      <UseCasePanels />
      <DifferentiationTable />
      <AIPositioningPanel />
      <ChannelCards />
      <IdeaBranchSection />
      <PricingSection id="pricing" />
      <FAQSection />
      <FinalCTA />
    </>
  );
}
