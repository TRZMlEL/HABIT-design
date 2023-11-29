/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
     colors: {
      'dark1' : '#39384B',
      'dark2' : '#29283A',
      'darkbg' : '#29283A',
      'light1' : '#fff',
      'light2' : '#F5F5FB',
      'lightBlack1' : '#080A1E',
    },
  },
  plugins: [],
}