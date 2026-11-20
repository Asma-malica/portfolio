/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#030814',
        surface: '#081226',
        surfaceBorder: 'rgba(0, 166, 244, 0.15)',
        primary: '#ffffff',
        secondary: '#94a3b8',
        accent: '#00a6f4',
        accentHover: '#38bdf8',
        accentDark: '#0284c7',
        accentDeep: '#0369a1',
        accentMuted: 'rgba(0, 166, 244, 0.12)',
        blueCard: '#09152e',
      },
      fontFamily: {
        sans: ['Inter', 'Poppins', 'sans-serif'],
      },
      animation: {
        'blob': 'blob 8s infinite',
        'pulse-subtle': 'pulseSubtle 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        blob: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -40px) scale(1.08)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.95)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.6 },
        }
      }
    },
  },
  plugins: [],
}
