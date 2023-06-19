/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        maven: ['"Maven Pro"', "sans-serif"],
      },
      colors: {
        purple: "#3f0791",
        lightblue: "#bfefff",
      },
      keyframes: {
        animatedgradient: {
          "0%": {
            background: "#E30BA6",
          },
          "100%": {
            background: "#5B00ED",
          },
        },
      },
      animation: {
        "gradient-banner":
          "animatedgradient 7s linear infinite alternate both running",
      },
    },
  },
  plugins: [],
};
