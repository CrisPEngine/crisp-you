import { createMetadata } from "@/lib/metadata";
import { legalPages } from "@/content/marketing";
import { site } from "@/config/site";
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
      <div className="mt-8">
        <Button href={site.startUrl}>Start free, no card required</Button>
      </div>
    </Section>
  );
}
