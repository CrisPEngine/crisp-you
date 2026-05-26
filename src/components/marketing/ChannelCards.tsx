import { channels } from "@/content/marketing";
import { Section, SectionHeader } from "./Section";
import { cn } from "@/lib/utils";

const channelTheme: Record<
  string,
  { ring: string; chip: string; mark: string }
> = {
  LinkedIn: {
    ring: "hover:border-[#0a66c2]/30",
    chip: "bg-[#0a66c2]/10 text-[#0a66c2]",
    mark: "bg-[#0a66c2]",
  },
  X: {
    ring: "hover:border-navy/30",
    chip: "bg-navy/10 text-navy",
    mark: "bg-navy",
  },
  Meta: {
    ring: "hover:border-[#1877f2]/30",
    chip: "bg-[#1877f2]/10 text-[#1877f2]",
    mark: "bg-[#1877f2]",
  },
  Blog: {
    ring: "hover:border-accent/40",
    chip: "bg-accent-light text-accent",
    mark: "bg-accent",
  },
};

export function ChannelCards() {
  return (
    <Section tone="warm">
      <SectionHeader
        eyebrow="One strategy, four channels"
        heading={channels.heading}
        body={channels.body}
      />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {channels.items.map((channel) => {
          const theme = channelTheme[channel.name];
          return (
            <article
              key={channel.name}
              className={cn(
                "flex flex-col rounded-2xl border border-border bg-surface p-6 shadow-[var(--shadow-sm)] transition-colors",
                theme.ring,
              )}
            >
              <div className="flex items-center justify-between">
                <span
                  className={cn(
                    "inline-flex items-center gap-1.5 rounded-md px-2 py-0.5 text-[11px] font-semibold",
                    theme.chip,
                  )}
                >
                  <span className={cn("h-1.5 w-1.5 rounded-full", theme.mark)} />
                  {channel.name}
                </span>
              </div>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                {channel.copy}
              </p>
              <div className="mt-5 border-t border-border-subtle pt-4">
                <p className="text-[11px] text-muted">Publishing</p>
                <p className="mt-1 text-[12px] font-medium text-navy">{channel.publish}</p>
              </div>
            </article>
          );
        })}
      </div>
      <p className="mt-6 max-w-3xl text-xs leading-relaxed text-muted">{channels.note}</p>
    </Section>
  );
}
