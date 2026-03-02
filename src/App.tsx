// ─────────────────────────────────────────────────────────────────
// App.tsx
// ─────────────────────────────────────────────────────────────────
import React, { useState, useRef, useEffect } from "react";
import "./styles/globals.css";

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

  return (
    <div style={{ overflowX: "hidden" }}>
      <audio
        ref={audioRef}
        loop
        preload="auto"
        src="/assets/harumachimusic-palace-garden-386499.mp3"
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
    </div>
  );
}
