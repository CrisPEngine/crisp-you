import { createMetadata } from "@/lib/metadata";
import { legalPages, siteConfig } from "@/content/marketing";
import { Section, SectionHeader } from "@/components/marketing/Section";
import { Button } from "@/components/marketing/Button";

export const metadata = createMetadata({
  title: `${legalPages.contact.title} | CRISP Content Engine`,
  description: legalPages.contact.description,
  path: "/contact",
});

export default function ContactPage() {
  return (
    <Section className="pt-12 sm:pt-16">
      <SectionHeader heading={legalPages.contact.title} body={legalPages.contact.body} />
      <div className="max-w-xl rounded-2xl border border-border bg-surface p-8 shadow-sm">
        <p className="text-sm text-muted-foreground">
          Contact form coming soon. For now, reach out via your preferred channel or start building your content system directly.
        </p>
        <div className="mt-6">
          <Button href={siteConfig.urls.signup}>Start building your content system</Button>
        </div>
      </div>
    </Section>
  );
}
