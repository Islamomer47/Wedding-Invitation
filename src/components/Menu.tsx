// ─────────────────────────────────────────────────────────────────
// Menu.tsx  –  A Letter From Us (formerly the "Our Story" timeline)
// ─────────────────────────────────────────────────────────────────
import type { Translations, Lang } from "../data/translations";
import FadeIn from "./FadeIn";
import { GoldDivider, FloralOrnament } from "./Ornaments";

interface Props {
  tr: Translations;
  lang: Lang;
}

export default function Menu({ tr, lang }: Props) {
  const isAr = lang === "ar";

  return (
    <section
      id="menu"
      style={{
        background: "linear-gradient(180deg, #FAF6F0 0%, #F0E6D2 100%)",
        padding: "100px 24px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Faint background text */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          fontFamily: "'Cinzel', serif",
          fontSize: "clamp(80px, 18vw, 220px)",
          color: "rgba(201,162,77,0.04)",
          letterSpacing: 20,
          pointerEvents: "none",
          userSelect: "none",
          whiteSpace: "nowrap",
        }}
      >
        LETTER
      </div>

      <div style={{ maxWidth: 680, margin: "0 auto", position: "relative" }}>
        {/* Header */}
        <FadeIn style={{ textAlign: "center", marginBottom: 60 }}>
          <span className="section-tag" style={{ color: "#8a5a20" }}>
            {tr.ourMomentsTitle}
          </span>
          <h2
            style={{
              fontFamily: isAr ? "'Amiri', serif" : "'Great Vibes', cursive",
              fontSize: isAr
                ? "clamp(38px, 7vw, 60px)"
                : "clamp(50px, 8vw, 76px)",
              color: "#2C1A0E",
              fontStyle: isAr ? "italic" : "normal",
              lineHeight: 1.1,
            }}
          >
            {tr.ourMomentsSub}
          </h2>
          <GoldDivider width={260} />
        </FadeIn>

        {/* The letter */}
        <FadeIn delay={0.15}>
          <div
            style={{
              position: "relative",
              background: "rgba(255,255,255,0.75)",
              backdropFilter: "blur(12px)",
              border: "1px solid rgba(201,162,77,0.25)",
              padding: "56px 48px",
              boxShadow: "0 20px 60px rgba(201,162,77,0.12)",
            }}
          >
            {/* Corner accents, all four corners */}
            <div
              style={{
                position: "absolute",
                top: 10,
                left: 10,
                width: 18,
                height: 18,
                borderTop: "1px solid rgba(201,162,77,0.45)",
                borderLeft: "1px solid rgba(201,162,77,0.45)",
              }}
            />
            <div
              style={{
                position: "absolute",
                top: 10,
                right: 10,
                width: 18,
                height: 18,
                borderTop: "1px solid rgba(201,162,77,0.45)",
                borderRight: "1px solid rgba(201,162,77,0.45)",
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: 10,
                left: 10,
                width: 18,
                height: 18,
                borderBottom: "1px solid rgba(201,162,77,0.45)",
                borderLeft: "1px solid rgba(201,162,77,0.45)",
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: 10,
                right: 10,
                width: 18,
                height: 18,
                borderBottom: "1px solid rgba(201,162,77,0.45)",
                borderRight: "1px solid rgba(201,162,77,0.45)",
              }}
            />

            {/* Opening quotation mark ornament */}
            <div
              style={{
                fontFamily: "'Great Vibes', cursive",
                fontSize: 64,
                color: "#C9A24D",
                opacity: 0.5,
                lineHeight: 1,
                marginBottom: -8,
                textAlign: isAr ? "right" : "left",
              }}
              aria-hidden="true"
            >
              “
            </div>

            {/* Letter body, built from the story items as flowing paragraphs */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 22,
                textAlign: isAr ? "right" : "left",
                direction: isAr ? "rtl" : "ltr",
              }}
            >
              {tr.storyItems.map((item, i) => (
                <FadeIn key={i} delay={0.1 + i * 0.08}>
                  <p style={{ margin: 0 }}>
                    {item.year && (
                      <span
                        style={{
                          fontFamily: "'Cinzel', serif",
                          fontSize: 10,
                          letterSpacing: 2,
                          color: "#C9A24D",
                          textTransform: "uppercase",
                          marginInlineEnd: 10,
                        }}
                      >
                        {item.icon} {item.year}
                      </span>
                    )}
                    <span
                      style={{
                        fontFamily: "'Cinzel', serif",
                        fontSize: 11,
                        letterSpacing: 2,
                        color: "#2C1A0E",
                        textTransform: "uppercase",
                        marginInlineEnd: 10,
                      }}
                    >
                      {item.title}
                    </span>
                    <span
                      style={{
                        fontFamily: isAr
                          ? "'Cairo', sans-serif"
                          : "'Cormorant Garamond', serif",
                        fontSize: 19,
                        color: "#5a4230",
                        fontStyle: isAr ? "normal" : "italic",
                        lineHeight: 1.9,
                      }}
                    >
                      {item.desc}
                    </span>
                  </p>
                </FadeIn>
              ))}
            </div>

            {/* Signature */}
            <FadeIn delay={0.2 + tr.storyItems.length * 0.08}>
              <div
                style={{
                  marginTop: 40,
                  textAlign: isAr ? "left" : "right",
                }}
              >
                <div
                  style={{
                    fontFamily: isAr
                      ? "'Cairo', sans-serif"
                      : "'Cormorant Garamond', serif",
                    fontSize: 15,
                    color: "#7a5a40",
                    fontStyle: isAr ? "normal" : "italic",
                    marginBottom: 6,
                  }}
                >
                  {isAr ? "بكل الحب،" : "With all our love,"}
                </div>
                <div
                  style={{
                    fontFamily: isAr
                      ? "'Amiri', serif"
                      : "'Great Vibes', cursive",
                    fontSize: "clamp(30px, 5vw, 42px)",
                    color: "#2C1A0E",
                  }}
                >
                  {tr.ourMomentsSub}
                </div>
              </div>
            </FadeIn>
          </div>
        </FadeIn>

        {/* Bottom ornament */}
        <FadeIn delay={0.5}>
          <div style={{ textAlign: "center", marginTop: 20 }}>
            <FloralOrnament size={100} opacity={0.15} />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
