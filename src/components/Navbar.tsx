// ─────────────────────────────────────────────────────────────────
// Navbar.tsx – Fixed navigation bar
// ─────────────────────────────────────────────────────────────────
import React, { useState, useEffect } from "react";
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

  const [showLangHint, setShowLangHint] = useState(true);

  // Hide hint after 10 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLangHint(false);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

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
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
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
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#C9A24D",
              fontSize: 8,
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
      <div
        style={{
          display: "flex",
          gap: 12,
          alignItems: "center",
          position: "relative",
        }}
      >
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
        >
          {muted ? "♩" : "♪"}
        </button>

        {/* Language toggle */}
        <div style={{ position: "relative" }}>
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
          >
            {tr.langToggle}
          </button>

          {/* Language hint */}
          {showLangHint && lang === "en" && (
            <div
              style={{
                position: "absolute",
                top: 46,
                right: 0,
                background: "#C9A24D",
                color: "#fff",
                padding: "10px 14px",
                borderRadius: 4,
                fontSize: 12,
                fontFamily: "'Cinzel', serif",
                whiteSpace: "nowrap",
                boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
                animation: "fadeInHint 0.4s ease",
              }}
            >
              يمكنك التحويل للعربية بالضغط على زر عربي بالأعلى
            </div>
          )}
        </div>
      </div>

      <style>{`
        @keyframes fadeInHint {
          from { opacity: 0; transform: translateY(-6px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </nav>
  );
}
