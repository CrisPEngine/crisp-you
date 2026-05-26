import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost" | "dark";
type ButtonSize = "md" | "lg";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  external?: boolean;
};

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-cta text-cta-foreground hover:brightness-110 shadow-[var(--shadow-cta)] focus-visible:ring-cta rounded-full",
  secondary:
    "bg-transparent text-foreground border border-border-strong hover:bg-surface ring-1 ring-border-subtle focus-visible:ring-primary rounded-full",
  ghost:
    "text-muted-foreground hover:text-foreground hover:bg-surface rounded-lg",
  dark:
    "bg-emerald-soft text-emerald border border-emerald-border hover:brightness-110 rounded-full",
};

const sizes: Record<ButtonSize, string> = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3 text-[15px] font-semibold",
};

function isExternalHref(href: string) {
  return href.startsWith("http") || href.startsWith("mailto:");
}

export function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  className,
  external,
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-1.5 font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
    variants[variant],
    sizes[size],
    className,
  );

  const isExternal = external ?? isExternalHref(href);

  if (isExternal) {
    return (
      <a
        href={href}
        className={classes}
        {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
