function StatusBadge({ label, color }: { label: string; color: string }) {
  return (
    <span
      className="inline-flex items-center rounded-full px-2 py-0.5 text-[10px] font-medium"
      style={{ backgroundColor: `${color}18`, color }}
    >
      {label}
    </span>
  );
}

function MiniCard({
  title,
  children,
  className = "",
}: {
  title: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-xl border border-border bg-surface p-3 shadow-sm ${className}`}
    >
      <p className="text-[10px] font-medium uppercase tracking-wider text-muted">
        {title}
      </p>
      <div className="mt-2">{children}</div>
    </div>
  );
}

export function ProductVisual() {
  return (
    <div
      className="relative mx-auto w-full max-w-lg lg:max-w-none"
      aria-label="Product dashboard preview"
      role="img"
    >
      <div className="rounded-2xl border border-border bg-surface p-4 shadow-lg sm:p-5">
        <div className="mb-4 flex items-center justify-between">
          <div>
            <p className="text-xs font-medium text-muted">Content Engine</p>
            <p className="text-sm font-semibold text-navy">Acme Consulting</p>
          </div>
          <StatusBadge label="Active" color="#0d9488" />
        </div>

        <div className="grid grid-cols-2 gap-3">
          <MiniCard title="Brand profile" className="col-span-2">
            <div className="space-y-1.5">
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                <span className="text-xs text-charcoal">Tone: Confident, practical</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                <span className="text-xs text-charcoal">Audience: Founders, operators</span>
              </div>
            </div>
          </MiniCard>

          <MiniCard title="Strategy">
            <p className="text-xs text-charcoal">Q2 authority campaign</p>
            <p className="mt-1 text-[10px] text-muted">3 themes active</p>
          </MiniCard>

          <MiniCard title="Queue">
            <p className="text-2xl font-semibold text-navy">12</p>
            <p className="text-[10px] text-muted">drafts ready</p>
          </MiniCard>
        </div>

        <div className="mt-3 grid grid-cols-4 gap-2">
          {["LinkedIn", "X", "Meta", "Blog"].map((channel) => (
            <div
              key={channel}
              className="rounded-lg border border-border-subtle bg-surface-warm px-2 py-2 text-center"
            >
              <p className="text-[10px] font-medium text-navy">{channel}</p>
              <p className="text-[10px] text-muted">
                {channel === "LinkedIn" ? "4" : channel === "X" ? "3" : channel === "Meta" ? "2" : "3"}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-3 space-y-2">
          {[
            { title: "Why systems beat sporadic posting", status: "Approved", channel: "LinkedIn" },
            { title: "Thread: 5 content mistakes founders make", status: "Review", channel: "X" },
            { title: "How to build a content queue", status: "Scheduled", channel: "Blog" },
          ].map((item) => (
            <div
              key={item.title}
              className="flex items-center justify-between rounded-lg border border-border-subtle bg-background px-3 py-2"
            >
              <div className="min-w-0 flex-1">
                <p className="truncate text-xs font-medium text-navy">{item.title}</p>
                <p className="text-[10px] text-muted">{item.channel}</p>
              </div>
              <StatusBadge
                label={item.status}
                color={
                  item.status === "Approved"
                    ? "#0d9488"
                    : item.status === "Scheduled"
                      ? "#6366f1"
                      : "#f59e0b"
                }
              />
            </div>
          ))}
        </div>

        <div className="mt-3 flex items-center gap-3 rounded-lg bg-accent-light/50 px-3 py-2">
          <div className="flex-1">
            <p className="text-[10px] font-medium text-accent">Engagement signal</p>
            <div className="mt-1 flex items-end gap-0.5">
              {[40, 55, 45, 70, 60, 85, 75].map((h, i) => (
                <div
                  key={i}
                  className="w-3 rounded-sm bg-accent/60"
                  style={{ height: `${h * 0.3}px` }}
                />
              ))}
            </div>
          </div>
          <p className="text-xs font-semibold text-accent">+24%</p>
        </div>
      </div>
    </div>
  );
}
