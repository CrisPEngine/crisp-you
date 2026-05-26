import { problem } from "@/content/marketing";
import { Section, SectionHeader } from "./Section";

export function ProblemDiagnostic() {
  return (
    <Section warm>
      <SectionHeader heading={problem.heading} body={problem.body} />
      <div className="relative">
        <div
          className="absolute left-0 right-0 top-1/2 hidden h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-border to-transparent lg:block"
          aria-hidden="true"
        />
        <div className="grid gap-5 lg:grid-cols-3">
          {problem.cards.map((card, i) => (
            <div
              key={card.title}
              className="group relative rounded-2xl border border-border bg-surface p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-red-200 bg-red-50 text-xs font-bold text-red-600">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-xs font-medium uppercase tracking-wider text-red-600/80">
                  Content leak
                </span>
              </div>
              <h3 className="mt-5 text-lg font-semibold text-navy">{card.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {card.copy}
              </p>
              <div
                className="mt-5 h-1 w-full overflow-hidden rounded-full bg-surface-warm"
                aria-hidden="true"
              >
                <div
                  className="h-full rounded-full bg-red-300/60 transition-all group-hover:w-full"
                  style={{ width: `${55 + i * 15}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
