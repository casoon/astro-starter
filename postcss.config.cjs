module.exports = {
  plugins: {
    autoprefixer: {},
    cssnano: {},
    "@fullhuman/postcss-purgecss": {
      "content": [
        "./src/**/*.{js,astro}",
      ],
      "defaultExtractor": content => content.match(/[\w-/:]+(?<!:)/g) || [],
      "safelist": ["html", "body"]
    },
  },
};
