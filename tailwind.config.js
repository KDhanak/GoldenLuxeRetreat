/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary_1": "#FFFFFF",
        "primary_2": "#14274A",
        "primary_3": "#E0B973",
        "primary_4": "#F7F7F7",
      }
    },
  },
  plugins: [],
}

