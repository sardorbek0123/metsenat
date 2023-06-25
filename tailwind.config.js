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
          100: '#EDF1FD',
          200: '#3366ff',
          300: '#2E5BFF',
          400: '#28293D',
          500: '#4C6FFF',
          600: '#2E384D',
          700: '#3365FC',
        },
        gray: {
          100: '#E5E5E5',
          200: '#E0E7FF',
          300: '#B1B1B8',
          500: '#B2B7C1',
          600: '#E8E8E8',
          700: '#7A7A9D',
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