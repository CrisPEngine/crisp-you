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
      <Section className="pt-14 sm:pt-20">
        <SectionHeader
          eyebrow="Blog"
          heading={blogPage.headline}
          body={blogPage.subheadline}
          align="center"
          className="mx-auto"
        />
      </Section>

      <Section tone="warm">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {blogPage.posts.map((post) => (
            <article
              key={post.slug}
              className="group flex flex-col rounded-2xl border border-border bg-surface p-6 shadow-[var(--shadow-sm)] transition-shadow hover:shadow-[var(--shadow-md)]"
            >
              <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-surface-muted px-2.5 py-0.5 text-[11px] font-medium text-charcoal">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
                Coming soon
              </span>
              <h2 className="mt-4 text-lg font-semibold text-navy">
                <Link
                  href={`/blog/${post.slug}`}
                  className="transition-colors group-hover:text-accent"
                >
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
                Read more <span aria-hidden="true">&rarr;</span>
              </Link>
            </article>
          ))}
        </div>
      </Section>

      <FinalCTA />
    </>
  );
}
