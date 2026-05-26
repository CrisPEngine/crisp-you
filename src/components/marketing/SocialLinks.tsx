import { socialLinks } from "@/config/site";
import { cn } from "@/lib/utils";

type SocialLinksProps = {
  className?: string;
};

export function SocialLinks({ className }: SocialLinksProps) {
  return (
    <div className={cn("flex flex-wrap gap-2", className)}>
      {socialLinks.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-md border border-border-subtle bg-background px-2.5 py-1 text-[11px] font-medium text-muted-foreground transition-colors hover:border-primary-border hover:text-navy"
        >
          {link.label}
        </a>
      ))}
    </div>
  );
}
