/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        orange: "#E98D42",
      },
      screens: {
        max4k: "2090px",
        my_screen: "1220px",
        middle_screen: "860px",
        mini_screen: "400px",
      },
    },
  },
  plugins: [],
};
