import Link from "next/link";
import { footer, siteConfig } from "@/content/marketing";

export function MarketingFooter() {
  return (
    <footer className="border-t border-border bg-navy text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white text-xs font-bold text-navy">
                C
              </span>
              <span className="text-sm font-semibold">CRISP Content Engine</span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-300">
              {siteConfig.tagline}
            </p>
          </div>

          {footer.columns.map((column) => (
            <div key={column.title}>
              <h3 className="text-sm font-semibold text-white">{column.title}</h3>
              <ul className="mt-4 space-y-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-slate-300 transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-slate-700 pt-8">
          <p className="text-sm text-slate-400">{footer.note}</p>
          <p className="mt-2 text-xs text-slate-500">
            &copy; {new Date().getFullYear()} CRISP Content Engine. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
