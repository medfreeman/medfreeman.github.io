import React from "react"
import { IconButton } from "react-toolbox/lib/button"
import { Drawer } from "react-toolbox/lib/drawer"
import { Navigation } from "react-toolbox/lib/navigation"
import Svg from "react-svg-inline"

import Link from "../../Elements/Link"
import Icon from "../../Elements/Icon"
import logoSvg from "../../../icons/medfreeman_3d_dark.svg"

import styles from "./index.css"

class Header extends React.Component {
  state = {
    active: false
  }

  handleToggle = () => {
    this.setState({ active: !this.state.active })
  }

  render () {
    return (
      <div className={ styles["header"] }>
        <IconButton
          icon={ <Icon className={ styles["icon--open"] } icon="menu" /> }
          onClick={ this.handleToggle }
        />
        <Drawer
          type="right"
          active={ this.state.active }
          onOverlayClick={ this.handleToggle }
          className={ styles["drawer"] }
        >
          <IconButton
            className={ styles["button--close"] }
            icon={ <Icon className={ styles["icon--close"] } icon="close" /> }
            onClick={ this.handleToggle }
          />
          <Navigation
            type="vertical"
            className={ styles["navigation"] }
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
          </Navigation>
        </Drawer>
      </div>
    )
  }
}

/* const Header = () => (
  <IconButton icon={ <Icon icon="menu" /> } />
  <Menu
    customBurgerIcon={ <Icon icon="menu" /> }
    customCrossIcon={ <Icon icon="close" /> }
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
)*/

export default Header
