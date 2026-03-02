// ─────────────────────────────────────────────────────────────────
// Welcome.tsx  –  Welcome message + image slider gallery
// ─────────────────────────────────────────────────────────────────
import React, { useState, useEffect, useCallback } from "react";
import { useInView } from "../hooks/hooks";
import { GALLERY_IMAGES } from "../data/translations";
import type { Translations, Lang } from "../data/translations";

interface Props {
  tr: Translations;
  lang: Lang;
}

export default function Welcome({ tr, lang }: Props) {
  const [headerRef, headerVis] = useInView();
  const [textRef, textVis] = useInView();
  const [sliderRef, sliderVis] = useInView();
  const [idx, setIdx] = useState(0);
  const [dragging, setDragging] = useState(false);
  const [dragStart, setDragStart] = useState(0);

  const total = GALLERY_IMAGES.length;
  const prev = useCallback(
    () => setIdx((i) => (i - 1 + total) % total),
    [total],
  );
  const next = useCallback(() => setIdx((i) => (i + 1) % total), [total]);

  // Auto-advance
  useEffect(() => {
    const id = setInterval(next, 4500);
    return () => clearInterval(id);
  }, [next]);

  const onTouchStart = (e: React.TouchEvent) => {
    setDragging(true);
    setDragStart(e.touches[0].clientX);
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (!dragging) return;
    setDragging(false);
    const delta = e.changedTouches[0].clientX - dragStart;
    if (delta > 50) prev();
    else if (delta < -50) next();
  };

  return (
    <section
      style={{
        background: "linear-gradient(180deg, #F7F3EE 0%, #EDE3D0 100%)",
        overflow: "hidden",
      }}
    >
      {/* ── Welcome text ── */}
      <div
        style={{
          maxWidth: 720,
          margin: "0 auto",
          padding: "clamp(80px,12vw,140px) 24px 60px",
          textAlign: "center",
        }}
      >
        <div
          ref={headerRef as React.RefObject<HTMLDivElement>}
          style={{
            opacity: headerVis ? 1 : 0,
            transform: headerVis ? "translateY(0)" : "translateY(32px)",
            transition: "opacity 1s ease, transform 1s ease",
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
              marginBottom: 12,
            }}
          >
            ◆ &nbsp; {lang === "ar" ? "رسالتنا" : "A note from us"} &nbsp; ◆
          </span>

          <h2
            style={{
              fontFamily:
                lang === "ar" ? "'Amiri', serif" : "'Great Vibes', cursive",
              fontSize: "clamp(52px,8vw,84px)",
              fontStyle: lang === "ar" ? "italic" : "normal",
              color: "#2C1A0E",
              lineHeight: 1.1,
              marginBottom: 28,
            }}
          >
            {tr.welcomeTitle}
          </h2>

          {/* Divider */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 14,
              margin: "0 auto 32px",
              maxWidth: 300,
            }}
          >
            <div
              style={{
                flex: 1,
                height: 1,
                background:
                  "linear-gradient(90deg, transparent, #C9A24D, transparent)",
              }}
            />
            <svg width="16" height="16" viewBox="0 0 16 16">
              <path
                d="M8,0 L9.5,6.5 L16,8 L9.5,9.5 L8,16 L6.5,9.5 L0,8 L6.5,6.5 Z"
                fill="#C9A24D"
              />
            </svg>
            <div
              style={{
                flex: 1,
                height: 1,
                background:
                  "linear-gradient(90deg, transparent, #C9A24D, transparent)",
              }}
            />
          </div>
        </div>

        <div
          ref={textRef as React.RefObject<HTMLDivElement>}
          style={{
            opacity: textVis ? 1 : 0,
            transform: textVis ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 1s ease 0.15s, transform 1s ease 0.15s",
          }}
        >
          <p
            style={{
              fontFamily:
                lang === "ar"
                  ? "'Cairo', sans-serif"
                  : "'Cormorant Garamond', serif",
              fontSize: "clamp(16px,2vw,20px)",
              fontStyle: "italic",
              lineHeight: 1.9,
              color: "#5a3d2b",
              letterSpacing: 0.3,
            }}
          >
            {tr.welcomeText}
          </p>
        </div>
      </div>

      {/* ── Slider gallery ── */}
      <div
        ref={sliderRef as React.RefObject<HTMLDivElement>}
        style={{
          padding: "0 0 clamp(80px,10vw,120px)",
          opacity: sliderVis ? 1 : 0,
          transform: sliderVis ? "translateY(0)" : "translateY(40px)",
          transition: "opacity 1.1s ease 0.2s, transform 1.1s ease 0.2s",
        }}
      >
        {/* Section header */}
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <span
            style={{
              fontFamily: "'Cinzel', serif",
              fontSize: 9,
              letterSpacing: 6,
              textTransform: "uppercase",
              color: "#C9A24D",
              display: "block",
              marginBottom: 12,
            }}
          >
            ◆ &nbsp; {tr.ourMomentsTitle} &nbsp; ◆
          </span>
          <p
            style={{
              fontFamily:
                lang === "ar"
                  ? "'Cairo', sans-serif"
                  : "'Cormorant Garamond', serif",
              fontSize: 16,
              fontStyle: "italic",
              color: "#8a6a50",
            }}
          >
            {tr.ourMomentsSub}
          </p>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              margin: "20px auto 0",
              maxWidth: 220,
            }}
          >
            <div
              style={{
                flex: 1,
                height: 1,
                background:
                  "linear-gradient(90deg, transparent, #C9A24D, transparent)",
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
                  "linear-gradient(90deg, transparent, #C9A24D, transparent)",
              }}
            />
          </div>
        </div>

        {/* Main slider */}
        <div
          style={{
            position: "relative",
            maxWidth: 480,
            margin: "0 auto",
            padding: "0 48px",
          }}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          {/* Overflow frame */}
          <div
            style={{
              overflow: "hidden",
              borderRadius: 3,
            }}
          >
            <div
              style={{
                display: "flex",
                transform: `translateX(${lang === "ar" ? idx * 100 : -idx * 100}%)`,
                transition: "transform 0.8s cubic-bezier(0.4,0,0.2,1)",
              }}
            >
              {GALLERY_IMAGES.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt={`moment-${i}`}
                  style={{
                    width: "100%",
                    height: "auto",
                    flexShrink: 0,
                    objectFit: "contain",
                    display: "block",
                    filter: "brightness(0.92) saturate(0.95)",
                  }}
                />
              ))}
            </div>
          </div>

          {/* Progress bar */}
          <div
            style={{
              position: "absolute",
              bottom: -2,
              left: 48,
              right: 48,
              height: 2,
              background: "rgba(201,162,77,0.2)",
              borderRadius: 1,
            }}
          >
            <div
              style={{
                height: "100%",
                background: "#C9A24D",
                borderRadius: 1,
                width: `${((idx + 1) / total) * 100}%`,
                transition: "width 0.8s cubic-bezier(0.4,0,0.2,1)",
              }}
            />
          </div>

          {/* Prev/Next */}
          {[
            { fn: prev, label: "‹", pos: { left: 0 } },
            { fn: next, label: "›", pos: { right: 0 } },
          ].map(({ fn, label, pos }) => (
            <button
              key={label}
              onClick={fn}
              style={{
                position: "absolute",
                top: "50%",
                transform: "translateY(-50%)",
                width: 40,
                height: 40,
                borderRadius: "50%",
                background: "rgba(247,243,238,0.95)",
                border: "1px solid rgba(201,162,77,0.4)",
                color: "#C9A24D",
                fontSize: 22,
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 4px 20px rgba(44,26,14,0.12)",
                transition: "all 0.3s",
                ...pos,
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.background = "#C9A24D";
                e.currentTarget.style.color = "#fff";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.background = "rgba(247,243,238,0.95)";
                e.currentTarget.style.color = "#C9A24D";
              }}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Dots */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 8,
            marginTop: 24,
          }}
        >
          {GALLERY_IMAGES.map((_, i) => (
            <button
              key={i}
              onClick={() => setIdx(i)}
              style={{
                width: i === idx ? 24 : 7,
                height: 7,
                borderRadius: 4,
                background: i === idx ? "#C9A24D" : "rgba(201,162,77,0.3)",
                border: "none",
                cursor: "pointer",
                padding: 0,
                transition: "all 0.4s cubic-bezier(0.4,0,0.2,1)",
              }}
            />
          ))}
        </div>

        {/* Slide counter */}
        <p
          style={{
            textAlign: "center",
            marginTop: 12,
            fontFamily: "'Cinzel', serif",
            fontSize: 10,
            letterSpacing: 3,
            color: "rgba(201,162,77,0.6)",
          }}
        >
          {String(idx + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
        </p>

        {/* Decorative image under slider */}
        <div style={{ textAlign: "center", marginTop: 40 }}>
          <img
            src="https://premiumelegante.thedigitalyes.com/assets/wedding-rings-_6IG5mf0.png"
            alt="decoration"
            style={{
              maxWidth: 120, // الحجم المناسب للزينة
              width: "20%",
              height: "auto",
              opacity: 0.85, // شفاف قليل
              display: "inline-block",
            }}
          />
        </div>
      </div>
    </section>
  );
}
