/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: '#C9A24D',
          light: '#E2C47A',
          dark: '#A87820',
          pale: '#F0E0B0',
        },
        cream: {
          DEFAULT: '#F7F3EE',
          dark: '#EDE3D0',
          deep: '#D8C9B0',
        },
        palace: {
          DEFAULT: '#2C1A0E',
          mid: '#3d2510',
          dark: '#1a0f08',
          black: '#0d0905',
        },
        parchment: '#FAF6F0',
      },
      fontFamily: {
        script: ['"Great Vibes"', 'cursive'],
        serif: ['"Cormorant Garamond"', '"Playfair Display"', 'serif'],
        display: ['Cinzel', 'serif'],
        arabic: ['Cairo', 'Amiri', 'serif'],
        arabicScript: ['Amiri', 'serif'],
      },
      animation: {
        float: 'float 7s ease-in-out infinite',
        shimmer: 'shimmer 3s ease-in-out infinite',
        fadeUp: 'fadeUp 1s ease both',
        scrollBounce: 'scrollBounce 1.5s ease-in-out infinite',
        particleDrift: 'particleDrift 8s ease-in-out infinite',
        rotateSlow: 'rotateSlow 30s linear infinite',
        pulseSoft: 'pulseSoft 2s ease-in-out infinite',
      },
      keyframes: {
        float: { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-12px)' } },
        shimmer: { '0%,100%': { opacity: '0.6' }, '50%': { opacity: '1' } },
        fadeUp: { from: { opacity: '0', transform: 'translateY(40px)' }, to: { opacity: '1', transform: 'translateY(0)' } },
        scrollBounce: { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(10px)' } },
        particleDrift: { '0%,100%': { transform: 'translate(0,0) rotate(0deg)', opacity: '0' }, '10%': { opacity: '1' }, '90%': { opacity: '1' }, '100%': { transform: 'translate(var(--dx),var(--dy)) rotate(360deg)', opacity: '0' } },
        rotateSlow: { from: { transform: 'rotate(0deg)' }, to: { transform: 'rotate(360deg)' } },
        pulseSoft: { '0%,100%': { transform: 'scale(1)', opacity: '1' }, '50%': { transform: 'scale(1.05)', opacity: '0.8' } },
      },
      backgroundImage: {
        'noise': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.05'/%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
}
