import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";

const Icon = props => {
  const { className, icon, ...otherProps } = props;
  return (
    <i className={cx("mf-icons", className)} {...otherProps}>
      {icon}
    </i>
  );
};

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
  className: PropTypes.string
};

export default Icon;
