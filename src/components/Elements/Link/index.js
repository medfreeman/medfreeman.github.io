import React from "react";
import PropTypes from "prop-types";
import { Link as RouterLink } from "react-router";
import joinURL from "url-join";
import isAbsoluteUrl from "is-absolute-url";
import { themr } from "react-css-themr";

import defaultTheme from "./theme.css";

@themr('Link', defaultTheme)
class Link extends React.Component {
  static propTypes = {
    children: PropTypes.node,
    theme: PropTypes.object,
    to: PropTypes.string.isRequired
  };

  constructor(props) {
    super(props);
  }

  render() {
    const { to, theme, children } = this.props;
    const url =
      !isAbsoluteUrl(to) && to.match(/\.pdf$/) ? joinURL(PHENOMIC_URL, to) : to;

    return isAbsoluteUrl(url)
      ? <a
          href={url}
          className={theme.link}
          target="_blank"
          rel="noreferrer noopener"
        >
          {children}
        </a>
      : <RouterLink
          to={url}
          className={theme.link}
          activeClassName={theme["link-active"]}
        >
          {children}
        </RouterLink>;
  }
}

export default Link;
