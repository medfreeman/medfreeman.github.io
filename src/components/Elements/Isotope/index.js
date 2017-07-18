/* eslint-disable react/jsx-no-bind */

import React from "react"
import PropTypes from "prop-types"
import map from "core-js/library/fn/array/virtual/map"
import difference from "lodash.difference"

import { get } from "utils/object"

const isBrowser = (typeof window !== "undefined")
const IsotopeLayout = isBrowser ? require("isotope-layout") : null
const imagesloaded = isBrowser ? require("imagesloaded") : null

class Isotope extends React.PureComponent {
  constructor(props, context) {
    super(props, context)
  }

  componentDidMount() {
    if ( !isBrowser ) {
      return
    }

    if ( this.props.isoOptions.layoutMode === "packery" ) {
      require("isotope-packery")

    }

    if (this.iso == null) {
      this.iso = new IsotopeLayout(this.isotopeContainer, this.props.isoOptions)
    }

    // Only arrange if there are elements to arrange
    if (this.props::get("children.length", 0)) {
      this.scheduleArrange()
    }
  }

  componentDidUpdate(prevProps) {
    // The list of keys seen in the previous render
    const currentKeys = prevProps.children::map((n) => n.key)

    // The latest list of keys that have been rendered
    const newKeys = this.props.children::map((n) => n.key)

    // Find which keys are new between the current set of keys and any new children passed to this component
    const addKeys = difference(newKeys, currentKeys)

    // Find which keys have been removed between the current set of keys and any new children passed to this component
    const removeKeys = difference(currentKeys, newKeys)

    if (removeKeys.length) {
      removeKeys.forEach(
        (key) => {
          this.iso.remove(document.getElementById(key))
        }
      )
      this.scheduleArrange()
    }
    if (addKeys.length) {
      this.iso.addItems(addKeys::map((addKey) => document.getElementById(addKey)))
      this.scheduleArrange()
    }
  }

  componentWillUnmount() {
    if (this.iso != null) {
      this.iso.destroy()
    }
  }

  scheduleArrange() {
    if ( !this.props.disableImagesLoaded ) {
      this.imagesLoaded()
    } else {
      this.iso.arrange()
    }
  }

  imagesLoaded() {
    imagesloaded(
      this.isotopeContainer,
      function() {
        this.iso.arrange()
      }.bind(this)
    )
  }

  render() {
    return (
      <div className={ this.props.className } ref={ node => this.isotopeContainer = node }>
        { this.props.children }
      </div>
    )
  }
}

Isotope.defaultProps = {
  className: "",
  isoOptions: {
    layoutMode: "masonry"
  },
  disableImagesLoaded: false,
}

Isotope.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  isoOptions: PropTypes.object,
  disableImagesLoaded: PropTypes.bool,
}

export default Isotope
