
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["DM Sans", "sans-serif"],
        display: ["Manrope", "sans-serif"]
      },
      colors: {
        forest: "#102a25",
        mint: "#dcebe2",
        sand: "#f6f5f0",
        accent: "#c5a36a"
      },
      boxShadow: {
        soft: "0 18px 55px rgba(16, 42, 37, .10)"
      }
    }
  }
};
