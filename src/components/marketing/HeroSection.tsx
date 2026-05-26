import { hero, cta } from "@/content/marketing";
import { site } from "@/config/site";
import { Button } from "./Button";
import { HeroSystemMap } from "./HeroSystemMap";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-background pt-10 pb-16 sm:pt-14 sm:pb-20 lg:pt-16 lg:pb-24">
      <div className="grid-bg pointer-events-none absolute inset-0 opacity-50" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-10 xl:gap-16">
          <div className="max-w-xl lg:max-w-none">
            <p className="text-sm font-medium uppercase tracking-wider text-accent">
              {hero.eyebrow}
            </p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-navy sm:text-5xl lg:text-[3.25rem] lg:leading-[1.08]">
              {hero.headline}
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              {hero.subheadline}
            </p>
            <p className="mt-4 text-base leading-relaxed text-charcoal">
              {hero.supporting}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button href={site.startUrl}>{cta.primary}</Button>
              <Button href="/how-it-works" variant="secondary">
                {cta.secondary}
              </Button>
            </div>
            <p className="mt-8 text-sm leading-relaxed text-muted">{hero.trustStrip}</p>
          </div>
          <HeroSystemMap />
        </div>
      </div>
    </section>
  );
}
