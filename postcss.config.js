module.exports = () => [
  require("stylelint")(),
  require("postcss-normalize")({
    "browserslist": "last 3 versions"
  }),
  require("postcss-cssnext")({
    browsers: "last 3 versions",
    features: {
      customProperties: {
        variables: {
          colorPrimary: "#007acc",
          colorText: "#555",
          galleryElementPadding: "5px",
          galleryElementOverlayBackgroundColor: "rgba(0,0,0,0.8)",
          galleryElementOverlayTextColor: "#FFF"
        },
      },
    },
  }),
  require("postcss-reporter")(),
  ...(!process.env.NODE_ENV === "production") ? [
    require("postcss-browser-reporter")(),
  ] : [],
]
