/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        emerald: {
          DEFAULT: '#10B981',
          deep: '#047857',
          light: '#34D399',
        },
        gold: {
          DEFAULT: '#F59E0B',
          deep: '#D97706',
        },
        tech: {
          blue: '#3B82F6',
          cyan: '#06B6D4',
        },
        alert: {
          red: '#EF4444',
          deep: '#DC2626',
        },
        dark: {
          DEFAULT: '#000000',
          card: '#0A0A0A',
          elevated: '#111111',
        }
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'slide-in': 'slideIn 0.3s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        slideIn: {
          '0%': { transform: 'translateX(100%)', opacity: 0 },
          '100%': { transform: 'translateX(0)', opacity: 1 },
        },
      },
      backgroundImage: {
        'emerald-gradient': 'linear-gradient(135deg, #10B981, #047857)',
        'gold-gradient': 'linear-gradient(135deg, #F59E0B, #D97706)',
        'tech-gradient': 'linear-gradient(135deg, #3B82F6, #06B6D4)',
        'hero-gradient': 'linear-gradient(135deg, #000000, #047857, #10B981)',
      },
    },
  },
  plugins: [],
}