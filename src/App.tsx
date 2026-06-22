// ─────────────────────────────────────────────────────────────────
// App.tsx (with landing animation instead of envelope)
// ─────────────────────────────────────────────────────────────────
import React, { useState, useRef, useEffect } from "react";

import { translations } from "./data/translations";
import type { Lang } from "./data/translations";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Countdown from "./components/Countdown";
import Welcome from "./components/Welcome";
import Details from "./components/Details";
import Halls from "./components/Halls";
import Menu from "./components/Menu";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";
import MusicPlayer from "./components/MusicPlayer";

export default function App() {
  const [lang, setLang] = useState<Lang>("en");
  const [introDone, setIntroDone] = useState(false);
  const [muted, setMuted] = useState(true);
  const [showScrollTop, setShowScrollTop] = useState(false);

  const audioRef = useRef<HTMLAudioElement>(null);

  const tr = translations[lang];

  // set direction + language
  useEffect(() => {
    document.documentElement.dir = tr.dir;
    document.documentElement.lang = lang;
  }, [lang, tr.dir]);

  // 🎬 INTRO ANIMATION TIMER — matches hpFadeOut start (3.5s) + duration (1.2s)
  useEffect(() => {
    const timer = setTimeout(() => {
      setIntroDone(true);
    }, 4700); // total Harir Palace intro sequence duration

    return () => clearTimeout(timer);
  }, []);

  // 🎵 start music after intro
  useEffect(() => {
    if (!introDone) return;

    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = 0.7;
    audio
      .play()
      .then(() => setMuted(false))
      .catch(() => {});
  }, [introDone]);

  const handleToggleMute = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (muted) {
      audio.play().catch(() => {});
      setMuted(false);
    } else {
      audio.pause();
      setMuted(true);
    }
  };

  // scroll button
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div style={{ overflowX: "hidden" }}>
      {/* AUDIO */}
      <audio
        ref={audioRef}
        loop
        preload="auto"
        src="https://res.cloudinary.com/dfqpf2szg/video/upload/v1772412638/harumachimusic-palace-garden-386499_aus7gm.mp3"
      />

      {/* 🏛️ HARIR PALACE INTRO — fonts, keyframes & soft romantic reveal */}
      {!introDone && (
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Alex+Brush&family=Cormorant:ital,wght@0,400;0,500;1,400&display=swap');

          @keyframes hpFadeOut {
            to { opacity: 0; visibility: hidden; }
          }
          @keyframes hpRiseIn {
            0%   { opacity: 0; transform: translateY(10px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          @keyframes hpScriptIn {
            0%   { opacity: 0; transform: translateY(14px) scale(0.96); }
            100% { opacity: 1; transform: translateY(0) scale(1); }
          }
          @keyframes hpRuleGrow {
            from { width: 0; opacity: 0; }
            to   { opacity: 1; }
          }
          @keyframes hpCornerFade {
            to { opacity: 1; }
          }
          @keyframes hpDiamondPulse {
            0%, 100% { opacity: 0.5; transform: rotate(45deg) scale(1); }
            50%      { opacity: 1; transform: rotate(45deg) scale(1.15); }
          }
          @keyframes hpGlow {
            0%, 100% { opacity: 0.35; }
            50%      { opacity: 0.7; }
          }
          .hp-corner {
            opacity: 0;
            animation: hpCornerFade 1s ease 0.1s forwards;
          }
          .hp-eyebrow {
            opacity: 0;
            animation: hpRiseIn 0.9s ease 0.5s forwards;
          }
          .hp-script {
            opacity: 0;
            animation: hpScriptIn 1.1s cubic-bezier(0.2,0.8,0.2,1) 1s forwards;
          }
          .hp-amp {
            opacity: 0;
            animation: hpScriptIn 1s cubic-bezier(0.2,0.8,0.2,1) 1.7s forwards;
          }
          .hp-rule {
            width: 0;
            animation: hpRuleGrow 0.8s ease 2.3s forwards;
          }
          .hp-subtitle {
            opacity: 0;
            animation: hpRiseIn 0.9s ease 2.6s forwards;
          }
          .hp-glow {
            animation: hpGlow 4s ease-in-out 2.9s infinite;
          }
          @media (prefers-reduced-motion: reduce) {
            .hp-corner, .hp-eyebrow, .hp-script, .hp-amp, .hp-rule, .hp-subtitle, .hp-glow {
              animation: none !important;
              opacity: 1 !important;
              width: auto !important;
            }
          }
        `}</style>
      )}

      {/* 🏛️ INTRO ANIMATION SCREEN — Harir Palace style */}
      {!introDone && (
        <div style={styles.intro}>
          <div style={styles.vignette} />

          {/* thin gold corner brackets, like the hero frame */}
          <div
            className="hp-corner"
            style={{ ...styles.cornerBracket, ...styles.cornerTL }}
          />
          <div
            className="hp-corner"
            style={{ ...styles.cornerBracket, ...styles.cornerTR }}
          />
          <div
            className="hp-corner"
            style={{ ...styles.cornerBracket, ...styles.cornerBL }}
          />
          <div
            className="hp-corner"
            style={{ ...styles.cornerBracket, ...styles.cornerBR }}
          />

          {/* soft ambient glow behind the names */}
          <div className="hp-glow" style={styles.ambientGlow} />

          <div style={styles.contentColumn}>
            {/* diamond logo mark, echoing the navbar emblem */}
            <div className="hp-corner" style={styles.diamondLogo}>
              <span style={styles.diamondShape} />
            </div>

            <div className="hp-eyebrow" style={styles.eyebrow}>
              We Are Celebrating Our Wedding
            </div>

            <div style={styles.scriptBlock}>
              <div className="hp-script" style={styles.scriptName}>
                Basil
              </div>
              <div className="hp-amp" style={styles.scriptAmp}>
                &amp;
              </div>
              <div className="hp-script" style={styles.scriptName}>
                Islam
              </div>
            </div>

            <span className="hp-rule" style={styles.rule} />

            <div className="hp-subtitle" style={styles.subtitle}>
              Harir Palace · 29 July 2026
            </div>
          </div>
        </div>
      )}

      {/* MAIN APP */}
      {introDone && (
        <>
          <Navbar
            tr={tr}
            lang={lang}
            setLang={setLang}
            muted={muted}
            onToggleMute={handleToggleMute}
          />

          <main>
            <Hero tr={tr} lang={lang} />
            <Countdown tr={tr} />
            <Welcome tr={tr} lang={lang} />
            <Details tr={tr} lang={lang} />
            <Halls tr={tr} lang={lang} />
            <Menu tr={tr} lang={lang} />
            <Gallery tr={tr} lang={lang} />
          </main>

          <Footer tr={tr} lang={lang} />

          <MusicPlayer tr={tr} muted={muted} onToggle={handleToggleMute} />
        </>
      )}

      {/* SCROLL TO TOP */}
      {showScrollTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          style={styles.scrollTop}
          onMouseOver={(e) => {
            e.currentTarget.style.background = "#C9A24D";
            e.currentTarget.style.color = "#fff";
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.background = "rgba(0,0,0,0.55)";
            e.currentTarget.style.color = "#C9A24D";
          }}
        >
          ↑
        </button>
      )}
    </div>
  );
}

/* ──────────────────────────────────────────────────────────────── */
/* ✨ STYLES (landing animation) */
/* ──────────────────────────────────────────────────────────────── */

const styles: Record<string, React.CSSProperties> = {
  intro: {
    position: "fixed",
    inset: 0,
    background:
      "radial-gradient(circle at 50% 35%, #3a2716 0%, #2c1a0e 55%, #21130a 100%)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 9999,
    overflow: "hidden",
    animation: "hpFadeOut 1.2s ease 3.5s forwards",
    fontFamily: "'Cormorant', Georgia, serif",
  },

  vignette: {
    position: "absolute",
    inset: 0,
    background:
      "radial-gradient(circle at 50% 42%, transparent 35%, rgba(20,11,5,0.55) 78%, rgba(15,8,4,0.85) 100%)",
    pointerEvents: "none",
  },

  ambientGlow: {
    position: "absolute",
    width: "70vw",
    maxWidth: 520,
    height: "70vw",
    maxHeight: 520,
    borderRadius: "50%",
    background:
      "radial-gradient(circle, rgba(176,141,76,0.22) 0%, transparent 70%)",
    filter: "blur(10px)",
    pointerEvents: "none",
  },

  cornerBracket: {
    position: "absolute",
    width: 34,
    height: 34,
    border: "1px solid #B08D4C",
  },
  cornerTL: { top: 22, left: 22, borderWidth: "1px 0 0 1px" },
  cornerTR: { top: 22, right: 22, borderWidth: "1px 1px 0 0" },
  cornerBL: { bottom: 22, left: 22, borderWidth: "0 0 1px 1px" },
  cornerBR: { bottom: 22, right: 22, borderWidth: "0 1px 1px 0" },

  contentColumn: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "0 32px",
    textAlign: "center",
  },

  diamondLogo: {
    width: 30,
    height: 30,
    borderRadius: "4px",
    border: "1px solid #B08D4C",
    transform: "rotate(45deg)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "26px",
  },

  diamondShape: {
    width: 6,
    height: 6,
    borderRadius: "1px",
    background: "#B08D4C",
  },

  eyebrow: {
    color: "#cdb88a",
    fontFamily: "'Cormorant', Georgia, serif",
    fontSize: "12px",
    letterSpacing: "4px",
    textTransform: "uppercase",
    fontWeight: 500,
  },

  scriptBlock: {
    marginTop: "8px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  scriptName: {
    fontFamily: "'Alex Brush', cursive",
    fontSize: "clamp(56px, 13vw, 92px)",
    color: "#FBF6EC",
    lineHeight: 1.05,
  },

  scriptAmp: {
    fontFamily: "'Alex Brush', cursive",
    fontSize: "clamp(30px, 7vw, 46px)",
    color: "#B08D4C",
    margin: "-4px 0",
  },

  rule: {
    display: "block",
    height: "1px",
    marginTop: "22px",
    marginBottom: "16px",
    background:
      "linear-gradient(to right, transparent, #B08D4C 30%, #B08D4C 70%, transparent)",
  },

  subtitle: {
    color: "#cdb88a",
    fontSize: "13px",
    letterSpacing: "2.5px",
    textTransform: "uppercase",
    fontFamily: "'Cormorant', Georgia, serif",
  },

  scrollTop: {
    position: "fixed",
    bottom: 28,
    left: 28,
    width: 46,
    height: 46,
    borderRadius: "50%",
    border: "1px solid rgba(201,162,77,0.6)",
    background: "rgba(0,0,0,0.55)",
    color: "#C9A24D",
    fontSize: 20,
    cursor: "pointer",
    zIndex: 999,
    backdropFilter: "blur(6px)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "all 0.3s",
    boxShadow: "0 8px 20px rgba(0,0,0,0.25)",
  },
};
