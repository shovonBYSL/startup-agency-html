/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "*",
    "./pages/*html",
    "./src/**/*.{js,ts}",
    "./src/**/**/*.{js,ts}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "16px",
        xl: "0px",
      },
      screens: {
        sm: "600px",
        md: "730px",
        lg: "950px",
        xl: "1116px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["Libre Franklin", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: {
          50: "#FFECE6",
          100: "#FED8CD",
          200: "#FDB29B",
          300: "#FC8B69",
          400: "#FB6537",
          500: "#FC7D56",
          600: "#C83204",
          700: "#962503",
          800: "#641902",
          900: "#320C01",
          950: "#190600",
        },
        secondary: {
          50: "#E5F3FF",
          100: "#CCE6FF",
          200: "#99CEFF",
          300: "#66B5FF",
          400: "#339CFF",
          500: "#0A89FF",
          600: "#0069CC",
          700: "#004F99",
          800: "#003566",
          900: "#001A33",
          950: "#000D1A",
        },
        neutral: {
          50: "#F2F2F2",
          100: "#E6E6E6",
          200: "#CCCCCC",
          300: "#B3B3B3",
          400: "#999999",
          500: "#121212",
          600: "#666666",
          700: "#4D4D4D",
          800: "#333333",
          900: "#1A1A1A",
          950: "#0D0D0D",
        },
      },
      fontSize: {
        xxxs: "8px",
        xxs: "10px",
        ...defaultTheme.fontSize,
      },
    },
    screens: {
      xxs: "321px",
      xs: "426px",
      ...defaultTheme.screens,
    },
  },
  plugins: [],
};
