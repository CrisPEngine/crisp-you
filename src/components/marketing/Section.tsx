import { cn } from "@/lib/utils";

type SectionProps = {
  id?: string;
  children: React.ReactNode;
  className?: string;
  warm?: boolean;
};

export function Section({ id, children, className, warm }: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "py-16 sm:py-20 lg:py-24",
        warm ? "bg-surface-warm" : "bg-background",
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
  body?: string | readonly string[];
  align?: "left" | "center";
  className?: string;
};

export function SectionHeader({
  eyebrow,
  heading,
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
        <p className="mb-3 text-sm font-medium uppercase tracking-wider text-accent">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl font-semibold tracking-tight text-navy sm:text-4xl">
        {heading}
      </h2>
      {bodyParagraphs.map((paragraph, i) => (
        <p
          key={i}
          className={cn(
            "mt-4 text-lg leading-relaxed text-muted-foreground",
            i > 0 && "mt-3",
          )}
        >
          {paragraph}
        </p>
      ))}
    </div>
  );
}
