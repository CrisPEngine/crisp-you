import { createMetadata } from "@/lib/metadata";
import { legalPages } from "@/content/marketing";
import { Section, SectionHeader } from "@/components/marketing/Section";

export const metadata = createMetadata({
  title: `${legalPages.terms.title} | CRISP Content Engine`,
  description: legalPages.terms.description,
  path: "/terms",
});

export default function TermsPage() {
  return (
    <Section className="pt-12 sm:pt-16">
      <SectionHeader heading={legalPages.terms.title} />
      <div className="prose prose-slate max-w-3xl">
        <p className="text-base leading-relaxed text-muted-foreground">
          This terms of service page is a placeholder. Final terms will be published here before launch.
        </p>
      </div>
    </Section>
  );
}
