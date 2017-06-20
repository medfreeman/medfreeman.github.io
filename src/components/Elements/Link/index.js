import React from "react"
import PropTypes from "prop-types"
import { Button } from "react-toolbox/lib/button"
import { Link as RouterLink } from "react-router"

import Icon from "../Icon"

import styles from "./index.css"

const Link = (props) => {
  const { icon, theme, to, ...otherProps } = props
  if (icon) {
    if (typeof icon === "string") {
      otherProps.icon = ( <Icon icon={ icon } /> )
    } else {
      otherProps.icon = icon
    }
  }

  return (
    <RouterLink to={ to }>
      <Button neutral={ false } theme={ theme || styles } { ...otherProps } />
    </RouterLink>
  )
}

Link.propTypes = {
  icon: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]),
  label: PropTypes.string,
  theme: PropTypes.object,
  to: PropTypes.string.isRequired
}

export default Link
