import { createMetadata } from "@/lib/metadata";
import { legalPages } from "@/content/marketing";
import { site } from "@/config/site";
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
          Email us at{" "}
          <a href={site.contactUrl} className="font-medium text-accent hover:text-accent-hover">
            {site.contactEmail}
          </a>{" "}
          for pricing, onboarding or sales questions.
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <Button href={site.contactUrl}>Contact sales</Button>
          <Button href={site.startUrl} variant="secondary">
            Start free
          </Button>
        </div>
      </div>
    </Section>
  );
}
