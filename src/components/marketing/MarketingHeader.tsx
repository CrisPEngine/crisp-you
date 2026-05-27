"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";
import { navLinks, productLinks } from "@/content/navigation";
import { site } from "@/config/site";
import { cn } from "@/lib/utils";
import { trackEvent } from "@/lib/analytics";
import { Button } from "./Button";
import { BrandLogo } from "./BrandLogo";
import { MobileNavigation } from "./MobileNavigation";

export function MarketingHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productOpen, setProductOpen] = useState(false);
  const productMenuRef = useRef<HTMLDivElement>(null);
  const productMenuId = useId();
  const mobileMenuId = useId();

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
    <>
      <header className="sticky top-0 z-50 border-b border-border-subtle bg-background/90 backdrop-blur-md">
        <div className="mx-auto flex h-14 max-w-7xl items-center justify-between gap-3 px-4 sm:h-16 sm:gap-4 sm:px-6 xl:h-auto xl:min-h-[5.5rem] xl:px-8 xl:py-3">
          <Link
            href="/"
            className="flex shrink-0 items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            <BrandLogo
              variant="wordmark"
              priority
              className="h-7 w-auto sm:h-8 xl:hidden"
            />
            <BrandLogo
              variant="logo"
              priority
              className="hidden h-20 w-auto xl:block 2xl:h-24"
            />
          </Link>

          <nav className="hidden items-center gap-5 xl:flex" aria-label="Main">
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

          <div className="flex items-center gap-2 sm:gap-3">
            <div className="hidden items-center gap-3 xl:flex">
              <a
                href={site.loginUrl}
                className="rounded-full px-4 py-2 text-sm font-medium text-muted transition-colors hover:text-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                onClick={() => trackEvent("cce_login_click")}
              >
                Login
              </a>
              <Button href={site.startUrl} event="cce_start_free_click">
                Start free
              </Button>
            </div>

            <Button
              href={site.startUrl}
              size="md"
              event="cce_start_free_click"
              className="hidden min-[375px]:inline-flex xl:hidden"
            >
              Start free
            </Button>

            <button
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-border-subtle bg-surface text-muted-foreground transition-colors hover:bg-surface-muted hover:text-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background xl:hidden"
              aria-expanded={mobileOpen}
              aria-controls={mobileMenuId}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              onClick={() => setMobileOpen((open) => !open)}
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.75} stroke="currentColor" aria-hidden="true">
                {mobileOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </header>

      <MobileNavigation
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        menuId={mobileMenuId}
      />
    </>
  );
}
