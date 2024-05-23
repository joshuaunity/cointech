/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#23499F',
        secondary: '#E5EDFF',
        txtblack: '#2E2E2E',
        txtgray: '#808080',
      },
    },
  },
  plugins: [],
}