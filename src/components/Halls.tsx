// ─────────────────────────────────────────────────────────────────
// Halls.tsx  –  Ladies' & Gentlemen's hall directions (Enhanced)
// ─────────────────────────────────────────────────────────────────
import React, { useState } from "react";
import { useInView } from "../hooks/hooks";
import type { Translations, Lang } from "../data/translations";

interface Props {
  tr: Translations;
  lang: Lang;
}

export default function Halls({ tr, lang }: Props) {
  const [headRef, headVis] = useInView();
  const [cardsRef, cardsVis] = useInView();
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const halls = [
    {
      icon: "♀",
      ambient: "✦",
      title: tr.womenHall,
      floor: tr.womenFloor,
      note: tr.womenNote,
      light: true,
      accent: "#C9A24D",
      accentSoft: "rgba(201,162,77,0.12)",
      bg: "linear-gradient(160deg, #fdfaf5 0%, #f9f0e1 40%, #f2e4cc 100%)",
      ornament: "❧",
      shadowColor: "rgba(201,162,77,0.22)",
      textColor: "#2C1A0E",
      subColor: "#8a6a50",
    },
    {
      icon: "♂",
      ambient: "✦",
      title: tr.menHall,
      floor: tr.menFloor,
      note: tr.menNote,
      light: false,
      accent: "#C9A24D",
      accentSoft: "rgba(201,162,77,0.10)",
      bg: "linear-gradient(160deg, #160c05 0%, #221208 40%, #2e1a0d 100%)",
      ornament: "❧",
      shadowColor: "rgba(201,162,77,0.15)",
      textColor: "#f7f0e4",
      subColor: "rgba(247,240,228,0.50)",
    },
  ];

  const isRtl = lang === "ar";
  const scriptFont = isRtl ? "'Amiri', serif" : "'Cormorant Garamond', serif";
  const capsFont = "'Cinzel Decorative', 'Cinzel', serif";
  const bodyFont = isRtl
    ? "'Cairo', sans-serif"
    : "'Cormorant Garamond', serif";

  return (
    <section
      style={{
        background:
          "linear-gradient(180deg, #f9f5ee 0%, #ede3d2 50%, #e8dac8 100%)",
        padding: "clamp(100px, 14vw, 160px) 24px",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Decorative background texture lines */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          backgroundImage: `repeating-linear-gradient(
          0deg,
          transparent,
          transparent 79px,
          rgba(201,162,77,0.04) 79px,
          rgba(201,162,77,0.04) 80px
        )`,
        }}
      />

      {/* Top ornament */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: 2,
          height: 60,
          background:
            "linear-gradient(180deg, transparent, #C9A24D 60%, transparent)",
        }}
      />

      <div style={{ maxWidth: 1020, margin: "0 auto", position: "relative" }}>
        {/* ── Header ── */}
        <div
          ref={headRef as React.RefObject<HTMLDivElement>}
          style={{
            textAlign: "center",
            opacity: headVis ? 1 : 0,
            transform: headVis ? "translateY(0)" : "translateY(32px)",
            transition:
              "opacity 1.1s cubic-bezier(.2,.8,.3,1), transform 1.1s cubic-bezier(.2,.8,.3,1)",
            marginBottom: 72,
          }}
        >
          {/* Eyebrow */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 16,
              justifyContent: "center",
              marginBottom: 24,
            }}
          >
            <div
              style={{
                height: 1,
                width: 60,
                background: "linear-gradient(90deg, transparent, #C9A24D)",
              }}
            />
            <span
              style={{
                fontFamily: capsFont,
                fontSize: 8.5,
                letterSpacing: 7,
                textTransform: "uppercase",
                color: "#C9A24D",
                whiteSpace: "nowrap",
              }}
            >
              {tr.hallsTitle}
            </span>
            <div
              style={{
                height: 1,
                width: 60,
                background: "linear-gradient(90deg, #C9A24D, transparent)",
              }}
            />
          </div>

          {/* Main heading */}
          <h2
            style={{
              fontFamily: scriptFont,
              fontSize: "clamp(48px, 7.5vw, 80px)",
              fontWeight: isRtl ? 700 : 400,
              fontStyle: isRtl ? "normal" : "italic",
              color: "#2C1A0E",
              lineHeight: 1.05,
              letterSpacing: isRtl ? 1 : -0.5,
              margin: "0 0 28px",
            }}
          >
            {tr.hallsTagline}
          </h2>

          {/* Ornamental divider */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              maxWidth: 340,
              margin: "0 auto",
            }}
          >
            <div
              style={{
                flex: 1,
                height: 1,
                background: "linear-gradient(90deg, transparent, #C9A24D88)",
              }}
            />
            <span style={{ color: "#C9A24D", fontSize: 14, lineHeight: 1 }}>
              ◆
            </span>
            <div
              style={{
                flex: 1,
                height: 1,
                background: "linear-gradient(90deg, transparent, #C9A24D88)",
              }}
            />
            <span style={{ color: "#C9A24D66", fontSize: 10, lineHeight: 1 }}>
              ◆
            </span>
            <div
              style={{
                flex: 1,
                height: 1,
                background: "linear-gradient(90deg, #C9A24D88, transparent)",
              }}
            />
            <span style={{ color: "#C9A24D", fontSize: 14, lineHeight: 1 }}>
              ◆
            </span>
            <div
              style={{
                flex: 1,
                height: 1,
                background: "linear-gradient(90deg, #C9A24D88, transparent)",
              }}
            />
          </div>
        </div>

        {/* ── Hall Cards ── */}
        <div
          ref={cardsRef as React.RefObject<HTMLDivElement>}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 32,
          }}
        >
          {halls.map((hall, i) => {
            const isHovered = hoveredCard === i;
            return (
              <div
                key={i}
                onMouseEnter={() => setHoveredCard(i)}
                onMouseLeave={() => setHoveredCard(null)}
                style={{
                  background: hall.bg,
                  borderRadius: 2,
                  padding: "clamp(48px, 6vw, 72px) 40px",
                  textAlign: "center",
                  position: "relative",
                  overflow: "hidden",
                  cursor: "default",
                  opacity: cardsVis ? 1 : 0,
                  transform: cardsVis
                    ? isHovered
                      ? "translateY(-6px)"
                      : "translateY(0)"
                    : `translateY(${50 + i * 12}px)`,
                  transition: `opacity 1.1s cubic-bezier(.2,.8,.3,1) ${0.1 + i * 0.2}s,
                               transform 1.1s cubic-bezier(.2,.8,.3,1) ${0.1 + i * 0.2}s,
                               box-shadow 0.5s ease`,
                  boxShadow: isHovered
                    ? `0 32px 80px ${hall.shadowColor}, 0 0 0 1px rgba(201,162,77,0.3)`
                    : `0 12px 48px ${hall.shadowColor}, 0 0 0 1px rgba(201,162,77,0.18)`,
                }}
              >
                {/* Corner ornaments */}
                {[
                  { top: 16, left: 16 },
                  { top: 16, right: 16 },
                  { bottom: 16, left: 16 },
                  { bottom: 16, right: 16 },
                ].map((pos, ci) => (
                  <div
                    key={ci}
                    style={{
                      position: "absolute",
                      ...pos,
                      width: 22,
                      height: 22,
                      pointerEvents: "none",
                      borderTop:
                        ci < 2 ? `1px solid rgba(201,162,77,0.35)` : undefined,
                      borderBottom:
                        ci >= 2 ? `1px solid rgba(201,162,77,0.35)` : undefined,
                      borderLeft:
                        ci === 0 || ci === 2
                          ? `1px solid rgba(201,162,77,0.35)`
                          : undefined,
                      borderRight:
                        ci === 1 || ci === 3
                          ? `1px solid rgba(201,162,77,0.35)`
                          : undefined,
                    }}
                  />
                ))}

                {/* Radial glow */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    pointerEvents: "none",
                    background: `radial-gradient(ellipse 70% 60% at 50% 100%, ${hall.accentSoft}, transparent)`,
                    opacity: isHovered ? 1 : 0.6,
                    transition: "opacity 0.5s",
                  }}
                />

                {/* Top gradient accent bar */}
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: "20%",
                    right: "20%",
                    height: 1,
                    background: `linear-gradient(90deg, transparent, ${hall.accent}88, transparent)`,
                  }}
                />

                {/* Gender symbol */}
                <div
                  style={{
                    fontFamily: "'Cinzel', serif",
                    fontSize: 40,
                    color: hall.accent,
                    lineHeight: 1,
                    marginBottom: 24,
                    position: "relative",
                    opacity: 0.9,
                    textShadow: `0 0 40px ${hall.accent}44`,
                    transition: "text-shadow 0.4s, transform 0.4s",
                    transform: isHovered ? "scale(1.08)" : "scale(1)",
                  }}
                >
                  {hall.icon}
                </div>

                {/* Title */}
                <h3
                  style={{
                    fontFamily: scriptFont,
                    fontSize: "clamp(38px, 5.5vw, 54px)",
                    fontWeight: isRtl ? 700 : 400,
                    fontStyle: isRtl ? "normal" : "italic",
                    color: hall.textColor,
                    marginBottom: 20,
                    lineHeight: 1.05,
                    letterSpacing: isRtl ? 0.5 : -0.3,
                  }}
                >
                  {hall.title}
                </h3>

                {/* Thin rule with diamond */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    maxWidth: 140,
                    margin: "0 auto 24px",
                  }}
                >
                  <div
                    style={{
                      flex: 1,
                      height: 1,
                      background: `linear-gradient(90deg, transparent, ${hall.accent}88)`,
                    }}
                  />
                  <div
                    style={{
                      width: 4,
                      height: 4,
                      background: hall.accent,
                      transform: "rotate(45deg)",
                      flexShrink: 0,
                    }}
                  />
                  <div
                    style={{
                      flex: 1,
                      height: 1,
                      background: `linear-gradient(90deg, ${hall.accent}88, transparent)`,
                    }}
                  />
                </div>

                {/* Floor label */}
                <div
                  style={{
                    display: "inline-block",
                    fontFamily: capsFont,
                    fontSize: 9,
                    letterSpacing: 5,
                    textTransform: "uppercase",
                    color: hall.accent,
                    padding: "8px 20px",
                    border: `1px solid rgba(201,162,77,0.25)`,
                    marginBottom: 20,
                    background: hall.light
                      ? "rgba(201,162,77,0.06)"
                      : "rgba(201,162,77,0.08)",
                    backdropFilter: "blur(4px)",
                  }}
                >
                  {hall.floor}
                </div>

                {/* Note */}
                <p
                  style={{
                    fontFamily: bodyFont,
                    fontSize: isRtl ? 16 : 17,
                    fontStyle: isRtl ? "normal" : "italic",
                    color: hall.subColor,
                    lineHeight: 1.7,
                    margin: "0",
                    letterSpacing: isRtl ? 0 : 0.2,
                  }}
                >
                  {hall.note}
                </p>

                {/* Bottom ambient ornament */}
                <div
                  style={{
                    marginTop: 28,
                    fontFamily: "'Cinzel', serif",
                    fontSize: 10,
                    color: `${hall.accent}55`,
                    letterSpacing: 8,
                  }}
                >
                  {hall.ambient} {hall.ornament} {hall.ambient}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom ornament */}
        <div
          style={{
            textAlign: "center",
            marginTop: 64,
            opacity: headVis ? 1 : 0,
            transition: "opacity 1.5s ease 0.8s",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              maxWidth: 200,
              margin: "0 auto",
            }}
          >
            <div
              style={{
                flex: 1,
                height: 1,
                background: "linear-gradient(90deg, transparent, #C9A24D66)",
              }}
            />
            <span style={{ color: "#C9A24D55", fontSize: 8, letterSpacing: 4 }}>
              ✦✦✦
            </span>
            <div
              style={{
                flex: 1,
                height: 1,
                background: "linear-gradient(90deg, #C9A24D66, transparent)",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
