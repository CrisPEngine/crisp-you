import { channels } from "@/content/marketing";
import { Section, SectionHeader } from "./Section";

const channelStyles: Record<string, { badge: string; accent: string }> = {
  LinkedIn: { badge: "bg-[#0A66C2]/10 text-[#0A66C2]", accent: "group-hover:border-[#0A66C2]/30" },
  X: { badge: "bg-navy/10 text-navy", accent: "group-hover:border-navy/30" },
  Meta: { badge: "bg-[#1877F2]/10 text-[#1877F2]", accent: "group-hover:border-[#1877F2]/30" },
  Blog: { badge: "bg-accent-light text-accent", accent: "group-hover:border-accent/30" },
};

export function ChannelCards() {
  return (
    <Section warm>
      <SectionHeader heading={channels.heading} body={channels.body} />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {channels.items.map((channel) => (
          <div
            key={channel.name}
            className={`group rounded-2xl border border-border bg-surface p-6 shadow-sm transition-colors ${channelStyles[channel.name].accent}`}
          >
            <span
              className={`inline-flex rounded-lg px-2.5 py-1 text-xs font-semibold ${channelStyles[channel.name].badge}`}
            >
              {channel.name}
            </span>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{channel.copy}</p>
          </div>
        ))}
      </div>
      <p className="mt-6 text-xs leading-relaxed text-muted">{channels.note}</p>
    </Section>
  );
}
