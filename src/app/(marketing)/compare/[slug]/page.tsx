import { createMetadata } from "@/lib/metadata";
import {
  getCompareLandingPage,
  getCompareLandingSlugs,
} from "@/content/landing-pages/compare-pages";
import { breadcrumbSchema, faqPageSchema } from "@/lib/schema";
import { StructuredData } from "@/components/marketing/StructuredData";
import { MarketingLandingLayout } from "@/components/marketing/MarketingLandingLayout";
import { notFound } from "next/navigation";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getCompareLandingSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const page = getCompareLandingPage(slug);
  if (!page) return {};

  return createMetadata({
    title: page.seoTitle,
    description: page.description,
    path: page.path,
  });
}

export default async function ComparePageRoute({ params }: Props) {
  const { slug } = await params;
  const page = getCompareLandingPage(slug);
  if (!page) notFound();

  return (
    <>
      <StructuredData
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Compare", path: "/compare/chatgpt-vs-crisp-content-engine" },
          { name: page.headline, path: page.path },
        ])}
      />
      {page.faq ? <StructuredData data={faqPageSchema(page.faq)} /> : null}
      <MarketingLandingLayout page={page} />
    </>
  );
}
