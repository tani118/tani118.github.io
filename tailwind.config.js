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
          50: '#fbf9f4',
          100: '#f4ecd8', // Light mode bg
          200: '#e9dcb8',
          300: '#dec693',
          400: '#d4b070',
          500: '#cb9953',
          600: '#b07d41',
          700: '#8d6035',
          800: '#5c3a1e',
          900: '#2a1d12', // Dark mode bg (Darker for better contrast)
          950: '#180f08',
        }
      },
      fontFamily: {
        serif: ['"Libre Baskerville"', 'serif'],
      }
    },
  },
  plugins: [],
}

