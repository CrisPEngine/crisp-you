import { differentiation } from "@/content/marketing";
import { Section, SectionHeader } from "./Section";

export function DifferentiationTable() {
  return (
    <Section warm>
      <SectionHeader heading={differentiation.heading} body={differentiation.body} />
      <div className="grid overflow-hidden rounded-2xl border border-border bg-surface shadow-sm lg:grid-cols-2">
        <div className="border-b border-border p-8 lg:border-b-0 lg:border-r">
          <p className="text-xs font-medium uppercase tracking-wider text-muted">
            Typical AI writer
          </p>
          <ul className="mt-6 space-y-4">
            {differentiation.typical.map((item) => (
              <li key={item} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-muted" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-gradient-to-br from-accent-light/30 to-surface p-8">
          <p className="text-xs font-medium uppercase tracking-wider text-accent">
            CRISP Content Engine
          </p>
          <ul className="mt-6 space-y-4">
            {differentiation.crisp.map((item) => (
              <li key={item} className="flex gap-3 text-sm font-medium leading-relaxed text-navy">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
