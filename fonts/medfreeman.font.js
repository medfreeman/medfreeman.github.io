const path = require("path")

const material = function(category, icon) {
  return path.resolve(__dirname, `../node_modules/material-design-icons/${category}/svg/production/${icon}.svg`)
}

const mdi = function(icon) {
  return path.resolve(__dirname, `../node_modules/mdi/icons/svg/${icon}.svg`)
}

module.exports = {
  "files": [
    mdi("react"),
    material("action", "ic_done_all_24px")
  ],
  "fontName": "Medcons",
  "cssTemplate": path.resolve(__dirname, "medfreeman.css.hbs"),
  "classPrefix": "mf-",
  "baseSelector": ".mf-icons",
  "rename": function(filename) {
    if (filename.includes("material-design-icons")) {
      return path.basename(filename, "_24px.svg").replace("ic_", "")
    }
    return path.basename(filename, ".svg")
  },
  "fixedWidth": true,
  "types": ["eot", "woff", "ttf"]
}
