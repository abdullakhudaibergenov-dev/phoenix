/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#050505',
        surface: '#0b0b0b',
        gold: '#d4af37',
        goldSoft: '#f1d780',
      },
      boxShadow: {
        card: '0 16px 40px rgba(0, 0, 0, 0.35)',
      },
      backgroundImage: {
        goldGlow: 'radial-gradient(circle at top right, rgba(212, 175, 55, 0.22), transparent 55%)',
      },
    },
  },
  plugins: [],
};
