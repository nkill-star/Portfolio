/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Merriweather Sans', 'sans-serif'], // Set Merriweather Sans as the default sans-serif font
      },
    },
  },
  plugins: [],
}

