"use client";

import { useState } from "react";
import { faq as homepageFaq } from "@/content/marketing";
import { cn } from "@/lib/utils";

type FaqItem = { question: string; answer: string };

type FAQSectionProps = {
  heading?: string;
  items?: readonly FaqItem[];
  align?: "left" | "center";
  className?: string;
};

export function FAQSection({
  heading,
  items,
  align = "center",
  className,
}: FAQSectionProps) {
  const resolvedHeading = heading ?? homepageFaq.heading;
  const resolvedItems = items ?? homepageFaq.items;
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className={cn("py-16 sm:py-20 lg:py-24 bg-surface", className)}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className={cn("mb-12 max-w-3xl", align === "center" && "mx-auto text-center")}>
          <h2 className="text-3xl font-semibold tracking-tight text-navy sm:text-4xl">{resolvedHeading}</h2>
        </div>
        <div className="mx-auto max-w-3xl space-y-2.5">
          {resolvedItems.map((item, i) => {
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
      </div>
    </section>
  );
}
