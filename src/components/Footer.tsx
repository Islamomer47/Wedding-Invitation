// ─────────────────────────────────────────────────────────────────
// Footer.tsx  –  Closing section & thank-you
// ─────────────────────────────────────────────────────────────────
import React from "react";
import { useInView } from "../hooks/hooks";
import type { Translations, Lang } from "../data/translations";

interface Props {
  tr: Translations;
  lang: Lang;
}

export default function Footer({ tr, lang }: Props) {
  const [ref, vis] = useInView(0.08);

  return (
    <footer
      style={{
        position: "relative",
        background:
          "linear-gradient(180deg, #1a0e06 0%, #0d0905 60%, #000 100%)",
        padding: "clamp(100px,14vw,160px) 24px clamp(60px,8vw,80px)",
        textAlign: "center",
        overflow: "hidden",
      }}
    >
      {/* Background glow */}
      <div
        style={{
          position: "absolute",
          top: "30%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "80%",
          height: "60%",
          background:
            "radial-gradient(ellipse, rgba(201,162,77,0.04) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      {/* Frame */}
      <div
        style={{
          position: "absolute",
          inset: 24,
          border: "1px solid rgba(201,162,77,0.08)",
          pointerEvents: "none",
        }}
      />

      <div
        ref={ref as React.RefObject<HTMLDivElement>}
        style={{
          opacity: vis ? 1 : 0,
          transform: vis ? "translateY(0)" : "translateY(32px)",
          transition: "opacity 1.2s ease, transform 1.2s ease",
        }}
      >
        {/* Animated heart */}
        <div
          style={{
            fontSize: 36,
            marginBottom: 32,
            animation: vis ? "float 4s ease-in-out infinite" : "none",
          }}
        >
          ♡
        </div>

        {/* Tagline */}
        <p
          style={{
            fontFamily: "'Cinzel', serif",
            fontSize: 9,
            letterSpacing: 6,
            textTransform: "uppercase",
            color: "rgba(201,162,77,0.55)",
            marginBottom: 32,
          }}
        >
          {tr.footerTagline}
        </p>

        {/* Names */}
        <h2
          style={{
            fontFamily:
              lang === "ar" ? "'Amiri', serif" : "'Great Vibes', cursive",
            fontSize: "clamp(60px,12vw,110px)",
            fontStyle: lang === "ar" ? "italic" : "normal",
            color: "#C9A24D",
            lineHeight: 1.05,
            textShadow: "0 4px 40px rgba(201,162,77,0.2)",
            opacity: vis ? 1 : 0,
            transition: "opacity 1.4s ease 0.2s",
          }}
        >
          {tr.footerNames}
        </h2>

        {/* Ornamental divider */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
            margin: "28px auto",
            maxWidth: 320,
          }}
        >
          <div
            style={{
              flex: 1,
              height: 1,
              background:
                "linear-gradient(90deg, transparent, rgba(201,162,77,0.4))",
            }}
          />
          <svg width="18" height="18" viewBox="0 0 18 18" opacity={0.7}>
            <path
              d="M9,0 L10.5,7 L18,9 L10.5,11 L9,18 L7.5,11 L0,9 L7.5,7 Z"
              fill="#C9A24D"
            />
          </svg>
          <div
            style={{
              flex: 1,
              height: 1,
              background:
                "linear-gradient(90deg, rgba(201,162,77,0.4), transparent)",
            }}
          />
        </div>

        {/* Date */}
        <p
          style={{
            fontFamily: "'Cinzel', serif",
            fontSize: 13,
            letterSpacing: 5,
            color: "rgba(201,162,77,0.7)",
            marginBottom: 44,
          }}
        >
          {tr.footerDate}
        </p>

        {/* Thanks */}
        <p
          style={{
            fontFamily: "'Cinzel', serif",
            fontSize: 10,
            letterSpacing: 5,
            textTransform: "uppercase",
            color: "rgba(247,243,238,0.45)",
            marginBottom: 20,
          }}
        >
          {tr.footerThanks}
        </p>

        {/* Wish */}
        <p
          style={{
            fontFamily:
              lang === "ar"
                ? "'Cairo', sans-serif"
                : "'Cormorant Garamond', serif",
            fontSize: "clamp(15px,2vw,18px)",
            fontStyle: "italic",
            color: "rgba(247,243,238,0.35)",
            maxWidth: 560,
            margin: "0 auto 56px",
            lineHeight: 1.9,
          }}
        >
          {tr.footerWish}
        </p>

        {/* Bottom wave ornament */}
        <div style={{ opacity: 0.2 }}>
          <svg
            viewBox="0 0 600 48"
            style={{
              width: "100%",
              maxWidth: 560,
              display: "block",
              margin: "0 auto",
            }}
          >
            <line
              x1="0"
              y1="24"
              x2="220"
              y2="24"
              stroke="#C9A24D"
              strokeWidth="0.5"
            />
            <path
              d="M232,12 Q240,24 248,12 Q256,24 264,12 Q272,24 280,12 Q288,24 296,12 Q304,24 312,12 Q320,24 328,12 Q336,24 344,12 Q352,24 360,12 Q368,24 376,12"
              fill="none"
              stroke="#C9A24D"
              strokeWidth="0.5"
            />
            <line
              x1="380"
              y1="24"
              x2="600"
              y2="24"
              stroke="#C9A24D"
              strokeWidth="0.5"
            />
            {/* Center diamond */}
            <polygon
              points="300,14 304,20 300,26 296,20"
              fill="#C9A24D"
              opacity={0.8}
            />
          </svg>
        </div>

        {/* Copyright/credits */}
        <p
          style={{
            fontFamily: "'Cinzel', serif",
            fontSize: 8,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: "rgba(247,243,238,0.12)",
            marginTop: 40,
          }}
        >
          HARIR PALACE HOTEL — 2026
        </p>

        {/* Made with love */}
        <p
          style={{
            fontFamily:
              lang === "ar"
                ? "'Cairo', sans-serif"
                : "'Cormorant Garamond', serif",
            fontSize: 10,
            fontStyle: "italic",
            color: "rgba(247,243,238,0.3)",
            marginTop: 8,
          }}
        >
          {tr.footerMadeWithLove}
        </p>
      </div>
    </footer>
  );
}
