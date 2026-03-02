// ─────────────────────────────────────────────────────────────────
// Navbar.tsx  –  Fixed navigation bar
// ─────────────────────────────────────────────────────────────────
import React from "react";
import { useScrolled } from "../hooks/hooks";
import type { Translations, Lang } from "../data/translations";

interface Props {
  tr: Translations;
  lang: Lang;
  setLang: (l: Lang) => void;
  muted: boolean;
  onToggleMute: () => void;
}

export default function Navbar({
  tr,
  lang,
  setLang,
  muted,
  onToggleMute,
}: Props) {
  const scrolled = useScrolled(80);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 500,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "18px 36px",
        paddingTop: 28,
        background: scrolled ? "rgba(247,243,238,0.94)" : "transparent",
        backdropFilter: scrolled ? "blur(14px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(201,162,77,0.18)" : "none",
        transition: "all 0.5s cubic-bezier(0.4,0,0.2,1)",
      }}
    >
      {/* Logo */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 10,
        }}
      >
        <div
          style={{
            width: 28,
            height: 28,
            border: "1px solid rgba(201,162,77,0.6)",
            transform: "rotate(45deg)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: 14,
              height: 14,
              background: "rgba(201,162,77,0.2)",
              transform: "rotate(0deg)",
              fontSize: 8,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#C9A24D",
            }}
          >
            ♦
          </div>
        </div>
        <span
          style={{
            fontFamily: "'Cinzel', serif",
            fontSize: 9,
            letterSpacing: 5,
            color: scrolled ? "#2C1A0E" : "rgba(247,243,238,0.9)",
            textTransform: "uppercase",
            transition: "color 0.4s",
          }}
        >
          HARIR PALACE
        </span>
      </div>

      {/* Controls */}
      <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
        {/* Mute button */}
        <button
          onClick={onToggleMute}
          title={muted ? tr.unmuteBtn : tr.muteBtn}
          style={{
            width: 40,
            height: 40,
            borderRadius: "50%",
            border: "1px solid rgba(201,162,77,0.5)",
            background: muted ? "transparent" : "rgba(201,162,77,0.15)",
            color: scrolled ? "#C9A24D" : "rgba(247,243,238,0.85)",
            fontSize: 16,
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "all 0.3s",
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.background = "#C9A24D";
            e.currentTarget.style.color = "#fff";
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.background = muted
              ? "transparent"
              : "rgba(201,162,77,0.15)";
            e.currentTarget.style.color = scrolled
              ? "#C9A24D"
              : "rgba(247,243,238,0.85)";
          }}
        >
          {muted ? "♩" : "♪"}
        </button>

        {/* Language toggle */}
        <button
          onClick={() => setLang(lang === "en" ? "ar" : "en")}
          style={{
            background: "transparent",
            border: `1px solid ${scrolled ? "rgba(201,162,77,0.6)" : "rgba(247,243,238,0.5)"}`,
            color: scrolled ? "#2C1A0E" : "rgba(247,243,238,0.9)",
            padding: "8px 18px",
            fontFamily: "'Cinzel', serif",
            fontSize: 9,
            letterSpacing: 3,
            textTransform: "uppercase",
            borderRadius: 2,
            cursor: "pointer",
            transition: "all 0.3s",
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.background = "#C9A24D";
            e.currentTarget.style.color = "#fff";
            e.currentTarget.style.borderColor = "#C9A24D";
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.background = "transparent";
            e.currentTarget.style.color = scrolled
              ? "#2C1A0E"
              : "rgba(247,243,238,0.9)";
            e.currentTarget.style.borderColor = scrolled
              ? "rgba(201,162,77,0.6)"
              : "rgba(247,243,238,0.5)";
          }}
        >
          {tr.langToggle}
        </button>
      </div>
    </nav>
  );
}
