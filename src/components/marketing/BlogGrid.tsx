"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import type { BlogPost } from "@/content/blog";
import { Button } from "@/components/marketing/Button";

type BlogGridProps = {
  posts: BlogPost[];
  categories: readonly string[];
};

export function BlogGrid({ posts, categories }: BlogGridProps) {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const featured = posts.find((post) => post.featured) ?? posts[0];

  const filtered = useMemo(() => {
    const list = activeCategory
      ? posts.filter((post) => post.category === activeCategory)
      : posts;
    return list.filter((post) => post.slug !== featured?.slug);
  }, [activeCategory, posts, featured?.slug]);

  return (
    <>
      {featured ? (
        <article className="cce-panel-highlight mb-8 overflow-hidden rounded-2xl p-5 sm:mb-10 sm:p-8">
          <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-accent">
            Featured · {featured.category}
          </span>
          <h2 className="mt-3 max-w-3xl text-xl font-semibold text-navy sm:text-2xl lg:text-3xl">
            <Link href={`/blog/${featured.slug}`} className="hover:text-accent">
              {featured.title}
            </Link>
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
            {featured.excerpt}
          </p>
          <Link
            href={`/blog/${featured.slug}`}
            className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-accent hover:text-accent-hover"
          >
            Read featured article &rarr;
          </Link>
        </article>
      ) : null}

      <div className="mb-8 flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => setActiveCategory(null)}
          className={`rounded-full border px-3 py-1 text-[11px] font-medium transition-colors ${
            activeCategory === null
              ? "border-accent/40 bg-accent-soft text-accent"
              : "border-border-subtle bg-surface-muted text-charcoal hover:text-navy"
          }`}
        >
          All
        </button>
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setActiveCategory(category)}
            className={`rounded-full border px-3 py-1 text-[11px] font-medium transition-colors ${
              activeCategory === category
                ? "border-accent/40 bg-accent-soft text-accent"
                : "border-border-subtle bg-surface-muted text-charcoal hover:text-navy"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((post) => (
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

      <div className="mt-8 flex w-full flex-col gap-3 sm:flex-row sm:flex-wrap">
        <Button href="/features/brand-profile" variant="secondary" className="w-full sm:w-auto" event="cce_feature_cta_click">
          Brand profile
        </Button>
        <Button href="/features/linkedin-content-system" variant="secondary" className="w-full sm:w-auto" event="cce_feature_cta_click">
          LinkedIn system
        </Button>
        <Button href="/free-ai-content-planner" variant="secondary" className="w-full sm:w-auto" event="cce_start_free_click">
          Free content planner
        </Button>
        <Button href="/pricing" variant="secondary" className="w-full sm:w-auto" event="cce_pricing_cta_click">
          View pricing
        </Button>
      </div>
    </>
  );
}
