// ─────────────────────────────────────────────────────────────────
// Hero.tsx  –  Full-screen cinematic hero section (enhanced)
// Matches reference design: video bg, script names, gold frame,
// lang toggle top-right, RSVP link, mute btn bottom-right
// ─────────────────────────────────────────────────────────────────
import React, { useState, useEffect, useRef } from "react";
import type { Translations, Lang } from "../data/translations";

interface Props {
  tr: Translations;
  lang: Lang;
  onToggleLang?: () => void;
  onToggleMute?: () => void;
  muted?: boolean;
  onRsvpClick?: () => void;
}

export default function Hero({
  tr,
  lang,
  onToggleLang,
  onToggleMute,
  muted = true,
  onRsvpClick,
}: Props) {
  const [loaded, setLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const isAr = lang === "ar";

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = muted;
    }
  }, [muted]);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Great+Vibes&family=Cinzel:wght@400;500&family=Amiri:ital,wght@0,400;1,400&display=swap');

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(22px); }
          to   { opacity: 1; transform: translateY(0);    }
        }
        @keyframes float {
          0%,100% { transform: translateY(0);    }
          50%     { transform: translateY(-9px); }
        }
        @keyframes shimmer {
          0%,100% { opacity: 1;    }
          50%     { opacity: 0.6; }
        }
        @keyframes scrollPulse {
          0%,100% { opacity: 0.9; transform: scaleY(1);   }
          50%     { opacity: 0.4; transform: scaleY(0.55); }
        }

        /* Lang pill */
        .hl-lang-pill {
          position: absolute;
          top: 18px;
          z-index: 10;
          display: flex;
          gap: 2px;
          background: rgba(10,10,10,0.42);
          backdrop-filter: blur(6px);
          border: 1px solid rgba(255,255,255,0.18);
          border-radius: 999px;
          padding: 4px 5px;
        }
        .hl-lang-pill button {
          background: transparent;
          border: none;
          color: rgba(255,255,255,0.55);
          font-family: 'Cinzel', serif;
          font-size: 11px;
          letter-spacing: 1px;
          padding: 5px 16px;
          border-radius: 999px;
          cursor: pointer;
          transition: all 0.2s;
        }
        .hl-lang-pill button.active {
          background: rgba(255,255,255,0.14);
          color: #fff;
        }

        /* Mute btn */
        .hl-mute {
          position: absolute;
          bottom: 22px;
          z-index: 10;
          width: 42px; height: 42px;
          border-radius: 50%;
          background: rgba(10,10,10,0.42);
          backdrop-filter: blur(6px);
          border: 1px solid rgba(255,255,255,0.18);
          color: #fff;
          font-size: 15px;
          display: flex; align-items: center; justify-content: center;
          cursor: pointer;
          transition: background 0.2s;
        }
        .hl-mute:hover { background: rgba(0,0,0,0.65); }

        /* Names */
        .hl-name {
          font-family: 'Great Vibes', cursive;
          font-size: clamp(76px, 18vw, 152px);
          color: #fff;
          top: 5%
          line-height: 1.02;
          text-shadow: 0 6px 48px rgba(0,0,0,0.35), 0 2px 10px rgba(0,0,0,0.18);
          letter-spacing: 2px;
          display: block;
          animation: fadeUp 1.1s ease 0.6s both, float 8s ease-in-out 2s infinite;
        }
        .hl-name-ar {
          font-family: 'Amiri', serif;
          font-style: italic;
          font-size: clamp(64px, 14vw, 128px);
          color: #fff;
          line-height: 1.08;
          text-shadow: 0 6px 48px rgba(0,0,0,0.35), 0 2px 10px rgba(0,0,0,0.18);
          letter-spacing: 4px;
          display: block;
          animation: fadeUp 1.1s ease 0.6s both, float 8s ease-in-out 2s infinite;
        }

        /* Scroll cue */
.hl-scroll {
  gap: 4px;
  color: rgba(255,255,255,0.85);
  font-family: 'Cinzel', serif;
  font-size: 10px;
  letter-spacing: 3px;
  text-transform: uppercase;
}

.hl-scroll-text {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  opacity: 0.85;
}

.hl-scroll-text span.ar {
  font-family: 'Amiri', serif;
  letter-spacing: 0;
  font-size: 11px;
}

.hl-scroll-arrow {
  font-size: 16px;
  line-height: 1;
  animation: float 2.4s ease-in-out infinite;
}

.hl-scroll-line {
  width: 1px;
  height: 42px;
  background: linear-gradient(
    to bottom,
    rgba(201,162,77,0.9),
    rgba(201,162,77,0.15),
    transparent
  );
  animation: scrollPulse 1.7s ease-in-out infinite;
}

        
      `}</style>

      <section
        id="hero"
        style={{
          position: "relative",
          height: "100vh",
          minHeight: 620,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          direction: isAr ? "rtl" : "ltr",
        }}
      >
        {/* ── VIDEO BACKGROUND ── */}
        <video
          ref={videoRef}
          autoPlay
          loop
          muted={muted}
          playsInline
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
            opacity: loaded ? 1 : 0,
            transition: "opacity 1.3s ease",
            filter: "brightness(0.75)",
          }}
        >
          <source
            src="https://premiumelegante.thedigitalyes.com/assets/hero-video-BkP1eoiB.mp4"
            type="video/mp4"
          />
        </video>

        {/* Gradient: transparent → page-bg at bottom */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 1,
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.06) 0%, rgba(0,0,0,0.28) 52%, rgba(247,243,238,1) 100%)",
          }}
        />
        {/* Radial vignette */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 1,
            background:
              "radial-gradient(ellipse at center, transparent 35%, rgba(0,0,0,0.32) 100%)",
          }}
        />

        {/* ── GOLD FRAME ── */}
        <div
          style={{
            position: "absolute",
            inset: 18,
            zIndex: 2,
            border: "1px solid rgba(201,162,77,0.26)",
            pointerEvents: "none",
          }}
        >
          {[
            {
              top: -1,
              left: -1,
              borderTop: "2px solid #C9A24D",
              borderLeft: "2px solid #C9A24D",
            },
            {
              top: -1,
              right: -1,
              borderTop: "2px solid #C9A24D",
              borderRight: "2px solid #C9A24D",
            },
            {
              bottom: -1,
              left: -1,
              borderBottom: "2px solid #C9A24D",
              borderLeft: "2px solid #C9A24D",
            },
            {
              bottom: -1,
              right: -1,
              borderBottom: "2px solid #C9A24D",
              borderRight: "2px solid #C9A24D",
            },
          ].map((s, i) => (
            <div
              key={i}
              style={{ position: "absolute", width: 28, height: 28, ...s }}
            />
          ))}
        </div>
        <div
          style={{
            position: "absolute",
            inset: 27,
            zIndex: 2,
            border: "1px solid rgba(201,162,77,0.09)",
            pointerEvents: "none",
          }}
        />

        {/* ── CONTENT ── */}
        <div
          style={{
            position: "relative",
            zIndex: 3,
            textAlign: "center",
            padding: "0 24px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {/* Tag line */}
          <p
            style={{
              fontFamily: "'Cinzel', serif",
              fontSize: "clamp(9px,1.5vw,11px)",
              letterSpacing: 7,
              textTransform: "uppercase",
              color: "#fff",
              margin: "0 0 26px",
              animation: "fadeUp 1s ease 0.3s both",
            }}
          >
            {tr.gettingMarried}
          </p>

          {/* Groom name */}
          <span
            className={isAr ? "hl-name-ar" : "hl-name"}
            style={{ animationDelay: "0.75s,2.2s" }}
          >
            {tr.groomName}
          </span>

          {/* Ampersand */}
          <span
            style={{
              display: "block",
              fontFamily: "'Great Vibes', cursive",
              fontSize: "clamp(42px,8vw,68px)",
              color: "#C9A24D",
              lineHeight: 1,
              margin: "4px 0",
              animation: "shimmer 3s ease-in-out 1.5s infinite",
            }}
          >
            &amp;
          </span>

          {/* Bride name */}
          <span className={isAr ? "hl-name-ar" : "hl-name"}>
            {tr.brideName}
          </span>

          {/* Divider */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 14,
              margin: "26px auto 20px",
              maxWidth: 230,
              animation: "fadeUp 1s ease 1s both",
            }}
          >
            <div
              style={{
                flex: 1,
                height: 1,
                background:
                  "linear-gradient(90deg, transparent, rgba(201,162,77,0.85))",
              }}
            />
            <svg width="13" height="13" viewBox="0 0 20 20">
              <path
                d="M10,0 L12,8 L20,10 L12,12 L10,20 L8,12 L0,10 L8,8 Z"
                fill="#fff"
              />
            </svg>
            <div
              style={{
                flex: 1,
                height: 1,
                background:
                  "linear-gradient(90deg, rgba(201,162,77,0.85), transparent)",
              }}
            />
          </div>

          {/* Date */}
          <p
            style={{
              fontFamily: "'Cinzel', serif",
              fontSize: "clamp(10px,1.8vw,13px)",
              letterSpacing: 4,
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.90)",
              margin: "0 0 16px",
              animation: "fadeUp 1s ease 1.2s both",
            }}
          >
            {tr.heroDate}
          </p>
        </div>

        {/* ── SCROLL CUE ── */}
        <button
          onClick={() =>
            document
              .getElementById("countdown")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          style={{
            position: "absolute",
            bottom: 22,
            left: "20%",
            transform: "translateX(-50%)",
            background: "none",
            border: "none",
            cursor: "pointer",
            zIndex: 3,
            animation: "fadeUp 1s ease 1.8s both",
          }}
          aria-label="Scroll"
        >
          <div
            className="hl-scroll"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {/* Text */}
            <div className="hl-scroll-text">
              <span>SCROLL</span>
              <span className="ar">اسحب للأسفل</span>
            </div>

            {/* Arrow */}
            <div className="hl-scroll-arrow">↓</div>

            {/* Line */}
            <div className="hl-scroll-line" />
          </div>
        </button>

        {/* ── MUTE BUTTON ── */}
        {onToggleMute && (
          <button
            className="hl-mute"
            style={{ [isAr ? "left" : "right"]: 20 }}
            onClick={onToggleMute}
            aria-label={muted ? tr.unmuteBtn : tr.muteBtn}
          >
            {muted ? "🔇" : "🔊"}
          </button>
        )}
      </section>
    </>
  );
}
