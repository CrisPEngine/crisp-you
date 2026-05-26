import { site } from "@/config/site";
import { Button } from "./Button";

export function MidPageCTA() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="relative overflow-hidden rounded-2xl border border-border bg-surface shadow-[var(--shadow-md)]">
        <div
          className="pointer-events-none absolute -right-12 top-0 h-full w-1/2 bg-gradient-to-l from-accent-mint to-transparent"
          aria-hidden="true"
        />
        <div className="relative flex flex-col items-start justify-between gap-5 px-6 py-7 sm:flex-row sm:items-center sm:px-8">
          <div className="max-w-xl">
            <p className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-accent">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
              No credit card required
            </p>
            <p className="mt-2 text-lg font-medium text-navy sm:text-xl">
              Build the brand profile once, then create from strategy every week.
            </p>
          </div>
          <Button href={site.startUrl} size="lg" className="shrink-0">
            Start free, no card required
          </Button>
        </div>
      </div>
    </div>
  );
}
