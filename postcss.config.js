module.exports = (config) => [
  require("stylelint")(),
  require("postcss-cssnext")({
    browsers: "last 2 versions",
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
