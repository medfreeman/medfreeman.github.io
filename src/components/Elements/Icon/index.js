import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import { FontIcon } from "react-toolbox/lib/font_icon";
import { themr } from "react-css-themr";

@themr("Icon")
class Icon extends React.Component {
  static propTypes = {
    icon: PropTypes.string.isRequired,
    children: PropTypes.node,
    className: PropTypes.string,
    theme: PropTypes.object
  };

  constructor(props) {
    super(props);
  }

  render() {
    const { icon, className, theme, children, ...otherProps } = this.props;

    return (
      <FontIcon className={theme.icon}>
        <i className={cx("mf-icons", className)} {...otherProps}>
          {icon}
        </i>
        {children}
      </FontIcon>
    );
  }
}

export default Icon;
