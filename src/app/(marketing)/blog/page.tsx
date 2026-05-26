import Link from "next/link";
import { createMetadata } from "@/lib/metadata";
import { blogPage } from "@/content/marketing";
import { blogSchema, breadcrumbSchema } from "@/lib/schema";
import { StructuredData } from "@/components/marketing/StructuredData";
import { Section, SectionHeader } from "@/components/marketing/Section";
import { FinalCTA } from "@/components/marketing/FinalCTA";

export const metadata = createMetadata({
  title: "Content Systems Blog | CRISP Content Engine",
  description:
    "Practical articles on content systems, founder marketing, AI-assisted workflows and brand-led publishing.",
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
      <Section className="pt-12 sm:pt-16">
        <SectionHeader
          heading={blogPage.headline}
          body={blogPage.subheadline}
          align="center"
          className="mx-auto"
        />
      </Section>

      <Section warm>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {blogPage.posts.map((post) => (
            <article
              key={post.slug}
              className="flex flex-col rounded-2xl border border-border bg-surface p-6 shadow-sm"
            >
              <span className="text-xs font-medium uppercase tracking-wider text-accent">
                Coming soon
              </span>
              <h2 className="mt-3 text-lg font-semibold text-navy">
                <Link
                  href={`/blog/${post.slug}`}
                  className="transition-colors hover:text-accent"
                >
                  {post.title}
                </Link>
              </h2>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                {post.excerpt}
              </p>
              <Link
                href={`/blog/${post.slug}`}
                className="mt-4 text-sm font-medium text-accent hover:text-accent-hover"
              >
                Read more
              </Link>
            </article>
          ))}
        </div>
      </Section>

      <FinalCTA />
    </>
  );
}
