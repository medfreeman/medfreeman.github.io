import React from "react"
import Head from "react-helmet"
import PropTypes from "prop-types"

import FaviconMeta from "../../Meta/Favicon"

const Layout = ({children}) => (
  <div>
    <Head>
      <html lang="en" /> { /* this is valid react-helmet usage! */ }
    </Head>
    <FaviconMeta />
    <header>
      { /* ... */ }
    </header>
    <div>{ children }</div>
    <footer>
      { /* ... */ }
    </footer>
  </div>
)

Layout.propTypes = {
  children: PropTypes.element
}

export default Layout
