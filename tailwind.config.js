const tailwindcssAspectRatio = require('tailwindcss-aspect-ratio');
const tailwindUI = require('@tailwindcss/ui');

module.exports = {
  theme: {
    aspectRatio: {
      none: 0,
      square: [1, 1],
      '16/9': [16, 9],
      '4/3': [4, 3],
      '3/4': [3, 4],
    },
    extend: {
      colors: {
        'transparent-black': {
          '1/4': 'hsla(0, 0%, 0%, 0.25)',
          '1/2': 'hsla(0, 0%, 0%, 0.50)',
          '3/4': 'hsla(0, 0%, 0%, 0.75)',
        },
        'transparent-white': {
          '1/4': 'hsla(0, 100%, 100%, 0.25)',
          '1/2': 'hsla(0, 100%, 100%, 0.50)',
          '3/4': 'hsla(0, 100%, 100%, 0.75)',
        },
        black: '#2c2c2c',
        brand: {
          pink: '#e2006d',
          blue: '#0c153c',
        },
        primary: 'var(--brand-color)',
      },
    },
  },
  variants: {
    margin: ['responsive', 'first'],
    scale: ['responsive', 'hover', 'group-focus', 'group-hover'],
  },
  plugins: [tailwindcssAspectRatio, tailwindUI],
};
