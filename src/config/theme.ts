/**
 * CRISP Content Engine design tokens.
 * Sourced from app.crispdigital.io production CSS.
 * Update here when the app theme changes.
 */
export const cceTheme = {
  bg: "#0b0f12",
  surface: "#0f141a",
  edge: "#111821",
  text: "#e6eaf2",
  textDim: "#8190a6",
  textSoft: "#b5c0cf",
  primary: "#8ab4f8",
  accent: "#4ff0b8",
  danger: "#ff6d6d",
  cta: "#38bdf8",
  ctaForeground: "#0a0a0a",
  glowBlue: "#4895ef",
  emerald: "#34d399",
  emeraldSoft: "#6ee7b7",
  neutral800: "#262626",
  neutral900: "#171717",
  radiusCard: "16px",
  radiusButton: "9999px",
} as const;

/** Semantic marketing tokens mapped to app values */
export const marketingTheme = {
  pageBackground: cceTheme.bg,
  elevatedSectionBackground: cceTheme.surface,
  cardBackground: cceTheme.surface,
  mutedCardBackground: cceTheme.edge,
  primaryText: cceTheme.text,
  secondaryText: cceTheme.textSoft,
  border: cceTheme.edge,
  primaryAccent: cceTheme.accent,
  accentSoftBackground: "color-mix(in oklab, #4ff0b8 12%, transparent)",
  primaryButton: cceTheme.cta,
  secondaryButton: "transparent",
} as const;

/** Channel tints using app palette only (no platform brand hex) */
export const channelThemeClasses = {
  LinkedIn: {
    ring: "border-primary-border hover:border-primary/40",
    dot: "bg-primary",
    chip: "bg-primary-soft text-primary border border-primary-border",
  },
  X: {
    ring: "border-border-subtle hover:border-border-strong",
    dot: "bg-muted-foreground",
    chip: "bg-surface-muted text-muted-foreground border border-border-subtle",
  },
  Meta: {
    ring: "border-primary-border hover:border-cta/40",
    dot: "bg-cta",
    chip: "bg-primary-soft text-cta border border-primary-border",
  },
  Blog: {
    ring: "border-accent-border hover:border-accent/40",
    dot: "bg-accent",
    chip: "bg-accent-light text-accent border border-accent-border",
  },
} as const;

/** Capability layer accents using app palette only */
export const layerAccentClasses: Record<string, string> = {
  "01 Foundation": "border-accent/30 bg-gradient-to-br from-accent/10 via-surface to-surface",
  "02 Strategy": "border-primary-border bg-gradient-to-br from-primary/8 via-surface to-surface",
  "03 Production": "border-primary-border bg-gradient-to-br from-cta/8 via-surface to-surface",
  "04 Governance": "border-emerald-border bg-gradient-to-br from-emerald-soft via-surface to-surface",
  "05 Distribution": "border-primary-border bg-gradient-to-br from-primary/10 via-surface to-surface",
  "06 Creative": "border-border bg-gradient-to-br from-muted/10 via-surface to-surface",
  "07 Improvement": "border-border-subtle bg-gradient-to-br from-surface-muted via-surface to-surface",
};

export const cceThemeCss = `
  --cce-bg: ${cceTheme.bg};
  --cce-surface: ${cceTheme.surface};
  --cce-surface-muted: color-mix(in oklab, ${cceTheme.surface} 88%, ${cceTheme.text} 12%);
  --cce-surface-elevated: color-mix(in oklab, ${cceTheme.surface} 92%, ${cceTheme.text} 8%);
  --cce-edge: ${cceTheme.edge};
  --cce-text: ${cceTheme.text};
  --cce-text-dim: ${cceTheme.textDim};
  --cce-text-soft: ${cceTheme.textSoft};
  --cce-primary: ${cceTheme.primary};
  --cce-accent: ${cceTheme.accent};
  --cce-danger: ${cceTheme.danger};
  --cce-cta: ${cceTheme.cta};
  --cce-cta-fg: ${cceTheme.ctaForeground};
  --cce-primary-soft: color-mix(in oklab, ${cceTheme.primary} 15%, transparent);
  --cce-primary-border: color-mix(in oklab, ${cceTheme.primary} 30%, transparent);
  --cce-accent-soft: color-mix(in oklab, ${cceTheme.accent} 12%, transparent);
  --cce-accent-border: color-mix(in oklab, ${cceTheme.accent} 30%, transparent);
  --cce-emerald-soft: color-mix(in oklab, ${cceTheme.emerald} 15%, transparent);
  --cce-emerald-border: color-mix(in oklab, ${cceTheme.emerald} 30%, transparent);
  --cce-card-glass: color-mix(in oklab, ${cceTheme.text} 4%, transparent);
  --cce-card-glass-border: color-mix(in oklab, ${cceTheme.text} 8%, transparent);
  --cce-shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.35);
  --cce-shadow-md: 0 8px 24px -8px rgb(0 0 0 / 0.55);
  --cce-shadow-lg: 0 24px 48px -16px rgb(0 0 0 / 0.65);
  --cce-shadow-glow: 0 0 28px 2px color-mix(in oklab, ${cceTheme.glowBlue} 25%, transparent);
  --cce-shadow-cta: 0 10px 25px -5px color-mix(in oklab, ${cceTheme.cta} 25%, transparent);
` as const;
