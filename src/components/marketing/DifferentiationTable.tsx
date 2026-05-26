import { differentiation } from "@/content/marketing";
import { Section, SectionHeader } from "./Section";

export function DifferentiationTable() {
  return (
    <Section tone="deep">
      <SectionHeader
        eyebrow="The difference"
        heading={differentiation.heading}
        body={differentiation.body}
      />

      <div className="grid overflow-hidden rounded-2xl border border-border bg-surface shadow-[var(--shadow-md)] lg:grid-cols-2">
        <div className="relative border-b border-border bg-surface-muted p-8 lg:border-b-0 lg:border-r lg:p-10">
          <div className="flex items-center justify-between">
            <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-muted">
              {differentiation.typical.label}
            </p>
            <span className="chip chip-export">Prompt first</span>
          </div>
          <ul className="mt-6 space-y-3">
            {differentiation.typical.items.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 text-[15px] leading-relaxed text-muted-foreground"
              >
                <svg
                  className="mt-1 h-3.5 w-3.5 shrink-0 text-muted/70"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="cce-panel-highlight relative overflow-hidden p-8 lg:p-10">
          <div
            className="grid-bg-fine pointer-events-none absolute inset-0 opacity-40"
            aria-hidden="true"
          />
          <div className="relative">
            <div className="flex items-center justify-between">
              <p className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-accent">
                <span className="flex h-5 w-5 items-center justify-center rounded-md bg-primary text-[10px] font-bold text-cta-foreground">
                  C
                </span>
                {differentiation.crisp.label}
              </p>
              <span className="chip chip-approved">Brand first</span>
            </div>
            <ul className="mt-6 space-y-3">
              {differentiation.crisp.items.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-[15px] font-medium leading-relaxed text-navy"
                >
                  <svg
                    className="mt-1 h-3.5 w-3.5 shrink-0 text-accent"
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
          </div>
        </div>
      </div>
    </Section>
  );
}
