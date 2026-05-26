import { hero, cta } from "@/content/marketing";
import { site } from "@/config/site";
import { Button } from "./Button";
import { HeroSystemMap } from "./HeroSystemMap";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-background pt-10 pb-16 sm:pt-14 sm:pb-20 lg:pt-20 lg:pb-28">
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
            <h1 className="mt-5 text-[2.5rem] font-semibold tracking-tight text-navy sm:text-5xl lg:text-[3.5rem] lg:leading-[1.05]">
              {hero.headline}
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              {hero.subheadline}
            </p>
            <p className="mt-4 text-base leading-relaxed text-charcoal">
              {hero.supporting}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button href={site.startUrl} size="lg">
                {cta.primary}
              </Button>
              <Button href="/how-it-works" variant="secondary" size="lg">
                See how CRISP works
              </Button>
            </div>
            <p className="mt-8 max-w-md text-sm leading-relaxed text-muted">
              {hero.trustStrip}
            </p>
          </div>
          <div className="relative">
            <HeroSystemMap />
          </div>
        </div>
      </div>
    </section>
  );
}
