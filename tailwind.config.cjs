/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "../src/*.{js, jsx}"
  ],
  theme: {
    extend: {
      colors: {
        'richBlack': '#0D1321',
        'raisinBlack': '#1B1825',
        'seaShell': '#F4E5E1',
        'imessage1': '#003166',
        'imessage2': '#000c19',
        'imessage': '#0062cc'
      },
      fontFamily: {
        'text': ['"Jost"', 'sans']
      },
      padding: {
        '18': '20rem',
      }
    },
  },
  plugins: [require('tailwind-scrollbar')],
}
