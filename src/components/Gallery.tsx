// ─────────────────────────────────────────────────────────────────
// Gallery.tsx  –  Masonry photo gallery with lightbox
// ─────────────────────────────────────────────────────────────────
import React, { useState } from "react";
import { useInView } from "../hooks/hooks";
import { GALLERY_IMAGES } from "../data/translations";
import type { Translations, Lang } from "../data/translations";

interface Props {
  tr: Translations;
  lang: Lang;
}

export default function Gallery({ tr, lang }: Props) {
  const [headRef, headVis] = useInView();
  const [gridRef, gridVis] = useInView();
  const [lightbox, setLightbox] = useState<string | null>(null);
  const [lightboxIdx, setLightboxIdx] = useState(0);

  const openLightbox = (src: string, idx: number) => {
    setLightbox(src);
    setLightboxIdx(idx);
  };
  const closeLightbox = () => setLightbox(null);
  const prevImg = () => {
    const i = (lightboxIdx - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length;
    setLightboxIdx(i);
    setLightbox(GALLERY_IMAGES[i]);
  };
  const nextImg = () => {
    const i = (lightboxIdx + 1) % GALLERY_IMAGES.length;
    setLightboxIdx(i);
    setLightbox(GALLERY_IMAGES[i]);
  };

  // Staggered masonry layout offsets
  const offsets = [0, 40, -20, 30, -30, 20, 0, -40];

  return (
    <>
      <section
        style={{
          background: "linear-gradient(180deg, #2C1A0E 0%, #1a0e06 100%)",
          padding: "clamp(80px,12vw,140px) 24px",
          overflow: "hidden",
          position: "relative",
        }}
      >
        {/* Noise */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.08'/%3E%3C/svg%3E\")",
            opacity: 0.35,
            pointerEvents: "none",
            mixBlendMode: "overlay",
          }}
        />

        <div style={{ maxWidth: 1080, margin: "0 auto" }}>
          {/* Header */}
          <div
            ref={headRef as React.RefObject<HTMLDivElement>}
            style={{
              textAlign: "center",
              opacity: headVis ? 1 : 0,
              transform: headVis ? "translateY(0)" : "translateY(28px)",
              transition: "opacity 1s ease, transform 1s ease",
              marginBottom: 56,
            }}
          >
            <span
              style={{
                fontFamily: "'Cinzel', serif",
                fontSize: 9,
                letterSpacing: 6,
                textTransform: "uppercase",
                color: "#C9A24D",
                display: "block",
                marginBottom: 14,
              }}
            >
              ◆ &nbsp; {tr.galleryTitle} &nbsp; ◆
            </span>
            <h2
              style={{
                fontFamily:
                  lang === "ar" ? "'Amiri', serif" : "'Great Vibes', cursive",
                fontSize: "clamp(44px,7vw,72px)",
                fontStyle: lang === "ar" ? "italic" : "normal",
                color: "#F7F3EE",
                lineHeight: 1.1,
                marginBottom: 20,
              }}
            >
              {tr.galleryTagline}
            </h2>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 14,
                margin: "0 auto",
                maxWidth: 280,
              }}
            >
              <div
                style={{
                  flex: 1,
                  height: 1,
                  background:
                    "linear-gradient(90deg, transparent, rgba(201,162,77,0.6), transparent)",
                }}
              />
              <div
                style={{
                  width: 6,
                  height: 6,
                  background: "#C9A24D",
                  transform: "rotate(45deg)",
                }}
              />
              <div
                style={{
                  flex: 1,
                  height: 1,
                  background:
                    "linear-gradient(90deg, transparent, rgba(201,162,77,0.6), transparent)",
                }}
              />
            </div>
          </div>

          {/* Masonry grid */}
          {/* Masonry grid */}
          <div
            ref={gridRef as React.RefObject<HTMLDivElement>}
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: 10,
              alignItems: "start",
            }}
          >
            {GALLERY_IMAGES.map((src, i) => (
              <div
                key={i}
                onClick={() => openLightbox(src, i)}
                style={{
                  marginTop: offsets[i] ?? 0,
                  overflow: "hidden",
                  cursor: "pointer",
                  borderRadius: 3,
                  position: "relative",
                  opacity: gridVis ? 1 : 0,
                  transform: gridVis ? "translateY(0)" : "translateY(48px)",
                  transition: `opacity 0.9s ease ${0.06 * i}s, transform 0.9s ease ${0.06 * i}s`,
                }}
              >
                <img
                  src={src}
                  alt={`gallery-${i}`}
                  style={{
                    width: "100%",
                    height: "auto",
                    objectFit: "contain",
                    display: "block",
                    filter: "brightness(0.82) saturate(0.88)",
                    transition:
                      "transform 0.7s cubic-bezier(0.4,0,0.2,1), filter 0.4s",
                  }}
                />
                {/* Overlay on hover */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(to top, rgba(201,162,77,0.18) 0%, transparent 60%)",
                    opacity: 0,
                    transition: "opacity 0.4s",
                    display: "flex",
                    alignItems: "flex-end",
                    justifyContent: "center",
                    padding: 12,
                  }}
                  onMouseOver={(e) => (e.currentTarget.style.opacity = "1")}
                  onMouseOut={(e) => (e.currentTarget.style.opacity = "0")}
                >
                  <div
                    style={{
                      width: 32,
                      height: 32,
                      border: "1px solid rgba(201,162,77,0.6)",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#C9A24D",
                      fontSize: 14,
                    }}
                  >
                    ⊕
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Decorative Locket Illustration */}
          <div
            style={{
              marginTop: 48,
              display: "flex",
              justifyContent: "center",
              opacity: gridVis ? 1 : 0,
              transform: gridVis ? "translateY(0)" : "translateY(24px)",
              transition: "opacity 1s ease, transform 1s ease",
            }}
          >
            <img
              src="https://premiumelegante.thedigitalyes.com/assets/locket-illustration-B7vFK6H-.png"
              alt="Decorative Locket"
              style={{
                maxWidth: 160,
                width: "100%",
                height: "auto",
                filter: "brightness(0.9) saturate(0.9)",
              }}
            />
          </div>
        </div>
      </section>

      {/* ── Lightbox ── */}
      {lightbox && (
        <div
          onClick={closeLightbox}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 900,
            background: "rgba(0,0,0,0.95)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            animation: "scaleIn 0.3s ease",
          }}
        >
          {/* Close */}
          <button
            onClick={closeLightbox}
            style={{
              position: "absolute",
              top: 24,
              right: 28,
              width: 44,
              height: 44,
              borderRadius: "50%",
              border: "1px solid rgba(201,162,77,0.4)",
              background: "transparent",
              color: "#C9A24D",
              fontSize: 20,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "all 0.3s",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.background = "#C9A24D";
              e.currentTarget.style.color = "#fff";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.color = "#C9A24D";
            }}
          >
            ✕
          </button>

          {/* Prev */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              prevImg();
            }}
            style={{
              position: "absolute",
              left: 20,
              top: "50%",
              transform: "translateY(-50%)",
              width: 48,
              height: 48,
              borderRadius: "50%",
              border: "1px solid rgba(201,162,77,0.3)",
              background: "rgba(201,162,77,0.1)",
              color: "#C9A24D",
              fontSize: 24,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "all 0.3s",
            }}
          >
            ‹
          </button>

          {/* Image */}
          <img
            src={lightbox}
            alt="lightbox"
            onClick={(e) => e.stopPropagation()}
            style={{
              maxWidth: "88vw",
              maxHeight: "88vh",
              objectFit: "contain",
              borderRadius: 3,
              boxShadow: "0 0 100px rgba(0,0,0,0.6)",
            }}
          />

          {/* Next */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              nextImg();
            }}
            style={{
              position: "absolute",
              right: 20,
              top: "50%",
              transform: "translateY(-50%)",
              width: 48,
              height: 48,
              borderRadius: "50%",
              border: "1px solid rgba(201,162,77,0.3)",
              background: "rgba(201,162,77,0.1)",
              color: "#C9A24D",
              fontSize: 24,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "all 0.3s",
            }}
          >
            ›
          </button>

          {/* Counter */}
          <p
            style={{
              position: "absolute",
              bottom: 24,
              left: "50%",
              transform: "translateX(-50%)",
              fontFamily: "'Cinzel', serif",
              fontSize: 10,
              letterSpacing: 4,
              color: "rgba(201,162,77,0.6)",
            }}
          >
            {String(lightboxIdx + 1).padStart(2, "0")} /{" "}
            {String(GALLERY_IMAGES.length).padStart(2, "0")}
          </p>
        </div>
      )}
    </>
  );
}
