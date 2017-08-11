import React from "react";
import PropTypes from "prop-types";
import { Link as RouterLink } from "react-router";
import isAbsoluteUrl from "is-absolute-url";
import { themr } from "react-css-themr";
import cx from "classnames";

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

  static contextTypes = {
    router: PropTypes.object.isRequired
  };

  constructor(props) {
    super(props);
  }

  render() {
    const { to, absolute, theme, children } = this.props;

    const isActive =
      to !== "/"
        ? this.context.router.getCurrentLocation().pathname.indexOf(to) !== -1
        : false;

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
          className={cx(theme.link, isActive ? theme["link-active"] : null)}
          activeClassName={theme["link-active"]}
        >
          {children}
        </RouterLink>;
  }
}

export default Link;
