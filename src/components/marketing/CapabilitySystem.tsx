import { product } from "@/content/marketing";
import { layerAccentClasses } from "@/config/theme";
import { Section, SectionHeader } from "./Section";
import { cn } from "@/lib/utils";

export function CapabilitySystem() {
  const [primary, ...rest] = product.layers;

  return (
    <Section id="product" tone="deep">
      <SectionHeader
        eyebrow="The system stack"
        heading={product.heading}
        body={product.body}
      />

      <div className="grid gap-6 lg:grid-cols-12">
        <aside className="lg:col-span-5">
          <div className="cce-panel-highlight sticky top-24 overflow-hidden rounded-2xl p-6 shadow-[var(--shadow-md)] lg:p-8">
            <div
              className="grid-bg-fine pointer-events-none absolute inset-0 opacity-40"
              aria-hidden="true"
            />
            <div className="relative">
              <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-accent">
                {primary.layer}
              </p>
              <h3 className="mt-2 text-2xl font-semibold text-navy">{primary.title}</h3>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                {primary.copy}
              </p>

              <div className="mt-6 space-y-2">
                {[
                  { k: "Tone", v: "Confident, practical" },
                  { k: "Audience", v: "Founders, operators" },
                  { k: "Offers", v: "3 connected" },
                  { k: "Exclusions", v: "Set" },
                ].map((row) => (
                  <div
                    key={row.k}
                    className="flex items-center justify-between rounded-lg border border-border-subtle bg-surface px-3 py-2"
                  >
                    <span className="text-[11px] text-muted">{row.k}</span>
                    <span className="text-[11px] font-medium text-navy">{row.v}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex items-center gap-2 rounded-lg border border-accent-border bg-accent-soft px-3 py-2">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
                <p className="text-[11px] font-medium text-accent">
                  Brand profile ready
                </p>
              </div>
            </div>
          </div>
        </aside>

        <div className="space-y-3 lg:col-span-7">
          {rest.map((layer, i) => (
            <article
              key={layer.id}
              className={cn(
                "relative flex items-start gap-4 overflow-hidden rounded-2xl border bg-gradient-to-br p-5 shadow-[var(--shadow-sm)] transition-all hover:shadow-[var(--shadow-md)] sm:p-6",
                layerAccentClasses[layer.layer],
              )}
              style={{ marginLeft: `${i * 6}px` }}
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-border bg-surface text-[11px] font-semibold text-navy shadow-[var(--shadow-xs)]">
                {layer.layer.split(" ")[0]}
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-charcoal">
                    {layer.layer.split(" ").slice(1).join(" ")}
                  </p>
                  {"soon" in layer && layer.soon ? (
                    <span className="chip chip-draft">Soon</span>
                  ) : null}
                </div>
                <h3 className="mt-1 text-base font-semibold text-navy">{layer.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  {layer.copy}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
}
