import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#CC3333",
        secondary: "#2A435D",
        customWhite: "#FFF8EE",
        linkColor: "#4BFF3C",
        dark: "#272727",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
      fontSize: {
        12: "12px",
        16: "16px",
        18: "18px",
        20: "20px",
        25: "25px",
        35: "35px",
        50: "50px",
      },
    },
  },
  plugins: [],
};
export default config;
