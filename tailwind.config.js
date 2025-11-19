/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./*.{js,ts,jsx,tsx}",           // Matches App.tsx, index.tsx, constants.ts in root
    "./components/**/*.{js,ts,jsx,tsx}" // Matches everything inside components folder
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Plus Jakarta Sans', 'sans-serif'],
      },
      colors: {
        slate: {
          850: '#151f32',
          950: '#020617',
        },
        accent: {
          400: '#38bdf8', // Sky 400
          500: '#0ea5e9', // Sky 500
          glow: 'rgba(56, 189, 248, 0.5)'
        }
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      }
    },
  },
  plugins: [],
}