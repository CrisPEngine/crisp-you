import { PageHero } from "@/components/marketing/PageHero";
import { Section } from "@/components/marketing/Section";
import { Button } from "@/components/marketing/Button";
import { FinalCTA } from "@/components/marketing/FinalCTA";
import { RelatedLinks } from "@/components/marketing/RelatedLinks";
import { site } from "@/config/site";
import type { ComparePageContent } from "@/content/compare";

export function CompareLayout({ page }: { page: ComparePageContent }) {
  return (
    <>
      <PageHero
        eyebrow="Compare"
        heading={page.headline}
        body={page.subheadline}
        primaryCta={{
          label: page.cta,
          href: site.startUrl,
          event: "cce_start_free_click",
        }}
        secondaryCta={{
          label: "View pricing",
          href: "/pricing",
          event: "cce_pricing_cta_click",
        }}
      />

      <Section>
        <div className="overflow-x-auto glass-panel">
          <table className="w-full min-w-[720px] text-left text-sm">
            <thead>
              <tr className="border-b border-border-subtle">
                {page.tableHeaders.map((header) => (
                  <th key={header} className="px-4 py-3 font-semibold text-navy">
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {page.tableRows.map(([a, b, c]) => (
                <tr key={a} className="border-b border-border-subtle last:border-0">
                  <td className="px-4 py-3 font-medium text-charcoal">{a}</td>
                  <td className="px-4 py-3 text-muted-foreground">{b}</td>
                  <td className="px-4 py-3 text-muted-foreground">{c}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section tone="warm">
        <div className="grid gap-6 lg:grid-cols-2">
          <article className="glass-panel p-6">
            <h2 className="text-xl font-semibold text-navy">{page.sectionAHeading}</h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">{page.sectionACopy}</p>
          </article>
          <article className="cce-panel-highlight p-6">
            <h2 className="text-xl font-semibold text-navy">{page.sectionBHeading}</h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">{page.sectionBCopy}</p>
          </article>
        </div>
        <div className="mt-8">
          <Button href={site.startUrl} size="lg" event="cce_start_free_click">
            {page.cta}
          </Button>
        </div>
      </Section>

      <RelatedLinks links={page.relatedLinks} />
      <FinalCTA />
    </>
  );
}
