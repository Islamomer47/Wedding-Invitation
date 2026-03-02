// ─────────────────────────────────────────────────────────────────
// PetalRain.tsx  –  Floating rose petals ambient effect
// ─────────────────────────────────────────────────────────────────
import { useMemo } from 'react';

const PETALS = ['🌸', '✨', '🌹', '💮', '🌺'];

interface Petal {
  id: number;
  symbol: string;
  left: string;
  delay: string;
  duration: string;
  drift: string;
  size: number;
}

export default function PetalRain() {
  const petals: Petal[] = useMemo(() =>
    Array.from({ length: 18 }, (_, i) => ({
      id: i,
      symbol: PETALS[i % PETALS.length],
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 12}s`,
      duration: `${10 + Math.random() * 8}s`,
      drift: `${(Math.random() - 0.5) * 160}px`,
      size: 10 + Math.random() * 10,
    })), []);

  return (
    <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 5, overflow: 'hidden' }}>
      {petals.map(p => (
        <div
          key={p.id}
          style={{
            position: 'absolute',
            top: 0,
            left: p.left,
            fontSize: p.size,
            '--drift': p.drift,
            '--duration': p.duration,
            '--delay': p.delay,
            animation: `petal ${p.duration} ease-in ${p.delay} infinite`,
            opacity: 0,
          } as React.CSSProperties}
        >
          {p.symbol}
        </div>
      ))}
    </div>
  );
}
