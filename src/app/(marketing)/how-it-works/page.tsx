import { createMetadata } from "@/lib/metadata";
import { howItWorksPage } from "@/content/marketing";
import { breadcrumbSchema } from "@/lib/schema";
import { StructuredData } from "@/components/marketing/StructuredData";
import { Section, SectionHeader } from "@/components/marketing/Section";
import { WorkflowMap } from "@/components/marketing/WorkflowMap";
import { FinalCTA } from "@/components/marketing/FinalCTA";

export const metadata = createMetadata({
  title: "How It Works | CRISP Content Engine",
  description:
    "See how CRISP Content Engine turns brand strategy into content queues, review workflows and platform-ready drafts.",
  path: "/how-it-works",
});

export default function HowItWorksPage() {
  return (
    <>
      <StructuredData
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "How it works", path: "/how-it-works" },
        ])}
      />
      <Section className="pt-12 sm:pt-16">
        <SectionHeader
          heading={howItWorksPage.headline}
          body={howItWorksPage.subheadline}
          align="center"
          className="mx-auto"
        />
      </Section>
      <WorkflowMap />
      <FinalCTA />
    </>
  );
}
