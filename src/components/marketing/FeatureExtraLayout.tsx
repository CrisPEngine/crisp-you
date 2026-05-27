import { PageHero } from "@/components/marketing/PageHero";
import { Section, SectionHeader } from "@/components/marketing/Section";
import { Button } from "@/components/marketing/Button";
import { FinalCTA } from "@/components/marketing/FinalCTA";
import { RelatedLinks } from "@/components/marketing/RelatedLinks";
import { site } from "@/config/site";
import type { FeaturePageContent } from "@/content/features-extra";

export function FeatureExtraLayout({ page }: { page: FeaturePageContent }) {
  return (
    <>
      <PageHero
        eyebrow="Features"
        heading={page.headline}
        body={page.subheadline}
        primaryCta={{
          label: page.cta,
          href: site.startUrl,
          event: "cce_feature_cta_click",
        }}
        secondaryCta={{
          label: "View pricing",
          href: "/pricing",
          event: "cce_pricing_cta_click",
        }}
      />

      <Section>
        <SectionHeader heading={page.includesHeading} />
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {page.includesCards.map((card) => (
            <div key={card.title} className="glass-panel p-5">
              <h3 className="text-sm font-semibold text-navy">{card.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{card.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="deep">
        <SectionHeader heading={page.problemHeading} body={page.problemCopy} />
        <div className="overflow-x-auto glass-panel">
          <table className="w-full min-w-[560px] text-left text-sm">
            <thead>
              <tr className="border-b border-border-subtle">
                {page.comparisonTable.headers.map((header) => (
                  <th key={header} className="px-4 py-3 font-semibold text-navy">
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {page.comparisonTable.rows.map(([left, right]) => (
                <tr key={left} className="border-b border-border-subtle last:border-0">
                  <td className="px-4 py-3 font-medium text-charcoal">{left}</td>
                  <td className="px-4 py-3 text-muted-foreground">{right}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-8">
          <Button href={site.startUrl} size="lg" event="cce_feature_cta_click">
            {page.cta}
          </Button>
        </div>
      </Section>

      <RelatedLinks links={page.relatedLinks} />
      <FinalCTA />
    </>
  );
}
