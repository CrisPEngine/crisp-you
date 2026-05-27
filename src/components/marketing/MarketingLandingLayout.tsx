import { ResponsiveDataTable } from "@/components/marketing/ResponsiveDataTable";
import { PageHero } from "@/components/marketing/PageHero";
import { Section, SectionHeader } from "@/components/marketing/Section";
import { FAQSection } from "@/components/marketing/FAQSection";
import { Button } from "@/components/marketing/Button";
import { RelatedLinks } from "@/components/marketing/RelatedLinks";
import { FinalCTA } from "@/components/marketing/FinalCTA";
import { site, cta as siteCta } from "@/config/site";
import type { LandingPageContent } from "@/content/landing-page";
import { resolveCtaHref } from "@/content/landing-page";
import { cn } from "@/lib/utils";

function ctaUrl(target: "start" | "contact" | "billing") {
  if (target === "contact") return "/contact";
  if (target === "billing") return site.billingUrl;
  return site.startUrl;
}

export function MarketingLandingLayout({ page }: { page: LandingPageContent }) {
  const primaryHref = resolveCtaHref(page.primaryCtaHref);
  const finalHref = ctaUrl(page.finalCtaHref ?? page.primaryCtaHref);
  const finalEvent = page.finalCtaEvent ?? page.primaryCtaEvent;

  return (
    <>
      <PageHero
        eyebrow={page.eyebrow}
        heading={page.headline}
        body={page.heroCopy}
        primaryCta={{
          label: page.primaryCta,
          href: primaryHref,
          event: page.primaryCtaEvent,
        }}
        secondaryCta={
          page.secondaryCta && page.secondaryCtaHref
            ? {
                label: page.secondaryCta,
                href: page.secondaryCtaHref,
                event: page.secondaryCtaEvent ?? "cce_pricing_cta_click",
              }
            : undefined
        }
      />

      {page.sections.map((section, index) => (
        <Section key={section.heading} tone={index % 2 === 1 ? "warm" : index % 2 === 0 && index > 0 ? "deep" : undefined}>
          <SectionHeader heading={section.heading} body={section.body} />
          {section.type === "cards" && section.cards.length > 0 && (
            <div
              className={cn(
                "grid gap-3",
                section.cards.length <= 4 ? "sm:grid-cols-2" : "sm:grid-cols-2 lg:grid-cols-3",
              )}
            >
              {section.cards.map((card) => (
                <div key={card.title} className="glass-panel p-5">
                  <h3 className="text-sm font-semibold text-navy">{card.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{card.body}</p>
                </div>
              ))}
            </div>
          )}
          {section.type === "table" && (
            <ResponsiveDataTable
              headers={section.table.headers}
              rows={section.table.rows}
            />
          )}
          {section.type === "steps" && (
            <ol className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {section.steps.map((step, stepIndex) => (
                <li key={step.title} className="glass-panel p-5">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-accent">
                    Step {stepIndex + 1}
                  </p>
                  <h3 className="mt-2 text-sm font-semibold text-navy">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.body}</p>
                </li>
              ))}
            </ol>
          )}
          {section.type === "ideaOutputs" && (
            <div className="glass-panel p-5 sm:p-6">
              <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-accent">
                Core theme
              </p>
              <p className="mt-2 text-lg font-semibold text-navy">{section.module.core}</p>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {section.module.outputs.map((output) => (
                  <div
                    key={output.channel}
                    className="rounded-xl border border-border-subtle bg-surface-muted/40 p-3"
                  >
                    <span className="text-[11px] font-semibold uppercase tracking-wide text-primary">
                      {output.channel}
                    </span>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                      {output.format}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </Section>
      ))}

      {page.faq && page.faq.length > 0 ? (
        <FAQSection heading="Frequently asked questions" items={page.faq} />
      ) : null}

      <Section tone="deep">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-semibold text-navy sm:text-3xl">{page.finalCtaHeading}</h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">{page.finalCtaCopy}</p>
          <div className="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:items-center sm:justify-center">
            <Button href={finalHref} size="lg" className="w-full sm:w-auto" event={finalEvent}>
              {page.finalCta}
            </Button>
            {page.primaryCtaHref !== "start" ? (
              <Button href={site.startUrl} variant="secondary" size="lg" className="w-full sm:w-auto" event="cce_start_free_click">
                {siteCta.primary}
              </Button>
            ) : null}
          </div>
        </div>
      </Section>

      <RelatedLinks links={page.relatedLinks} />
      <FinalCTA />
    </>
  );
}
