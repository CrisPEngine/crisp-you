"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";
import { navLinks, productLinks } from "@/content/navigation";
import { site } from "@/config/site";
import { cn } from "@/lib/utils";
import { trackEvent } from "@/lib/analytics";
import { Button } from "./Button";
import { BrandLogo } from "./BrandLogo";

export function MarketingHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productOpen, setProductOpen] = useState(false);
  const productMenuRef = useRef<HTMLDivElement>(null);
  const productMenuId = useId();

  useEffect(() => {
    if (!productOpen) return;

    function handlePointerDown(event: MouseEvent | TouchEvent) {
      const target = event.target;
      if (!(target instanceof Node)) return;
      if (!productMenuRef.current?.contains(target)) {
        setProductOpen(false);
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setProductOpen(false);
      }
    }

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("touchstart", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("touchstart", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [productOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-border-subtle bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 sm:py-4 lg:px-8">
        <Link
          href="/"
          className="flex shrink-0 items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          <BrandLogo variant="logo" priority className="h-14 w-auto sm:h-20 lg:h-[120px]" />
        </Link>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Main">
          <div
            ref={productMenuRef}
            className="relative"
            onMouseEnter={() => setProductOpen(true)}
            onMouseLeave={() => setProductOpen(false)}
          >
            <button
              type="button"
              className={cn(
                "inline-flex items-center gap-1 rounded-md px-1 py-1 text-sm transition-colors hover:text-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                productOpen ? "text-navy" : "text-muted",
              )}
              aria-expanded={productOpen}
              aria-haspopup="true"
              aria-controls={productMenuId}
              onClick={() => setProductOpen((open) => !open)}
            >
              Product
              <svg
                className={cn("h-3.5 w-3.5 transition-transform", productOpen && "rotate-180")}
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
            </button>
            <div
              id={productMenuId}
              className={cn(
                "absolute left-0 top-full z-50 w-52 pt-2",
                productOpen ? "pointer-events-auto" : "pointer-events-none",
              )}
            >
              <div
                className={cn(
                  "rounded-xl border border-border-subtle bg-surface p-2 shadow-[var(--shadow-md)] transition-[opacity,transform] duration-150",
                  productOpen
                    ? "visible translate-y-0 opacity-100"
                    : "invisible -translate-y-1 opacity-0",
                )}
                role="menu"
                aria-hidden={!productOpen}
              >
                {productLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    role="menuitem"
                    className="block rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-surface-muted hover:text-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                    onClick={() => setProductOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-muted transition-colors hover:text-navy"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href={site.loginUrl}
            className="rounded-full px-4 py-2 text-sm font-medium text-muted transition-colors hover:text-navy"
            onClick={() => trackEvent("cce_login_click")}
          >
            Login
          </a>
          <Button href={site.startUrl} event="cce_start_free_click">
            Start free
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-lg p-2 text-muted hover:bg-surface md:hidden"
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            )}
          </svg>
        </button>
      </div>

      <div
        id="mobile-nav"
        className={cn(
          "border-t border-border-subtle bg-background/95 md:hidden",
          mobileOpen ? "block" : "hidden",
        )}
      >
        <nav className="flex flex-col gap-1 px-4 py-4" aria-label="Mobile">
          <p className="px-3 pt-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-muted">Product</p>
          {productLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-lg px-3 py-2.5 text-sm text-muted hover:bg-surface hover:text-navy"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-lg px-3 py-2.5 text-sm text-muted hover:bg-surface hover:text-navy"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <a
            href={site.loginUrl}
            className="rounded-lg px-3 py-2.5 text-sm text-muted hover:bg-surface"
            onClick={() => trackEvent("cce_login_click")}
          >
            Login
          </a>
          <div className="mt-2 px-3">
            <Button href={site.startUrl} className="w-full" event="cce_start_free_click">
              Start free, no card required
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}
