import joinURL from "url-join"
import React from "react"
import Head from "react-helmet"
import PropTypes from "prop-types"

import FaviconMeta from "../../Meta/Favicon"
import Header from "../Header"
import Footer from "../Footer"

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
    <div className={ styles.container }>
      <Header />
      { children }
    </div>
    <Footer />
  </div>
)

Layout.propTypes = {
  children: PropTypes.element
}

export default Layout
