"use client";

import { cn } from "@/lib/utils";

const flowNodes = [
  {
    id: "brand",
    label: "Brand profile",
    sub: "Tone, audience, offers",
    x: "8%",
    y: "12%",
    layer: "Brand memory",
  },
  {
    id: "strategy",
    label: "Strategy Engine",
    sub: "Campaign themes",
    x: "38%",
    y: "8%",
    layer: "Strategy",
  },
  {
    id: "queue",
    label: "Content Queue",
    sub: "12 drafts ready",
    x: "68%",
    y: "18%",
    layer: "Production",
  },
  {
    id: "review",
    label: "Review Board",
    sub: "3 awaiting approval",
    x: "42%",
    y: "42%",
    layer: "Governance",
  },
  {
    id: "linkedin",
    label: "LinkedIn draft",
    sub: "Authority post",
    x: "12%",
    y: "68%",
    layer: "Channel",
  },
  {
    id: "x",
    label: "X thread",
    sub: "Market commentary",
    x: "32%",
    y: "78%",
    layer: "Channel",
  },
  {
    id: "meta",
    label: "Meta caption",
    sub: "Visual-first",
    x: "58%",
    y: "72%",
    layer: "Channel",
  },
  {
    id: "blog",
    label: "Blog article",
    sub: "SEO depth",
    x: "78%",
    y: "62%",
    layer: "Channel",
  },
  {
    id: "learn",
    label: "Learning signal",
    sub: "Engagement +24%",
    x: "82%",
    y: "28%",
    layer: "Improvement",
  },
] as const;

export function HeroSystemMap() {
  return (
    <div
      className="relative mx-auto aspect-[4/3] w-full max-w-xl lg:max-w-none lg:aspect-[5/4]"
      aria-label="Content system map showing brand memory flowing through strategy, queue, review and channel outputs"
      role="img"
    >
      <div className="absolute inset-0 rounded-2xl border border-border bg-surface/80 shadow-lg backdrop-blur-sm">
        <svg
          className="absolute inset-0 h-full w-full text-border"
          aria-hidden="true"
          preserveAspectRatio="none"
        >
          <defs>
            <marker id="arrow" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
              <path d="M0,0 L6,3 L0,6 Z" fill="currentColor" className="text-accent/40" />
            </marker>
          </defs>
          <path
            d="M 80 60 Q 200 40 280 70"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className="text-accent/30"
            markerEnd="url(#arrow)"
          />
          <path
            d="M 320 80 L 400 100"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className="text-accent/30"
            markerEnd="url(#arrow)"
          />
          <path
            d="M 280 120 Q 240 180 220 200"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className="text-accent/30"
            markerEnd="url(#arrow)"
          />
          <path
            d="M 200 220 Q 120 280 100 320"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className="text-accent/25"
          />
          <path
            d="M 220 230 L 180 300"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className="text-accent/25"
          />
          <path
            d="M 240 230 L 320 290"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className="text-accent/25"
          />
          <path
            d="M 260 220 L 380 280"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className="text-accent/25"
          />
          <path
            d="M 420 110 L 460 140"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className="text-accent/30"
            markerEnd="url(#arrow)"
          />
        </svg>

        <div className="absolute left-4 top-4 rounded-lg border border-border-subtle bg-background/90 px-3 py-1.5">
          <p className="text-[10px] font-medium uppercase tracking-wider text-accent">
            Content System Map
          </p>
        </div>

        {flowNodes.map((node) => (
          <div
            key={node.id}
            className={cn(
              "system-node absolute w-[28%] min-w-[100px] max-w-[140px] rounded-xl border border-border bg-surface p-2.5 shadow-sm transition-transform duration-300 hover:-translate-y-0.5 hover:shadow-md sm:p-3",
              node.id === "queue" && "ring-1 ring-accent/20",
            )}
            style={{ left: node.x, top: node.y }}
          >
            <p className="text-[9px] font-medium uppercase tracking-wider text-muted sm:text-[10px]">
              {node.layer}
            </p>
            <p className="mt-0.5 text-xs font-semibold text-navy sm:text-sm">{node.label}</p>
            <p className="mt-0.5 text-[10px] text-muted-foreground">{node.sub}</p>
          </div>
        ))}

        <div className="absolute bottom-4 left-4 right-4 flex flex-wrap items-center gap-2 rounded-lg border border-border-subtle bg-surface-warm/90 px-3 py-2">
          {["Scheduled", "Review", "Approved"].map((status, i) => (
            <span
              key={status}
              className={cn(
                "rounded-full px-2 py-0.5 text-[10px] font-medium",
                i === 0 && "bg-indigo-50 text-indigo-700",
                i === 1 && "bg-amber-50 text-amber-700",
                i === 2 && "bg-accent-light text-accent",
              )}
            >
              {status}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
