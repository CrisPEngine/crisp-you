import { product } from "@/content/marketing";
import { Section, SectionHeader } from "./Section";

export function CapabilitySystem() {
  const [primary, ...rest] = product.capabilities;

  return (
    <Section id="product">
      <SectionHeader heading={product.heading} body={product.body} />

      <div className="grid gap-6 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <div className="sticky top-24 rounded-2xl border border-accent/20 bg-gradient-to-br from-surface to-accent-light/20 p-6 shadow-sm lg:p-8">
            <p className="text-xs font-medium uppercase tracking-wider text-accent">
              {primary.layer}
            </p>
            <h3 className="mt-2 text-2xl font-semibold text-navy">{primary.title}</h3>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              {primary.copy}
            </p>
            <div className="mt-8 space-y-3 rounded-xl border border-border bg-surface/80 p-4">
              {["Tone: Confident, practical", "Audience: Founders, operators", "Offers: 3 connected", "Rules: 12 active"].map(
                (row) => (
                  <div key={row} className="flex items-center gap-2 text-sm text-charcoal">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                    {row}
                  </div>
                ),
              )}
            </div>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:col-span-7">
          {rest.map((cap) => (
            <div
              key={cap.id}
              className="rounded-2xl border border-border bg-surface p-5 shadow-sm transition-transform hover:-translate-y-0.5 hover:shadow-md"
            >
              <p className="text-[10px] font-medium uppercase tracking-wider text-muted">
                {cap.layer}
              </p>
              <h3 className="mt-1.5 text-base font-semibold text-navy">{cap.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{cap.copy}</p>
            </div>
          ))}
        </div>
      </div>

      <ContentQueuePreview />
    </Section>
  );
}

function ContentQueuePreview() {
  const rows = [
    { title: "Why systems beat sporadic posting", channel: "LinkedIn", status: "Approved", objective: "Authority" },
    { title: "5 content mistakes founders make", channel: "X", status: "Review", objective: "Engagement" },
    { title: "How to build a content queue", channel: "Blog", status: "Scheduled", objective: "Traffic" },
    { title: "Campaign visual direction", channel: "Meta", status: "Draft", objective: "Awareness" },
  ];

  const statusStyles: Record<string, string> = {
    Approved: "bg-accent-light text-accent",
    Review: "bg-amber-50 text-amber-700",
    Scheduled: "bg-indigo-50 text-indigo-700",
    Draft: "bg-surface-warm text-charcoal",
  };

  return (
    <div className="mt-12 overflow-hidden rounded-2xl border border-border bg-surface shadow-sm">
      <div className="flex items-center justify-between border-b border-border bg-surface-warm px-5 py-3">
        <p className="text-sm font-semibold text-navy">Content queue preview</p>
        <p className="text-xs text-muted">4 items in flow</p>
      </div>
      <div className="divide-y divide-border-subtle">
        {rows.map((row) => (
          <div
            key={row.title}
            className="grid gap-2 px-5 py-3.5 sm:grid-cols-[1fr_auto_auto_auto] sm:items-center sm:gap-4"
          >
            <p className="text-sm font-medium text-navy">{row.title}</p>
            <span className="text-xs text-muted">{row.channel}</span>
            <span className="text-xs text-muted-foreground">{row.objective}</span>
            <span
              className={`inline-flex w-fit rounded-full px-2.5 py-0.5 text-[10px] font-medium ${statusStyles[row.status]}`}
            >
              {row.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
