import { createMetadata } from "@/lib/metadata";
import { legalPages } from "@/content/marketing";
import { Section, SectionHeader } from "@/components/marketing/Section";

export const metadata = createMetadata({
  title: `${legalPages.privacy.title} | CRISP Content Engine`,
  description: legalPages.privacy.description,
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <Section className="pt-12 sm:pt-16">
      <SectionHeader heading={legalPages.privacy.title} />
      <div className="prose prose-slate max-w-3xl">
        <p className="text-base leading-relaxed text-muted-foreground">
          This privacy policy page is a placeholder. Final privacy terms will be published here before launch.
        </p>
      </div>
    </Section>
  );
}
