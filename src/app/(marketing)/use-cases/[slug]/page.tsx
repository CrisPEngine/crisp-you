import { createMetadata } from "@/lib/metadata";
import {
  getUseCaseLandingPage,
  getUseCaseLandingSlugs,
} from "@/content/landing-pages/use-cases-pages";
import { breadcrumbSchema, faqPageSchema } from "@/lib/schema";
import { StructuredData } from "@/components/marketing/StructuredData";
import { MarketingLandingLayout } from "@/components/marketing/MarketingLandingLayout";
import { notFound } from "next/navigation";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getUseCaseLandingSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const page = getUseCaseLandingPage(slug);
  if (!page) return {};

  return createMetadata({
    title: page.seoTitle,
    description: page.description,
    path: page.path,
  });
}

export default async function UseCaseDetailPage({ params }: Props) {
  const { slug } = await params;
  const page = getUseCaseLandingPage(slug);
  if (!page) notFound();

  const label = slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());

  return (
    <>
      <StructuredData
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Use cases", path: "/use-cases" },
          { name: label, path: page.path },
        ])}
      />
      {page.faq ? <StructuredData data={faqPageSchema(page.faq)} /> : null}
      <MarketingLandingLayout page={page} />
    </>
  );
}
