"use client";

import { useCallback, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type TiltSurfaceProps = {
  children: React.ReactNode;
  className?: string;
  maxTilt?: number;
  "aria-label"?: string;
};

function prefersReducedMotion() {
  if (typeof window === "undefined") return true;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function TiltSurface({
  children,
  className,
  maxTilt = 3.5,
  "aria-label": ariaLabel,
}: TiltSurfaceProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [style, setStyle] = useState<React.CSSProperties>({});

  const handleMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (prefersReducedMotion()) return;
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      setStyle({
        transform: `perspective(900px) rotateX(${(-y * maxTilt).toFixed(2)}deg) rotateY(${(x * maxTilt).toFixed(2)}deg) translateY(-6px) scale(1.01)`,
      });
    },
    [maxTilt],
  );

  const handleLeave = useCallback(() => {
    setStyle({});
  }, []);

  return (
    <div
      ref={ref}
      role="article"
      aria-label={ariaLabel}
      className={cn("glass-panel glass-panel-interactive", className)}
      style={style}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    >
      {children}
    </div>
  );
}
