import type { Config } from "tailwindcss";
// eslint-disable-next-line @typescript-eslint/no-require-imports
const { heroui } = require("@heroui/react");

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "var(--primary)",
        navy900: "#001143",
        navy800: "#1A2956",
        navy700: "#334155",
        navy600: "#4D587B",
        navy500: "#66708E",
        navy400: "#98A2B7",
        navy300: "#CBD5E1",
        navy200: "#E2E8F0",
        navy100: "#F1F5F9",
        navy50: "#F8FAFC",
        teal900: "#004756",
        teal800: "#065B6A",
        teal700: "#216F7B",
        teal600: "#3C828C",
        teal500: "#57969C",
        teal400: "#72A9AD",
        teal300: "#92BDC0",
        teal200: "#B2D0D2",
        teal100: "#D1E4E5",
        teal50: "#F1F7F7",
        neutral900: "#171717",
        neutral800: "#262626",
        neutral700: "#404040",
        neutral600: "#525252",
        neutral500: "#737373",
        neutral400: "#A3A3A3",
        neutral300: "#D4D4D4",
        neutral200: "#E5E5E5",
        neutral100: "#F5F5F5",
        neutral50: "#FAFAFA",
        brandAccent1: "#001862",
        brandAccent2: "#001E79",
        brandAccent3: "#589CFF",
        brandAccent4: "#CBDDF4",
        brandAccent5: "#EEF5FF",        
        cherry: "#CD2026",

        success800: "#166534",
        success700: "#15803D",
        success500: "#22C55E",
        success100: "#DCFCE7",
        success50: "#F0FDF4",

        error800: "#9A1A1E",
        error700: "#BA1B21",
        error500: "#F04349",
        error100: "#FEE2E3",
        error50: "#FEF2F2",

        info800: "#1E40AF",
        info700: "#1D4ED8",
        info500: "#3B82F6",
        info100: "#DBEAFE",
        info50: "#EFF6FF",

        warning800: "#92400E",
        warning700: "#B45309",
        warning500: "#F59E0B",
        warning100: "#FEF3C7",
        warning50: "#FFFBEB",

        appYellow1: "#FFCF40",
        appYellow2: "#B59410",

      },
      screens: {
        '3xl': '120rem',
        '4xl': '140rem',
        '5xl': '160rem',
        'iframe': '847px',
      }
    },
  },
  darkMode: "selector",
  plugins: [
    heroui({
      themes: {
        light: {
          colors: {
            secondary: "#589CFF",
          },
        },
        dark: {
          colors: {
            secondary: "#589CFF",
            danger: "#DD8D90",
          },
        },
      },
    }),
  ],
} satisfies Config;
