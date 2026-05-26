import { cn } from "@/lib/utils";

export type ChannelName = "LinkedIn" | "X" | "Meta" | "Blog";

const channelClass: Record<ChannelName, string> = {
  LinkedIn: "channel-chip-linkedin",
  X: "channel-chip-x",
  Meta: "channel-chip-meta",
  Blog: "channel-chip-blog",
};

type ChannelChipProps = {
  channel: ChannelName;
  className?: string;
};

export function ChannelChip({ channel, className }: ChannelChipProps) {
  return (
    <span className={cn("channel-chip", channelClass[channel], className)}>
      <span className="channel-chip-dot" aria-hidden="true" />
      {channel}
    </span>
  );
}

export function channelCardClass(channel: ChannelName): string {
  const map: Record<ChannelName, string> = {
    LinkedIn: "channel-card-linkedin",
    X: "channel-card-x",
    Meta: "channel-card-meta",
    Blog: "channel-card-blog",
  };
  return map[channel];
}
