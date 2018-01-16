module.exports = ({ env }) => ({
  plugins: {
    "postcss-import": {},
    "postcss-plugin-context": {
      global: require("postcss-normalize")({
        browserslist: "last 3 versions"
      })
    },
    "postcss-cssnext": {
      browsers: "last 3 versions",
      features: {
        customProperties: {
          variables: {
            colorPrimary: "#555",
            colorText: "#555",
            colorLink: "#fff",
            colorSecondary: "#f69f1e",
            headerBackgroundColor: "#000",
            "input-text-highlight-color": "var(--palette-blue-grey-900)",
            "input-text-success-color": "var(--palette-green-400)",
            "input-text-label-color": "var(--palette-blue-grey-400)",
            "input-text-bottom-border-color": "var(--palette-blue-grey-400)",
            menuPadding: "1rem",
            menuLinkColor: "#fff",
            menuLinkActiveBackgroundColor: "rgba(255, 255, 255, 0.3)",
            galleryElementPadding: "5px",
            galleryElementOverlayBackgroundColor: "rgba(0,0,0,0.8)",
            galleryElementOverlayTextColor: "#FFF"
          }
        }
      },
      warnForDuplicates: false
    },
    "postcss-reporter": {},
    "postcss-browser-reporter": env !== "production" ? {} : false,
    cssnano:
      env === "production"
        ? {
            preset: [
              "default",
              {
                discardComments: {
                  removeAll: true
                }
              }
            ]
          }
        : false
  }
});
