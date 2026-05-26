import { aiPositioning } from "@/content/marketing";
import { Section, SectionHeader } from "./Section";

function TagGroup({
  title,
  tags,
  variant,
}: {
  title: string;
  tags: readonly string[];
  variant: "ai" | "system";
}) {
  return (
    <div className="rounded-2xl border border-border bg-surface p-6 shadow-sm">
      <h3 className="text-lg font-semibold text-navy">{title}</h3>
      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className={`inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-sm font-medium ${
              variant === "ai"
                ? "bg-surface-warm text-charcoal"
                : "bg-accent-light text-accent"
            }`}
          >
            <svg
              className="h-3.5 w-3.5"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              aria-hidden="true"
            >
              {variant === "ai" ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              )}
            </svg>
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
        <TagGroup title="AI helps with" tags={aiPositioning.aiHelps} variant="ai" />
        <TagGroup
          title="The system protects"
          tags={aiPositioning.systemProtects}
          variant="system"
        />
      </div>
    </Section>
  );
}
