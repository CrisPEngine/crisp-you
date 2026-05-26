import Link from "next/link";
import { footer, siteConfig } from "@/content/marketing";
import { site } from "@/config/site";

export function MarketingFooter() {
  return (
    <footer className="border-t border-border-subtle bg-surface">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Link href="/" className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-sm font-bold text-cta-foreground">
                C
              </span>
              <span className="text-sm font-semibold text-navy">CRISP Content Engine</span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
              {footer.tagline}
            </p>
            <div className="mt-5 flex flex-wrap gap-1.5">
              {["LinkedIn", "X", "Meta", "Blog"].map((ch) => (
                <span
                  key={ch}
                  className="rounded-md border border-border-subtle bg-background px-2 py-0.5 text-[11px] font-medium text-muted-foreground"
                >
                  {ch}
                </span>
              ))}
            </div>
          </div>

          {footer.columns.map((column) => (
            <div key={column.title}>
              <h3 className="text-[11px] font-semibold uppercase tracking-[0.12em] text-muted">
                {column.title}
              </h3>
              <ul className="mt-4 space-y-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-navy"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 grid gap-3 border-t border-border-subtle pt-8 sm:flex sm:items-center sm:justify-between">
          <div className="space-y-1">
            <p className="text-sm text-muted">{footer.legalLine}</p>
            <p className="text-xs text-muted/80">
              &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
            </p>
          </div>
          <a
            href={site.contactUrl}
            className="text-sm font-medium text-primary hover:text-accent transition-colors"
          >
            {site.contactEmail}
          </a>
        </div>
      </div>
    </footer>
  );
}
