"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { mobileNavGroups } from "@/content/navigation";
import { site, cta } from "@/config/site";
import { cn } from "@/lib/utils";
import { trackEvent } from "@/lib/analytics";
import { Button } from "./Button";

type MobileNavigationProps = {
  open: boolean;
  onClose: () => void;
  menuId: string;
};

export function MobileNavigation({ open, onClose, menuId }: MobileNavigationProps) {
  const panelRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose();
      }
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, onClose]);

  return (
    <div
      id={menuId}
      className={cn(
        "fixed inset-0 z-[60] xl:hidden",
        open ? "pointer-events-auto" : "pointer-events-none",
      )}
      aria-hidden={!open}
    >
      <button
        type="button"
        className={cn(
          "absolute inset-0 bg-background/80 backdrop-blur-sm transition-opacity duration-200",
          open ? "opacity-100" : "opacity-0",
        )}
        aria-label="Close menu"
        tabIndex={open ? 0 : -1}
        onClick={onClose}
      />

      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label="Site navigation"
        className={cn(
          "absolute inset-x-0 top-0 flex max-h-[100dvh] flex-col border-b border-border-subtle bg-background-elevated/95 shadow-[var(--shadow-lg)] backdrop-blur-md transition-[opacity,transform] duration-200 ease-out",
          open ? "translate-y-0 opacity-100" : "-translate-y-2 opacity-0",
        )}
      >
        <div className="flex items-center justify-between border-b border-border-subtle px-4 py-3">
          <p className="text-sm font-semibold text-navy">Menu</p>
          <button
            ref={closeButtonRef}
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-border-subtle bg-surface text-muted-foreground transition-colors hover:bg-surface-muted hover:text-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background-elevated"
            aria-label="Close menu"
            onClick={onClose}
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.75} stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <nav
          className="flex-1 overflow-y-auto overscroll-contain px-4 py-5"
          aria-label="Mobile"
        >
          <div className="space-y-6">
            {mobileNavGroups.map((group) => (
              <div
                key={group.title}
                className="rounded-2xl border border-border-subtle bg-surface/60 p-3"
              >
                <p className="px-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-accent">
                  {group.title}
                </p>
                <ul className="mt-2 space-y-0.5">
                  {group.links.map((link) => (
                    <li key={link.href + link.label}>
                      {"external" in link && link.external ? (
                        <a
                          href={link.href}
                          className="flex min-h-11 items-center rounded-xl px-3 text-sm font-medium text-muted-foreground transition-colors hover:bg-surface-muted hover:text-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                          onClick={() => {
                            trackEvent("cce_login_click");
                            onClose();
                          }}
                        >
                          {link.label}
                        </a>
                      ) : (
                        <Link
                          href={link.href}
                          className="flex min-h-11 items-center rounded-xl px-3 text-sm font-medium text-muted-foreground transition-colors hover:bg-surface-muted hover:text-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                          onClick={onClose}
                        >
                          {link.label}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-6 space-y-3 border-t border-border-subtle pt-6">
            <Button href={site.startUrl} className="w-full" size="lg" event="cce_start_free_click">
              {cta.primary}
            </Button>
            <a
              href={site.loginUrl}
              className="flex min-h-11 w-full items-center justify-center rounded-full border border-border-strong px-5 text-sm font-medium text-muted-foreground transition-colors hover:bg-surface hover:text-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              onClick={() => {
                trackEvent("cce_login_click");
                onClose();
              }}
            >
              Login
            </a>
          </div>
        </nav>
      </div>
    </div>
  );
}
