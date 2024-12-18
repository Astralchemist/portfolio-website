/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      transitionProperty: {
        'colors-shadow': 'color, background-color, border-color, text-decoration-color, fill, stroke, box-shadow',
      },
      transitionDuration: {
        '250': '250ms',
      },
    },
  },
  plugins: [],
};