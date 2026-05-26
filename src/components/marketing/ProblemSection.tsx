import { problem } from "@/content/marketing";
import { Section, SectionHeader } from "./Section";

export function ProblemSection() {
  return (
    <Section warm>
      <SectionHeader heading={problem.heading} body={problem.body} />
      <div className="grid gap-6 sm:grid-cols-3">
        {problem.cards.map((card, i) => (
          <div
            key={card.title}
            className="rounded-2xl border border-border bg-surface p-6 shadow-sm"
          >
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-accent-light text-sm font-semibold text-accent">
              {i + 1}
            </span>
            <h3 className="mt-4 text-lg font-semibold text-navy">{card.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {card.copy}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
