import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class", '[data-theme="dark"]'],
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
        zinc: {
          50: '#fafafa',
          100: '#f4f4f5',
          200: '#e4e4e7',
          300: '#d4d4d8',
          400: '#a1a1aa',
          500: '#71717a',
          600: '#52525b',
          700: '#3f3f46',
          800: '#27272a',
          900: '#18181b',
          950: '#0f0f10',
        },
        text: {
          light: '#333333', // Darker text color for better contrast
          dark: '#ffffff',
        },
        n: {
          DEFAULT: 'oklch(0.5 0.1 0.1)', // Define a default value for --n
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
    require("@tailwindcss/typography")({
      modifiers: ['DEFAULT', 'sm', 'lg', 'xl', '2xl'],
      theme: {
        extend: {
          typography: {
            DEFAULT: {
              css: {
                color: '#333333', // Darker text color for better contrast
              },
            },
          },
        },
      },
    }), 
    require("daisyui")
  ],
  daisyui: {
    themes: [
      {
        light: {
          "primary": "#6b7cfa",
          "secondary": "#8d92b7",
          "accent": "#4b4ff7",
          "neutral": "#f4f4f5",
          "base-100": "#ffffff",
          "info": "#3ABFF8",
          "success": "#36D399",
          "warning": "#FBBD23",
          "error": "#F87272",
          "text": "#333333", // Darker text color for better contrast
        },
        dark: {
          "primary": "#4b4ff7",
          "secondary": "#636591",
          "accent": "#8da2fb",
          "neutral": "#18181b",
          "base-100": "#2d3293",
          "info": "#3ABFF8",
          "success": "#36D399",
          "warning": "#FBBD23",
          "error": "#F87272",
          "text": "#ffffff",
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
