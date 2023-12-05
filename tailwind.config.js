/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        green: {
          '100': '#00B5C0',
          '200': '#066B78',
          '300': '#05545F',
        },
        yellow: '#FAB100',
        'gray': {
          100: '#F4F4F4',
          '200':'#2F313B',
          500: '#909090',
        },
        'orange': {
          100: '#E77100'
        }
      }
    },
    backgroundImage: {
      'hero-pattern': "url('/src/assets/hero.png')",
      'hero-pattern-mobile': "url('/src/assets/hero-pattern-mobile.png')",
      'contact-web': "url('/src/assets/contact_desktop.png')",
      'contact-mobile': "url('/src/assets/contact_mobile.png')",
      'footer-desktop': "url('/src/assets/footer_desktop.png')",
      'footer-mobile': "url('/src/assets/footer_mobile.png')",
    },
    fontFamily: {

    }
  },
  plugins: [],
}