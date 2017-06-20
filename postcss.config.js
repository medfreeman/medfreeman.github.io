module.exports = () => [
  require("stylelint")(),
  require("postcss-plugin-context")({
    global: require("postcss-normalize")({
      "browserslist": "last 3 versions"
    })
  }),
  require("postcss-custom-properties")({
    variables: {
      colorPrimary: "#007acc",
      colorText: "#555",
      headerBackgroundColor: "#000",
      menuLinkColor: "#fff",
      menuLinkActiveBackgroundColor: "rgba(255, 255, 255, 0.3)",
      containerTopMargin: "64px",
      containerHorizontalMargin: "60px",
      containerTopPadding: "10px",
      galleryElementPadding: "5px",
      galleryElementOverlayBackgroundColor: "rgba(0,0,0,0.8)",
      galleryElementOverlayTextColor: "#FFF"
    }
  }),
  require("postcss-apply")(),
  require("postcss-image-set-polyfill")(),
  require("postcss-nesting")(),
  require("postcss-custom-media")(),
  require("postcss-media-minmax")(),
  require("postcss-custom-selectors")(),
  require("postcss-attribute-case-insensitive")(),
  require("postcss-color-rebeccapurple")(),
  require("postcss-color-hwb")(),
  require("postcss-color-hsl")(),
  require("postcss-color-rgb")(),
  require("postcss-color-gray")(),
  require("postcss-color-hex-alpha")(),
  require("postcss-color-function")(),
  require("postcss-font-family-system-ui")(),
  require("postcss-font-variant")(),
  require("postcss-initial")(),
  require("postcss-selector-matches")(),
  require("postcss-selector-not")(),
  require("postcss-pseudo-class-any-link")(),
  require("postcss-replace-overflow-wrap")(),
  require("postcss-reporter")(),
  ...(process.env.NODE_ENV !== "production") ? [
    require("postcss-browser-reporter")(),
  ] : [],
]
