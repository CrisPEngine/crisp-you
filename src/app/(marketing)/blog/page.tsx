import { createMetadata } from "@/lib/metadata";
import { blogPage } from "@/content/pages";
import { blogPosts } from "@/content/blog";
import { site } from "@/config/site";
import { blogSchema, breadcrumbSchema } from "@/lib/schema";
import { StructuredData } from "@/components/marketing/StructuredData";
import { PageHero } from "@/components/marketing/PageHero";
import { Section } from "@/components/marketing/Section";
import { BlogGrid } from "@/components/marketing/BlogGrid";
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
        <BlogGrid posts={blogPosts} categories={blogPage.categories} />
      </Section>

      <FinalCTA />
    </>
  );
}
