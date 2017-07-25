import React from "react";

import Icon from "Elements/Icon";

import styles from "./index.css";

const Footer = () =>
  <footer className={styles.footer}>
    {/* If you like Phenomic, this is a way to share the love ;) */}
    <span className={styles.externalReference}>
      {"Made with "}
      <Icon icon="heart" />
      {" using "}
      <a
        href="https://facebook.github.io/react/"
        className={styles.externalReference}
        target="_blank"
        rel="noreferrer noopener"
      >
        <span className={styles.externalReferenceName}>
          <Icon icon="react" />
          {" React"}
        </span>
      </a>
      <span className={styles.externalReference}>
        {" & "}
      </span>
      <a
        href="https://phenomic.io"
        className={styles.externalReference}
        target="_blank"
        rel="noreferrer noopener"
      >
        <span className={styles.externalReferenceName}>
          {"Phenomic"}
        </span>
      </a>
    </span>
  </footer>;

export default Footer;
