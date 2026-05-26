import { createMetadata } from "@/lib/metadata";
import { useCasesPage } from "@/content/marketing";
import { Section, SectionHeader } from "@/components/marketing/Section";
import { CTASection } from "@/components/marketing/CTASection";

export const metadata = createMetadata({
  title: "Use Cases | CRISP Content Engine",
  description:
    "Explore how founders, consultants, agencies and lean teams use CRISP Content Engine to stay consistently visible.",
  path: "/use-cases",
});

export default function UseCasesPage() {
  return (
    <>
      <Section className="pt-12 sm:pt-16">
        <SectionHeader
          heading={useCasesPage.headline}
          body={useCasesPage.subheadline}
          align="center"
          className="mx-auto"
        />
      </Section>

      <Section warm>
        <div className="grid gap-6 lg:grid-cols-2">
          {useCasesPage.cases.map((useCase, i) => (
            <div
              key={useCase.title}
              className={`rounded-2xl border border-border bg-surface p-8 shadow-sm ${
                i === useCasesPage.cases.length - 1 && useCasesPage.cases.length % 2 !== 0
                  ? "lg:col-span-2 lg:max-w-2xl lg:justify-self-center lg:w-full"
                  : ""
              }`}
            >
              <h2 className="text-xl font-semibold text-navy">{useCase.title}</h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                {useCase.copy}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <CTASection />
    </>
  );
}
