import React from "react";
import PropTypes from "prop-types";

import styles from "./index.css";

const Spacer = props => {
  return <span className={styles[`h-${parseInt(props.height, 10)}`]} />;
};

Spacer.propTypes = {
  height: PropTypes.oneOf(["1", "2", "3", "4", "5", "6", "7"])
};

export default Spacer;
