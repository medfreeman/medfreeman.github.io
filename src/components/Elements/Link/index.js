import React from "react";
import PropTypes from "prop-types";
import { Link as RouterLink } from "react-router";
import isAbsoluteUrl from "is-absolute-url";
import { themr } from "react-css-themr";

import defaultTheme from "./theme.css";

@themr("Link", defaultTheme)
class Link extends React.Component {
  static propTypes = {
    children: PropTypes.node,
    theme: PropTypes.object,
    to: PropTypes.string.isRequired,
    absolute: PropTypes.bool
  };

  static defaultProps = {
    absolute: false
  };

  constructor(props) {
    super(props);
  }

  render() {
    const { to, absolute, theme, children } = this.props;

    return absolute || isAbsoluteUrl(to)
      ? <a
          href={to}
          className={theme.link}
          target="_blank"
          rel="noreferrer noopener"
        >
          {children}
        </a>
      : <RouterLink
          to={to}
          className={theme.link}
          activeClassName={theme["link-active"]}
        >
          {children}
        </RouterLink>;
  }
}

export default Link;
