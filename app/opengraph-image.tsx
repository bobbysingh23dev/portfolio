import { ImageResponse } from "next/og";
import { SITE } from "./lib/site";

// Static, branded 1200x630 share card generated at build time.
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = `${SITE.name} — ${SITE.role}`;

export default function OpengraphImage() {
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
          background:
            "radial-gradient(1200px 600px at 50% 20%, #101a2c 0%, #0a0d14 60%)",
          color: "#e2e8f0",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            letterSpacing: "6px",
            fontSize: "24px",
            color: "#38bdf8",
          }}
        >
          <div
            style={{
              display: "flex",
              width: "48px",
              height: "48px",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "10px",
              border: "1px solid #1e293b",
              background: "#121824",
              color: "#38bdf8",
              fontSize: "28px",
            }}
          >
            {">_"}
          </div>
          {SITE.brand}
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: "112px",
              fontWeight: 700,
              color: "#ffffff",
              lineHeight: 1,
            }}
          >
            {SITE.name}
          </div>
          <div
            style={{
              marginTop: "20px",
              fontSize: "40px",
              letterSpacing: "10px",
              color: "#38bdf8",
            }}
          >
            {SITE.role.toUpperCase()}
          </div>
        </div>

        <div style={{ display: "flex", fontSize: "28px", color: "#64748b" }}>
          React Native · Next.js · Node.js · PostgreSQL
        </div>
      </div>
    ),
    size,
  );
}
