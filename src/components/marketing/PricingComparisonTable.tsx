import { pricing } from "@/content/marketing";
import { Section } from "./Section";

export function PricingComparisonTable() {
  const tierIds = ["starter", "creator", "growth", "pro", "scale"] as const;
  const tierNames = pricing.tiers.map((t) => t.name);

  return (
    <Section>
      <div className="overflow-x-auto rounded-2xl border border-border bg-surface shadow-sm">
        <table className="w-full min-w-[800px] text-left text-sm">
          <thead>
            <tr className="border-b border-border bg-surface-warm">
              <th scope="col" className="sticky left-0 bg-surface-warm px-4 py-4 font-medium text-muted">
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
            {pricing.comparisonFields.map((field, i) => (
              <tr
                key={field.key}
                className={i % 2 === 0 ? "bg-surface" : "bg-background"}
              >
                <th
                  scope="row"
                  className="sticky left-0 bg-inherit px-4 py-3 font-medium text-navy"
                >
                  {field.label}
                </th>
                {tierIds.map((tierId) => (
                  <td key={tierId} className="px-4 py-3 text-muted-foreground">
                    {pricing.comparisonData[tierId][field.key as keyof typeof pricing.comparisonData.starter]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-4 text-xs leading-relaxed text-muted">
        {pricing.publishingNote}
      </p>
    </Section>
  );
}
