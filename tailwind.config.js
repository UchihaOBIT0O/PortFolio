/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: "Inter",
        jersey: "Jersey 20, sans-serif",
      },
      height: {
        screen: "100vh",
      },
      colors: {
        "third-new": "#DA0037",
        "new-1": "#000000",
      },
      fontWeight: {
        normal: 300,
        semiMedium: 400,
        medium: 500,
        bold: 600,
        bolder: 700,
        extraBold: 800,
        extraBolder: 900,
      },
      keyframes: {
        fadeInBottom: {
          "0%": { opacity: 0, color: "#DA0037", transform: "translateY(100%)" },
          "100%": { opacity: 1 },
        },
        fadeUpBottom: {
          "0%": {
            opacity: 0,
            color: "#DA0037",
            transform: "translateY(-100%)",
          },
          "100%": { opacity: 1 },
        },
        fadeInLeft: {
          "0%": {
            opacity: 0,
            color: "#DA0037",
            transform: "translateX(100%)",
          },
          "100%": { opacity: 1 },
        },
      },
      animation: {
        fadeInBottom: "fadeInBottom 0.7s ease-in-out",
        fadeInLeft: "fadeInLeft 0.7s ease-in-out",
        fadeUpBottom: "fadeUpBottom 0.7s ease-in-out",
      },
    },
  },
  plugins: [],
};
