// ─────────────────────────────────────────────────────────────────
// Countdown.tsx  –  Live countdown to the wedding
// ─────────────────────────────────────────────────────────────────
import React from "react";
import { useCountdown, useInView } from "../hooks/hooks";
import type { Translations } from "../data/translations";

interface Props {
  tr: Translations;
}

const pad = (n: number) => String(n).padStart(2, "0");

export default function Countdown({ tr }: Props) {
  const time = useCountdown();
  const [ref, vis] = useInView();

  const units = [
    { val: time.days, label: tr.days },
    { val: time.hours, label: tr.hours },
    { val: time.minutes, label: tr.minutes },
    { val: time.seconds, label: tr.seconds },
  ];

  return (
    <section
      id="countdown"
      ref={ref}
      style={{
        position: "relative",
        background:
          "linear-gradient(145deg, #1e1008 0%, #2C1A0E 40%, #1a0e06 100%)",
        padding: "clamp(70px,10vw,120px) 24px",
        textAlign: "center",
        overflow: "hidden",
      }}
    >
      {/* Decorative background name */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          pointerEvents: "none",
        }}
      >
        <span
          style={{
            fontFamily: "'Great Vibes', cursive",
            fontSize: "clamp(80px,20vw,220px)",
            color: "rgba(201,162,77,0.035)",
            whiteSpace: "nowrap",
            lineHeight: 1,
            userSelect: "none",
          }}
        >
          {tr.brideName} & {tr.groomName}
        </span>
      </div>

      {/* Frame lines */}
      <div
        style={{
          position: "absolute",
          inset: 24,
          border: "1px solid rgba(201,162,77,0.1)",
          pointerEvents: "none",
        }}
      />

      {/* Header */}
      <div
        style={{
          opacity: vis ? 1 : 0,
          transform: vis ? "translateY(0)" : "translateY(28px)",
          transition: "opacity 1s ease, transform 1s ease",
          marginBottom: 52,
        }}
      >
        <span
          style={{
            fontFamily: "'Cinzel', serif",
            fontSize: 10,
            letterSpacing: 6,
            textTransform: "uppercase",
            color: "#C9A24D",
            display: "block",
            marginBottom: 12,
          }}
        >
          ◆ &nbsp; {tr.countdownTitle} &nbsp; ◆
        </span>
        <p
          style={{
            fontFamily: "'Cinzel', serif",
            fontSize: 11,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: "rgba(201,162,77,0.55)",
          }}
        >
          {tr.countdownSub}
        </p>
      </div>

      {/* Numbers */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "stretch",
          flexWrap: "wrap",
          gap: 0,
        }}
      >
        {units.map(({ val, label }, i) => (
          <React.Fragment key={i}>
            <div
              style={{
                padding: "clamp(8px,2vw,16px) clamp(20px,5vw,60px)",
                textAlign: "center",
                opacity: vis ? 1 : 0,
                transform: vis ? "translateY(0)" : "translateY(32px)",
                transition: `opacity 0.9s ease ${0.1 + i * 0.1}s, transform 0.9s ease ${0.1 + i * 0.1}s`,
              }}
            >
              {/* Number */}
              <div
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "clamp(52px,9vw,96px)",
                  fontWeight: 300,
                  color: "#C9A24D",
                  lineHeight: 1,
                  letterSpacing: -2,
                  textShadow: "0 4px 24px rgba(201,162,77,0.25)",
                }}
              >
                {pad(val)}
              </div>

              {/* Label */}
              <div
                style={{
                  fontFamily: "'Cinzel', serif",
                  fontSize: 9,
                  letterSpacing: 4,
                  textTransform: "uppercase",
                  color: "rgba(201,162,77,0.5)",
                  marginTop: 12,
                }}
              >
                {label}
              </div>
            </div>

            {/* Separator */}
            {i < 3 && (
              <div
                style={{
                  width: 1,
                  background:
                    "linear-gradient(to bottom, transparent, rgba(201,162,77,0.2), transparent)",
                  alignSelf: "stretch",
                  margin: "16px 0",
                }}
              />
            )}
          </React.Fragment>
        ))}
      </div>

      {/* Vase decoration */}
      <div
        style={{
          position: "relative",
          marginTop: 28,
          display: "flex",
          justifyContent: "center",
          opacity: vis ? 0.85 : 0,
          transform: vis ? "translateY(0)" : "translateY(20px)",
          transition: "opacity 1s ease 0.4s, transform 1s ease 0.4s",
          pointerEvents: "none",
        }}
      >
        <img
          src="https://premiumelegante.thedigitalyes.com/assets/floral-vase-6x28LN74.png"
          alt="Decorative floral vase"
          style={{
            width: "clamp(120px, 18vw, 200px)",
            opacity: 0.9,
            filter: "drop-shadow(0 12px 30px rgba(201,162,77,0.25))",
          }}
        />
      </div>

      {/* Bottom ornament */}
      <div
        style={{
          marginTop: 40,
          opacity: vis ? 0.25 : 0,
          transition: "opacity 1s ease 0.6s",
        }}
      >
        <svg
          viewBox="0 0 500 40"
          style={{
            width: "100%",
            maxWidth: 480,
            display: "block",
            margin: "0 auto",
          }}
        >
          <line
            x1="0"
            y1="20"
            x2="180"
            y2="20"
            stroke="#C9A24D"
            strokeWidth="0.5"
          />
          <path
            d="M192,8 Q200,20 208,8 Q216,20 224,8 Q232,20 240,8 Q248,20 256,8 Q264,20 272,8 Q280,20 288,8 Q296,20 304,8 Q312,20 320,8"
            fill="none"
            stroke="#C9A24D"
            strokeWidth="0.5"
          />
          <line
            x1="320"
            y1="20"
            x2="500"
            y2="20"
            stroke="#C9A24D"
            strokeWidth="0.5"
          />
        </svg>
      </div>
    </section>
  );
}
