import React from "react";
import Head from "react-helmet";
import PropTypes from "prop-types";

import FaviconMeta from "Meta/Favicon";
import Header from "Layout/Header";
import Content from "Layout/Content";
import Footer from "Layout/Footer";

import styles from "./index.css";

const Layout = ({ children }) =>
  <div>
    <Head>
      <html lang="en" /> {/* this is valid react-helmet usage! */}
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=1"
      />
    </Head>
    {process.env.NODE_ENV === "production" &&
      <Head>
        <link rel="stylesheet" type="text/css" href="/styles.css" />
      </Head>}
    <FaviconMeta />
    <div className={styles.container}>
      <Header />
      <Content>
        {children}
      </Content>
      <Footer />
    </div>
  </div>;

Layout.propTypes = {
  children: PropTypes.element
};

export default Layout;
