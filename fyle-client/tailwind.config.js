/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors:{
        primary: "#FE2E62",
        tertiary: "#F5F5F5",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui:{
    themes: false
  }
}