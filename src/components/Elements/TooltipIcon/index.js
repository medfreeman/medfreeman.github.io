import React from "react";
import PropTypes from "prop-types";
import { Button } from "react-toolbox/lib/button";
import Tooltip from "react-toolbox/lib/tooltip";

import Icon from "Elements/Icon";
import Link from "Elements/Link";

import theme from "./index.css";

const TooltipButton = Tooltip(Button);

const TooltipIcon = props => {
  const { floating, to, ...otherProps } = props;
  if (floating === "true") {
    otherProps.floating = true;
  }

  const element = (
    <TooltipButton
      {...otherProps}
      tooltipPosition="top"
      theme={props.theme || theme}
      icon={<Icon icon={props.icon} />}
    />
  );
  if (to) {
    return (
      <Link to={to}>
        {element}
      </Link>
    );
  } else {
    return element;
  }
};

TooltipIcon.propTypes = {
  icon: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,
  floating: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  to: PropTypes.string,
  tooltip: PropTypes.any.isRequired,
  theme: PropTypes.object
};

export default TooltipIcon;
