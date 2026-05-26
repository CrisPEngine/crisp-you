import { createMetadata } from "@/lib/metadata";
import { contactPage } from "@/content/pages";
import { breadcrumbSchema } from "@/lib/schema";
import { StructuredData } from "@/components/marketing/StructuredData";
import { PageHero } from "@/components/marketing/PageHero";
import { Section } from "@/components/marketing/Section";
import { Button } from "@/components/marketing/Button";
import { FinalCTA } from "@/components/marketing/FinalCTA";
import type { AnalyticsEvent } from "@/lib/analytics";

export const metadata = createMetadata({
  title: "Contact | CRISP Content Engine",
  description:
    "Contact CRISP Content Engine for Scale plans, partnerships, support or product enquiries.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <StructuredData
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ])}
      />
      <PageHero
        eyebrow="Contact"
        heading={contactPage.headline}
        body={contactPage.subheadline}
      />

      <Section tone="warm">
        <div className="grid gap-4 md:grid-cols-3">
          {contactPage.cards.map((card) => (
            <article key={card.title} className="glass-panel flex flex-col p-6">
              <h2 className="text-lg font-semibold text-navy">{card.title}</h2>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                {card.copy}
              </p>
              <Button
                href={card.href}
                className="mt-6 w-full"
                external={card.href.startsWith("http") || card.href.startsWith("mailto:")}
                event={card.event as AnalyticsEvent}
              >
                {card.cta}
              </Button>
            </article>
          ))}
        </div>
      </Section>

      <FinalCTA />
    </>
  );
}
