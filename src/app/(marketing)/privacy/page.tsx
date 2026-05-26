import { createMetadata } from "@/lib/metadata";
import { privacyPage } from "@/content/pages";
import { breadcrumbSchema } from "@/lib/schema";
import { StructuredData } from "@/components/marketing/StructuredData";
import { Section } from "@/components/marketing/Section";

export const metadata = createMetadata({
  title: "Privacy Policy | CRISP Content Engine",
  description: privacyPage.description,
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <>
      <StructuredData
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Privacy", path: "/privacy" },
        ])}
      />
      <Section className="pt-12 sm:pt-16">
        <h1 className="text-3xl font-semibold tracking-tight text-navy sm:text-4xl">
          {privacyPage.title}
        </h1>
        <div className="mt-10 max-w-3xl space-y-8">
          {privacyPage.sections.map((section) => (
            <section key={section.heading}>
              <h2 className="text-xl font-semibold text-navy">{section.heading}</h2>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                {section.body}
              </p>
            </section>
          ))}
        </div>
      </Section>
    </>
  );
}
