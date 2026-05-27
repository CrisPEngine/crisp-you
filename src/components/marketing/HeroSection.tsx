import { hero, cta } from "@/content/marketing";
import { site } from "@/config/site";
import { Button } from "./Button";
import { HeroSystemMap } from "./HeroSystemMap";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-background pt-8 pb-14 sm:pt-14 sm:pb-20 lg:pt-20 lg:pb-28">
      <div
        className="grid-bg pointer-events-none absolute inset-0 fade-mask-radial opacity-40"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.05fr] lg:gap-12 xl:gap-16">
          <div className="max-w-xl lg:max-w-none">
            <div className="inline-flex items-center gap-2 rounded-full border border-border-glass bg-surface-glass px-3 py-1 backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
              <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                {hero.eyebrow}
              </p>
            </div>
            <h1 className="mt-5 text-[1.75rem] font-semibold leading-[1.15] tracking-tight text-navy sm:text-4xl sm:leading-tight lg:text-[3.5rem] lg:leading-[1.05]">
              {hero.headline}
            </h1>
            <p className="mt-5 max-w-prose text-base leading-relaxed text-muted-foreground sm:mt-6 sm:text-lg">
              {hero.subheadline}
            </p>
            <p className="mt-3 max-w-prose text-sm leading-relaxed text-charcoal sm:mt-4 sm:text-base">
              {hero.supporting}
            </p>
            <div className="mt-7 flex w-full flex-col gap-3 sm:mt-8 sm:w-auto sm:flex-row sm:items-center">
              <Button href={site.startUrl} size="lg" className="w-full sm:w-auto" event="cce_start_free_click">
                {cta.primary}
              </Button>
              <Button href="/how-it-works" variant="secondary" size="lg" className="w-full sm:w-auto" event="cce_feature_cta_click">
                See how CRISP works
              </Button>
            </div>
            <p className="mt-8 max-w-md text-sm leading-relaxed text-muted">
              {hero.trustStrip}
            </p>
          </div>
          <div className="relative min-w-0 overflow-hidden">
            <HeroSystemMap />
          </div>
        </div>
      </div>
    </section>
  );
}
