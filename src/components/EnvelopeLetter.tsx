// ─────────────────────────────────────────────────────────────────
// EnvelopeLetter.tsx
// Shows the poster image fullscreen → click starts video → video
// ends (or user skips) → invitation opens
// ─────────────────────────────────────────────────────────────────
import React, { useState, useRef, useEffect } from "react";
import type { Translations, Lang } from "../data/translations";

const POSTER =
  "https://premiumelegante.thedigitalyes.com/assets/intro-poster-new-BU7qGwfU.jpg";
const VIDEO =
  "https://premiumelegante.thedigitalyes.com/assets/intro-video-new-XmwQeafK.mp4";

interface Props {
  tr: Translations;
  lang: Lang;
  setLang: (l: Lang) => void;
  onOpen: () => void;
}

export default function EnvelopeLetter({ tr, lang, setLang, onOpen }: Props) {
  const [phase, setPhase] = useState<"poster" | "playing" | "done">("poster");
  const [videoReady, setVideoReady] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePosterClick = () => {
    if (phase !== "poster") return;
    setPhase("playing");
    // Small delay so the video element is visible before play()
    setTimeout(() => {
      videoRef.current?.play().catch(() => {});
    }, 80);
  };

  const handleVideoEnded = () => {
    triggerExit();
  };

  const handleSkip = () => {
    triggerExit();
  };

  const triggerExit = () => {
    setFadeOut(true);
    setTimeout(() => {
      setPhase("done");
      onOpen();
    }, 900);
  };

  // Preload video while poster is showing
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
    }
  }, []);

  return (
    <div
      onClick={phase === "poster" ? handlePosterClick : undefined}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 1000,
        cursor: phase === "poster" ? "pointer" : "default",
        background: "#000",
        opacity: fadeOut ? 0 : 1,
        transition: "opacity 0.9s ease",
        userSelect: "none",
      }}
    >
      {/* ── POSTER IMAGE ── */}
      <img
        src={POSTER}
        alt=""
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          opacity: phase === "poster" ? 1 : 0,
          transition: "opacity 0.5s ease",
          pointerEvents: "none",
        }}
      />

      {/* ── VIDEO ── */}
      <video
        ref={videoRef}
        src={VIDEO}
        poster={POSTER}
        playsInline
        preload="auto"
        onEnded={handleVideoEnded}
        onCanPlayThrough={() => setVideoReady(true)}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          opacity: phase === "playing" ? 1 : 0,
          transition: "opacity 0.5s ease",
        }}
      />

      {/* ── CLICK TO OPEN hint (on poster) ── */}
      {phase === "poster" && (
        <div
          style={{
            position: "absolute",
            bottom: 52,
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 14,
            animation: "hintPulse 2.4s ease-in-out infinite",
          }}
        ></div>
      )}

      <style>{`
        @keyframes hintPulse {
          0%, 100% { opacity: 0.8; transform: translateX(-50%) translateY(0); }
          50%       { opacity: 1;   transform: translateX(-50%) translateY(-5px); }
        }
        @keyframes ripple {
          0%   { transform: scale(1);   opacity: 1; }
          100% { transform: scale(1.5); opacity: 0; }
        }
      `}</style>
    </div>
  );
}
