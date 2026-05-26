import { finalCta } from "@/content/marketing";
import { site } from "@/config/site";
import { Button } from "./Button";

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden border-t border-border-subtle bg-surface py-16 sm:py-20 lg:py-24">
      <div
        className="pointer-events-none absolute inset-0 opacity-60"
        aria-hidden="true"
        style={{
          backgroundImage:
            "radial-gradient(60% 40% at 80% 10%, color-mix(in oklab, #4895ef 12%, transparent) 0%, transparent 100%), radial-gradient(40% 30% at 10% 90%, color-mix(in oklab, #4ff0b8 10%, transparent) 0%, transparent 100%)",
        }}
      />
      <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <div className="inline-flex items-center gap-1.5 rounded-full border border-accent-border bg-accent-soft px-3 py-1">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
          <p className="text-[11px] font-medium uppercase tracking-[0.12em] text-accent">
            Free, no card required
          </p>
        </div>
        <h2 className="mt-6 text-3xl font-semibold tracking-tight text-navy sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
          {finalCta.heading}
        </h2>
        <p className="mt-5 text-lg leading-relaxed text-muted-foreground">{finalCta.body}</p>
        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button href={site.startUrl} size="lg" event="cce_start_free_click">
            Start free, no card required
          </Button>
          <Button href="/pricing" variant="secondary" size="lg" event="cce_pricing_cta_click">
            View pricing
          </Button>
        </div>
      </div>
    </section>
  );
}
