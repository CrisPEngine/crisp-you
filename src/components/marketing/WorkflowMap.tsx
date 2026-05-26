import { workflow } from "@/content/marketing";
import { Section, SectionHeader } from "./Section";

export function WorkflowMap() {
  return (
    <Section tone="warm" id="how-it-works">
      <SectionHeader
        eyebrow="Four steps, one rhythm"
        heading={workflow.heading}
        body={workflow.subheading}
        align="center"
        className="mx-auto"
      />

      <div className="relative mx-auto max-w-5xl">
        <ol className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
          {workflow.steps.map((step, i) => (
            <li
              key={step.title}
              className="relative flex flex-col rounded-2xl border border-border bg-surface p-5 shadow-[var(--shadow-sm)] transition-shadow hover:shadow-[var(--shadow-md)]"
            >
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-muted">
                  Step {i + 1}
                </span>
                {i < workflow.steps.length - 1 && (
                  <svg
                    className="hidden h-3.5 w-3.5 text-accent/60 lg:block"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                )}
              </div>
              <p className="mt-3 text-2xl font-semibold tracking-tight text-navy">
                {step.verb}
              </p>
              <p className="mt-1 text-sm font-medium text-charcoal">{step.title}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {step.copy}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}
