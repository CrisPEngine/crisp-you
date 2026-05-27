import { pricingContent } from "@/content/pricing";
import { Section } from "./Section";

const tierIds = ["starter", "creator", "growth", "pro", "scale"] as const;

export function PricingComparisonTable() {
  const tierNames = pricingContent.tiers.map((t) => t.name);

  return (
    <Section warm id="compare-plans">
      <div className="mb-6 lg:hidden">
        <p className="text-sm text-muted-foreground">
          Compare plan limits and features. Tap a plan to expand the details.
        </p>
        <div className="mt-4 space-y-3">
          {pricingContent.tiers.map((tier) => (
            <details
              key={tier.id}
              className="group glass-panel overflow-hidden"
              open={tier.highlighted}
            >
              <summary className="flex min-h-12 cursor-pointer list-none items-center justify-between gap-3 px-4 py-3 marker:content-none [&::-webkit-details-marker]:hidden">
                <div>
                  <p className="text-sm font-semibold text-navy">{tier.name}</p>
                  {tier.highlighted ? (
                    <p className="mt-0.5 text-[11px] font-medium text-accent">Most popular</p>
                  ) : null}
                </div>
                <svg
                  className="h-4 w-4 shrink-0 text-muted transition-transform group-open:rotate-180"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </summary>
              <dl className="divide-y divide-border-subtle border-t border-border-subtle">
                {pricingContent.comparisonRows.map((row) => (
                  <div key={row.key} className="grid grid-cols-[1fr_auto] gap-3 px-4 py-3">
                    <dt className="text-sm font-medium text-charcoal">{row.label}</dt>
                    <dd className="text-right text-sm text-muted-foreground">
                      {
                        pricingContent.comparisonData[tier.id as (typeof tierIds)[number]][
                          row.key as keyof (typeof pricingContent.comparisonData)["starter"]
                        ]
                      }
                    </dd>
                  </div>
                ))}
              </dl>
            </details>
          ))}
        </div>
      </div>

      <div className="hidden overflow-x-auto glass-panel shadow-sm lg:block">
        <table className="w-full min-w-[960px] text-left text-sm">
          <thead>
            <tr className="border-b border-border bg-surface-warm">
              <th
                scope="col"
                className="sticky left-0 bg-surface-warm px-4 py-4 font-medium text-muted"
              >
                Feature
              </th>
              {tierNames.map((name) => (
                <th key={name} scope="col" className="px-4 py-4 font-semibold text-navy">
                  {name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {pricingContent.comparisonRows.map((row, i) => (
              <tr
                key={row.key}
                className={i % 2 === 0 ? "bg-surface" : "bg-background"}
              >
                <th
                  scope="row"
                  className="sticky left-0 bg-inherit px-4 py-3 font-medium text-navy"
                >
                  {row.label}
                </th>
                {tierIds.map((tierId) => (
                  <td key={tierId} className="px-4 py-3 text-muted-foreground">
                    {
                      pricingContent.comparisonData[tierId][
                        row.key as keyof (typeof pricingContent.comparisonData)["starter"]
                      ]
                    }
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Section>
  );
}
