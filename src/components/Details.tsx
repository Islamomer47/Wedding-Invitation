// ─────────────────────────────────────────────────────────────────
// Details.tsx  –  Wedding venue details & date
// ─────────────────────────────────────────────────────────────────
import React from "react";
import { useInView } from "../hooks/hooks";
import type { Translations, Lang } from "../data/translations";

interface Props {
  tr: Translations;
  lang: Lang;
}

export default function Details({ tr, lang }: Props) {
  const [headRef, headVis] = useInView();
  const [cardRef, cardVis] = useInView();

  return (
    <section
      id="details"
      style={{
        position: "relative",
        background:
          "linear-gradient(145deg, #1e1008 0%, #2C1A0E 50%, #180d06 100%)",
        padding: "clamp(80px,12vw,140px) 24px",
        textAlign: "center",
        overflow: "hidden",
      }}
    >
      {/* Noise texture */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.07'/%3E%3C/svg%3E\")",
          opacity: 0.4,
          pointerEvents: "none",
          mixBlendMode: "overlay",
        }}
      />

      {/* Frame */}
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
        ref={headRef as React.RefObject<HTMLDivElement>}
        style={{
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
            marginBottom: 16,
          }}
        >
          ◆ &nbsp; {tr.detailsTitle} &nbsp; ◆
        </span>
        <p
          style={{
            fontFamily:
              lang === "ar"
                ? "'Cairo', sans-serif"
                : "'Cormorant Garamond', serif",
            fontStyle: "italic",
            fontSize: 18,
            color: "rgba(247,243,238,0.45)",
          }}
        >
          {tr.detailsTagline}
        </p>
      </div>

      {/* Palace card */}
      <div
        ref={cardRef as React.RefObject<HTMLDivElement>}
        style={{
          opacity: cardVis ? 1 : 0,
          transform: cardVis
            ? "translateY(0) scale(1)"
            : "translateY(40px) scale(0.97)",
          transition: "opacity 1.1s ease 0.2s, transform 1.1s ease 0.2s",
          maxWidth: 500,
          margin: "0 auto",
        }}
      >
        {/* Decorative image for Details page */}
        <section
          style={{
            width: "100%",
            textAlign: "center",
            margin: "60px 0",
            position: "relative",
          }}
        >
          <img
            src="https://premiumelegante.thedigitalyes.com/assets/venue-hedsor-DSq2yQw3.png"
            alt="venue decoration"
            style={{
              width: "60%",
              maxWidth: 800,
              height: "auto",
              borderRadius: 8,
              boxShadow: "0 16px 40px rgba(0,0,0,0.15)",
              display: "inline-block",
            }}
          />
        </section>
        <div
          style={{
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(201,162,77,0.28)",
            borderRadius: 4,
            padding: "clamp(28px,5vw,52px) clamp(24px,4vw,44px)",
            position: "relative",
            backdropFilter: "blur(4px)",
          }}
        >
          {/* Inner frame */}
          <div
            style={{
              position: "absolute",
              inset: 10,
              border: "1px solid rgba(201,162,77,0.08)",
              pointerEvents: "none",
            }}
          />

          {/* Palace illustration */}
          <div
            style={{
              marginBottom: 32,
              position: "relative",
              overflow: "hidden",
              borderRadius: 3,
            }}
          >
            <img
              src="https://res.cloudinary.com/dfqpf2szg/image/upload/v1772406535/WhatsApp_Image_2026-03-02_at_2.07.46_AM_bui4ix.jpg"
              alt="Harir Palace"
              style={{
                width: "100%",
                maxWidth: 380,
                filter: "sepia(40%) brightness(0.75) contrast(1.1)",
                borderRadius: 3,
              }}
            />
            {/* Gradient over image */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(to bottom, transparent 40%, rgba(30,16,8,0.7) 100%)",
              }}
            />
          </div>

          {/* Venue name */}
          <h3
            style={{
              fontFamily:
                lang === "ar" ? "'Amiri', serif" : "'Great Vibes', cursive",
              fontSize: "clamp(36px,6vw,52px)",
              fontStyle: lang === "ar" ? "italic" : "normal",
              color: "#C9A24D",
              marginBottom: 20,
              textShadow: "0 4px 20px rgba(201,162,77,0.25)",
            }}
          >
            {tr.detailsVenueName}
          </h3>

          {/* Separator */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              margin: "0 auto 24px",
              maxWidth: 200,
            }}
          >
            <div
              style={{
                flex: 1,
                height: 1,
                background:
                  "linear-gradient(90deg, transparent, rgba(201,162,77,0.5))",
              }}
            />
            <div
              style={{
                width: 5,
                height: 5,
                background: "#C9A24D",
                transform: "rotate(45deg)",
              }}
            />
            <div
              style={{
                flex: 1,
                height: 1,
                background:
                  "linear-gradient(90deg, rgba(201,162,77,0.5), transparent)",
              }}
            />
          </div>

          {/* Day label */}
          <p
            style={{
              fontFamily: "'Cinzel', serif",
              fontSize: 11,
              letterSpacing: 5,
              textTransform: "uppercase",
              color: "#C9A24D",
              marginBottom: 12,
            }}
          >
            {tr.detailsDay}
          </p>

          {/* Date & time */}
          <p
            style={{
              fontFamily:
                lang === "ar"
                  ? "'Cairo', sans-serif"
                  : "'Cormorant Garamond', serif",
              fontSize: "clamp(18px,3vw,24px)",
              color: "rgba(247,243,238,0.88)",
              marginBottom: 8,
              letterSpacing: 1,
            }}
          >
            {tr.detailsDate}
          </p>
          <p
            style={{
              fontFamily: "'Cinzel', serif",
              fontSize: 13,
              letterSpacing: 3,
              color: "rgba(201,162,77,0.8)",
              marginBottom: 36,
            }}
          >
            {tr.detailsTime}
          </p>

          {/* Map button */}
          <a
            href="https://maps.app.goo.gl/5S8t7Fqp8rkPAvFUA?g_st=ic"
            target="_blank"
            rel="noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              border: "1px solid rgba(201,162,77,0.55)",
              color: "#C9A24D",
              padding: "13px 30px",
              fontFamily: "'Cinzel', serif",
              fontSize: 9,
              letterSpacing: 4,
              textTransform: "uppercase",
              borderRadius: 2,
              transition: "all 0.3s",
              position: "relative",
              overflow: "hidden",
            }}
            onMouseOver={(e) => {
              const el = e.currentTarget;
              el.style.background = "#C9A24D";
              el.style.color = "#1a0f08";
            }}
            onMouseOut={(e) => {
              const el = e.currentTarget;
              el.style.background = "transparent";
              el.style.color = "#C9A24D";
            }}
          >
            <svg width="12" height="16" viewBox="0 0 12 16" fill="currentColor">
              <path d="M6 0C2.7 0 0 2.7 0 6c0 4.2 6 10 6 10s6-5.8 6-10c0-3.3-2.7-6-6-6zm0 8.5c-1.4 0-2.5-1.1-2.5-2.5S4.6 3.5 6 3.5s2.5 1.1 2.5 2.5S7.4 8.5 6 8.5z" />
            </svg>
            {tr.detailsLocationBtn}
          </a>
        </div>
      </div>
    </section>
  );
}
