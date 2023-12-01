/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        green: '#066B78',
        yellow: '#FAB100',
        gray:'#909090'
      }
    },
    backgroundImage: {
      'hero-pattern': "url('/src/assets/hero.png')",
      'hero-pattern-mobile': "url('/src/assets/hero-pattern-mobile.png')",
    }
  },
  plugins: [],
}