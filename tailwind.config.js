/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: ["class"],
  theme: {
    extend: {
      backgroundImage: {
        'light-bg': "url('/pics/bg-2.webp')",
      }
      ,
      backgroundColor: {
        "primary": "#15202b",
        "secondary": "#192734",
        "darkGray": "#22303c",
        "lightGray": "#dee4ef",
        "blue-twt" : "#0080ff",
      },
      colors: {
        "primary": "#15202b",
        "secondary": "#192734",
        "darkGray": "#22303c",
        "lightGray": "#dee4ef",
        "blue-twt" : "#484b6a",
      },
      width: { 
        "input" : "250px"
      },
      boxShadow: {
        "3xl": "0px 0px 20px rgba(0, 128, 255,0.2)",
        "4xl" : "5px 5px 15px -10px rgba(210,211,219)"
      }
    },
  },
  plugins: [],
}