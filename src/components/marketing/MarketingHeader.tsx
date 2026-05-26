"use client";

import Link from "next/link";
import { useState } from "react";
import { navLinks } from "@/content/marketing";
import { site } from "@/config/site";
import { cn } from "@/lib/utils";
import { Button } from "./Button";

export function MarketingHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border-subtle bg-background/60 backdrop-blur-md">
      <div className="mx-auto flex h-[4.25rem] max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex min-w-0 items-center gap-2.5">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary text-sm font-bold text-cta-foreground">
            C
          </span>
          <span className="hidden truncate text-sm font-semibold leading-tight text-navy sm:inline sm:text-[0.9375rem]">
            CRISP Content Engine
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Main">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-muted hover:text-navy transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href={site.loginUrl}
            className="rounded-full px-4 py-2 text-sm font-medium text-muted hover:text-navy transition-colors"
          >
            Login
          </a>
          <Button href={site.startUrl}>Start free</Button>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-lg p-2 text-muted hover:bg-surface md:hidden"
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            aria-hidden="true"
          >
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
          >
            Login
          </a>
          <div className="mt-2 px-3">
            <Button href={site.startUrl} className="w-full">
              Start free, no card required
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}
