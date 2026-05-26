import { workflow } from "@/content/marketing";
import { Section, SectionHeader } from "./Section";

export function WorkflowSection() {
  return (
    <Section warm id="how-it-works">
      <SectionHeader heading={workflow.heading} align="center" className="mx-auto" />
      <div className="relative hidden lg:block">
        <div
          className="absolute left-1/2 top-0 h-full w-px -translate-x-px bg-border"
          aria-hidden="true"
        />
        <div className="space-y-12">
          {workflow.steps.map((step, i) => (
            <div
              key={step.title}
              className={`relative flex flex-col gap-4 lg:flex-row lg:items-center ${
                i % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className="hidden lg:block lg:w-1/2" />
              <div
                className="absolute left-6 top-6 z-10 hidden h-3 w-3 -translate-x-1/2 rounded-full border-2 border-accent bg-surface lg:left-1/2 lg:block"
                aria-hidden="true"
              />
              <div
                className={`lg:w-1/2 ${i % 2 === 1 ? "lg:pr-16 lg:text-right" : "lg:pl-16"}`}
              >
                <div className="ml-12 rounded-2xl border border-border bg-surface p-6 shadow-sm lg:ml-0">
                  <span className="text-sm font-medium text-accent">
                    Step {i + 1}
                  </span>
                  <h3 className="mt-1 text-lg font-semibold text-navy">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {step.copy}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="space-y-4 lg:hidden">
          {workflow.steps.map((step, i) => (
            <div
              key={step.title}
              className="flex gap-4 rounded-2xl border border-border bg-surface p-5 shadow-sm"
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent text-sm font-semibold text-white">
                {i + 1}
              </span>
              <div>
                <h3 className="text-base font-semibold text-navy">{step.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  {step.copy}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
