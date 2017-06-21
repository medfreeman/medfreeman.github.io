import React from "react"
import { AppBar } from "react-toolbox/lib/app_bar"
import { Navigation } from "react-toolbox/lib/navigation"
import Svg from "react-svg-inline"

import Link from "../../Elements/Link"
import Icon from "../../Elements/Icon"
import logoSvg from "../../../icons/medfreeman_3d_dark.svg"

import styles from "./index.css"

const Header = () => (
  <AppBar
    fixed
    theme={ styles }
    rightIcon={ <Icon icon="github" /> }
    onRightIconClick={ function() { window.location="https://github.com/medfreeman/" } }
  >
    <Navigation type="horizontal">
      <Link
        to="/"
        icon={
          <Svg
            className={ styles["svg--logo"] }
            svg={ logoSvg }
            width="36px"
            height="36px"
          />
        }
        label="Home" />
      <Link to="/portfolio/" label="Portfolio" />
      <Link to="/about-me/" label="About Me" />
    </Navigation>
  </AppBar>
)

export default Header
