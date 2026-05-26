import { ideaBranch, systemHealth } from "@/content/marketing";
import { Section, SectionHeader } from "./Section";

const channelStyles: Record<string, string> = {
  LinkedIn: "border-l-[#0A66C2]",
  X: "border-l-navy",
  Meta: "border-l-[#1877F2]",
  Blog: "border-l-accent",
};

export function IdeaBranchSection() {
  return (
    <Section>
      <SectionHeader heading={ideaBranch.heading} body={ideaBranch.body} />
      <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr] lg:items-start">
        <div className="rounded-2xl border border-accent/20 bg-gradient-to-br from-accent-light/40 to-surface p-6 shadow-sm lg:p-8">
          <p className="text-xs font-medium uppercase tracking-wider text-accent">Core idea</p>
          <p className="mt-3 text-xl font-semibold leading-snug text-navy">
            &ldquo;{ideaBranch.coreIdea}&rdquo;
          </p>
          <div className="mt-8 space-y-2">
            {systemHealth.items.map((item) => (
              <div
                key={item.label}
                className="flex items-center justify-between rounded-lg border border-border-subtle bg-surface/80 px-3 py-2"
              >
                <span className="text-xs text-charcoal">{item.label}</span>
                <span className="h-2 w-2 rounded-full bg-accent" aria-hidden="true" />
              </div>
            ))}
          </div>
        </div>

        <div className="relative grid gap-3 sm:grid-cols-2">
          <div
            className="pointer-events-none absolute left-1/2 top-0 hidden h-8 w-px -translate-x-1/2 bg-accent/30 sm:block"
            aria-hidden="true"
          />
          {ideaBranch.outputs.map((output) => (
            <div
              key={output.channel}
              className={`rounded-xl border border-border border-l-4 bg-surface p-5 shadow-sm ${channelStyles[output.channel]}`}
            >
              <p className="text-xs font-semibold uppercase tracking-wider text-muted">
                {output.channel}
              </p>
              <p className="mt-2 text-sm font-medium text-navy">{output.format}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
