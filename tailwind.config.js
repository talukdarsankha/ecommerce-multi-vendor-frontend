/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "customColor":"#00927c",
        "second-customColor":"#EAF0F1"
      }
    },
  },
  plugins: [],
}
