import { cn } from "@/lib/utils";

type SectionTone = "default" | "warm" | "deep";

type SectionProps = {
  id?: string;
  children: React.ReactNode;
  className?: string;
  tone?: SectionTone;
  /** @deprecated use tone="warm" */
  warm?: boolean;
};

const toneClasses: Record<SectionTone, string> = {
  default: "bg-background",
  warm: "bg-surface",
  deep: "bg-background-elevated",
};

export function Section({
  id,
  children,
  className,
  tone,
  warm,
}: SectionProps) {
  const resolvedTone: SectionTone = tone ?? (warm ? "warm" : "default");
  return (
    <section
      id={id}
      className={cn(
        "py-12 sm:py-20 lg:py-24",
        toneClasses[resolvedTone],
        className,
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  );
}

type SectionHeaderProps = {
  eyebrow?: string;
  heading: string;
  headingId?: string;
  body?: string | readonly string[];
  align?: "left" | "center";
  className?: string;
};

export function SectionHeader({
  eyebrow,
  heading,
  headingId,
  body,
  align = "left",
  className,
}: SectionHeaderProps) {
  const bodyParagraphs = body
    ? Array.isArray(body)
      ? body
      : [body]
    : [];

  return (
    <div
      className={cn(
        "mb-12 max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow && (
        <p className="mb-3 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-accent">
          <span className="h-px w-6 bg-accent/40" aria-hidden="true" />
          {eyebrow}
        </p>
      )}
      <h2
        id={headingId}
        className="text-3xl font-semibold tracking-tight text-navy sm:text-4xl lg:text-[2.5rem] lg:leading-[1.1]"
      >
        {heading}
      </h2>
      {bodyParagraphs.map((paragraph, i) => (
        <p
          key={i}
          className={cn(
            "text-lg leading-relaxed text-muted-foreground",
            i === 0 ? "mt-5" : "mt-3",
          )}
        >
          {paragraph}
        </p>
      ))}
    </div>
  );
}
