/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        canvas: '#070B14',
        panel: '#0E1526',
        panel2: '#121B32',
        line: '#1E293B',
        accent: {
          DEFAULT: '#3B82F6',
          soft: '#60A5FA',
          cyan: '#22D3EE',
        },
        positive: '#34D399',
        warn: '#FBBF24',
        ink: '#F1F5F9',
        muted: '#8CA0BE',
      },
      fontFamily: {
        display: ['Sora', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      backgroundImage: {
        grid: "linear-gradient(rgba(148,163,184,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.06) 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: '32px 32px',
      },
      boxShadow: {
        glow: '0 0 40px -10px rgba(59,130,246,0.45)',
        card: '0 8px 30px -10px rgba(0,0,0,0.5)',
      },
      keyframes: {
        pulseDot: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.3 },
        },
        scan: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
      animation: {
        pulseDot: 'pulseDot 2s ease-in-out infinite',
        scan: 'scan 2.5s linear infinite',
      },
    },
  },
  plugins: [],
}
