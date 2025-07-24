/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#2c2b30",
        grayish: "#4f4f51",
        light: "#d6d6d6",
        blush: "#f2c4c3",
        coral: "#f58f7c",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
