module.exports = ({ env }) => ({
  plugins: {
    "stylelint": {},
    "postcss-import": {},
    "postcss-plugin-context": {
      global: require("postcss-normalize")({
        "browserslist": "last 3 versions"
      })
    },
    "postcss-custom-properties": {
      variables: {
        colorPrimary: "#555",
        colorText: "#555",
        colorLink: "#fff",
        colorSecondary: "#f69f1e",
        headerBackgroundColor: "#000",
        menuIconSize: "4rem",
        menuIconPadding: "1.5rem",
        menuPadding: "1rem",
        menuLinkColor: "#fff",
        menuLinkActiveBackgroundColor: "rgba(255, 255, 255, 0.3)",
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
    "postcss-browser-reporter": env !== "production" ? {} : false,
    "cssnano": env === "production" ? {
      preset: ["default",
        {
          discardComments: {
            removeAll: true,
          },
        }
      ]
    } : false
  }
})
