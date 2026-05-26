import Link from "next/link";
import { audience } from "@/content/marketing";
import { Section, SectionHeader } from "./Section";

export function UseCasePanels() {
  return (
    <Section>
      <SectionHeader
        eyebrow="Who it is for"
        heading={audience.heading}
      />
      <div className="grid gap-4 sm:grid-cols-2 lg:gap-5">
        {audience.cards.map((card) => (
          <article
            key={card.title}
            className="group relative overflow-hidden rounded-2xl border border-border bg-surface p-7 shadow-[var(--shadow-sm)] transition-all hover:border-accent/30 hover:shadow-[var(--shadow-md)]"
          >
            <div
              className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-accent-mint opacity-0 blur-2xl transition-opacity group-hover:opacity-100"
              aria-hidden="true"
            />
            <div className="relative">
              <div className="flex items-baseline justify-between">
                <h3 className="text-xl font-semibold text-navy">{card.title}</h3>
                <span className="text-[11px] font-medium text-muted">{card.role}</span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {card.copy}
              </p>
              <div className="mt-5 flex flex-wrap gap-1.5 border-t border-border-subtle pt-4">
                {card.signals.map((signal) => (
                  <span
                    key={signal}
                    className="inline-flex items-center gap-1 rounded-md bg-background-deep px-2 py-0.5 text-[11px] text-charcoal"
                  >
                    <span className="h-1 w-1 rounded-full bg-accent" aria-hidden="true" />
                    {signal}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
      <div className="mt-10 text-center">
        <Link
          href="/use-cases"
          className="inline-flex items-center gap-2 text-sm font-medium text-accent transition-colors hover:text-accent-hover"
        >
          {audience.cta}
          <span aria-hidden="true">&rarr;</span>
        </Link>
      </div>
    </Section>
  );
}
