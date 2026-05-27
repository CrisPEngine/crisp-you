"use client";

import { useCallback, useRef, useState } from "react";
import { capabilities } from "@/content/capabilities";
import { CapabilityDetailPanel } from "./CapabilityDetailPanel";
import { CapabilitySelectorCard } from "./CapabilitySelectorCard";

export function InteractiveCapabilitySystem() {
  const [activeIndex, setActiveIndex] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const active = capabilities[activeIndex];

  const handleTabKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLButtonElement>, index: number) => {
      let nextIndex: number | null = null;

      switch (event.key) {
        case "ArrowDown":
        case "ArrowRight":
          nextIndex = (index + 1) % capabilities.length;
          break;
        case "ArrowUp":
        case "ArrowLeft":
          nextIndex = (index - 1 + capabilities.length) % capabilities.length;
          break;
        case "Home":
          nextIndex = 0;
          break;
        case "End":
          nextIndex = capabilities.length - 1;
          break;
        default:
          return;
      }

      event.preventDefault();
      setActiveIndex(nextIndex);
      tabRefs.current[nextIndex]?.focus();
    },
    [],
  );

  return (
    <div className="grid gap-6 lg:grid-cols-12">
      <div className="lg:col-span-5">
        <CapabilityDetailPanel
          capability={active}
          panelId="capability-detail-panel"
          labelledBy={`capability-tab-${active.id}`}
          animateKey={active.id}
        />
      </div>

      <div
        className="relative lg:col-span-7"
        role="tablist"
        aria-label="Product capabilities"
      >
        <div
          className="pointer-events-none absolute bottom-6 left-[1.65rem] top-6 hidden w-px lg:block"
          aria-hidden="true"
        >
          <span className="absolute inset-0 bg-accent/10" />
          <span
            className="absolute left-0 top-0 w-full bg-accent/35 transition-[height] duration-500 ease-out"
            style={{ height: `${((activeIndex + 1) / capabilities.length) * 100}%` }}
          />
        </div>

        <div className="space-y-3">
          {capabilities.map((capability, index) => (
            <div
              key={capability.id}
              className="lg:transition-[margin] lg:duration-300"
              style={{ marginLeft: index === 0 ? 0 : `${Math.min(index, 5) * 6}px` }}
            >
              <CapabilitySelectorCard
                ref={(node) => {
                  tabRefs.current[index] = node;
                }}
                capability={capability}
                isActive={index === activeIndex}
                tabId={`capability-tab-${capability.id}`}
                onSelect={() => setActiveIndex(index)}
                onKeyDown={(event) => handleTabKeyDown(event, index)}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
