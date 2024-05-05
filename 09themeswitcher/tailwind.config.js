/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class", 
  // functionality to get the props from HTML. we use darkMode in react
  theme: {
    extend: {},
  },
  plugins: [],
}


//Remember to change config in tailwind