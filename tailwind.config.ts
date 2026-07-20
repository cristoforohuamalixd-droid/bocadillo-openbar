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
        gold: {
          50: "#fdf8e8",
          100: "#f9edc4",
          200: "#f3da8a",
          300: "#edc54f",
          400: "#e6b029",
          500: "#d4a853",
          600: "#b8860b",
          700: "#8b6508",
          800: "#5f4506",
          900: "#3a2b04",
        },
        dark: {
          50: "#1a1a1a",
          100: "#141414",
          200: "#0f0f0f",
          300: "#0a0a0a",
          400: "#050505",
          500: "#000000",
        },
      },
      fontFamily: {
        serif: ["Playfair Display", "Georgia", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
