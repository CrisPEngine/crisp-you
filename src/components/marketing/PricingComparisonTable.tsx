import { pricingContent } from "@/content/pricing";
import { Section } from "./Section";

const tierIds = ["starter", "creator", "growth", "pro", "scale"] as const;

export function PricingComparisonTable() {
  const tierNames = pricingContent.tiers.map((t) => t.name);

  return (
    <Section warm id="compare-plans">
      <div className="overflow-x-auto glass-panel shadow-sm">
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
