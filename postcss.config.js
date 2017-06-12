module.exports = (config) => [
  require("postcss-cssnext")({
    browsers: "last 2 versions"
  }),
  require("postcss-reporter")(),
  ...!config.production ? [
    require("postcss-browser-reporter")(),
  ] : [],
]
