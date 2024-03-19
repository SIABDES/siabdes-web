import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";
import { nextui } from "@nextui-org/react";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      gridTemplateRows: {
        7: "repeat(7, minmax(0, 1fr))",
        8: "repeat(8, minmax(0, 1fr))",
        9: "repeat(9, minmax(0, 1fr))",
        10: "repeat(10, minmax(0, 1fr))",
        11: "repeat(11, minmax(0, 1fr))",
        12: "repeat(12, minmax(0, 1fr))",
      },
      gridRow: {
        "span-7": "span 7 / span 7",
        "span-8": "span 8 / span 8",
        "span-9": "span 9 / span 9",
        "span-10": "span 10 / span 10",
        "span-11": "span 11 / span 11",
        "span-12": "span 12 / span 12",
      },
      margin: {
        "1/12": "8.3333333333%",
        "2/12": "16.6666666667%",
        "3/12": "25%",
        "4/12": "33.3333333333%",
        "5/12": "41.6666666667%",
        "6/12": "50%",
        "7/12": "58.3333333333%",
        "8/12": "66.6666666667%",
        "9/12": "75%",
        "10/12": "83.3333333333%",
        "11/12": "91.6666666667%",
        sidebar: "var(--sidebar-width)",
        "sidebar-collapsed": "var(--sidebar-width-collapsed)",
      },
      width: {
        sidebar: "var(--sidebar-width)",
        "sidebar-collapsed": "var(--sidebar-width-collapsed)",
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },

        "sidebar-open": {
          from: { width: "var(--sidebar-width-collapsed)" },
          to: { width: "var(--sidebar-width)" },
        },
        "sidebar-close": {
          from: { width: "var(--sidebar-width)" },
          to: { width: "var(--sidebar-width-collapsed)" },
        },

        "sidebar-navs-open": {
          from: { height: "0" },
          to: { height: "100%" },
        },

        "sidebar-navs-close": {
          from: { height: "100%" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "sidebar-open": "sidebar-open 0.2s ease-out",
        "sidebar-close": "sidebar-close 0.2s ease-out",
        "sidebar-navs-open": "sidebar-navs-open 0.2s ease-out",
        "sidebar-navs-close": "sidebar-navs-close 0.2s ease-out",
      },
    },
  },

  plugins: [
    nextui(),
    require("tailwindcss-animate"),
    plugin(({ addUtilities }) => {
      const popoverWidthBalancerUtils = {
        ".popover-content-same-width-as-trigger": {
          width: "var(--radix-popover-trigger-width)",
          "max-height": "var(--radix-popover-content-available-height)",
        },

        ".popover-content-min-width-same-as-trigger": {
          "min-width": "var(--radix-popover-trigger-width)",
          "max-height": "var(--radix-popover-content-available-height)",
        },
      };

      const dropdownMenuWidthBalancerUtils = {
        ".dropdown-menu-content-same-width-as-trigger": {
          width: "var(--radix-dropdown-menu-trigger-width)",
          "max-height": "var(--radix-dropdown-menu-content-available-height)",
        },

        ".dropdown-menu-content-min-width-same-as-trigger": {
          "min-width": "var(--radix-dropdown-menu-trigger-width)",
          "max-height": "var(--radix-dropdown-menu-content-available-height)",
        },
      };

      const selectWidthBalancerUtils = {
        ".select-content-same-width-as-trigger": {
          width: "var(--radix-select-trigger-width)",
          "max-height": "var(--radix-select-content-available-height)",
        },
      };

      addUtilities(
        [
          popoverWidthBalancerUtils,
          dropdownMenuWidthBalancerUtils,
          selectWidthBalancerUtils,
        ],
        {
          respectImportant: true,
        }
      );
    }),
  ],
} satisfies Config;

export default config;
