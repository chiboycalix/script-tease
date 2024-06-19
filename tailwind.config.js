/** @type {import('tailwindcss').Config} */
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
    "./node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  prefix: "",
  theme: {
    fontFamily: {
      inter: ["Inter"],
    },
    screens: {
      xxs: "275px",
      xs: "375px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1445px",
      "3xl": "1536px",
    },
    colors: {
      secondary: "#D9D9D9",
      white: "#ffffff",
      black: "#000000",
      primary: {
        50: "#eefbf3",
        100: "#d5f6e0",
        200: "#afebc6",
        300: "#7bdaa6",
        400: "#44c382",
        500: "#23af6c",
        600: "#148752",
        700: "#106c44",
        800: "#0f5638",
        900: "#0d472e",
        950: "#06281b",
      },
      // primary: {
      //   50: "#eff8ff",
      //   100: "#dbeffe",
      //   200: "#c0e4fd",
      //   300: "#94d4fc",
      //   400: "#62bbf8",
      //   500: "#3d9df4",
      //   600: "#217ce8",
      //   700: "#1f69d6",
      //   800: "#2055ad",
      //   900: "#1f4a89",
      //   950: "#182e53",
      // },
    },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      keyframes: {
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "infinite-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        scroll:
          "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
        "infinite-scroll": "infinite-scroll 25s linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), addVariablesForColors],
});

function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}
