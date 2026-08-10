import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          background: "#080808",
          padding: "90px",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(200,169,110,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(200,169,110,0.06) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            gap: 6,
            marginBottom: 36,
          }}
        >
          <span style={{ color: "#F4F2EE", fontSize: 40, fontWeight: 600 }}>
            DIP
          </span>
          <span style={{ color: "#C8A96E", fontSize: 40, fontWeight: 600 }}>
            pro
          </span>
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 66,
            fontWeight: 600,
            color: "#F4F2EE",
            lineHeight: 1.15,
            maxWidth: 950,
          }}
        >
          Automatisez la conformité DIP de votre réseau de franchise.
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 28,
            color: "#C8A96E",
            marginTop: 32,
            letterSpacing: 2,
            textTransform: "uppercase",
          }}
        >
          Iralink Agency — Loi Doubin · Art. L.330-3
        </div>
      </div>
    ),
    { ...size }
  );
}
