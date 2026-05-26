import { ImageResponse } from "next/og";

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
          background: "#f8f5ef",
          backgroundImage:
            "linear-gradient(to right, rgba(11,18,32,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(11,18,32,0.05) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
          <div
            style={{
              width: 48,
              height: 48,
              borderRadius: 12,
              background: "#0b1220",
              color: "#fff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 24,
              fontWeight: 700,
            }}
          >
            C
          </div>
          <span style={{ fontSize: 26, fontWeight: 600, color: "#0b1220" }}>
            CRISP Content Engine
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", maxWidth: 960 }}>
          <span
            style={{
              fontSize: 16,
              fontWeight: 600,
              color: "#0a7a64",
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
              color: "#0b1220",
              lineHeight: 1.05,
              margin: "20px 0 0 0",
            }}
          >
            Build consistent visibility without burning out
          </p>
          <p
            style={{
              fontSize: 24,
              color: "#4b5563",
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
              background: "#0b1220",
              color: "#fff",
              borderRadius: 10,
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
              background: "#d4f0e6",
              color: "#0a7a64",
              borderRadius: 999,
              fontSize: 13,
              fontWeight: 600,
            }}
          >
            <span
              style={{
                width: 6,
                height: 6,
                background: "#0a7a64",
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
