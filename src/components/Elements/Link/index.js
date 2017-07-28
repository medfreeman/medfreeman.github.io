import React from "react";
import PropTypes from "prop-types";
import { Link as RouterLink } from "react-router";
import joinURL from "url-join";
import isAbsoluteUrl from "is-absolute-url";

import styles from "./index.css";

const Link = props => {
  let url = props.to;
  if (!isAbsoluteUrl(url) && url.match(/\.pdf$/)) {
    url = joinURL(PHENOMIC_URL, url);
  }

  if (isAbsoluteUrl(url)) {
    return (
      <a
        href={url}
        className={props.className || styles["link"]}
        target="_blank"
        rel="noreferrer noopener"
      >
        {props.children}
      </a>
    );
  } else {
    return (
      <RouterLink
        to={url}
        className={props.className || styles["link"]}
        activeClassName={styles["link-active"]}
      >
        {props.children}
      </RouterLink>
    );
  }
};

Link.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  to: PropTypes.string.isRequired
};

export default Link;
