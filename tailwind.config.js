/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-blue': '#01BEFE',
        'brand-yellow': '#FFDD00',
        'brand-orange': '#FF7D00',
        'brand-pink': '#FF006D',
        'brand-purple': '#8F00FF',
      },
    },
  },
  plugins: [],
}