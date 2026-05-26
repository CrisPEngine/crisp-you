import { channels } from "@/content/marketing";
import { Section, SectionHeader } from "./Section";
import { ChannelChip, channelCardClass, type ChannelName } from "./cards/ChannelChip";
import { cn } from "@/lib/utils";

export function ChannelCards() {
  return (
    <Section tone="warm">
      <SectionHeader
        eyebrow="One strategy, four channels"
        heading={channels.heading}
        body={channels.body}
      />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
        {channels.items.map((channel) => (
          <article
            key={channel.name}
            className={cn(
              "glass-panel glass-panel-interactive channel-card relative flex flex-col",
              channelCardClass(channel.name as ChannelName),
            )}
          >
            <div className="channel-card-glow" aria-hidden="true" />
            <ChannelChip channel={channel.name as ChannelName} />
            <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
              {channel.copy}
            </p>
            <div className="mt-5 border-t border-border-subtle pt-4">
              <p className="text-[11px] text-muted">Publishing</p>
              <p className="mt-1 text-[12px] font-medium text-navy">{channel.publish}</p>
            </div>
          </article>
        ))}
      </div>
      <p className="mt-6 max-w-3xl text-xs leading-relaxed text-muted">{channels.note}</p>
    </Section>
  );
}
