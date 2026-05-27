import type { Capability } from "@/content/capabilities";
import { cn } from "@/lib/utils";

type CapabilityDetailPanelProps = {
  capability: Capability;
  panelId: string;
  labelledBy: string;
  animateKey: string;
  className?: string;
};

export function CapabilityDetailPanel({
  capability,
  panelId,
  labelledBy,
  animateKey,
  className,
}: CapabilityDetailPanelProps) {
  return (
    <div
      id={panelId}
      role="tabpanel"
      aria-labelledby={labelledBy}
      className={cn(
        "cce-panel-highlight relative min-h-[28rem] overflow-hidden rounded-2xl p-6 shadow-[var(--shadow-md)] sm:min-h-[32rem] lg:sticky lg:top-24 lg:p-8",
        className,
      )}
    >
      <div
        className="grid-bg-fine pointer-events-none absolute inset-0 opacity-40"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl shadow-[inset_0_1px_0_0_var(--glass-border-highlight)]"
        aria-hidden="true"
      />

      <div key={animateKey} className="capability-detail-content relative">
        <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-accent">
          {capability.number} {capability.category}
        </p>
        <h3 className="mt-2 text-2xl font-semibold text-navy">{capability.title}</h3>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">
          {capability.detailParagraph}
        </p>

        <div className="mt-6 rounded-xl border border-border-subtle bg-surface/60 p-4 backdrop-blur-sm">
          <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-muted">
            System preview
          </p>
          <div className="mt-3 space-y-2">
            {capability.miniFields.map((row) => (
              <div
                key={row.label}
                className="flex items-start justify-between gap-4 rounded-lg border border-border-subtle bg-surface px-3 py-2"
              >
                <span className="shrink-0 text-[11px] text-muted">{row.label}</span>
                <span className="text-right text-[11px] font-medium leading-snug text-navy">
                  {row.value}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 flex items-center gap-2 rounded-lg border border-accent-border bg-accent-soft px-3 py-2">
          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
          <p className="text-[11px] font-medium text-accent">{capability.statusChip}</p>
        </div>
      </div>
    </div>
  );
}
