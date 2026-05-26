import { Button } from "./Button";
import { cn } from "@/lib/utils";
import type { AnalyticsEvent } from "@/lib/analytics";

type PageHeroProps = {
  eyebrow?: string;
  heading: string;
  body?: string | readonly string[];
  primaryCta?: { label: string; href: string; event?: AnalyticsEvent };
  secondaryCta?: { label: string; href: string; event?: AnalyticsEvent };
  align?: "left" | "center";
  className?: string;
};

export function PageHero({
  eyebrow,
  heading,
  body,
  primaryCta,
  secondaryCta,
  align = "left",
  className,
}: PageHeroProps) {
  const paragraphs = body ? (Array.isArray(body) ? body : [body]) : [];

  return (
    <section className={cn("relative overflow-hidden bg-background pt-14 pb-12 sm:pt-20 sm:pb-16", className)}>
      <div className="grid-bg-fine pointer-events-none absolute inset-0 opacity-30 fade-mask-radial" aria-hidden="true" />
      <div
        className={cn(
          "relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
          align === "center" && "text-center",
        )}
      >
        {eyebrow && (
          <p className="mb-3 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-accent">
            <span className="h-px w-6 bg-accent/40" aria-hidden="true" />
            {eyebrow}
          </p>
        )}
        <h1 className="max-w-4xl text-3xl font-semibold tracking-tight text-navy sm:text-4xl lg:text-[2.75rem] lg:leading-[1.08]">
          {heading}
        </h1>
        {paragraphs.map((paragraph, i) => (
          <p
            key={i}
            className={cn(
              "max-w-3xl text-lg leading-relaxed text-muted-foreground",
              align === "center" ? "mx-auto" : "",
              i === 0 ? "mt-5" : "mt-3",
            )}
          >
            {paragraph}
          </p>
        ))}
        {(primaryCta || secondaryCta) && (
          <div
            className={cn(
              "mt-8 flex flex-col gap-3 sm:flex-row sm:items-center",
              align === "center" && "justify-center",
            )}
          >
            {primaryCta && (
              <Button href={primaryCta.href} size="lg" event={primaryCta.event}>
                {primaryCta.label}
              </Button>
            )}
            {secondaryCta && (
              <Button href={secondaryCta.href} variant="secondary" size="lg" event={secondaryCta.event}>
                {secondaryCta.label}
              </Button>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
