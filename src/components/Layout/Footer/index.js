import React from "react"
import Svg from "react-svg-inline"

import reactSvg from "../../../icons/react.svg"

import styles from "./index.css"

const Footer = () => (
  <footer className={ styles.footer }>
    { /* If you like Phenomic, this is a way to share the love ;) */ }
    <span>
      <a
        href="https://phenomic.io"
        className={ styles.externalReference }
        target="_blank"
        rel="noreferrer noopener"
      >
        { "Website generated with " }
        <span className={ styles.externalReferenceName }>
          { "Phenomic" }
        </span>
      </a>
      <span className={ styles.externalReference }>
        { " — " }
      </span>
      <a
        href="https://facebook.github.io/react/"
        className={ styles.externalReference }
        target="_blank"
        rel="noreferrer noopener"
      >
        { "Built with " }
        <span className={ styles.externalReferenceName }>
          <Svg
            className={ styles.reactSvg }
            svg={ reactSvg }
            width="1rem"
            height="1rem"
            cleanupExceptions={ [ "fill" ] }
          />
          { " React" }
        </span>
      </a>
    </span>
  </footer>
)

export default Footer
