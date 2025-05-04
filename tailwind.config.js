/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#FF4D30",
          hover: "#FA4226",
        },
        secondary: {
          DEFAULT: "#000",
          text: "#706F7B"
        },
        background: "#F8F8F8"
      },
    },
  },
  plugins: [],
}