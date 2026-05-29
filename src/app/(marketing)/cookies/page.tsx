import { createMetadata } from "@/lib/metadata";
import { cookiesPolicyPage } from "@/content/legal-pages";
import { breadcrumbSchema } from "@/lib/schema";
import { StructuredData } from "@/components/marketing/StructuredData";
import { Section } from "@/components/marketing/Section";
import { LegalPageRenderer } from "@/components/marketing/LegalPageRenderer";

export const metadata = createMetadata({
  title: cookiesPolicyPage.seoTitle,
  description: cookiesPolicyPage.description,
  path: cookiesPolicyPage.path,
});

export default function CookiesPage() {
  return (
    <>
      <StructuredData
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Cookies Policy", path: "/cookies" },
        ])}
      />
      <Section className="pt-12 sm:pt-16">
        <h1 className="text-3xl font-semibold tracking-tight text-navy sm:text-4xl">
          {cookiesPolicyPage.title}
        </h1>
        <p className="mt-3 text-sm text-muted">{cookiesPolicyPage.updated}</p>
        <div className="mt-10">
          <LegalPageRenderer page={cookiesPolicyPage} />
        </div>
      </Section>
    </>
  );
}
