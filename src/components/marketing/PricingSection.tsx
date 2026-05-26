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
          eyebrow="Pricing"
          heading={pricingContent.heading}
          body={pricingContent.subheading}
          align="center"
          className="mx-auto"
        />
      )}

      <div className="mb-10 flex flex-col items-center gap-2">
        <div
          className="inline-flex rounded-xl border border-border bg-surface p-1 shadow-[var(--shadow-xs)]"
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
                  ? "bg-primary text-cta-foreground shadow-[var(--shadow-sm)]"
                  : "text-charcoal hover:bg-surface-muted",
              )}
              aria-pressed={interval === value}
            >
              {value === "monthly" ? "Monthly" : "Annual"}
            </button>
          ))}
        </div>
        {interval === "annual" && (
          <p className="text-xs font-medium text-accent">
            Save 20% on annual billing
          </p>
        )}
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-5">
        {pricingContent.tiers.map((tier) => {
          const { price, sublabel } = formatTierPrice(tier, interval);
          return (
            <div
              key={tier.id}
              className={cn(
                "glass-panel relative flex flex-col p-6",
                tier.highlighted
                  ? "glass-panel-interactive border-accent/40 ring-1 ring-accent/30 xl:-translate-y-1"
                  : "glass-panel-interactive",
              )}
            >
              {tier.highlighted && (
                <span className="absolute -top-3 left-6 inline-flex items-center gap-1 rounded-full bg-accent px-2.5 py-0.5 text-[11px] font-semibold text-cta-foreground shadow-[var(--shadow-sm)]">
                  <span className="h-1 w-1 rounded-full bg-cta-foreground/80" aria-hidden="true" />
                  Most popular
                </span>
              )}
              {tier.badge && !tier.highlighted && (
                <span className="mb-3 inline-flex w-fit rounded-full bg-surface-muted px-2.5 py-0.5 text-[11px] font-medium text-charcoal">
                  {tier.badge}
                </span>
              )}
              <h3 className="text-lg font-semibold text-navy">{tier.name}</h3>
              <div className="mt-3 flex items-baseline gap-1">
                <p className="text-3xl font-semibold tracking-tight text-navy">{price}</p>
              </div>
              {sublabel && (
                <p className="mt-1 text-[11px] text-muted-foreground">{sublabel}</p>
              )}
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {tier.bestFor}
              </p>
              <ul className="mt-5 flex-1 space-y-2.5 border-t border-border-subtle pt-5">
                {tier.includes.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-[13px] leading-snug text-charcoal">
                    <svg
                      className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2.5}
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
                href={tierHref(tier)}
                variant={tier.highlighted ? "dark" : tier.id === "starter" ? "primary" : "secondary"}
                className="mt-6 w-full"
                external={tier.ctaHref === "contact"}
                event={
                  tier.ctaHref === "contact"
                    ? "cce_contact_sales_click"
                    : tier.ctaHref === "start"
                      ? "cce_start_free_click"
                      : "cce_pricing_cta_click"
                }
              >
                {tier.cta}
              </Button>
            </div>
          );
        })}
      </div>

      <div className="glass-panel mt-10 p-5">
        <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-muted">
          The fine print
        </p>
        <div className="mt-3 grid gap-2 text-xs leading-relaxed text-muted-foreground sm:grid-cols-2">
          {pricingContent.notes.map((note) => (
            <p key={note}>{note}</p>
          ))}
        </div>
      </div>
    </Section>
  );
}
