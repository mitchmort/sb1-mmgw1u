/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fff1f0',
          100: '#ffe4e1',
          200: '#ffc9c2',
          300: '#ffa094',
          400: '#ff715d',
          500: '#ff4d33',
          600: '#ff3a1f',
          700: '#ef2c12',
          800: '#cc2610',
          900: '#a82714',
        }
      }
    },
  },
  plugins: [],
}