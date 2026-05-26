import { hero, cta, siteConfig } from "@/content/marketing";
import { Button } from "./Button";
import { ProductVisual } from "./ProductVisual";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-background pt-12 pb-16 sm:pt-16 sm:pb-20 lg:pt-20 lg:pb-28">
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        aria-hidden="true"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgb(226 232 240 / 0.4) 1px, transparent 1px), linear-gradient(to bottom, rgb(226 232 240 / 0.4) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h1 className="text-4xl font-semibold tracking-tight text-navy sm:text-5xl lg:text-[3.25rem] lg:leading-[1.1]">
              {hero.headline}
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground sm:text-xl">
              {hero.subheadline}
            </p>
            <p className="mt-4 text-base leading-relaxed text-charcoal">
              {hero.supporting}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button href={siteConfig.urls.signup}>{cta.primary}</Button>
              <Button href="/how-it-works" variant="secondary">
                {cta.secondary}
              </Button>
            </div>
            <p className="mt-8 text-sm leading-relaxed text-muted">
              {hero.trustStrip}
            </p>
          </div>
          <div className="relative">
            <ProductVisual />
          </div>
        </div>
      </div>
    </section>
  );
}
