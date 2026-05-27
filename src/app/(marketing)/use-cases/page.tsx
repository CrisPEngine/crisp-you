import { ResponsiveDataTable } from "@/components/marketing/ResponsiveDataTable";
import Link from "next/link";
import { createMetadata } from "@/lib/metadata";
import { useCasesPage } from "@/content/pages";
import { site } from "@/config/site";
import { breadcrumbSchema } from "@/lib/schema";
import { StructuredData } from "@/components/marketing/StructuredData";
import { PageHero } from "@/components/marketing/PageHero";
import { Section } from "@/components/marketing/Section";
import { Button } from "@/components/marketing/Button";
import { FinalCTA } from "@/components/marketing/FinalCTA";

export const metadata = createMetadata({
  title: "Use Cases | CRISP Content Engine",
  description:
    "Explore how founders, consultants, agencies and lean teams use CRISP Content Engine to build a practical content workflow and stay consistently visible.",
  path: "/use-cases",
});

export default function UseCasesPage() {
  return (
    <>
      <StructuredData
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Use cases", path: "/use-cases" },
        ])}
      />
      <PageHero
        eyebrow="Use cases"
        heading={useCasesPage.headline}
        body={useCasesPage.subheadline}
        primaryCta={{
          label: useCasesPage.primaryCta,
          href: site.startUrl,
          event: "cce_start_free_click",
        }}
        secondaryCta={{
          label: useCasesPage.secondaryCta,
          href: useCasesPage.secondaryHref,
          event: "cce_pricing_cta_click",
        }}
      />

      <Section tone="warm">
        <div className="space-y-8">
          {useCasesPage.cases.map((useCase) => (
            <article key={useCase.id} className="glass-panel p-6 sm:p-8">
              <h2 className="text-2xl font-semibold text-navy">{useCase.title}</h2>
              <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground">
                {useCase.copy}
              </p>
              <ResponsiveDataTable
                className="mt-6"
                headers={["Need", "CRISP workflow"]}
                rows={useCase.workflow.map((row) => [row.need, row.workflow])}
                minWidth="480px"
              />
              <div className="mt-6 flex flex-wrap gap-3">
                <Button href={site.startUrl} event="cce_start_free_click">
                  {useCase.cta}
                </Button>
                <Link
                  href={`/use-cases/${useCase.id}`}
                  className="inline-flex items-center text-sm font-medium text-accent hover:text-accent-hover"
                >
                  Read the full workflow &rarr;
                </Link>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xl font-medium text-navy">{useCasesPage.finalCta}</p>
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button href={site.startUrl} size="lg" event="cce_start_free_click">
              Start free, no card required
            </Button>
            <Button href="/pricing" variant="secondary" size="lg" event="cce_pricing_cta_click">
              Compare plans
            </Button>
            <Button href="/blog" variant="secondary" size="lg" event="cce_blog_cta_click">
              Read the blog
            </Button>
          </div>
        </div>
      </Section>

      <FinalCTA />
    </>
  );
}
