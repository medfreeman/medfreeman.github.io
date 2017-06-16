module.exports = (config) => [
  require("stylelint")(),
  require("postcss-cssnext")({
    browsers: "last 2 versions"
  }),
  require("postcss-reporter")(),
  ...(!process.env.NODE_ENV === "production") ? [
    require("postcss-browser-reporter")(),
  ] : [],
]
