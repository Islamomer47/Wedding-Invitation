# 💍 Harir Palace — Wedding Invitation Website

> Luxury bilingual (Arabic/English) wedding invitation for Layla & Karim  
> Built with React · TypeScript · Vite

---

## 🗂 Project Structure

```
harir-palace/
├── index.html
├── package.json
├── vite.config.ts
├── tsconfig.json
└── src/
    ├── main.tsx                ← React mount point
    ├── App.tsx                 ← Root (assembles all sections)
    ├── styles/
    │   └── globals.css         ← CSS vars, keyframes, utilities
    ├── data/
    │   └── translations.ts     ← ALL text AR+EN, gallery images, date
    ├── hooks/
    │   └── hooks.ts            ← useCountdown, useInView, useScrolled
    └── components/
        ├── EnvelopeLetter.tsx  ← Opening envelope + wax seal
        ├── Navbar.tsx          ← Fixed top nav
        ├── Hero.tsx            ← Full-screen cinematic hero
        ├── Countdown.tsx       ← Live countdown
        ├── Welcome.tsx         ← Message + image slider
        ├── Details.tsx         ← Venue card + map link
        ├── Halls.tsx           ← Ladies/Gentlemen directions
        ├── Menu.tsx            ← Evening delights
        ├── Gallery.tsx         ← Masonry grid + lightbox
        ├── Footer.tsx          ← Closing + thank-you
        └── MusicPlayer.tsx     ← Floating music FAB
```

---

## 🚀 Quick Start

```bash
npm install     # Install dependencies
npm run dev     # Dev server → http://localhost:3000
npm run build   # Production build
```

---

## ✏️ Customization

### Names & Date → `src/data/translations.ts`
```ts
brideName: 'Layla',
groomName: 'Karim',
export const WEDDING_DATE = new Date('2026-07-29T19:00:00');
```

### Gallery photos → `GALLERY_IMAGES[]` in translations.ts

### Colors → `src/styles/globals.css`
```css
--gold: #C9A24D;
--cream: #F7F3EE;
--brown: #2C1A0E;
```

### Map link → `src/components/Details.tsx`

### Music → `src/App.tsx` audio src attribute

---

## 🌍 Deploy to Vercel

1. Push to GitHub
2. vercel.com → New Project → Import repo
3. Framework: **Vite** → Deploy ✓
4. Share link on WhatsApp / print as QR code
