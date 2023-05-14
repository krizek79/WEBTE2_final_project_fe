/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        darkest: '#2C3333',
        dark: '#2E4F4F',
        azure: '#0E8388',
        light: '#CBE4DE',
      },
    },
  },
  plugins: [],
}