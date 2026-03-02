// ─────────────────────────────────────────────────────────────────
// Menu.tsx  –  Evening delights / wedding menu timeline
// ─────────────────────────────────────────────────────────────────
import type { Translations, Lang } from '../data/translations';
import FadeIn from './FadeIn';
import { GoldDivider, FloralOrnament } from './Ornaments';

interface Props {
  tr: Translations;
  lang: Lang;
}

export default function Menu({ tr, lang }: Props) {
  const isAr = lang === 'ar';

  return (
    <section
      id="menu"
      style={{
        background: 'linear-gradient(180deg, #FAF6F0 0%, #F0E6D2 100%)',
        padding: '100px 24px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Faint background text */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        fontFamily: "'Cinzel', serif",
        fontSize: 'clamp(80px, 18vw, 220px)',
        color: 'rgba(201,162,77,0.04)',
        letterSpacing: 20,
        pointerEvents: 'none',
        userSelect: 'none',
        whiteSpace: 'nowrap',
      }}>
        MENU
      </div>

      <div style={{ maxWidth: 680, margin: '0 auto', position: 'relative' }}>
        {/* Header */}
        <FadeIn style={{ textAlign: 'center', marginBottom: 60 }}>
          <span className="section-tag" style={{ color: '#8a5a20' }}>{tr.menuTitle}</span>
          <h2 style={{
            fontFamily: isAr ? "'Amiri', serif" : "'Great Vibes', cursive",
            fontSize: isAr ? 'clamp(38px, 7vw, 60px)' : 'clamp(50px, 8vw, 76px)',
            color: '#2C1A0E',
            fontStyle: isAr ? 'italic' : 'normal',
            lineHeight: 1.1,
          }}>
            {tr.menuTagline}
          </h2>
          <GoldDivider width={260} />
        </FadeIn>

        {/* Timeline */}
        <div style={{ position: 'relative' }}>
          {/* Timeline vertical line */}
          <div style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            [isAr ? 'right' : 'left']: '50%',
            width: 1,
            background: 'linear-gradient(to bottom, transparent, #C9A24D 10%, #C9A24D 90%, transparent)',
            opacity: 0.3,
          }} />

          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {tr.menuItems.map((item, i) => {
              const isLeft = i % 2 === 0;
              return (
                <FadeIn key={i} delay={i * 0.1} direction={isLeft ? 'right' : 'left'}>
                  <div style={{
                    display: 'flex',
                    justifyContent: isLeft ? 'flex-end' : 'flex-start',
                    [isAr ? (isLeft ? 'paddingLeft' : 'paddingRight') : (isLeft ? 'paddingRight' : 'paddingLeft')]: 'calc(50% + 28px)',
                    marginBottom: 32,
                    position: 'relative',
                  }}>
                    {/* Timeline node */}
                    <div style={{
                      position: 'absolute',
                      top: 24,
                      [isAr ? 'right' : 'left']: 'calc(50% - 12px)',
                      width: 24,
                      height: 24,
                      borderRadius: '50%',
                      background: 'linear-gradient(135deg, #C9A24D, #A87820)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: 12,
                      boxShadow: '0 0 0 4px #F0E6D2, 0 0 0 5px rgba(201,162,77,0.3)',
                      zIndex: 2,
                    }}>
                      <span style={{ fontFamily: "'Cinzel', serif", fontSize: 9, color: '#fff', fontWeight: 700 }}>
                        {i + 1}
                      </span>
                    </div>

                    {/* Card */}
                    <div style={{
                      background: 'rgba(255,255,255,0.75)',
                      backdropFilter: 'blur(12px)',
                      border: '1px solid rgba(201,162,77,0.25)',
                      padding: '24px 28px',
                      position: 'relative',
                      maxWidth: 280,
                      transition: 'transform 0.3s, box-shadow 0.3s, border-color 0.3s',
                      cursor: 'default',
                    }}
                      onMouseOver={e => {
                        (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-4px)';
                        (e.currentTarget as HTMLDivElement).style.boxShadow = '0 20px 60px rgba(201,162,77,0.15)';
                        (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(201,162,77,0.55)';
                      }}
                      onMouseOut={e => {
                        (e.currentTarget as HTMLDivElement).style.transform = '';
                        (e.currentTarget as HTMLDivElement).style.boxShadow = '';
                        (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(201,162,77,0.25)';
                      }}
                    >
                      {/* Corner accent */}
                      <div style={{
                        position: 'absolute',
                        top: 8,
                        [isAr ? (isLeft ? 'left' : 'right') : (isLeft ? 'right' : 'left')]: 8,
                        width: 12,
                        height: 12,
                        borderTop: '1px solid rgba(201,162,77,0.4)',
                        [isAr ? (isLeft ? 'borderLeft' : 'borderRight') : (isLeft ? 'borderRight' : 'borderLeft')]: '1px solid rgba(201,162,77,0.4)',
                      }} />

                      <div style={{ fontSize: 28, marginBottom: 10 }}>{item.icon}</div>
                      <div style={{
                        fontFamily: "'Cinzel', serif",
                        fontSize: 11,
                        letterSpacing: 3,
                        color: '#2C1A0E',
                        textTransform: 'uppercase',
                        marginBottom: 8,
                      }}>
                        {item.title}
                      </div>
                      <div style={{
                        fontFamily: isAr ? "'Cairo', sans-serif" : "'Cormorant Garamond', serif",
                        fontSize: 13,
                        color: '#7a5a40',
                        fontStyle: isAr ? 'normal' : 'italic',
                        lineHeight: 1.7,
                      }}>
                        {item.desc}
                      </div>
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>

        {/* Bottom ornament */}
        <FadeIn delay={0.5}>
          <div style={{ textAlign: 'center', marginTop: 20 }}>
            <FloralOrnament size={100} opacity={0.15} />
          </div>
        </FadeIn>
      </div>

      {/* Responsive: stack on mobile */}
      <style>{`
        @media (max-width: 600px) {
          #menu .menu-timeline-item {
            padding-left: 48px !important;
            padding-right: 0 !important;
            justify-content: flex-start !important;
          }
        }
      `}</style>
    </section>
  );
}
