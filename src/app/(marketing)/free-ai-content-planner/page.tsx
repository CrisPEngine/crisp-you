import { createMetadata } from "@/lib/metadata";
import { freePlannerLandingPage } from "@/content/landing-pages/free-planner-page";
import { breadcrumbSchema, faqPageSchema } from "@/lib/schema";
import { StructuredData } from "@/components/marketing/StructuredData";
import { MarketingLandingLayout } from "@/components/marketing/MarketingLandingLayout";

export const metadata = createMetadata({
  title: freePlannerLandingPage.seoTitle,
  description: freePlannerLandingPage.description,
  path: freePlannerLandingPage.path,
});

export default function FreePlannerPage() {
  return (
    <>
      <StructuredData
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Free content planner", path: freePlannerLandingPage.path },
        ])}
      />
      {freePlannerLandingPage.faq ? (
        <StructuredData data={faqPageSchema(freePlannerLandingPage.faq)} />
      ) : null}
      <MarketingLandingLayout page={freePlannerLandingPage} />
    </>
  );
}
