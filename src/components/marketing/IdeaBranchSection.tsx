import { ideaBranch } from "@/content/marketing";
import { Section, SectionHeader } from "./Section";
import { cn } from "@/lib/utils";

const channelTheme: Record<
  string,
  { ring: string; dot: string; chipClass: string; label: string }
> = {
  LinkedIn: {
    ring: "border-[#0a66c2]/30",
    dot: "bg-[#0a66c2]",
    chipClass: "bg-[#0a66c2]/10 text-[#0a66c2]",
    label: "LinkedIn",
  },
  X: {
    ring: "border-navy/30",
    dot: "bg-navy",
    chipClass: "bg-navy/10 text-navy",
    label: "X",
  },
  Meta: {
    ring: "border-[#1877f2]/30",
    dot: "bg-[#1877f2]",
    chipClass: "bg-[#1877f2]/10 text-[#1877f2]",
    label: "Meta",
  },
  Blog: {
    ring: "border-accent/40",
    dot: "bg-accent",
    chipClass: "bg-accent-light text-accent",
    label: "Blog",
  },
};

function StatusChip({ label }: { label: string }) {
  const map: Record<string, string> = {
    Approved: "chip-approved",
    Review: "chip-review",
    Scheduled: "chip-scheduled",
    Draft: "chip-draft",
  };
  return <span className={cn("chip", map[label])}>{label}</span>;
}

function PublishChip({ label }: { label: string }) {
  return (
    <span
      className={cn(
        "chip",
        label === "Auto-publish" ? "chip-approved" : "chip-export",
      )}
    >
      {label}
    </span>
  );
}

export function IdeaBranchSection() {
  return (
    <Section>
      <SectionHeader
        eyebrow="One idea, full rhythm"
        heading={ideaBranch.heading}
        body={ideaBranch.body}
      />

      <div className="relative">
        <div className="mx-auto max-w-2xl">
          <div className="relative overflow-hidden rounded-2xl border border-accent/30 bg-gradient-to-br from-accent-mint via-surface to-surface p-6 shadow-[var(--shadow-md)] sm:p-8">
            <div
              className="grid-bg-fine pointer-events-none absolute inset-0 opacity-50"
              aria-hidden="true"
            />
            <div className="relative">
              <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-accent">
                {ideaBranch.coreIdeaLabel}
              </p>
              <p className="mt-3 text-xl font-semibold leading-snug text-navy sm:text-2xl">
                &ldquo;{ideaBranch.coreIdea}&rdquo;
              </p>
              <div className="mt-4 flex flex-wrap items-center gap-2">
                <span className="chip chip-approved">Brand-aligned</span>
                <span className="chip chip-scheduled">Strategy theme</span>
                <span className="text-[11px] text-muted">From your brand profile</span>
              </div>
            </div>
          </div>
        </div>

        <div
          className="relative mx-auto my-8 hidden h-10 w-px bg-gradient-to-b from-accent to-transparent lg:block"
          aria-hidden="true"
        />
        <div className="my-6 flex justify-center lg:hidden" aria-hidden="true">
          <svg className="h-6 w-6 text-accent/60" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
          </svg>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {ideaBranch.outputs.map((output) => {
            const theme = channelTheme[output.channel];
            return (
              <article
                key={output.channel}
                className={cn(
                  "group relative flex flex-col rounded-2xl border bg-surface p-5 shadow-[var(--shadow-sm)] transition-all hover:-translate-y-0.5 hover:shadow-[var(--shadow-md)]",
                  theme.ring,
                )}
              >
                <div className="flex items-center justify-between">
                  <span
                    className={cn(
                      "inline-flex items-center gap-1.5 rounded-md px-2 py-0.5 text-[11px] font-semibold",
                      theme.chipClass,
                    )}
                  >
                    <span className={cn("h-1.5 w-1.5 rounded-full", theme.dot)} aria-hidden="true" />
                    {theme.label}
                  </span>
                  <StatusChip label={output.status} />
                </div>
                <p className="mt-4 text-sm font-semibold text-navy">{output.format}</p>
                <p className="mt-2 line-clamp-3 text-[13px] leading-relaxed text-muted-foreground">
                  {output.preview}
                </p>
                <div className="mt-4 flex items-center justify-between border-t border-border-subtle pt-3">
                  <PublishChip label={output.publish} />
                  <span className="text-[10px] text-muted">From core idea</span>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
