import { createMetadata } from "@/lib/metadata";
import { useCasesPage } from "@/content/marketing";
import { breadcrumbSchema } from "@/lib/schema";
import { StructuredData } from "@/components/marketing/StructuredData";
import { Section, SectionHeader } from "@/components/marketing/Section";
import { FinalCTA } from "@/components/marketing/FinalCTA";

export const metadata = createMetadata({
  title: "Use Cases | CRISP Content Engine",
  description:
    "Explore content workflows for founders, consultants, agencies and lean teams who need to stay consistently visible.",
  path: "/use-cases",
});

export default function UseCasesPage() {
  return (
    <>
      <StructuredData
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Use cases", path: "/use-cases" },
        ])}
      />
      <Section className="pt-14 sm:pt-20">
        <SectionHeader
          eyebrow="Use cases"
          heading={useCasesPage.headline}
          body={useCasesPage.subheadline}
          align="center"
          className="mx-auto"
        />
      </Section>

      <Section tone="warm">
        <div className="grid gap-5 lg:grid-cols-2">
          {useCasesPage.cases.map((useCase, i) => (
            <article
              key={useCase.title}
              className={`rounded-2xl border border-border bg-surface p-8 shadow-[var(--shadow-sm)] ${
                i === useCasesPage.cases.length - 1 && useCasesPage.cases.length % 2 !== 0
                  ? "lg:col-span-2 lg:mx-auto lg:max-w-2xl"
                  : ""
              }`}
            >
              <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-accent">
                Workflow
              </p>
              <h2 className="mt-2 text-xl font-semibold text-navy">{useCase.title}</h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                {useCase.copy}
              </p>
            </article>
          ))}
        </div>
      </Section>

      <FinalCTA />
    </>
  );
}
