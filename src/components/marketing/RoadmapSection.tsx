import { roadmap } from "@/content/marketing";
import { Section, SectionHeader } from "./Section";

export function RoadmapSection() {
  return (
    <Section>
      <SectionHeader heading={roadmap.heading} body={roadmap.body} />
      <div className="grid gap-6 md:grid-cols-3">
        {roadmap.stages.map((stage, i) => (
          <div key={stage.title} className="relative">
            {i < roadmap.stages.length - 1 && (
              <div
                className="absolute top-8 left-full hidden h-px w-full bg-border md:block"
                aria-hidden="true"
              />
            )}
            <div className="rounded-2xl border border-border bg-surface p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-sm font-bold text-white">
                  {i + 1}
                </span>
                <h3 className="text-lg font-semibold text-navy">{stage.title}</h3>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                {stage.copy}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
