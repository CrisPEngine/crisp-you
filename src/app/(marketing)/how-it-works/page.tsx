import { createMetadata } from "@/lib/metadata";
import { howItWorksPage } from "@/content/pages";
import { site } from "@/config/site";
import { breadcrumbSchema } from "@/lib/schema";
import { StructuredData } from "@/components/marketing/StructuredData";
import { PageHero } from "@/components/marketing/PageHero";
import { Section, SectionHeader } from "@/components/marketing/Section";
import { Button } from "@/components/marketing/Button";
import { FinalCTA } from "@/components/marketing/FinalCTA";

export const metadata = createMetadata({
  title: "How It Works | CRISP Content Engine",
  description:
    "See how CRISP Content Engine turns brand strategy into a content queue, review workflow and channel-ready drafts for LinkedIn, X, Meta and blog.",
  path: "/how-it-works",
});

export default function HowItWorksPage() {
  return (
    <>
      <StructuredData
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "How it works", path: "/how-it-works" },
        ])}
      />
      <PageHero
        eyebrow="How it works"
        heading={howItWorksPage.headline}
        body={howItWorksPage.subheadline}
        primaryCta={{
          label: howItWorksPage.primaryCta,
          href: site.startUrl,
          event: "cce_start_free_click",
        }}
        secondaryCta={{
          label: howItWorksPage.secondaryCta,
          href: howItWorksPage.secondaryHref,
          event: "cce_pricing_cta_click",
        }}
      />

      <Section>
        <SectionHeader eyebrow="The flow" heading={howItWorksPage.flowHeading} />
        <ol className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {howItWorksPage.steps.map((step, i) => (
            <li key={step.title} className="glass-panel glass-panel-interactive p-5">
              <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-accent">
                Step {i + 1}
              </p>
              <h3 className="mt-2 text-lg font-semibold text-navy">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{step.copy}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section tone="deep">
        <SectionHeader
          eyebrow="The difference"
          heading={howItWorksPage.differenceHeading}
        />
        <div className="grid overflow-hidden rounded-2xl border border-border lg:grid-cols-2">
          <div className="glass-panel border-0 rounded-none p-8 lg:border-r lg:border-border-subtle">
            <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-muted">
              {howItWorksPage.oldWay.label}
            </p>
            <ul className="mt-5 space-y-3">
              {howItWorksPage.oldWay.items.map((item) => (
                <li key={item} className="text-sm text-muted-foreground">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="cce-panel-highlight rounded-none p-8">
            <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-accent">
              {howItWorksPage.crispWay.label}
            </p>
            <ul className="mt-5 space-y-3">
              {howItWorksPage.crispWay.items.map((item) => (
                <li key={item} className="text-sm font-medium text-navy">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-10 flex flex-wrap gap-3">
          <Button href={site.startUrl} size="lg" event="cce_start_free_click">
            {howItWorksPage.ctaHeading}
          </Button>
          <Button href="/features/brand-profile" variant="secondary" size="lg" event="cce_feature_cta_click">
            Explore brand profile
          </Button>
          <Button href="/features/content-queue" variant="secondary" size="lg" event="cce_feature_cta_click">
            Explore content queue
          </Button>
        </div>
      </Section>

      <FinalCTA />
    </>
  );
}
