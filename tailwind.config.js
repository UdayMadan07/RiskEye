/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#060a14',
          900: '#0a1020',
          850: '#0e162a',
          800: '#131e38',
          700: '#1b2a4e',
          600: '#263b6b',
        },
        cyber: {
          blue: '#00f0ff',
          neon: '#00e5ff',
          sky: '#38bdf8',
          glow: 'rgba(0, 240, 255, 0.15)',
        },
        risk: {
          low: '#10b981',     // emerald
          medium: '#f59e0b',  // amber
          high: '#ef4444',    // crimson red
          critical: '#dc2626'
        }
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'Fira Code', 'Courier New', 'monospace'],
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow-pulse': 'glowPulse 2s ease-in-out infinite',
        'radar': 'radarSweep 4s linear infinite',
      },
      keyframes: {
        glowPulse: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.9' },
        },
        radarSweep: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        }
      }
    },
  },
  plugins: [],
}
