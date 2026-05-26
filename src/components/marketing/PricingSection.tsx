"use client";

import { useState } from "react";
import {
  pricingContent,
  formatTierPrice,
  type BillingInterval,
  type PricingTier,
} from "@/content/pricing";
import { site } from "@/config/site";
import { cn } from "@/lib/utils";
import { Button } from "./Button";
import { Section, SectionHeader } from "./Section";

function tierHref(tier: PricingTier): string {
  if (tier.ctaHref === "start") return site.startUrl;
  if (tier.ctaHref === "contact") return site.contactUrl;
  return site.billingUrl;
}

type PricingSectionProps = {
  showHeading?: boolean;
  id?: string;
};

export function PricingSection({ showHeading = true, id }: PricingSectionProps) {
  const [interval, setInterval] = useState<BillingInterval>("monthly");

  return (
    <Section id={id}>
      {showHeading && (
        <SectionHeader
          heading={pricingContent.heading}
          body={pricingContent.subheading}
          align="center"
          className="mx-auto"
        />
      )}

      <div className="mb-10 flex justify-center">
        <div
          className="inline-flex rounded-xl border border-border bg-surface p-1"
          role="group"
          aria-label="Billing interval"
        >
          {(["monthly", "annual"] as const).map((value) => (
            <button
              key={value}
              type="button"
              onClick={() => setInterval(value)}
              className={cn(
                "rounded-lg px-4 py-2 text-sm font-medium transition-colors",
                interval === value
                  ? "bg-navy text-white"
                  : "text-charcoal hover:bg-surface-warm",
              )}
              aria-pressed={interval === value}
            >
              {value === "monthly" ? "Monthly" : pricingContent.annualSaveLabel}
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-5">
        {pricingContent.tiers.map((tier) => {
          const { price, sublabel } = formatTierPrice(tier, interval);
          return (
            <div
              key={tier.id}
              className={cn(
                "flex flex-col rounded-2xl border bg-surface p-6 shadow-sm",
                tier.highlighted
                  ? "border-accent ring-1 ring-accent xl:scale-[1.02]"
                  : "border-border",
              )}
            >
              {tier.highlighted && (
                <span className="mb-3 inline-flex w-fit rounded-full bg-accent-light px-2.5 py-0.5 text-xs font-medium text-accent">
                  Most popular
                </span>
              )}
              {tier.badge && !tier.highlighted && (
                <span className="mb-3 inline-flex w-fit rounded-full bg-surface-warm px-2.5 py-0.5 text-xs font-medium text-charcoal">
                  {tier.badge}
                </span>
              )}
              <h3 className="text-lg font-semibold text-navy">{tier.name}</h3>
              <p className="mt-2 text-2xl font-semibold tracking-tight text-navy">{price}</p>
              {sublabel && (
                <p className="mt-1 text-xs text-muted-foreground">{sublabel}</p>
              )}
              <p className="mt-3 text-sm text-muted-foreground">{tier.bestFor}</p>
              <ul className="mt-5 flex-1 space-y-2">
                {tier.includes.map((item) => (
                  <li key={item} className="text-sm leading-snug text-charcoal">
                    {item}
                  </li>
                ))}
              </ul>
              <Button
                href={tierHref(tier)}
                variant={tier.highlighted || tier.id === "starter" ? "primary" : "secondary"}
                className="mt-6 w-full"
                external={tier.ctaHref === "contact"}
              >
                {tier.cta}
              </Button>
            </div>
          );
        })}
      </div>

      <div className="mt-8 space-y-2">
        {pricingContent.notes.map((note) => (
          <p key={note} className="text-xs leading-relaxed text-muted">
            {note}
          </p>
        ))}
      </div>
    </Section>
  );
}
