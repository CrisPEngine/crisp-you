import Link from "next/link";

type RelatedLinksProps = {
  heading?: string;
  links: readonly { label: string; href: string }[];
};

export function RelatedLinks({ heading = "Related pages", links }: RelatedLinksProps) {
  if (links.length === 0) return null;

  return (
    <section className="border-t border-border-subtle bg-surface py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-lg font-semibold text-navy">{heading}</h2>
        <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="glass-panel glass-panel-interactive block p-4 text-sm font-medium text-charcoal hover:text-navy"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
