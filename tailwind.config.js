/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        focus: 'var(--focus)',
        'primary-100': 'var(--primary-100)',
        'primary-200': 'var(--primary-200)',
        'primary-300': 'var(--primary-300)',
        'primary-400': 'var(--primary-400)',
        'primary-500': 'var(--primary-500)',
        'primary-600': 'var(--primary-600)',
        'primary-700': 'var(--primary-700)',
        'primary-800': 'var(--primary-800)',
        'primary-900': 'var(--primary-900)',
        'primary-DEFAULT': 'var(--primary-DEFAULT)',
      }
    },
  },
  darkMode: "class",
  plugins: [nextui({
    themes: {   //the color values must be the same of the ./scr/app/styles/variables.scss
      "modern": {
        extend: "dark",
        colors: {
          background: "#e4ddd6",
          foreground: "#3c276a",
          focus: "#98c8b4",
          primary: {
            50: "#f1ebff",
            100: "#d2c7ec",
            200: "#b4a2dd",
            300: "#b4a2dd",
            400: "#7858bf",
            500: "#5f3fa6 ",
            600: "#4a3081",
            700: "#35225d",
            800: "#20153a",
            900: "#0c0618",
            DEFAULT: "#35225d"
          },
        }
      }
    }
  })],
}

