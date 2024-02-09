/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html, ts}",
  ],  
  theme: {
    extend: {
      fontFamily: {
        'mona': ['Mona sans', 'sans-serif'],
        'mona-black': ['Mona black', 'sans-serif']
      }
    },
  },
  plugins: [],
}

