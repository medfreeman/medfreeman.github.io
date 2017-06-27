import React from "react"
import PropTypes from "prop-types"
import { Button } from "react-toolbox/lib/button"
import { Link as RouterLink } from "react-router"
import isAbsoluteUrl from "is-absolute-url"

import Icon from "../Icon"

import styles from "./index.css"
import buttonStyle from "./button.css"

const Link = (props) => {
  const { icon, to, buttonTheme, ...otherProps } = props
  if (icon) {
    if (typeof icon === "string") {
      otherProps.icon = ( <Icon icon={ icon } /> )
    } else {
      otherProps.icon = icon
    }
  }

  if ( isAbsoluteUrl(to) ) {
    return (
      <a href={ to } className={ styles["link"] }>
        <Button neutral={ false } theme={ buttonTheme || buttonStyle } { ...otherProps } />
      </a>
    )
  } else {
    return (
      <RouterLink to={ to } className={ styles["link"] } activeClassName={ styles["link-active"] }>
        <Button
          neutral={ false }
          theme={ buttonTheme || buttonStyle }
          { ...otherProps }
        />
      </RouterLink>
    )
  }
}

Link.propTypes = {
  buttonTheme: PropTypes.object,
  icon: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]),
  label: PropTypes.string,
  theme: PropTypes.object,
  to: PropTypes.string.isRequired
}

export default Link
