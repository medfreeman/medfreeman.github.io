import path from "path"

import React from "react"
import PropTypes from "prop-types"
import cx from "classnames"
import shuffle from "lodash.shuffle"
import rwc from "random-weighted-choice"

import Isotope from "../Isotope"

import styles from "./index.css"

class Gallery extends React.Component {
  constructor(props, context) {
    super(props, context)

    this.sizeArray = [
      { weight: 8, id: "small"},
      { weight: 4, id: "large"},
      { weight: 4, id: "high"},
      { weight: 2, id: "double"}
    ]

    this.elements = shuffle(this.props.elements).map((element, index) => {
      let containerClass = "gallery-item-container--small"
      let elementImage = element.image
      if ( ! /\.(png|jpe?g|svg)$/.test(element.image) ) {
        const imageKey = path.basename(element.image)
        const imageSize = rwc(this.sizeArray)
        containerClass = `gallery-item-container--${imageSize}`
        elementImage = path.join(element.image, `${imageKey}-${imageSize}.png` )
      }
      return (
        <div
          key={ index }
          className={
            cx(
              styles["gallery-item-container"],
              styles[containerClass],
            )
          }
        >
          <div className={ styles["gallery-item"] }>
            <a
              href={ element.url }
              target="_blank"
              rel="noreferrer noopener"
            >
              <img src={ elementImage } />
              <div className={ styles["gallery-item-overlay"] }>
                <h2>{ element.title }</h2>
                {element.subtitle &&
                  <h4 className={ styles["gallery-item-subtitle"] }>{ element.subtitle }</h4>
                }
                <span>{ element.year }</span>
              </div>
            </a>
          </div>
        </div>
      )
    })
  }

  render() {
    return (
      <Isotope
        className={ styles.gallery }
        isoOptions={
        {
          itemSelector: `.${styles["gallery-item-container"]}`,
          layoutMode: "packery",
          packery: {
            gutter: 10
          },
        }
        }
      >
        {
          this.elements
        }
      </Isotope>
    )
  }
}

Gallery.propTypes = {
  elements: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
    year: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  })).isRequired,
}

export default Gallery
