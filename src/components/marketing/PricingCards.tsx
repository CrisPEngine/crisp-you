import { pricing, siteConfig } from "@/content/marketing";
import { Section, SectionHeader } from "./Section";
import { Button } from "./Button";
import { cn } from "@/lib/utils";

type PricingCardsProps = {
  showHeading?: boolean;
  id?: string;
};

export function PricingCards({ showHeading = true, id }: PricingCardsProps) {
  return (
    <Section warm id={id}>
      {showHeading && (
        <SectionHeader heading={pricing.heading} align="center" className="mx-auto" />
      )}
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-5">
        {pricing.tiers.map((tier) => (
          <div
            key={tier.id}
            className={cn(
              "flex flex-col rounded-2xl border bg-surface p-6 shadow-sm",
              tier.highlighted
                ? "border-accent ring-1 ring-accent"
                : "border-border",
            )}
          >
            {tier.highlighted && (
              <span className="mb-3 inline-flex w-fit rounded-full bg-accent-light px-2.5 py-0.5 text-xs font-medium text-accent">
                Most popular
              </span>
            )}
            <h3 className="text-lg font-semibold text-navy">{tier.name}</h3>
            <p className="mt-2 text-2xl font-semibold text-navy">{tier.price}</p>
            <p className="mt-2 text-sm text-muted-foreground">{tier.bestFor}</p>
            <ul className="mt-5 flex-1 space-y-2.5">
              {tier.includes.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-charcoal">
                  <svg
                    className="mt-0.5 h-4 w-4 shrink-0 text-accent"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
            <Button
              href={tier.id === "scale" ? siteConfig.urls.contact : siteConfig.urls.signup}
              variant={tier.highlighted ? "primary" : "secondary"}
              className="mt-6 w-full"
            >
              {tier.cta}
            </Button>
          </div>
        ))}
      </div>

      <div className="mt-10 rounded-2xl border border-border bg-surface p-6">
        <h3 className="text-sm font-semibold text-navy">Add-ons</h3>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {pricing.addOns.map((addon) => (
            <div
              key={addon.name}
              className="flex items-center justify-between rounded-xl border border-border-subtle bg-background px-4 py-3"
            >
              <span className="text-sm font-medium text-charcoal">{addon.name}</span>
              <span className="text-sm font-semibold text-navy">{addon.price}</span>
            </div>
          ))}
        </div>
        <p className="mt-4 text-xs leading-relaxed text-muted">{pricing.note}</p>
      </div>
    </Section>
  );
}
