"use client";

import { useState } from "react";
import { faq } from "@/content/marketing";
import { Section, SectionHeader } from "./Section";
import { cn } from "@/lib/utils";

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <Section tone="warm">
      <SectionHeader
        eyebrow="FAQ"
        heading={faq.heading}
        align="center"
        className="mx-auto"
      />
      <div className="mx-auto max-w-3xl space-y-2.5">
        {faq.items.map((item, i) => {
          const isOpen = openIndex === i;
          const panelId = `faq-panel-${i}`;
          const buttonId = `faq-button-${i}`;
          return (
            <div
              key={item.question}
              className={cn(
                "glass-panel overflow-hidden transition-all",
                isOpen ? "border-accent/30" : "",
              )}
            >
              <h3>
                <button
                  id={buttonId}
                  type="button"
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                >
                  <span className="text-[15px] font-medium text-navy">{item.question}</span>
                  <span
                    className={cn(
                      "flex h-7 w-7 shrink-0 items-center justify-center rounded-full border transition-all",
                      isOpen
                        ? "border-accent-border bg-accent-soft text-accent"
                        : "border-border bg-surface-muted text-charcoal",
                    )}
                    aria-hidden="true"
                  >
                    <svg
                      className={cn("h-3.5 w-3.5 transition-transform", isOpen && "rotate-45")}
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2.5}
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                  </span>
                </button>
              </h3>
              <div
                id={panelId}
                role="region"
                aria-labelledby={buttonId}
                className={cn(
                  "grid transition-all",
                  isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
                )}
              >
                <div className="overflow-hidden">
                  <p className="px-5 pb-5 text-sm leading-relaxed text-muted-foreground">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
