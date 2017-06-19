import React from "react"
import PropTypes from "prop-types"

const Icon = props => (
  <i className={ "mf-icons" }>
    { props.icon }
  </i>
)

Icon.propTypes = {
  icon: PropTypes.string.isRequired
}

export default Icon
