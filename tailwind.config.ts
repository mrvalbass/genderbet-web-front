import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        birthListBackground: "url('/birth-list-background.jpeg')",
        genderBackground: "url('/boy-vs-girl.jpeg')",
        dateBackground: "url('/date-background.jpeg')",
        firstNameBackground: "url('/firstname-background.jpeg')",
      },
      fontFamily: {
        BabyFont: ["Edu AU VIC WA NT Hand", "serif"],
      },
    },
  },
  plugins: [],
};
export default config;
