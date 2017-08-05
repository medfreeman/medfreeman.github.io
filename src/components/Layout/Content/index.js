import React from "react";
import PropTypes from "prop-types";

import styles from "./index.css";

const Content = ({ children }) =>
  <div className={styles.container}>
    {children}
  </div>;

Content.propTypes = {
  children: PropTypes.node
};

export default Content;
