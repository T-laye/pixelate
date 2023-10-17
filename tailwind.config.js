/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // royalBlue: "#903AFF",
        // purple: "#D434FE",
        black: "#111111",
        darkBlue: "#120A44",
        lightBlue: "#597DFE",
        primary: "#DB4BFF",
      },
    },
  },
  plugins: [],
};
