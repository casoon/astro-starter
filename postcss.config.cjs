module.exports = {
  plugins: {
    "postcss-import": {},
    "postcss-media-minmax": {},
    "postcss-csso": {},
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
