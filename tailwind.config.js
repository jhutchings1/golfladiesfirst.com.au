// const tw = require('tailwindcss/defaultTheme');
const twForms = require('@tailwindcss/custom-forms');

module.exports = {
  theme: {
    extend: {
      colors: {
        brand: {
          pink: '#e2006d',
          blue: '#273b89',
        },
      },
    },
  },
  variants: {
    margin: ['responsive', 'first'],
    opacity: ['responsive', 'hover', 'focus', 'group-hover', 'focus-within'],
    pointerEvents: ['responsive', 'group-hover', 'focus-within'],
    scale: ['responsive', 'hover', 'focus', 'group-hover', 'focus-within'],
  },
  plugins: [twForms],
};
