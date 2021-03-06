module.exports = {
  purge: {
    enabled: true,
    content: ["./src/**/*.tsx"],
  },
  theme: {
    colors: {
      transparent: "transparent",
      blue: "#3490dc",
      "blue-darkest": "#12283a",
      red: "#e3342f",
      "red-darkest": "#3b0d0c",
      black: "#22292f",
      white: "#ffffff",
      light: "#F1F1F1",
      orange: "#f6993f",
      "blue-dark": "#2779bd",
    },
    extend: {
      borderRadius: {
        round: "50%",
      },
      lineHeight: {
        regular: "1.15",
      },
      fontSize: {
        "8xl": "10rem",
      },
    }
  }
};
