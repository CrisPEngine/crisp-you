import { PageHero } from "@/components/marketing/PageHero";
import { Section, SectionHeader } from "@/components/marketing/Section";
import { Button } from "@/components/marketing/Button";
import { FinalCTA } from "@/components/marketing/FinalCTA";
import { RelatedLinks } from "@/components/marketing/RelatedLinks";
import { site } from "@/config/site";
import type { UseCaseDetail } from "@/content/use-cases-detail";

type UseCaseDetailLayoutProps = {
  detail: UseCaseDetail;
};

export function UseCaseDetailLayout({ detail }: UseCaseDetailLayoutProps) {
  return (
    <>
      <PageHero
        eyebrow="Use cases"
        heading={detail.headline}
        body={detail.subheadline}
        primaryCta={{
          label: detail.cta,
          href: site.startUrl,
          event: "cce_start_free_click",
        }}
        secondaryCta={{
          label: "View pricing",
          href: "/pricing",
          event: "cce_pricing_cta_click",
        }}
      />

      <Section tone="warm">
        <SectionHeader heading={detail.problemHeading} body={detail.problemCopy} />
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {detail.diagnosticCards.map((card) => (
            <div key={card.title} className="glass-panel p-5">
              <h3 className="text-sm font-semibold text-navy">{card.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{card.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeader heading={detail.workflowHeading} />
        <div className="overflow-x-auto glass-panel">
          <table className="w-full min-w-[720px] text-left text-sm">
            <thead>
              <tr className="border-b border-border-subtle">
                <th className="px-4 py-3 font-semibold text-navy">Need</th>
                <th className="px-4 py-3 font-semibold text-navy">CRISP workflow</th>
                <th className="px-4 py-3 font-semibold text-navy">Outcome</th>
              </tr>
            </thead>
            <tbody>
              {detail.workflowRows.map((row) => (
                <tr key={row.need} className="border-b border-border-subtle last:border-0">
                  <td className="px-4 py-3 font-medium text-charcoal">{row.need}</td>
                  <td className="px-4 py-3 text-muted-foreground">{row.workflow}</td>
                  <td className="px-4 py-3 text-muted-foreground">{row.outcome}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-8">
          <Button href={site.startUrl} size="lg" event="cce_start_free_click">
            {detail.cta}
          </Button>
        </div>
      </Section>

      <RelatedLinks heading="Related pages" links={detail.relatedLinks} />
      <FinalCTA />
    </>
  );
}
