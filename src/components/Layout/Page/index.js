import joinURL from "url-join"
import React from "react"
import Head from "react-helmet"
import PropTypes from "prop-types"

import Header from "../Header"
import FaviconMeta from "../../Meta/Favicon"

import styles from "./index.css"

const Layout = ({children}) => (
  <div>
    <Head>
      <html lang="en" /> { /* this is valid react-helmet usage! */ }
    </Head>
    { PHENOMIC_ENV === "production" &&
      <Head>
        <link rel="stylesheet" type="text/css" href={ joinURL(PHENOMIC_URL, "styles.css") } />
      </Head>
    }
    <FaviconMeta />
    <header>
      <Header />
    </header>
    <div className={ styles["container"] }>{ children }</div>
    <footer>
      { /* ... */ }
    </footer>
  </div>
)

Layout.propTypes = {
  children: PropTypes.element
}

export default Layout
