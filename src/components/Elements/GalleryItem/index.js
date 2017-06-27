import React from "react"
import PropTypes from "prop-types"
import cx from "classnames"

import styles from "./index.css"

class GalleryItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: this.props.active || false
    }
  }

  handleTouch = (e) => {
    if( this.state.active ) {
      this.setState({ active: false })
      return true
    }
    else {
      this.setState({ active: true })
      e.preventDefault()
      return false
    }
  }

  render() {
    return (
      <div
        className={ this.props.containerClass }
      >
        <div
          className={
            cx(
              styles["gallery__container-inner"],
              this.state.active && "hover" || null
            )
          }
        >
          <div className={ styles["gallery__item"] }>
            <a
              className={ styles.link }
              href={ this.props.url }
              target="_blank"
              rel="noreferrer noopener"
              onTouchStart={ this.handleTouch }
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
  active: PropTypes.bool,
  containerClass: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  year: PropTypes.string.isRequired
}

export default GalleryItem
