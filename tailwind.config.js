/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#f7faff",
        yellow: "#fac451",
        main: "#fac451",
      },
    },
  },
  plugins: [],
};

