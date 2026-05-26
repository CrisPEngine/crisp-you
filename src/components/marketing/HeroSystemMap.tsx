import { cn } from "@/lib/utils";

function Chip({
  label,
  variant,
}: {
  label: string;
  variant: "draft" | "review" | "approved" | "scheduled" | "export" | "auto";
}) {
  const cls =
    variant === "draft"
      ? "chip-draft"
      : variant === "review"
        ? "chip-review"
        : variant === "approved"
          ? "chip-approved"
          : variant === "scheduled"
            ? "chip-scheduled"
            : "chip-export";
  return <span className={cn("chip", cls)}>{label}</span>;
}

function ChannelDot({ name }: { name: "LinkedIn" | "X" | "Meta" | "Blog" }) {
  const styles: Record<string, string> = {
    LinkedIn: "bg-[#0a66c2]/10 text-[#0a66c2] border-[#0a66c2]/20",
    X: "bg-navy/10 text-navy border-navy/20",
    Meta: "bg-[#1877f2]/10 text-[#1877f2] border-[#1877f2]/20",
    Blog: "bg-accent-light text-accent border-accent/20",
  };
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md border px-1.5 py-0.5 text-[10px] font-semibold",
        styles[name],
      )}
    >
      {name}
    </span>
  );
}

export function HeroSystemMap() {
  return (
    <div
      className="relative"
      aria-label="CRISP visibility system map showing brand profile flowing through strategy, queue, review and channel outputs"
      role="img"
    >
      <div
        className="pointer-events-none absolute -inset-8 rounded-[2rem] bg-gradient-to-br from-accent-mint via-transparent to-transparent opacity-70 blur-2xl"
        aria-hidden="true"
      />

      <div className="relative grid grid-cols-12 gap-3 sm:gap-4">
        <div className="col-span-12 sm:col-span-5">
          <div className="rounded-2xl border border-border bg-surface p-4 shadow-[var(--shadow-md)]">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-navy text-[11px] font-bold text-white">
                  C
                </span>
                <p className="text-[11px] font-semibold uppercase tracking-wider text-muted">
                  Brand profile
                </p>
              </div>
              <span className="chip chip-approved">Ready</span>
            </div>
            <div className="mt-4 space-y-2">
              {[
                { k: "Tone", v: "Confident, practical" },
                { k: "Audience", v: "Founders, operators" },
                { k: "Offers", v: "3 connected" },
                { k: "Rules", v: "12 active" },
              ].map((row) => (
                <div
                  key={row.k}
                  className="flex items-center justify-between rounded-lg bg-background-deep px-2.5 py-1.5"
                >
                  <span className="text-[11px] text-muted">{row.k}</span>
                  <span className="text-[11px] font-medium text-navy">{row.v}</span>
                </div>
              ))}
            </div>
            <div className="mt-4 flex items-center gap-2 rounded-lg bg-accent-mint px-2.5 py-2">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
              <p className="text-[11px] font-medium text-accent">Free plan active</p>
            </div>
          </div>
        </div>

        <div className="col-span-12 sm:col-span-7">
          <div className="rounded-2xl border border-border bg-surface p-4 shadow-[var(--shadow-md)]">
            <div className="flex items-center justify-between">
              <p className="text-[11px] font-semibold uppercase tracking-wider text-muted">
                Content strategy
              </p>
              <span className="text-[10px] text-muted">Q2 visibility</span>
            </div>
            <div className="mt-3 grid grid-cols-3 gap-2">
              {["Authority", "Engagement", "Traffic"].map((theme, i) => (
                <div
                  key={theme}
                  className={cn(
                    "rounded-lg border px-2 py-1.5 text-center",
                    i === 0
                      ? "border-accent/30 bg-accent-mint"
                      : "border-border-subtle bg-background-deep",
                  )}
                >
                  <p className="text-[10px] font-medium text-navy">{theme}</p>
                  <p className="mt-0.5 text-[9px] text-muted">
                    {i === 0 ? "Active" : i === 1 ? "2 themes" : "1 theme"}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-3 flex flex-wrap items-center gap-1.5">
              <ChannelDot name="LinkedIn" />
              <ChannelDot name="X" />
              <ChannelDot name="Meta" />
              <ChannelDot name="Blog" />
            </div>
          </div>
        </div>

        <div className="col-span-12">
          <div className="rounded-2xl border border-border bg-surface shadow-[var(--shadow-md)]">
            <div className="flex items-center justify-between border-b border-border-subtle px-4 py-2.5">
              <div className="flex items-center gap-2">
                <p className="text-[11px] font-semibold uppercase tracking-wider text-muted">
                  Content queue
                </p>
                <span className="text-[10px] text-muted">4 items</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="chip chip-approved">2 Approved</span>
                <span className="chip chip-review">1 Review</span>
              </div>
            </div>
            <div className="divide-y divide-border-subtle">
              {[
                {
                  title: "Why systems beat sporadic posting",
                  channel: "LinkedIn" as const,
                  status: "approved" as const,
                  statusLabel: "Approved",
                  publish: "Auto-publish",
                },
                {
                  title: "5 content mistakes founders make",
                  channel: "X" as const,
                  status: "review" as const,
                  statusLabel: "Review",
                  publish: "Export",
                },
                {
                  title: "How to build a content queue",
                  channel: "Blog" as const,
                  status: "scheduled" as const,
                  statusLabel: "Scheduled",
                  publish: "Export",
                },
                {
                  title: "Campaign visual direction",
                  channel: "Meta" as const,
                  status: "draft" as const,
                  statusLabel: "Draft",
                  publish: "Auto-publish",
                },
              ].map((row) => (
                <div
                  key={row.title}
                  className="grid grid-cols-[1fr_auto] items-center gap-2 px-4 py-2.5 sm:grid-cols-[1fr_auto_auto_auto]"
                >
                  <p className="truncate text-[12px] font-medium text-navy">
                    {row.title}
                  </p>
                  <ChannelDot name={row.channel} />
                  <span className="hidden text-[10px] text-muted sm:inline">
                    {row.publish}
                  </span>
                  <Chip label={row.statusLabel} variant={row.status} />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="col-span-12 sm:col-span-7">
          <div className="rounded-2xl border border-border bg-surface p-4 shadow-[var(--shadow-md)]">
            <div className="flex items-center justify-between">
              <p className="text-[11px] font-semibold uppercase tracking-wider text-muted">
                Review
              </p>
              <span className="chip chip-review">1 awaiting</span>
            </div>
            <div className="mt-3 rounded-lg border border-border-subtle bg-background-deep p-3">
              <p className="text-[11px] font-medium text-navy">
                5 content mistakes founders make
              </p>
              <p className="mt-1 text-[10px] leading-relaxed text-muted">
                Faster writing is not a content strategy. The harder problem is staying
                connected to the brand.
              </p>
              <div className="mt-2.5 flex items-center gap-1.5">
                <span className="rounded-md bg-accent px-2 py-0.5 text-[10px] font-medium text-white">
                  Approve
                </span>
                <span className="rounded-md border border-border bg-surface px-2 py-0.5 text-[10px] font-medium text-charcoal">
                  Edit
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-12 sm:col-span-5">
          <div className="rounded-2xl border border-border bg-surface p-4 shadow-[var(--shadow-md)]">
            <div className="flex items-center justify-between">
              <p className="text-[11px] font-semibold uppercase tracking-wider text-muted">
                Publishing rhythm
              </p>
              <span className="text-[10px] text-muted">This week</span>
            </div>
            <div className="mt-3 flex items-end gap-1.5">
              {[40, 58, 46, 72, 64, 86, 78].map((h, i) => {
                const days = ["M", "T", "W", "T", "F", "S", "S"];
                return (
                  <div key={i} className="flex flex-1 flex-col items-center gap-1">
                    <div
                      className={cn(
                        "w-full rounded-sm",
                        i === 5 || i === 6 ? "bg-accent/30" : "bg-accent/70",
                      )}
                      style={{ height: `${h * 0.5}px` }}
                    />
                    <span className="text-[9px] text-muted">{days[i]}</span>
                  </div>
                );
              })}
            </div>
            <div className="mt-3 flex items-center justify-between text-[10px]">
              <span className="text-muted">5 published</span>
              <span className="font-medium text-accent">2 scheduled</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
