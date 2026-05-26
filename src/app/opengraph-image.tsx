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
          padding: "64px",
          background: "#faf9f7",
          backgroundImage:
            "linear-gradient(to right, rgba(226,232,240,0.5) 1px, transparent 1px), linear-gradient(to bottom, rgba(226,232,240,0.5) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div
            style={{
              width: 48,
              height: 48,
              borderRadius: 12,
              background: "#0f172a",
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
          <span style={{ fontSize: 28, fontWeight: 600, color: "#0f172a" }}>
            CRISP Content Engine
          </span>
        </div>
        <div style={{ maxWidth: 900 }}>
          <p
            style={{
              fontSize: 52,
              fontWeight: 600,
              color: "#0f172a",
              lineHeight: 1.15,
              margin: 0,
            }}
          >
            A content system built around your brand
          </p>
          <p
            style={{
              fontSize: 24,
              color: "#475569",
              marginTop: 24,
              lineHeight: 1.5,
            }}
          >
            Strategy, queue, review and publishing for LinkedIn, X, Meta and blog.
          </p>
        </div>
        <div
          style={{
            display: "flex",
            gap: 12,
            alignItems: "center",
          }}
        >
          <div
            style={{
              padding: "10px 20px",
              background: "#0d9488",
              color: "#fff",
              borderRadius: 8,
              fontSize: 18,
              fontWeight: 500,
            }}
          >
            Start free
          </div>
          <span style={{ fontSize: 18, color: "#64748b" }}>crisp.you</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
