import type { Config } from "tailwindcss";
const rtl = require("tailwindcss-rtl");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      transitionDuration: {
        "1000": "1000ms",
      },
      colors: {
        blue: "#0069FF",
        gray: "#9E9E9E",
        grayT: "#B3B4B7",
        gold: "#A29A65",
      },
      backgroundImage: {
        "card-gradient":
          "linear-gradient(144.39deg, #ffffff -278.56%, #6d6d6d -78.47%, #11101d 91.61%)",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [rtl, require("@tailwindcss/line-clamp")],
};
export default config;
