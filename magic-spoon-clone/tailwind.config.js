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
        "open-menu": {
          "0%": { transform: "scaleY(0)" },
          "80%": { transform: "scaleY(1.2)" },
          "100%": { transform: "scaleY(1)" },
        },
        rotate: {
          "0%": { transform: "rotate(0)" },
          "100%": { transform: "rotate(-360deg)" },
        },
      },
      animation: {
        "gradient-banner": "animatedgradient 7s linear infinite alternate both running",
        "open-menu": "open-menu 0.5s ease-in-out forwards",
        "spin-slow": "rotate 6s linear infinite",
        "spin-super-slow": "rotate 18s linear infinite",
      },
    },
  },
  plugins: [],
};
