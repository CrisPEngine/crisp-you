import Link from "next/link";
import { createMetadata } from "@/lib/metadata";
import { blogPage } from "@/content/pages";
import { blogPosts } from "@/content/blog";
import { site } from "@/config/site";
import { blogSchema, breadcrumbSchema } from "@/lib/schema";
import { StructuredData } from "@/components/marketing/StructuredData";
import { PageHero } from "@/components/marketing/PageHero";
import { Section } from "@/components/marketing/Section";
import { Button } from "@/components/marketing/Button";
import { FinalCTA } from "@/components/marketing/FinalCTA";

export const metadata = createMetadata({
  title: "Content Systems Blog | CRISP Content Engine",
  description:
    "Practical articles on content systems, founder marketing, LinkedIn consistency, AI-assisted workflows and brand-led publishing.",
  path: "/blog",
});

export default function BlogPage() {
  return (
    <>
      <StructuredData
        data={[
          blogSchema(),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Blog", path: "/blog" },
          ]),
        ]}
      />
      <PageHero
        eyebrow="Blog"
        heading={blogPage.headline}
        body={blogPage.subheadline}
        primaryCta={{
          label: blogPage.primaryCta,
          href: site.startUrl,
          event: "cce_blog_cta_click",
        }}
        align="center"
      />

      <Section>
        <div className="mb-8 flex flex-wrap gap-2">
          {blogPage.categories.map((category) => (
            <span
              key={category}
              className="rounded-full border border-border-subtle bg-surface-muted px-3 py-1 text-[11px] font-medium text-charcoal"
            >
              {category}
            </span>
          ))}
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <article key={post.slug} className="glass-panel glass-panel-interactive flex flex-col p-6">
              <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-accent">
                {post.category}
              </span>
              <h2 className="mt-3 text-lg font-semibold text-navy">
                <Link href={`/blog/${post.slug}`} className="hover:text-accent">
                  {post.title}
                </Link>
              </h2>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                {post.excerpt}
              </p>
              <Link
                href={`/blog/${post.slug}`}
                className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-accent hover:text-accent-hover"
              >
                Read article &rarr;
              </Link>
            </article>
          ))}
        </div>
        <div className="mt-10 flex flex-wrap gap-3">
          <Button href="/features/brand-profile" variant="secondary" event="cce_feature_cta_click">
            Brand profile
          </Button>
          <Button href="/features/content-queue" variant="secondary" event="cce_feature_cta_click">
            Content queue
          </Button>
          <Button href="/pricing" variant="secondary" event="cce_pricing_cta_click">
            View pricing
          </Button>
        </div>
      </Section>

      <FinalCTA />
    </>
  );
}
