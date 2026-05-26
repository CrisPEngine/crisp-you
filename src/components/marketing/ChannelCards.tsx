import { channels } from "@/content/marketing";
import { Section, SectionHeader } from "./Section";

const channelColors: Record<string, string> = {
  LinkedIn: "bg-[#0A66C2]/10 text-[#0A66C2]",
  X: "bg-navy/10 text-navy",
  Meta: "bg-[#1877F2]/10 text-[#1877F2]",
  Blog: "bg-accent-light text-accent",
};

export function ChannelCards() {
  return (
    <Section warm>
      <SectionHeader heading={channels.heading} body={channels.body} />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {channels.items.map((channel) => (
          <div
            key={channel.name}
            className="rounded-2xl border border-border bg-surface p-6 shadow-sm"
          >
            <span
              className={`inline-flex rounded-lg px-2.5 py-1 text-xs font-semibold ${channelColors[channel.name]}`}
            >
              {channel.name}
            </span>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              {channel.copy}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
