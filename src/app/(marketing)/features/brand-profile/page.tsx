import { createMetadata } from "@/lib/metadata";
import { brandProfilePage } from "@/content/pages";
import { site } from "@/config/site";
import { breadcrumbSchema, faqPageSchema } from "@/lib/schema";
import { StructuredData } from "@/components/marketing/StructuredData";
import { PageHero } from "@/components/marketing/PageHero";
import { Section, SectionHeader } from "@/components/marketing/Section";
import { FAQSection } from "@/components/marketing/FAQSection";
import { Button } from "@/components/marketing/Button";
import { FinalCTA } from "@/components/marketing/FinalCTA";

export const metadata = createMetadata({
  title: "Brand Profile | CRISP Content Engine",
  description:
    "CRISP Content Engine uses brand profiles to keep content connected to your voice, audience, offers, keywords and content rules.",
  path: "/features/brand-profile",
});

export default function BrandProfilePage() {
  return (
    <>
      <StructuredData
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Brand profile", path: "/features/brand-profile" },
          ]),
          faqPageSchema(brandProfilePage.faq.items),
        ]}
      />
      <PageHero
        eyebrow="Brand profile"
        heading={brandProfilePage.headline}
        body={brandProfilePage.subheadline}
        primaryCta={{
          label: brandProfilePage.primaryCta,
          href: site.startUrl,
          event: "cce_feature_cta_click",
        }}
        secondaryCta={{
          label: brandProfilePage.secondaryCta,
          href: "/pricing",
          event: "cce_pricing_cta_click",
        }}
      />

      <Section>
        <SectionHeader heading={brandProfilePage.storesHeading} />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {brandProfilePage.stores.map((item) => (
            <div key={item.title} className="glass-panel p-4">
              <h3 className="text-sm font-semibold text-navy">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
            </div>
          ))}
        </div>
        <p className="mt-8 max-w-3xl text-base leading-relaxed text-muted-foreground">
          {brandProfilePage.storesCopy}
        </p>
      </Section>

      <Section tone="deep">
        <SectionHeader heading={brandProfilePage.whyHeading} />
        <div className="grid overflow-hidden rounded-2xl border border-border lg:grid-cols-2">
          <div className="glass-panel border-0 rounded-none p-8 lg:border-r lg:border-border-subtle">
            <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-muted">
              {brandProfilePage.promptWorkflow.label}
            </p>
            <ul className="mt-5 space-y-3">
              {brandProfilePage.promptWorkflow.items.map((item) => (
                <li key={item} className="text-sm text-muted-foreground">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="cce-panel-highlight rounded-none p-8">
            <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-accent">
              {brandProfilePage.profileWorkflow.label}
            </p>
            <ul className="mt-5 space-y-3">
              {brandProfilePage.profileWorkflow.items.map((item) => (
                <li key={item} className="text-sm font-medium text-navy">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-8">
          <Button href={site.startUrl} size="lg" event="cce_feature_cta_click">
            Start free and build your brand profile
          </Button>
        </div>
      </Section>

      <FAQSection heading={brandProfilePage.faq.heading} items={brandProfilePage.faq.items} />
      <FinalCTA />
    </>
  );
}
