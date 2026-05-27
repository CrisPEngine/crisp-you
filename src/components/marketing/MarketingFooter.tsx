import Link from "next/link";
import { footerColumns } from "@/content/navigation";
import { siteConfig } from "@/content/marketing";
import { site } from "@/config/site";
import { BrandLogo } from "./BrandLogo";
import { SocialLinks } from "./SocialLinks";

const footer = {
  tagline:
    "CRISP Content Engine is a structured content system for founders, consultants, agencies and lean teams.",
  legalLine:
    "CRISP Content Engine is created and developed by CrisP Digital trading as ABL International FZE.",
};

export function MarketingFooter() {
  return (
    <footer className="border-t border-border-subtle bg-surface">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div className="sm:col-span-2 lg:col-span-1">
            <Link
              href="/"
              className="inline-flex focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
            >
              <BrandLogo variant="wordmark" className="h-9 w-auto sm:h-10" />
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">{footer.tagline}</p>
            <SocialLinks className="mt-5" />
          </div>

          {footerColumns.map((column) => (
            <div key={column.title}>
              <h3 className="text-[11px] font-semibold uppercase tracking-[0.12em] text-muted">
                {column.title}
              </h3>
              <ul className="mt-4 space-y-1">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="inline-flex min-h-11 items-center text-sm text-muted-foreground transition-colors hover:text-navy"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 grid gap-4 border-t border-border-subtle pt-8 sm:flex sm:items-start sm:justify-between">
          <div className="space-y-2">
            <p className="max-w-xl text-sm leading-relaxed text-muted">{footer.legalLine}</p>
            <p className="text-sm text-muted/80">
              &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
            </p>
          </div>
          <a
            href={site.contactUrl}
            className="inline-flex min-h-11 items-center text-sm font-medium text-primary transition-colors hover:text-accent"
          >
            {site.contactEmail}
          </a>
        </div>
      </div>
    </footer>
  );
}
