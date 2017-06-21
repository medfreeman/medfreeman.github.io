module.exports = ({ env }) => ({
  plugins: {
    "stylelint": {},
    "postcss-plugin-context": {
      global: require("postcss-normalize")({
        "browserslist": "last 3 versions"
      })
    },
    "postcss-custom-properties": {
      variables: {
        colorPrimary: "#007acc",
        colorText: "#555",
        colorSecondary: "#f69f1e",
        headerBackgroundColor: "#000",
        menuLinkColor: "#fff",
        menuLinkActiveBackgroundColor: "rgba(255, 255, 255, 0.3)",
        containerTopMargin: "64px",
        containerHorizontalPadding: "60px",
        containerTopPadding: "10px",
        galleryElementPadding: "5px",
        galleryElementOverlayBackgroundColor: "rgba(0,0,0,0.8)",
        galleryElementOverlayTextColor: "#FFF"
      }
    },
    "postcss-apply": {},
    "postcss-image-set-polyfill": {},
    "postcss-nesting": {},
    "postcss-custom-media": {},
    "postcss-media-minmax": {},
    "postcss-custom-selectors": {},
    "postcss-attribute-case-insensitive": {},
    "postcss-color-rebeccapurple": {},
    "postcss-color-hwb": {},
    "postcss-color-hsl": {},
    "postcss-color-rgb": {},
    "postcss-color-gray": {},
    "postcss-color-hex-alpha": {},
    "postcss-color-function": {},
    "postcss-font-family-system-ui": {},
    "postcss-font-variant": {},
    "postcss-initial": {},
    "postcss-selector-matches": {},
    "postcss-selector-not": {},
    "postcss-pseudo-class-any-link": {},
    "postcss-replace-overflow-wrap": {},
    "postcss-reporter": {},
    "postcss-browser-reporter": env !== "production" ? {} : false
  }
})
