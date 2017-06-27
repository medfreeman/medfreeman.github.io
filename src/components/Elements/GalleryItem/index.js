import React from "react"
import PropTypes from "prop-types"

import styles from "./index.css"

class GalleryItem extends React.Component {
  render() {
    return (
      <div className={ this.props.containerClass }>
        <div className={ styles["gallery__container-inner"] }>
          <div className={ styles["gallery__item"] }>
            <a
              className={ styles.link }
              href={ this.props.url }
              target="_blank"
              rel="noreferrer noopener"
            >
              <img src={ this.props.image } />
              <div className={ styles["gallery__item-overlay"] }>
                <h2>{ this.props.title }</h2>
                { this.props.subtitle &&
                  <h4 className={ styles["gallery__item-subtitle"] }>{ this.props.subtitle }</h4>
                }
                <span>{ this.props.year }</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    )
  }
}

GalleryItem.propTypes = {
  containerClass: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  year: PropTypes.string.isRequired
}

export default GalleryItem
