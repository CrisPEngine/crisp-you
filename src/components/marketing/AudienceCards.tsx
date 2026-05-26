import { audience } from "@/content/marketing";
import { Section, SectionHeader } from "./Section";

export function AudienceCards() {
  return (
    <Section>
      <SectionHeader heading={audience.heading} />
      <div className="grid gap-6 sm:grid-cols-2">
        {audience.cards.map((card) => (
          <div
            key={card.title}
            className="rounded-2xl border border-border bg-surface p-6 shadow-sm"
          >
            <h3 className="text-lg font-semibold text-navy">{card.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {card.copy}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
