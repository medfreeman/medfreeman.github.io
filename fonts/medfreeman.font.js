const path = require("path")

const material = function(category, icon) {
  return path.resolve(__dirname, `../node_modules/material-design-icons/${category}/svg/production/ic_${icon}_24px.svg`)
}

const mdi = function(icon) {
  return path.resolve(__dirname, `../node_modules/mdi/icons/svg/${icon}.svg`)
}

const local = function(icon) {
  return path.resolve(__dirname, `../src/icons/${icon}.svg`)
}

module.exports = {
  "files": [
    mdi("at"),
    mdi("react"),
    mdi("github"),
    mdi("heart"),
    mdi("loading"),
    mdi("linkedin"),
    material("communication", "email"),
    material("social", "person"),
    material("content", "send"),
    material("action", "done"),
    material("av", "art_track"),
    local("resume"),
    local("logo_black_white")
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
