// ─────────────────────────────────────────────────────────────────
// MusicPlayer.tsx – UI only (audio controlled by App.tsx)
// ─────────────────────────────────────────────────────────────────
import React, { useEffect, useState } from "react";
import type { Translations } from "../data/translations";

interface Props {
  tr: Translations;
  muted: boolean;
  onToggle: () => void;
}

export default function MusicPlayer({ tr, muted, onToggle }: Props) {
  const [hovered, setHovered] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [bars, setBars] = useState([0.5, 0.8, 0.45, 0.9, 0.6, 0.35, 0.75]);

  // Fade in
  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 800);
    return () => clearTimeout(t);
  }, []);

  // Animate EQ bars
  useEffect(() => {
    if (muted) {
      setBars([0.5, 0.8, 0.45, 0.9, 0.6, 0.35, 0.75]);
      return;
    }

    const id = setInterval(() => {
      setBars((b) => b.map(() => 0.2 + Math.random() * 0.8));
    }, 160);

    return () => clearInterval(id);
  }, [muted]);

  return (
    <div
      style={{
        position: "fixed",
        bottom: 30,
        right: 30,
        zIndex: 500,
        display: "flex",
        alignItems: "center",
        gap: 12,
        flexDirection: "row-reverse",
        opacity: mounted ? 1 : 0,
        transform: mounted ? "translateY(0)" : "translateY(14px)",
        transition: "opacity 0.8s ease, transform 0.8s ease",
      }}
    >
      {/* Label */}
      <div
        style={{
          maxWidth: hovered ? 160 : 0,
          opacity: hovered ? 1 : 0,
          overflow: "hidden",
          whiteSpace: "nowrap",
          transition: "max-width 0.4s ease, opacity 0.3s ease",
        }}
      >
        <div
          style={{
            background: "rgba(245,240,232,0.96)",
            border: "1px solid rgba(201,162,77,0.35)",
            padding: "7px 16px",
            fontSize: 9,
            letterSpacing: 3,
            color: "#7a6248",
            textTransform: "uppercase",
          }}
        >
          {muted ? tr.unmuteBtn : tr.muteBtn}
        </div>
      </div>

      {/* Button */}
      <button
        onClick={onToggle}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        aria-label={muted ? tr.unmuteBtn : tr.muteBtn}
        style={{
          width: 56,
          height: 56,
          borderRadius: "50%",
          border: "1px solid rgba(201,162,77,0.7)",
          background: "rgba(245,240,232,0.95)",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 6px 36px rgba(201,162,77,0.3)",
        }}
      >
        {muted ? (
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#C9A24D"
            strokeWidth="1.5"
          >
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19" />
            <line x1="23" y1="9" x2="17" y2="15" />
            <line x1="17" y1="9" x2="23" y2="15" />
          </svg>
        ) : (
          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              gap: 2,
              height: 20,
            }}
          >
            {bars.map((h, i) => (
              <div
                key={i}
                style={{
                  width: 3,
                  height: `${Math.round(h * 20)}px`,
                  background: `rgba(201,162,77,${0.5 + h * 0.5})`,
                  borderRadius: 2,
                }}
              />
            ))}
          </div>
        )}
      </button>
    </div>
  );
}
