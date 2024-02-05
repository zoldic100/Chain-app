/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      phone: { min: "360px" , max: "480" },
      sm: { min: "481px", max: "719px" },

      md: "720px",

      lg:  "1024px",

    },
    extend: {},
  },
  plugins: [],
};
