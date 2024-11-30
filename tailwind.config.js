/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'sans': ['Inter', 'sans-serif'],
      'actay': ['Actay', 'sans-serif'],
    },
    screens: {
      "sm": "576px",
      "md": "768px",
      "lg": "992px",
      "xl": "1160px",
      "2xl": "1160px"
    },
    extend: {
      backgroundImage: {
        'section1': "url('/images/bg-1.png')"
      },
      colors: {
        primary: "#00234A",
      }
    },
  },
  plugins: [],
}