import { createMetadata } from "@/lib/metadata";
import { privacyPolicyPage } from "@/content/legal-pages";
import { breadcrumbSchema } from "@/lib/schema";
import { StructuredData } from "@/components/marketing/StructuredData";
import { Section } from "@/components/marketing/Section";
import { LegalPageRenderer } from "@/components/marketing/LegalPageRenderer";

export const metadata = createMetadata({
  title: privacyPolicyPage.seoTitle,
  description: privacyPolicyPage.description,
  path: privacyPolicyPage.path,
});

export default function PrivacyPage() {
  return (
    <>
      <StructuredData
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Privacy Policy", path: "/privacy" },
        ])}
      />
      <Section className="pt-12 sm:pt-16">
        <h1 className="text-3xl font-semibold tracking-tight text-navy sm:text-4xl">
          {privacyPolicyPage.title}
        </h1>
        <p className="mt-3 text-sm text-muted">{privacyPolicyPage.updated}</p>
        <div className="mt-10">
          <LegalPageRenderer page={privacyPolicyPage} />
        </div>
      </Section>
    </>
  );
}
