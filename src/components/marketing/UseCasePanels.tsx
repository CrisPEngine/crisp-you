import Link from "next/link";
import { audience } from "@/content/marketing";
import { Section, SectionHeader } from "./Section";

export function UseCasePanels() {
  return (
    <Section>
      <SectionHeader heading={audience.heading} />
      <div className="grid gap-5 sm:grid-cols-2">
        {audience.cards.map((card, i) => (
          <article
            key={card.title}
            className={`group rounded-2xl border border-border bg-surface p-7 shadow-sm transition-all hover:border-accent/30 hover:shadow-md ${
              i === 0 ? "sm:row-span-1 bg-gradient-to-br from-surface to-surface-warm" : ""
            }`}
          >
            <h3 className="text-xl font-semibold text-navy">{card.title}</h3>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{card.copy}</p>
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
