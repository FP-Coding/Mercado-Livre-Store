/** @type {import('tailwindcss').Config} */
const line = require('@tailwindcss/line-clamp');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {}
  },
  plugins: [line]
};
