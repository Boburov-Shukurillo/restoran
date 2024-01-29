/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        orange: "#E98D42",
      },
      screens: {
        "my_screen":"1220px"
      },
    },
  },
  plugins: [],
};
