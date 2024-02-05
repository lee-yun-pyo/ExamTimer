/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "my-color": "#3782cc",

        "examBtn-default": "#F2F4F6",
        "examBtn-dark": "#20202C",

        "text-default": "#000000",
        "text-dark": "#FFFFFF",

        "border-default": "#cbd5e1",
        "border-dark": "#475569",
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
