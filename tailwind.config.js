/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        bellefair: ['"Bellefair"', "serif"],
        barlow: ['"Barlow"', "sans-serif"],
        condensed: ['"Barlow Condensed"', "sans-serif"],
      },
    },
  },
};
