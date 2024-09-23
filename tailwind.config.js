/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      animation: {
        carousel: "carousel 5s linear infinite",
      },
      fontFamily: {
        ethnocentric: ["ethnocentric"],
      },
      keyframes: {
        carousel: {
          // "0%,50%,100%": { transform: "translateX(0)" },
          // "25%": { transform: "translateX(-25%)" },
          // "75%": { transform: "translateX(25%)" },
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(calc(-108%))" },
        },
      },
    },
  },
  plugins: [],
};
