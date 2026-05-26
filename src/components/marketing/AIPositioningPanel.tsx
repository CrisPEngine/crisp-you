import { Section, SectionHeader } from "./Section";

const heading = "AI helps with the work. The system protects the brand.";
const body = [
  "AI can help with drafting, structure, variation, repurposing and image direction. It cannot decide what your business should be known for, what your audience needs to hear or which ideas deserve to become repeatable marketing assets.",
  "CRISP uses AI inside a wider workflow. The system gives the work context, the user gives it judgement and the process keeps everything moving.",
];

const aiHelps = ["Drafts", "Variations", "Hooks", "Image prompts", "Repurposed formats", "Campaign ideas"];
const systemProtects = [
  "Brand voice",
  "Audience relevance",
  "Offer clarity",
  "Human approval",
  "Publishing rhythm",
  "Long-term consistency",
];

export function AIPositioningPanel() {
  return (
    <Section>
      <SectionHeader eyebrow="AI inside a system" heading={heading} body={body} />
      <div className="grid gap-5 lg:grid-cols-2">
        <div className="rounded-2xl border border-border bg-surface p-6 shadow-[var(--shadow-sm)]">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-semibold text-navy">AI helps create</h3>
            <span className="chip chip-export">Variable</span>
          </div>
          <div className="mt-5 flex flex-wrap gap-2">
            {aiHelps.map((tag) => (
              <span
                key={tag}
                className="rounded-lg border border-border-subtle bg-background-deep px-3 py-1.5 text-sm text-charcoal"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="relative overflow-hidden rounded-2xl border border-accent/30 bg-gradient-to-br from-accent-mint via-surface to-surface p-6 shadow-[var(--shadow-md)]">
          <div className="grid-bg-fine pointer-events-none absolute inset-0 opacity-40" aria-hidden="true" />
          <div className="relative">
            <div className="flex items-center justify-between">
              <h3 className="text-base font-semibold text-navy">The system protects</h3>
              <span className="chip chip-approved">Constant</span>
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              {systemProtects.map((tag) => (
                <span
                  key={tag}
                  className="rounded-lg border border-accent/20 bg-surface px-3 py-1.5 text-sm font-medium text-accent shadow-[var(--shadow-xs)]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
