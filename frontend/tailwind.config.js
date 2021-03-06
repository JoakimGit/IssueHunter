module.exports = {
  content: ["./src/**/*.{html, ts}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        sky: "#16A8DC",
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/line-clamp")],
};
