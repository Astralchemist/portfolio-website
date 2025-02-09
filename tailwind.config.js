/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}', // Add this if you're using a `src` folder
  ],
  darkMode: 'class', // Enable dark mode via class

  theme: {
    extend: {
      transitionProperty: {
        'colors-shadow': 'color, background-color, border-color, text-decoration-color, fill, stroke, box-shadow',
        'transform': 'transform', // Added transition for transform
      },
      transitionDuration: {
        '250': '250ms', // Custom duration
      },
    },
  },

  variants: {
    extend: {
      backgroundColor: ['active', 'focus'], // Added focus variant
      backgroundOpacity: ['active'],
      textColor: ['hover', 'focus'], // Added hover/focus for text color
    },
  },

  plugins: [
    // Add any plugins if needed
    // require('@tailwindcss/forms'),
    // require('@tailwindcss/typography'),
  ],
};
