/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        mint: "#95c6bb",
        mintDark: "#6da99c",
        cream: "#efe7d2",
        softGray: "#f3f5f4",
        line: "#d6e3df",
      },
      maxWidth: {
        page: "1180px",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
}

