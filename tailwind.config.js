/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html, ts}",
  ],  
  theme: {
    extend: {
      fontFamily: {
        'mona': ['Mona sans', 'sans-serif']
      }
    },
  },
  plugins: [],
}

