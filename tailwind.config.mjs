import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["IBM Plex Sans", ...defaultTheme.fontFamily.sans],
        serif: ["IBM Plex Serif", ...defaultTheme.fontFamily.serif],
      },
      colors: {
        // Custom colors that work well with IBM Plex
        primary: {
          50: '#f0f5ff',
          100: '#e5edff',
          200: '#cddbfe',
          300: '#b4c6fc',
          400: '#8da2fb',
          500: '#6b7cfa',
          600: '#4b4ff7',
          700: '#3d3ee6',
          800: '#3234ba',
          900: '#2d3293',
          950: '#1c1d54',
        },
        secondary: {
          50: '#f5f6fa',
          100: '#eceef5',
          200: '#dee1ed',
          300: '#c5c9dd',
          400: '#a7adc9',
          500: '#8d92b7',
          600: '#7779a5',
          700: '#636591',
          800: '#525477',
          900: '#464961',
          950: '#292b3b',
        },
      },
      animation: {
        'gradient': 'gradient 8s linear infinite',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        gradient: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"), 
    require("daisyui")
  ],
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes")["light"],
          "primary": "#4b4ff7",          // Using our custom primary color
          "primary-focus": "#3d3ee6",
          "primary-content": "#ffffff",
          "secondary": "#7779a5",        // Using our custom secondary color
          "secondary-focus": "#636591",
          "secondary-content": "#ffffff",
          "base-100": "#ffffff",
          "base-200": "#f8f9fc",
          "base-300": "#f0f1f7",
          "base-content": "#1c1d54",
        },
        dark: {
          ...require("daisyui/src/theming/themes")["dark"],
          "primary": "#6b7cfa",          // Lighter version for dark mode
          "primary-focus": "#4b4ff7",
          "primary-content": "#ffffff",
          "secondary": "#8d92b7",        // Lighter version for dark mode
          "secondary-focus": "#7779a5",
          "secondary-content": "#ffffff",
          "base-100": "#1c1d54",
          "base-200": "#292b3b",
          "base-300": "#464961",
          "base-content": "#f0f1f7",
        },
      },
    ],
    darkTheme: "dark",
    base: true,
    styled: true,
    utils: true,
    prefix: "",
    logs: true,
    themeRoot: ":root",
  },
};