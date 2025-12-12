/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sepia: {
          50: '#f9f7f1',
          100: '#f4ecd8', // Light mode bg
          200: '#e9dcb8',
          300: '#dec693',
          400: '#d4b070',
          500: '#cb9953',
          600: '#b07d41',
          700: '#8d6035',
          800: '#734e30',
          900: '#433422', // Dark mode bg / Light mode text
          950: '#2d2115',
        }
      },
      fontFamily: {
        serif: ['"Libre Baskerville"', 'serif'],
      }
    },
  },
  plugins: [],
}

