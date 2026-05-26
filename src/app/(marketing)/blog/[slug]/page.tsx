import Link from "next/link";
import { createMetadata } from "@/lib/metadata";
import { blogPage } from "@/content/marketing";
import { Section } from "@/components/marketing/Section";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return blogPage.posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const post = blogPage.posts.find((p) => p.slug === slug);
  if (!post) return {};

  return createMetadata({
    title: `${post.title} | CRISP Content Engine`,
    description: post.excerpt,
    path: `/blog/${slug}`,
  });
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPage.posts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <Section className="pt-12 sm:pt-16">
      <Link
        href="/blog"
        className="text-sm font-medium text-accent hover:text-accent-hover"
      >
        &larr; Back to blog
      </Link>
      <article className="mt-8 max-w-3xl">
        <span className="text-xs font-medium uppercase tracking-wider text-accent">
          Coming soon
        </span>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-navy sm:text-4xl">
          {post.title}
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
          {post.excerpt}
        </p>
        <p className="mt-6 text-base leading-relaxed text-muted-foreground">
          This article is a placeholder. Full content will be published here soon.
        </p>
      </article>
    </Section>
  );
}
