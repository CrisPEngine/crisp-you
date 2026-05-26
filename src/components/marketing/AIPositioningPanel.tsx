import { aiPositioning } from "@/content/marketing";
import { Section, SectionHeader } from "./Section";

function TagPanel({
  title,
  tags,
  variant,
}: {
  title: string;
  tags: readonly string[];
  variant: "ai" | "system";
}) {
  return (
    <div
      className={`rounded-2xl border p-6 shadow-sm ${
        variant === "system"
          ? "border-accent/20 bg-gradient-to-br from-accent-light/30 to-surface"
          : "border-border bg-surface"
      }`}
    >
      <h3 className="text-lg font-semibold text-navy">{title}</h3>
      <div className="mt-5 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className={`rounded-lg px-3 py-1.5 text-sm ${
              variant === "system"
                ? "bg-accent/10 font-medium text-accent"
                : "bg-surface-warm text-charcoal"
            }`}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

export function AIPositioningPanel() {
  return (
    <Section>
      <SectionHeader heading={aiPositioning.heading} body={aiPositioning.body} />
      <div className="grid gap-6 lg:grid-cols-2">
        <TagPanel title="AI helps create" tags={aiPositioning.aiHelps} variant="ai" />
        <TagPanel title="The system protects" tags={aiPositioning.systemProtects} variant="system" />
      </div>
    </Section>
  );
}
