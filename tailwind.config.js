// const tw = require('tailwindcss/defaultTheme');
const twForms = require('@tailwindcss/custom-forms');

module.exports = {
  theme: {},
  variants: {
    margin: ['responsive', 'first'],
  },
  plugins: [twForms],
};
