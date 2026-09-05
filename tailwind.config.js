/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: { sans: ['Manrope', 'sans-serif'], display: ['Space Grotesk', 'sans-serif'] },
    },
  },
  plugins: [],
};
