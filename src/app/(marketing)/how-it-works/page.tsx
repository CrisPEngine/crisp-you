import { createMetadata } from "@/lib/metadata";
import { howItWorksPage } from "@/content/marketing";
import { Section, SectionHeader } from "@/components/marketing/Section";
import { WorkflowSection } from "@/components/marketing/WorkflowSection";
import { CTASection } from "@/components/marketing/CTASection";

export const metadata = createMetadata({
  title: "How It Works | CRISP Content Engine",
  description:
    "See how CRISP Content Engine turns brand strategy into content queues, review workflows and platform-ready drafts.",
  path: "/how-it-works",
});

export default function HowItWorksPage() {
  return (
    <>
      <Section className="pt-12 sm:pt-16">
        <SectionHeader
          heading={howItWorksPage.headline}
          body={howItWorksPage.subheadline}
          align="center"
          className="mx-auto"
        />
      </Section>

      <Section warm>
        <div className="space-y-8">
          {howItWorksPage.sections.map((section, i) => (
            <div
              key={section.title}
              className="grid gap-6 rounded-2xl border border-border bg-surface p-6 shadow-sm lg:grid-cols-[auto_1fr] lg:items-start lg:gap-8 lg:p-8"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent text-lg font-bold text-white">
                {i + 1}
              </span>
              <div>
                <h2 className="text-xl font-semibold text-navy">{section.title}</h2>
                <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                  {section.copy}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <WorkflowSection />
      <CTASection />
    </>
  );
}
