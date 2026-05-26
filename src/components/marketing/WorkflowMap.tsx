import { workflow } from "@/content/marketing";
import { Section, SectionHeader } from "./Section";

export function WorkflowMap() {
  return (
    <Section warm id="how-it-works">
      <SectionHeader
        heading={workflow.heading}
        body={workflow.subheading}
        align="center"
        className="mx-auto"
      />
      <div className="relative mx-auto max-w-4xl">
        <div
          className="absolute bottom-8 left-8 top-8 hidden w-px bg-gradient-to-b from-accent/40 via-border to-accent/40 lg:block"
          aria-hidden="true"
        />
        <ol className="space-y-0">
          {workflow.steps.map((step, i) => (
            <li key={step.title} className="relative pl-0 lg:pl-16">
              <div className="hidden lg:absolute lg:left-0 lg:top-8 lg:flex lg:h-8 lg:w-8 lg:-translate-x-1/2 lg:items-center lg:justify-center lg:rounded-full lg:border-2 lg:border-accent lg:bg-surface lg:text-sm lg:font-bold lg:text-accent">
                {i + 1}
              </div>
              <div className="rounded-2xl border border-border bg-surface p-5 shadow-sm transition-shadow hover:shadow-md sm:p-6 lg:mb-6">
                <div className="flex items-start gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent text-sm font-bold text-white lg:hidden">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-navy">{step.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {step.copy}
                    </p>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}
