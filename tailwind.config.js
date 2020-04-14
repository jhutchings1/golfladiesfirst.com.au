const tailwindcssAspectRatio = require('tailwindcss-aspect-ratio');
const tailwindUI = require('@tailwindcss/ui');

module.exports = {
  theme: {
    aspectRatio: {
      none: 0,
      square: [1, 1],
      '16/9': [16, 9],
      '4/3': [4, 3],
    },
    extend: {
      colors: {
        'transparent-black': {
          '25': 'hsla(0, 0%, 0%, 0.25)',
          '50': 'hsla(0, 0%, 0%, 0.50)',
          '75': 'hsla(0, 0%, 0%, 0.75)',
        },
        'transparent-white': {
          '25': 'hsla(0, 100%, 100%, 0.25)',
          '50': 'hsla(0, 100%, 100%, 0.50)',
          '75': 'hsla(0, 100%, 100%, 0.75)',
        },
        brand: {
          pink: '#e2006d',
          blue: '#273b89',
        },
      },
    },
  },
  variants: {},
  plugins: [tailwindcssAspectRatio, tailwindUI],
};
