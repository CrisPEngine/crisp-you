import { cn } from "@/lib/utils";

type CoreIdeaCardProps = {
  label: string;
  idea: string;
  className?: string;
};

export function CoreIdeaCard({ label, idea, className }: CoreIdeaCardProps) {
  return (
    <article
      className={cn(
        "glass-panel core-idea-card core-idea-float relative mx-auto max-w-2xl shadow-[var(--shadow-md)]",
        className,
      )}
    >
      <div
        className="channel-card-glow opacity-60"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 90% 70% at 50% 0%, color-mix(in oklab, #4ff0b8 28%, transparent) 0%, transparent 72%)",
        }}
      />
      <div className="grid-bg-fine pointer-events-none absolute inset-0 opacity-30" aria-hidden="true" />
      <div className="relative">
        <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-accent">
          {label}
        </p>
        <p className="mt-3 text-xl font-semibold leading-snug text-navy sm:text-2xl">
          &ldquo;{idea}&rdquo;
        </p>
        <div className="mt-4 flex flex-wrap items-center gap-2">
          <span className="status-chip status-chip-approved">
            <span className="status-chip-dot" aria-hidden="true" />
            Brand-aligned
          </span>
          <span className="status-chip status-chip-scheduled">
            <span className="status-chip-dot" aria-hidden="true" />
            Strategy theme
          </span>
          <span className="text-[11px] text-muted">From your brand profile</span>
        </div>
      </div>
    </article>
  );
}
