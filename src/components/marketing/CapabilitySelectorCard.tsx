"use client";

import { forwardRef } from "react";
import type { Capability } from "@/content/capabilities";
import { layerAccentClasses } from "@/config/theme";
import { cn } from "@/lib/utils";

type CapabilitySelectorCardProps = {
  capability: Capability;
  isActive: boolean;
  tabId: string;
  onSelect: () => void;
  onKeyDown: (event: React.KeyboardEvent<HTMLButtonElement>) => void;
};

export const CapabilitySelectorCard = forwardRef<HTMLButtonElement, CapabilitySelectorCardProps>(
  function CapabilitySelectorCard(
    { capability, isActive, tabId, onSelect, onKeyDown },
    ref,
  ) {
    return (
      <button
        ref={ref}
        type="button"
        id={tabId}
        role="tab"
        aria-selected={isActive}
        aria-controls="capability-detail-panel"
        tabIndex={isActive ? 0 : -1}
        onClick={onSelect}
        onKeyDown={onKeyDown}
        className={cn(
          "capability-selector group relative flex w-full items-start gap-4 overflow-hidden rounded-2xl border bg-gradient-to-br p-5 text-left shadow-[var(--shadow-sm)] transition-[border-color,box-shadow,transform,background-color] duration-300 sm:p-6",
          layerAccentClasses[capability.accentKey],
          isActive
            ? "capability-selector-active border-accent/50 shadow-[var(--shadow-md),0_0_0_1px_color-mix(in_oklab,var(--accent)_35%,transparent),0_0_24px_-4px_color-mix(in_oklab,var(--accent)_18%,transparent)]"
            : "border-border-subtle hover:border-border-strong hover:shadow-[var(--shadow-md)]",
        )}
      >
        {isActive ? (
          <span
            className="absolute inset-y-3 left-0 w-0.5 rounded-full bg-accent"
            aria-hidden="true"
          />
        ) : null}

        <div
          className={cn(
            "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border text-[11px] font-semibold shadow-[var(--shadow-xs)] transition-colors duration-300",
            isActive
              ? "border-accent/40 bg-accent-soft text-accent"
              : "border-border bg-surface text-navy group-hover:border-border-strong",
          )}
        >
          {capability.number}
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <p
              className={cn(
                "text-[11px] font-semibold uppercase tracking-[0.12em]",
                isActive ? "text-accent" : "text-charcoal",
              )}
            >
              {capability.category}
            </p>
            {capability.soon ? <span className="chip chip-draft">Soon</span> : null}
          </div>
          <h3 className="mt-1 text-base font-semibold text-navy">{capability.title}</h3>
          <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
            {capability.shortDescription}
          </p>
        </div>
      </button>
    );
  },
);
