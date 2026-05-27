import Link from "next/link";
import type { ArticleBlock } from "@/content/blog";
import { cn } from "@/lib/utils";

function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

export function ArticleContent({ blocks }: { blocks: ArticleBlock[] }) {
  const headings = blocks.filter(
    (block): block is Extract<ArticleBlock, { type: "heading" }> => block.type === "heading",
  );

  return (
    <div className="space-y-8">
      {headings.length > 2 ? (
        <nav
          aria-label="Table of contents"
          className="rounded-xl border border-border-subtle bg-surface-muted/40 p-5"
        >
          <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-muted">
            In this article
          </p>
          <ol className="mt-3 space-y-2">
            {headings.map((heading) => {
              const id = heading.id ?? slugify(heading.text);
              return (
                <li key={id}>
                  <a href={`#${id}`} className="text-sm text-charcoal hover:text-accent">
                    {heading.text}
                  </a>
                </li>
              );
            })}
          </ol>
        </nav>
      ) : null}

      {blocks.map((block, i) => {
        switch (block.type) {
          case "paragraph":
            return (
              <p key={i} className="text-base leading-relaxed text-muted-foreground sm:text-lg">
                {block.text}
              </p>
            );
          case "heading": {
            const id = block.id ?? slugify(block.text);
            return (
              <h2
                key={i}
                id={id}
                className="scroll-mt-36 pt-2 text-2xl font-semibold tracking-tight text-navy"
              >
                {block.text}
              </h2>
            );
          }
          case "cards":
            return (
              <div key={i} className="grid gap-3 sm:grid-cols-2">
                {block.items.map((item) => (
                  <div key={item.title} className="glass-panel p-4">
                    <h3 className="text-sm font-semibold text-navy">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
                  </div>
                ))}
              </div>
            );
          case "table":
            return (
              <div key={i} className="overflow-x-auto glass-panel">
                <table className="w-full min-w-[480px] text-left text-sm">
                  <thead>
                    <tr className="border-b border-border-subtle">
                      {block.headers.map((header) => (
                        <th key={header} className="px-4 py-3 font-semibold text-navy">
                          {header}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {block.rows.map((row, rowIndex) => (
                      <tr key={rowIndex} className="border-b border-border-subtle last:border-0">
                        {row.map((cell, cellIndex) => (
                          <td
                            key={cellIndex}
                            className={cn(
                              "px-4 py-3 text-muted-foreground",
                              cellIndex === 0 && "font-medium text-charcoal",
                            )}
                          >
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );
          case "steps":
            return (
              <ol key={i} className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {block.items.map((item, stepIndex) => (
                  <li key={item.title} className="glass-panel p-4">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-accent">
                      Step {stepIndex + 1}
                    </p>
                    <h3 className="mt-2 text-sm font-semibold text-navy">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
                  </li>
                ))}
              </ol>
            );
          case "ideaOutputs":
            return (
              <div key={i} className="glass-panel p-5 sm:p-6">
                <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-accent">
                  Core idea
                </p>
                <p className="mt-2 text-lg font-semibold text-navy">&ldquo;{block.core}&rdquo;</p>
                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  {block.outputs.map((output) => (
                    <div
                      key={output.channel}
                      className="rounded-xl border border-border-subtle bg-surface-muted/40 p-3"
                    >
                      <span className="text-[11px] font-semibold uppercase tracking-wide text-primary">
                        {output.channel}
                      </span>
                      <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                        {output.format}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            );
          case "faq":
            return (
              <div key={i} className="space-y-3">
                {block.items.map((item) => (
                  <details
                    key={item.question}
                    className="group rounded-xl border border-border-subtle bg-surface-muted/30 px-5 py-4"
                  >
                    <summary className="cursor-pointer list-none text-base font-medium text-navy marker:content-none [&::-webkit-details-marker]:hidden">
                      {item.question}
                    </summary>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.answer}</p>
                  </details>
                ))}
              </div>
            );
          default:
            return null;
        }
      })}
    </div>
  );
}

export function ArticleCta({ label, href }: { label: string; href: string }) {
  return (
    <div className="mt-12 rounded-2xl border border-accent-border bg-accent-soft/40 p-6 sm:p-8">
      <p className="text-lg font-medium text-navy">{label}</p>
      <Link
        href={href}
        className="mt-4 inline-flex items-center text-sm font-semibold text-accent hover:text-accent-hover"
      >
        Start free, no card required &rarr;
      </Link>
    </div>
  );
}
