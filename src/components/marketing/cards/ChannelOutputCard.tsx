"use client";

import { cn } from "@/lib/utils";
import { TiltSurface } from "./TiltSurface";
import { ActionChip } from "./ActionChip";
import { ChannelChip, channelCardClass, type ChannelName } from "./ChannelChip";
import { StatusChip, type ContentStatus } from "./StatusChip";

export type ChannelOutputCardProps = {
  channel: ChannelName;
  format: string;
  preview: string;
  status: ContentStatus;
  publish: "Auto-publish" | "Export";
  interactive?: boolean;
};

export function ChannelOutputCard({
  channel,
  format,
  preview,
  status,
  publish,
  interactive = true,
}: ChannelOutputCardProps) {
  const cardClass = cn("channel-card relative h-full w-full", channelCardClass(channel));

  const content = (
    <>
      <div className="channel-card-glow" aria-hidden="true" />
      <div className="flex items-start justify-between gap-2">
        <ChannelChip channel={channel} />
        <StatusChip label={status} />
      </div>
      <h3 className="mt-4 text-sm font-semibold leading-snug text-navy">{format}</h3>
      <p className="mt-2 flex-1 text-[13px] leading-relaxed text-muted-foreground">
        {preview}
      </p>
      <footer className="mt-5 flex items-center justify-between gap-2 border-t border-border-subtle pt-3.5">
        <ActionChip label={publish} />
        <span className="text-[10px] text-muted">From core idea</span>
      </footer>
    </>
  );

  if (!interactive) {
    return (
      <article
        className={cn("glass-panel", cardClass)}
        aria-label={`${channel} channel output`}
      >
        {content}
      </article>
    );
  }

  return (
    <TiltSurface
      className={cardClass}
      aria-label={`${channel} channel output: ${format}`}
    >
      {content}
    </TiltSurface>
  );
}
