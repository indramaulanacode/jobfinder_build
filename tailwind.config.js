/** @type {import('tailwindcss').Config} */
module.exports = {

  darkMode: 'class',

  darkMode: 'media',

  content: [
    "./src/**/*.{html,js}",
    './node_modules/preline/preline.js',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('preline/plugin'),
  ],
}

