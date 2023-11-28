/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        backdrop:"#121212",
        footer:"#181818"
      }
    },
  },
  plugins: [],
}