import { createMetadata } from "@/lib/metadata";
import { contentQueuePage } from "@/content/pages";
import { site } from "@/config/site";
import { breadcrumbSchema } from "@/lib/schema";
import { StructuredData } from "@/components/marketing/StructuredData";
import { PageHero } from "@/components/marketing/PageHero";
import { Section, SectionHeader } from "@/components/marketing/Section";
import { Button } from "@/components/marketing/Button";
import { FinalCTA } from "@/components/marketing/FinalCTA";

export const metadata = createMetadata({
  title: "Content Queue | CRISP Content Engine",
  description:
    "Use CRISP Content Engine to keep drafts, channels, review statuses and publishing paths visible in one practical content queue.",
  path: "/features/content-queue",
});

export default function ContentQueuePage() {
  return (
    <>
      <StructuredData
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Content queue", path: "/features/content-queue" },
        ])}
      />
      <PageHero
        eyebrow="Content queue"
        heading={contentQueuePage.headline}
        body={contentQueuePage.subheadline}
        primaryCta={{
          label: contentQueuePage.primaryCta,
          href: site.startUrl,
          event: "cce_feature_cta_click",
        }}
        secondaryCta={{
          label: contentQueuePage.secondaryCta,
          href: contentQueuePage.secondaryHref,
          event: "cce_feature_cta_click",
        }}
      />

      <Section>
        <SectionHeader heading={contentQueuePage.organiseHeading} />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {contentQueuePage.organise.map((item) => (
            <div key={item.title} className="glass-panel p-4">
              <h3 className="text-sm font-semibold text-navy">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
            </div>
          ))}
        </div>
        <p className="mt-8 max-w-3xl text-base leading-relaxed text-muted-foreground">
          {contentQueuePage.organiseCopy}
        </p>
      </Section>

      <Section tone="warm">
        <SectionHeader heading={contentQueuePage.workflowHeading} />
        <div className="overflow-x-auto glass-panel">
          <table className="w-full min-w-[720px] text-left text-sm">
            <thead>
              <tr className="border-b border-border-subtle">
                <th className="px-4 py-3 font-semibold text-navy">Stage</th>
                <th className="px-4 py-3 font-semibold text-navy">What happens</th>
                <th className="px-4 py-3 font-semibold text-navy">Why it matters</th>
              </tr>
            </thead>
            <tbody>
              {contentQueuePage.workflowStages.map((row) => (
                <tr key={row.stage} className="border-b border-border-subtle last:border-0">
                  <td className="px-4 py-3 font-medium text-charcoal">{row.stage}</td>
                  <td className="px-4 py-3 text-muted-foreground">{row.happens}</td>
                  <td className="px-4 py-3 text-muted-foreground">{row.matters}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-8">
          <Button href={site.startUrl} size="lg" event="cce_feature_cta_click">
            {contentQueuePage.ctaHeading}
          </Button>
        </div>
      </Section>

      <FinalCTA />
    </>
  );
}
