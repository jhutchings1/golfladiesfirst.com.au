const defaultTheme = require('tailwindcss/defaultTheme');
const tailwindcssAspectRatio = require('tailwindcss-aspect-ratio');
const tailwindUI = require('@tailwindcss/ui');
const hexRgb = require('hex-rgb');

function rgba(hex, alpha) {
  const { red, green, blue } = hexRgb(hex);
  return `rgba(${red}, ${green}, ${blue}, ${alpha})`;
}

module.exports = {
  purge: ['./src/**/*.js'],
  theme: {
    aspectRatio: {
      none: 0,
      square: [1, 1],
      '16/9': [16, 9],
      '4/3': [4, 3],
      '3/4': [3, 4],
    },
    extend: {
      boxShadow: {
        ...tailwindUI.boxShadow,
        'outline-primary': '0 0 0 3px var(--shadow-color)',
      },
      cursor: {
        ...defaultTheme.cursor,
        'zoom-in': 'zoom-in',
      },
      colors: {
        black: '#2c2c2c',
        brand: {
          'gray-shadow': `${rgba(defaultTheme.colors.gray[400], 0.45)}`,
          pink: '#e2006d',
          'pink-light': '#fab6d7',
          'pink-shadow': 'hsla(331, 100%, 63%, 0.5)',
          blue: '#0c153c',
          'blue-light': '#b6c3fa',
          'blue-shadow': 'hsla(229, 100%, 63%, 0.5)',
        },
        primary: 'var(--brand-color)',
        'primary-light': 'var(--brand-color-light)',
      },
      fontFamily: {
        sans: ['Century Gothic', ...defaultTheme.fontFamily.sans],
      },
      minWidth: {
        '10': '2.5rem',
        ...defaultTheme.minWidth,
      },
    },
  },
  variants: {
    cursor: ['responsive', 'disabled'],
    margin: ['responsive', 'first'],
    opacity: ['responsive', 'hover', 'focus', 'disabled'],
    scale: ['responsive', 'hover', 'group-focus', 'group-hover'],
  },
  plugins: [tailwindcssAspectRatio, tailwindUI],
};
