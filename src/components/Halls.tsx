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

/**
 * A single hand-drawn scrollwork corner — the page's signature motif.
 * Echoes the flourish on an engraved invitation card rather than a
 * generic border rule. `flip`/`rotate` place it in each of the four
 * corners from one path definition.
 */
function CornerFlourish({
  color,
  corner,
}: {
  color: string;
  corner: "tl" | "tr" | "bl" | "br";
}) {
  const rotation =
    corner === "tl" ? 0 : corner === "tr" ? 90 : corner === "br" ? 180 : 270;
  return (
    <svg
      width="34"
      height="34"
      viewBox="0 0 34 34"
      style={{
        position: "absolute",
        top: corner === "tl" || corner === "tr" ? 14 : undefined,
        bottom: corner === "bl" || corner === "br" ? 14 : undefined,
        left: corner === "tl" || corner === "bl" ? 14 : undefined,
        right: corner === "tr" || corner === "br" ? 14 : undefined,
        pointerEvents: "none",
      }}
    >
      <g transform={`rotate(${rotation} 17 17)`}>
        <path
          d="M2 2 L2 20 Q2 26 8 26 L26 26"
          fill="none"
          stroke={color}
          strokeWidth="0.75"
          strokeLinecap="round"
          opacity="0.55"
        />
        <path
          d="M2 2 L14 2 Q22 2 22 10 L22 26"
          fill="none"
          stroke={color}
          strokeWidth="0.75"
          strokeLinecap="round"
          opacity="0.35"
        />
        <circle cx="2" cy="2" r="1.6" fill={color} opacity="0.6" />
        <circle cx="26" cy="26" r="1.1" fill={color} opacity="0.4" />
      </g>
    </svg>
  );
}

/** Small engraved fleuron used in dividers, replacing plain glyph text. */
function Fleuron({ color, size = 16 }: { color: string; size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      style={{ display: "block" }}
    >
      <path
        d="M12 2 C12 8 9 10 4 10 C9 10 12 12 12 18 C12 12 15 10 20 10 C15 10 12 8 12 2 Z"
        fill={color}
        opacity="0.85"
      />
      <circle cx="12" cy="10" r="1.3" fill={color} />
    </svg>
  );
}

/**
 * Floor indicator as an engraved gold ribbon plaque — the shape and foil
 * finish read as part of the invitation itself, and the notched banner
 * ends are a legibility cue on their own (like a door plaque), separate
 * from decoration.
 */
function FloorRibbon({ label, capsFont }: { label: string; capsFont: string }) {
  return (
    <div
      style={{
        display: "inline-block",
        maxWidth: "100%",
        marginBottom: 22,
        filter: "drop-shadow(0 10px 16px rgba(44,26,14,0.28))",
      }}
    >
      <div
        className="halls-ribbon"
        style={{
          position: "relative",
          padding: "clamp(10px, 2.5vw, 14px) clamp(18px, 6vw, 38px)",
          maxWidth: "100%",
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            position: "relative",
            zIndex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "clamp(6px, 1.5vw, 12px)",
          }}
        >
          <Fleuron color="#2C1A0E" size={12} />
          <span
            style={{
              fontFamily: capsFont,
              fontSize: "clamp(10px, 3vw, 15px)",
              fontWeight: 700,
              letterSpacing: "clamp(0.5px, 0.4vw, 2.5px)",
              textTransform: "uppercase",
              color: "#2C1A0E",
              lineHeight: 1.3,
              whiteSpace: "normal",
              wordBreak: "keep-all",
            }}
          >
            {label}
          </span>
          <Fleuron color="#2C1A0E" size={12} />
        </div>
      </div>
    </div>
  );
}

export default function Halls({ tr, lang }: Props) {
  const [headRef, headVis] = useInView();
  const [cardsRef, cardsVis] = useInView();
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const halls = [
    {
      icon: "♀",
      title: tr.womenHall,
      floor: tr.womenFloor,
      note: tr.womenNote,
      light: true,
      accent: "#C9A24D",
      accentSoft: "rgba(201,162,77,0.14)",
      bg: "linear-gradient(160deg, #fdfaf5 0%, #f9f0e1 40%, #f2e4cc 100%)",
      shadowColor: "rgba(201,162,77,0.24)",
      textColor: "#2C1A0E",
      subColor: "#8a6a50",
      dotOpacity: 0.05,
    },
    {
      icon: "♂",
      title: tr.menHall,
      floor: tr.menFloor,
      note: tr.menNote,
      light: false,
      accent: "#C9A24D",
      accentSoft: "rgba(201,162,77,0.12)",
      bg: "linear-gradient(160deg, #160c05 0%, #221208 40%, #2e1a0d 100%)",
      shadowColor: "rgba(201,162,77,0.18)",
      textColor: "#f7f0e4",
      subColor: "rgba(247,240,228,0.52)",
      dotOpacity: 0.08,
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
      {/* Scoped keyframes — engraved-gold shimmer, slow candle flicker, all reduced-motion safe */}
      <style>{`
        @keyframes halls-shimmer-sweep {
          0%   { background-position: -160% 0; }
          100% { background-position: 260% 0; }
        }
        @keyframes halls-flicker {
          0%, 100% { opacity: 0.9; filter: drop-shadow(0 0 10px rgba(201,162,77,0.35)); }
          45%      { opacity: 1;   filter: drop-shadow(0 0 16px rgba(201,162,77,0.55)); }
          70%      { opacity: 0.85;filter: drop-shadow(0 0 8px rgba(201,162,77,0.28)); }
        }
        .halls-rule-shimmer {
          background: linear-gradient(
            90deg,
            transparent 0%,
            rgba(201,162,77,0.35) 45%,
            #f3dfa8 50%,
            rgba(201,162,77,0.35) 55%,
            transparent 100%
          );
          background-size: 220% 100%;
          animation: halls-shimmer-sweep 4.5s ease-in-out infinite;
        }
        .halls-glyph-flicker {
          animation: halls-flicker 5.5s ease-in-out infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .halls-rule-shimmer, .halls-glyph-flicker {
            animation: none !important;
          }
        }
        .halls-ribbon {
          background: linear-gradient(150deg, #f3dfa8 0%, #d9b25f 32%, #C9A24D 60%, #a9822f 100%);
          clip-path: polygon(0% 50%, 14px 0%, calc(100% - 14px) 0%, 100% 50%, calc(100% - 14px) 100%, 14px 100%);
        }
        .halls-ribbon::after {
          content: "";
          position: absolute;
          inset: 3px;
          clip-path: polygon(0% 50%, 12px 0%, calc(100% - 12px) 0%, 100% 50%, calc(100% - 12px) 100%, 12px 100%);
          border: 1px solid rgba(255,255,255,0.4);
          pointer-events: none;
        }
      `}</style>

      {/* Fine paper-grain texture, sits above the base gradient */}
      <svg style={{ position: "absolute", inset: 0, width: 0, height: 0 }}>
        <filter id="halls-grain">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.9"
            numOctaves="2"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
      </svg>
      <div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          opacity: 0.035,
          filter: "url(#halls-grain)",
        }}
      />

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

          {/* Ornamental divider with shimmering gold rule + engraved fleuron */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 14,
              maxWidth: 320,
              margin: "0 auto",
            }}
          >
            <div
              className="halls-rule-shimmer"
              style={{ flex: 1, height: 1 }}
            />
            <Fleuron color="#C9A24D" size={18} />
            <div
              className="halls-rule-shimmer"
              style={{ flex: 1, height: 1 }}
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
                    ? `0 32px 80px ${hall.shadowColor}, 0 0 0 1px rgba(201,162,77,0.32)`
                    : `0 12px 48px ${hall.shadowColor}, 0 0 0 1px rgba(201,162,77,0.18)`,
                }}
              >
                {/* Faint damask dot-lattice, gives the card body a woven-fabric depth */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    pointerEvents: "none",
                    opacity: hall.dotOpacity,
                    backgroundImage: `radial-gradient(${hall.accent} 0.7px, transparent 0.7px)`,
                    backgroundSize: "22px 22px",
                  }}
                />

                {/* Hand-drawn scrollwork corners — the card's signature detail */}
                <CornerFlourish color={hall.accent} corner="tl" />
                <CornerFlourish color={hall.accent} corner="tr" />
                <CornerFlourish color={hall.accent} corner="bl" />
                <CornerFlourish color={hall.accent} corner="br" />

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
                  className="halls-rule-shimmer"
                  style={{
                    position: "absolute",
                    top: 0,
                    left: "20%",
                    right: "20%",
                    height: 1,
                  }}
                />

                {/* Gender symbol with slow candlelight flicker */}
                <div
                  className="halls-glyph-flicker"
                  style={{
                    fontFamily: "'Cinzel', serif",
                    fontSize: 40,
                    color: hall.accent,
                    lineHeight: 1,
                    marginBottom: 24,
                    position: "relative",
                    transform: isHovered ? "scale(1.08)" : "scale(1)",
                    transition: "transform 0.4s",
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

                {/* Floor indicator — engraved gold ribbon plaque */}
                <FloorRibbon label={hall.floor} capsFont={capsFont} />

                {/* Note */}
                <p
                  style={{
                    fontFamily: bodyFont,
                    fontSize: isRtl ? 16 : 17,
                    fontStyle: isRtl ? "normal" : "italic",
                    color: hall.subColor,
                    lineHeight: 1.7,
                    margin: 0,
                    letterSpacing: isRtl ? 0 : 0.2,
                  }}
                >
                  {hall.note}
                </p>

                {/* Bottom ambient ornament — echoes the header fleuron for cohesion */}
                <div
                  style={{
                    marginTop: 28,
                    display: "flex",
                    justifyContent: "center",
                    opacity: 0.55,
                  }}
                >
                  <Fleuron color={hall.accent} size={14} />
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
              gap: 12,
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
            <Fleuron color="#C9A24D" size={12} />
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
