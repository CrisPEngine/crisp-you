import Link from "next/link";
import { createMetadata } from "@/lib/metadata";
import { getBlogPost, blogPosts, extractArticleFaq } from "@/content/blog";
import { site } from "@/config/site";
import { articleSchema, breadcrumbSchema, faqPageSchema } from "@/lib/schema";
import { StructuredData } from "@/components/marketing/StructuredData";
import { Section } from "@/components/marketing/Section";
import { ArticleContent, ArticleCta } from "@/components/marketing/ArticleContent";
import { RelatedLinks } from "@/components/marketing/RelatedLinks";
import { Button } from "@/components/marketing/Button";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};

  return createMetadata({
    title: post.seoTitle,
    description: post.description,
    path: `/blog/${slug}`,
  });
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  const faqItems = extractArticleFaq(post.blocks);

  return (
    <>
      <StructuredData
        data={[
          articleSchema(post),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Blog", path: "/blog" },
            { name: post.title, path: `/blog/${post.slug}` },
          ]),
          ...(faqItems.length > 0 ? [faqPageSchema(faqItems)] : []),
        ]}
      />
      <Section className="pt-12 sm:pt-16">
        <Link
          href="/blog"
          className="text-sm font-medium text-accent hover:text-accent-hover"
        >
          &larr; Back to blog
        </Link>
        <article className="mt-8 max-w-3xl">
          <span className="text-xs font-medium uppercase tracking-wider text-accent">
            {post.category}
          </span>
          <h1 className="mt-3 text-[1.75rem] font-semibold leading-[1.15] tracking-tight text-navy sm:text-4xl">
            {post.title}
          </h1>
          <p className="mt-4 text-sm text-muted sm:text-base">
            Published{" "}
            {new Date(post.publishedAt).toLocaleDateString("en-GB", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </p>
          <div className="mt-8">
            <ArticleContent blocks={post.blocks} />
          </div>
          <ArticleCta label={post.cta} href={post.ctaHref ?? site.startUrl} />
          <div className="mt-8 flex w-full flex-col gap-3 border-t border-border-subtle pt-8 sm:w-auto sm:flex-row sm:flex-wrap">
            <Button href={post.ctaHref ?? site.startUrl} className="w-full sm:w-auto" event="cce_blog_cta_click">
              {post.ctaHref === "/contact" ? post.cta : "Start free, no card required"}
            </Button>
            <Button href="/pricing" variant="secondary" className="w-full sm:w-auto" event="cce_pricing_cta_click">
              View pricing
            </Button>
            <Button href="/features/brand-profile" variant="secondary" className="w-full sm:w-auto" event="cce_feature_cta_click">
              Brand profile
            </Button>
          </div>
        </article>
      </Section>
      {post.relatedLinks && post.relatedLinks.length > 0 ? (
        <RelatedLinks heading="Related reading" links={post.relatedLinks} />
      ) : null}
    </>
  );
}
