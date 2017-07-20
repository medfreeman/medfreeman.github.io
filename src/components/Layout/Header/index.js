/* eslint-disable react/jsx-no-bind */
import React from "react"
import Headroom from "react-headroom"
import { Button } from "react-toolbox/lib/button"
import { Navigation } from "react-toolbox/lib/navigation"
import InlineSVG from "svg-inline-react"

import Link from "Elements/Link"
import Icon from "Elements/Icon"
import githubCornerSVG from "icons/github_corner.svg"

import styles from "./index.css"
import buttonTheme from "./button.css"

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      headerStyle: {
        height: 0
      }
    }
  }

  componentDidMount() {
    window.addEventListener("resize", this.setHeaderHeight)
  }

  setHeaderHeight = () => {
    const headerHeight = this.header.clientHeight
    this.setState({
      headerStyle: {
        height: headerHeight
      }
    })
  }

  render() {
    const { headerStyle } = this.state

    return (
      <Headroom wrapperStyle={ headerStyle }>
        <header className={ styles.header } ref={ (ref) => { this.header = ref } }>
          <a
            href="https://github.com/medfreeman/medfreeman.github.io/"
            aria-label="Fork me on Github"
          >
            <InlineSVG
              src={ githubCornerSVG }
              className={ styles["github-corner__container"] }
            />
          </a>
          <div className={ styles.container }>
            <Navigation
              type="horizontal"
            >
              <Link to="/">
                <Button neutral={ false } theme={ buttonTheme } icon={ <Icon icon="logo_black_white" /> } label="Home" />
              </Link>
              <Link to="/portfolio/">
                <Button neutral={ false } theme={ buttonTheme } icon={ <Icon icon="art_track" /> } label="Portfolio" />
              </Link>
            </Navigation>
          </div>
        </header>
      </Headroom>
    )
  }
}

export default Header
