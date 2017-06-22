import React from "react"
import { stack as Menu } from "react-burger-menu"
import Svg from "react-svg-inline"

import Link from "../../Elements/Link"
import logoSvg from "../../../icons/medfreeman_3d_dark.svg"

import styles from "./index.css"

const Header = () => (
  <Menu
    burgerButtonClassName={ styles["bm-burger-button"] }
    burgerBarClassName={ styles["bm-burger-bars"] }
    crossButtonClassName={ styles["bm-cross-button"] }
    crossClassName={ styles["bm-cross"] }
    menuClassName={ styles["bm-menu"] }
    itemListClassName={ styles["bm-item-list"] }
    overlayClassName={ styles["bm-overlay"] }
    right
  >
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
    <Link to="https://github.com/medfreeman/medfreeman.github.io" label="Fork me on github" icon="github" />
  </Menu>
)

export default Header
