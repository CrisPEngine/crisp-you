import { createMetadata } from "@/lib/metadata";
import { legalPages, siteConfig } from "@/content/marketing";
import { Section, SectionHeader } from "@/components/marketing/Section";
import { Button } from "@/components/marketing/Button";

export const metadata = createMetadata({
  title: `${legalPages.about.title} | CRISP Content Engine`,
  description: legalPages.about.description,
  path: "/about",
});

export default function AboutPage() {
  return (
    <Section className="pt-12 sm:pt-16">
      <SectionHeader heading={legalPages.about.title} body={legalPages.about.body} />
      <Button href={siteConfig.urls.signup}>Start building your content system</Button>
    </Section>
  );
}
