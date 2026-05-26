import { problem } from "@/content/marketing";
import { Section, SectionHeader } from "./Section";
import { cn } from "@/lib/utils";

function DisconnectedBlock({ label }: { label: string }) {
  return (
    <div className="relative">
      <div className="rounded-lg border border-dashed border-border-strong bg-background-deep/60 px-3 py-2.5">
        <p className="text-[11px] font-medium text-charcoal">{label}</p>
      </div>
    </div>
  );
}

function ConnectedBlock({ label, accent }: { label: string; accent?: boolean }) {
  return (
    <div
      className={cn(
        "relative rounded-lg border bg-surface px-3 py-2.5 shadow-[var(--shadow-xs)]",
        accent ? "border-accent/30 ring-1 ring-accent/15" : "border-border",
      )}
    >
      <div className="flex items-center gap-2">
        <span
          className={cn(
            "h-1.5 w-1.5 rounded-full",
            accent ? "bg-accent" : "bg-accent/60",
          )}
          aria-hidden="true"
        />
        <p className="text-[11px] font-medium text-navy">{label}</p>
      </div>
    </div>
  );
}

export function ProblemDiagnostic() {
  return (
    <Section tone="warm">
      <SectionHeader
        eyebrow="The weekly restart"
        heading={problem.heading}
        body={problem.body}
      />

      <div className="grid gap-5 lg:grid-cols-[1fr_auto_1fr] lg:items-stretch">
        <article className="rounded-2xl border border-border bg-surface p-6 shadow-[var(--shadow-sm)] sm:p-8">
          <div className="flex items-center justify-between">
            <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-muted">
              {problem.scattered.label}
            </p>
            <span className="rounded-md bg-status-export/60 px-2 py-0.5 text-[10px] font-medium text-muted">
              Scattered
            </span>
          </div>
          <h3 className="mt-3 text-xl font-semibold text-navy">
            {problem.scattered.title}
          </h3>
          <div className="mt-6 space-y-2.5">
            {problem.scattered.items.map((item) => (
              <DisconnectedBlock key={item} label={item} />
            ))}
          </div>
        </article>

        <div className="hidden lg:flex lg:items-center">
          <div
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface text-charcoal shadow-[var(--shadow-sm)]"
            aria-hidden="true"
          >
            <svg
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </div>
        </div>

        <article className="relative overflow-hidden rounded-2xl border border-accent/30 bg-gradient-to-br from-accent-mint via-surface to-surface p-6 shadow-[var(--shadow-md)] sm:p-8">
          <div
            className="grid-bg-fine pointer-events-none absolute inset-0 opacity-40"
            aria-hidden="true"
          />
          <div className="relative">
            <div className="flex items-center justify-between">
              <p className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-accent">
                <span className="flex h-5 w-5 items-center justify-center rounded-md bg-navy text-[10px] font-bold text-white">
                  C
                </span>
                {problem.crisp.label}
              </p>
              <span className="chip chip-approved">Connected</span>
            </div>
            <h3 className="mt-3 text-xl font-semibold text-navy">
              {problem.crisp.title}
            </h3>
            <div className="mt-6 space-y-2.5">
              {problem.crisp.items.map((item, i) => (
                <ConnectedBlock key={item} label={item} accent={i === 0} />
              ))}
            </div>
          </div>
        </article>
      </div>
    </Section>
  );
}
