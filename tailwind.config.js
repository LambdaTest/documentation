/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: {
    preflight: false, // disable Tailwind's base reset so it doesn't fight Docusaurus/Infima styles
  },
  darkMode: ['class', '[data-theme="dark"]'],
  content: [
    './src/**/*.{js,jsx,ts,tsx,md,mdx}',
    './docs/**/*.{md,mdx}',
    './docusaurus.config.js',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#C24E00',
          light: '#ED5F00',
          dark: '#A34300',
        },
      },
      fontFamily: {
        sans: ['SF Pro', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
