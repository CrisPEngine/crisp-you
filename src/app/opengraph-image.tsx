import { ImageResponse } from "next/og";
import { cceTheme } from "@/config/theme";

export const runtime = "edge";
export const alt = "CRISP Content Engine";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background: cceTheme.bg,
          backgroundImage:
            "radial-gradient(60% 40% at 80% 10%, rgba(72,149,239,0.15) 0%, transparent 100%), radial-gradient(40% 30% at 10% 90%, rgba(79,240,184,0.12) 0%, transparent 100%), linear-gradient(to right, rgba(230,234,242,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(230,234,242,0.04) 1px, transparent 1px)",
          backgroundSize: "auto, auto, 56px 56px, 56px 56px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
          <div
            style={{
              width: 48,
              height: 48,
              borderRadius: 12,
              background: cceTheme.primary,
              color: cceTheme.ctaForeground,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 24,
              fontWeight: 700,
            }}
          >
            C
          </div>
          <span style={{ fontSize: 26, fontWeight: 600, color: cceTheme.text }}>
            CRISP Content Engine
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", maxWidth: 960 }}>
          <span
            style={{
              fontSize: 16,
              fontWeight: 600,
              color: cceTheme.accent,
              letterSpacing: 2,
              textTransform: "uppercase",
            }}
          >
            Consistent visibility, without the weekly restart
          </span>
          <p
            style={{
              fontSize: 64,
              fontWeight: 600,
              color: cceTheme.text,
              lineHeight: 1.05,
              margin: "20px 0 0 0",
            }}
          >
            Build consistent visibility without burning out
          </p>
          <p
            style={{
              fontSize: 24,
              color: cceTheme.textSoft,
              marginTop: 22,
              lineHeight: 1.5,
            }}
          >
            A structured content system for LinkedIn, X, Meta and blog.
          </p>
        </div>

        <div
          style={{
            display: "flex",
            gap: 16,
            alignItems: "center",
          }}
        >
          <div
            style={{
              padding: "12px 22px",
              background: cceTheme.cta,
              color: cceTheme.ctaForeground,
              borderRadius: 999,
              fontSize: 18,
              fontWeight: 500,
            }}
          >
            Start free, no card required
          </div>
          <div
            style={{
              display: "flex",
              gap: 6,
              alignItems: "center",
              padding: "8px 14px",
              background: "rgba(79,240,184,0.12)",
              color: cceTheme.accent,
              borderRadius: 999,
              fontSize: 13,
              fontWeight: 600,
              border: "1px solid rgba(79,240,184,0.3)",
            }}
          >
            <span
              style={{
                width: 6,
                height: 6,
                background: cceTheme.accent,
                borderRadius: 999,
                display: "block",
              }}
            />
            crispdigital.io
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
