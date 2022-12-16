const purgecss = require('@fullhuman/postcss-purgecss');
const path = require('path');

module.exports = {
  plugins: {
    "postcss-import": {},
    tailwindcss: {},
    autoprefixer: {},
    cssnano: {}
  },
};
