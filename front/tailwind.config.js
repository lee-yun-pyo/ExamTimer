/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "main-color": {
          light: "#3782cc",
          DEFAULT: "#3782cc",
          dark: "hsl(210, 70%, 50%)",
        },
        theme: {
          light: "#FFFFFF",
          DEFAULT: "#FFFFFF",
          dark: "#121212",
        },
        "modal-bg": {
          light: "#FFFFFF",
          DEFAULT: "#FFFFFF",
          dark: "#242527",
        },
        "modal-layer-bg": {
          light: "#F2F4F6",
          DEFAULT: "#F2F4F6",
          dark: "#39393B",
        },
        text: {
          light: "#000000",
          DEFAULT: "#000000",
          dark: "#FFFFFF",
        },
        "button-bg": {
          light: "#F2F4F6",
          DEFAULT: "#F2F4F6",
          dark: "#20202C",
        },
        "subButton-bg": {
          light: "#E9F4FE",
          DEFAULT: "#E9F4FE",
          dark: "#2C2C37",
        },
        border: {
          light: "#cbd5e1",
          DEFAULT: "#cbd5e1",
          dark: "#475569",
        },
      },
      fontSize: {
        sm: "0.8rem",
        base: "1rem",
        xl: "1.25rem",
        "2xl": "1.563rem",
        "3xl": "1.953rem",
        "4xl": "2.441rem",
        "5xl": "3.052rem",
      },
    },
  },
  plugins: [],
};
