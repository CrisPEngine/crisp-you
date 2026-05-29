import Link from "next/link";
import type { LegalPageContent, LegalSection } from "@/content/legal-pages";
import { ResponsiveDataTable } from "./ResponsiveDataTable";
import { cn } from "@/lib/utils";

type LegalPageRendererProps = {
  page: LegalPageContent;
  className?: string;
};

function LegalCards({ items }: { items: readonly { title: string; body: string }[] }) {
  return (
    <div className="mt-5 grid gap-3 sm:grid-cols-2">
      {items.map((item) => (
        <article
          key={item.title}
          className="rounded-2xl border border-border-subtle bg-surface/60 p-4"
        >
          <h3 className="text-sm font-semibold text-navy">{item.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
        </article>
      ))}
    </div>
  );
}

function LegalSectionBlock({ section }: { section: LegalSection }) {
  return (
    <section>
      <h2 className="text-xl font-semibold text-navy">{section.heading}</h2>

      {section.paragraphs?.map((paragraph, index) => (
        <p key={`${section.heading}-${index}`} className="mt-3 text-base leading-relaxed text-muted-foreground">
          {paragraph}
        </p>
      ))}

      {section.inlineLink ? (
        <p className="mt-3 text-base leading-relaxed text-muted-foreground">
          {section.inlineLink.before}
          <Link
            href={section.inlineLink.href}
            className="font-medium text-primary underline-offset-2 transition-colors hover:text-accent hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            {section.inlineLink.label}
          </Link>
          {section.inlineLink.after}
        </p>
      ) : null}

      {section.table ? (
        <ResponsiveDataTable
          className="mt-5"
          headers={section.table.headers}
          rows={section.table.rows}
          minWidth={
            section.table.headers.length > 2 ? "720px" : "560px"
          }
        />
      ) : null}

      {section.cards ? <LegalCards items={section.cards} /> : null}

      {section.browserLinks ? (
        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          {section.browserLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center rounded-xl border border-border-subtle bg-surface/60 px-4 text-sm font-medium text-primary transition-colors hover:border-primary-border hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              {link.label}
            </a>
          ))}
        </div>
      ) : null}

      {section.contactLines ? (
        <div className="mt-4 rounded-2xl border border-border-subtle bg-surface/60 p-4">
          {section.contactLines.map((line) => (
            <p key={line} className="text-sm leading-relaxed text-muted-foreground">
              {line.startsWith("Email:") ? (
                <>
                  Email:{" "}
                  <a
                    href={`mailto:${line.replace("Email:", "").trim()}`}
                    className="font-medium text-primary transition-colors hover:text-accent"
                  >
                    {line.replace("Email:", "").trim()}
                  </a>
                </>
              ) : (
                line
              )}
            </p>
          ))}
          {section.productEnquiry ? (
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Product enquiries:{" "}
              <a
                href={`mailto:${section.productEnquiry}`}
                className="font-medium text-primary transition-colors hover:text-accent"
              >
                {section.productEnquiry}
              </a>
            </p>
          ) : null}
        </div>
      ) : null}
    </section>
  );
}

export function LegalPageRenderer({ page, className }: LegalPageRendererProps) {
  return (
    <div className={cn("max-w-3xl space-y-10", className)}>
      <div className="space-y-4">
        {page.intro.map((paragraph) => (
          <p key={paragraph.slice(0, 40)} className="text-base leading-relaxed text-muted-foreground">
            {paragraph}
          </p>
        ))}
      </div>

      {page.sections.map((section) => (
        <LegalSectionBlock key={section.heading} section={section} />
      ))}
    </div>
  );
}
