import { differentiation } from "@/content/marketing";
import { Section, SectionHeader } from "./Section";

export function ComparisonTable() {
  const { columns, rows } = differentiation.comparison;

  return (
    <Section warm>
      <SectionHeader heading={differentiation.heading} body={differentiation.body} />
      <div className="overflow-x-auto rounded-2xl border border-border bg-surface shadow-sm">
        <table className="w-full min-w-[540px] text-left text-sm">
          <thead>
            <tr className="border-b border-border bg-surface-warm">
              <th scope="col" className="px-6 py-4 font-medium text-muted">
                Feature
              </th>
              {columns.map((col) => (
                <th
                  key={col}
                  scope="col"
                  className={`px-6 py-4 font-semibold ${
                    col === "CRISP Content Engine" ? "text-accent" : "text-navy"
                  }`}
                >
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr
                key={row.label}
                className={i % 2 === 0 ? "bg-surface" : "bg-background"}
              >
                <th scope="row" className="px-6 py-4 font-medium text-navy">
                  {row.label}
                </th>
                <td className="px-6 py-4 text-muted-foreground">{row.values[0]}</td>
                <td className="px-6 py-4 font-medium text-charcoal">{row.values[1]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Section>
  );
}
