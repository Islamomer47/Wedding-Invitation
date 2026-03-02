// ─────────────────────────────────────────────────────────────────
// Ornaments.tsx  –  Reusable gold decorative SVG elements
// ─────────────────────────────────────────────────────────────────

interface DividerProps {
  width?: number;
  opacity?: number;
  color?: string;
}

export function GoldDivider({ width = 340, opacity = 1, color = '#C9A24D' }: DividerProps) {
  return (
    <div className="divider" style={{ maxWidth: width, opacity }}>
      <div className="divider-line" style={{ background: `linear-gradient(90deg, transparent, ${color}, transparent)` }} />
      <div className="divider-diamond" style={{ background: color }} />
      <div className="divider-line" style={{ background: `linear-gradient(90deg, transparent, ${color}, transparent)` }} />
    </div>
  );
}

export function CornerFrame({
  inset = 24,
  color = 'rgba(201,162,77,0.25)',
  animated = false,
}: {
  inset?: number;
  color?: string;
  animated?: boolean;
}) {
  return (
    <>
      <div
        style={{
          position: 'absolute',
          inset,
          border: `1px solid ${color}`,
          pointerEvents: 'none',
          animation: animated ? 'borderShimmer 4s ease-in-out infinite' : undefined,
        }}
      />
      {/* Corner accents */}
      {[
        { top: inset + 8, left: inset + 8 },
        { top: inset + 8, right: inset + 8 },
        { bottom: inset + 8, left: inset + 8 },
        { bottom: inset + 8, right: inset + 8 },
      ].map((pos, i) => (
        <div
          key={i}
          style={{
            position: 'absolute',
            ...pos,
            width: 18,
            height: 18,
            borderTop: i < 2 ? `1px solid ${color}` : undefined,
            borderBottom: i >= 2 ? `1px solid ${color}` : undefined,
            borderLeft: i % 2 === 0 ? `1px solid ${color}` : undefined,
            borderRight: i % 2 === 1 ? `1px solid ${color}` : undefined,
            pointerEvents: 'none',
          }}
        />
      ))}
    </>
  );
}

export function WaveOrnament({ color = '#C9A24D', opacity = 0.25 }: { color?: string; opacity?: number }) {
  return (
    <svg viewBox="0 0 500 40" style={{ width: '100%', maxWidth: 500, display: 'block', margin: '0 auto', opacity }}>
      <line x1="0" y1="20" x2="175" y2="20" stroke={color} strokeWidth="0.6" />
      <path
        d="M185,8 Q192,20 200,8 Q208,20 216,8 Q224,20 232,8 Q240,20 248,8 Q256,20 264,8 Q272,20 280,8 Q288,20 296,8 Q304,20 312,8"
        fill="none" stroke={color} strokeWidth="0.6"
      />
      <line x1="322" y1="20" x2="500" y2="20" stroke={color} strokeWidth="0.6" />
    </svg>
  );
}

export function FloralOrnament({ size = 120, opacity = 0.15 }: { size?: number; opacity?: number }) {
  return (
    <svg viewBox="0 0 120 120" style={{ width: size, height: size, opacity }} fill="none">
      {[0, 45, 90, 135].map((angle, i) => (
        <ellipse
          key={i}
          cx="60" cy="60" rx="24" ry="10"
          stroke="#C9A24D" strokeWidth="0.8"
          transform={`rotate(${angle} 60 60)`}
        />
      ))}
      <circle cx="60" cy="60" r="8" stroke="#C9A24D" strokeWidth="0.8" />
      <circle cx="60" cy="60" r="3" fill="#C9A24D" />
      {[0, 60, 120, 180, 240, 300].map((a, i) => {
        const x = 60 + 34 * Math.cos((a * Math.PI) / 180);
        const y = 60 + 34 * Math.sin((a * Math.PI) / 180);
        return <circle key={i} cx={x} cy={y} r="3" stroke="#C9A24D" strokeWidth="0.6" />;
      })}
    </svg>
  );
}

export function PalaceArchOrnament({ opacity = 0.2 }: { opacity?: number }) {
  return (
    <svg viewBox="0 0 300 80" style={{ width: '100%', maxWidth: 300, opacity }} fill="none">
      <path d="M10,70 L10,30 Q10,10 30,10 L270,10 Q290,10 290,30 L290,70" stroke="#C9A24D" strokeWidth="0.7" />
      <path d="M30,70 L30,35 Q30,20 50,20 L250,20 Q270,20 270,35 L270,70" stroke="#C9A24D" strokeWidth="0.4" opacity="0.5" />
      <circle cx="150" cy="10" r="5" stroke="#C9A24D" strokeWidth="0.7" />
      <line x1="10" y1="70" x2="290" y2="70" stroke="#C9A24D" strokeWidth="0.7" />
      {[50, 110, 190, 250].map((x, i) => (
        <line key={i} x1={x} y1="70" x2={x} y2="35" stroke="#C9A24D" strokeWidth="0.5" opacity="0.5" />
      ))}
    </svg>
  );
}

