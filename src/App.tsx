// ─────────────────────────────────────────────────────────────────
// App.tsx
// ─────────────────────────────────────────────────────────────────
import React, { useState, useRef, useEffect } from "react";

import { translations } from "./data/translations";
import type { Lang } from "./data/translations";

import EnvelopeLetter from "./components/EnvelopeLetter";
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
  const [opened, setOpened] = useState(false);
  const [muted, setMuted] = useState(true);
  const audioRef = useRef<HTMLAudioElement>(null);

  const tr = translations[lang];
  const [showScrollTop, setShowScrollTop] = useState(false);
  useEffect(() => {
    document.documentElement.dir = tr.dir;
    document.documentElement.lang = lang;
  }, [lang, tr.dir]);

  // 🔥 Start music AFTER user opens the letter
  const handleOpen = () => {
    setOpened(true);
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = 0.7;
    audio
      .play()
      .then(() => setMuted(false))
      .catch(() => {});
  };

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

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div style={{ overflowX: "hidden" }}>
      <audio
        ref={audioRef}
        loop
        preload="auto"
        src="https://res.cloudinary.com/dfqpf2szg/video/upload/v1772412638/harumachimusic-palace-garden-386499_aus7gm.mp3"
      />

      {!opened && (
        <EnvelopeLetter
          tr={tr}
          lang={lang}
          setLang={setLang}
          onOpen={handleOpen}
        />
      )}

      {opened && (
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

      {showScrollTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          style={{
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
          }}
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
