import { ideaBranch } from "@/content/marketing";
import { SectionHeader } from "./Section";
import { CoreIdeaCard } from "./cards/CoreIdeaCard";
import { ChannelOutputCard } from "./cards/ChannelOutputCard";
import type { ChannelName } from "./cards/ChannelChip";
import type { ContentStatus } from "./cards/StatusChip";

function BranchConnectors() {
  return (
    <svg
      className="h-full w-full"
      viewBox="0 0 1000 48"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path className="connector-line" d="M 500 0 L 500 14" vectorEffect="non-scaling-stroke" />
      <path className="connector-line" d="M 125 14 L 875 14" vectorEffect="non-scaling-stroke" />
      <path className="connector-line" d="M 125 14 L 125 48" vectorEffect="non-scaling-stroke" />
      <path className="connector-line" d="M 375 14 L 375 48" vectorEffect="non-scaling-stroke" />
      <path className="connector-line" d="M 625 14 L 625 48" vectorEffect="non-scaling-stroke" />
      <path className="connector-line" d="M 875 14 L 875 48" vectorEffect="non-scaling-stroke" />
      <circle className="connector-hub-dot" cx="500" cy="14" r="3" />
    </svg>
  );
}

export function IdeaBranchSection() {
  return (
    <section
      id="idea-branch"
      className="dark-orbit-section py-16 sm:py-20 lg:py-24"
      aria-labelledby="idea-branch-heading"
    >
      <div className="grid-bg-fine pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="orbit-orb orbit-orb-primary" aria-hidden="true" />
      <div className="orbit-orb orbit-orb-accent" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="One idea, full rhythm"
          heading={ideaBranch.heading}
          headingId="idea-branch-heading"
          body={ideaBranch.body}
        />

        <p className="-mt-6 mb-10 max-w-2xl text-sm font-medium text-charcoal sm:text-[15px]">
          {ideaBranch.bridgeLabel}
        </p>

        <div className="idea-branch-stage relative">
          <div className="relative z-10 mx-auto max-w-2xl">
            <CoreIdeaCard label={ideaBranch.coreIdeaLabel} idea={ideaBranch.coreIdea} />
          </div>

          <div
            className="pointer-events-none relative z-0 mx-auto hidden h-12 max-w-6xl lg:block"
            aria-hidden="true"
          >
            <BranchConnectors />
          </div>

          <div className="my-6 flex justify-center lg:hidden" aria-hidden="true">
            <svg
              className="h-8 w-8 text-accent/50"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
            </svg>
          </div>

          <ul className="relative z-10 mt-2 grid list-none gap-4 sm:grid-cols-2 sm:gap-5 lg:mt-0 lg:grid-cols-4 lg:gap-5">
            {ideaBranch.outputs.map((output) => (
              <li key={output.channel} className="flex">
                <ChannelOutputCard
                  channel={output.channel as ChannelName}
                  format={output.format}
                  preview={output.preview}
                  status={output.status as ContentStatus}
                  publish={output.publish}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
