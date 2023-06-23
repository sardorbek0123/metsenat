/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: '1rem',
      screens: ['1200px']
    },
    extend: {
      colors: {
        red: '#FF0000',
        blue: {
          300: '#2E5BFF',
          400: '#28293D',
          500: '#4C6FFF',
        },
        gray: {
          100: '#E5E5E5',
          200: '#E0E7FF',
        },
        yellow: {
          300: '#EDC700',
        },
        orange: {
          300: '#ED7200',
        }
      },
    },

  },
  plugins: [],
}