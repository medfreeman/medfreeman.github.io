import React from "react";
import PropTypes from "prop-types";
import Button from "react-toolbox/lib/button";
import Tooltip from "react-toolbox/lib/tooltip";
import { themr } from "react-css-themr";

import Icon from "Elements/Icon";
import Link from "Elements/Link";

import Image from "./Image";
import defaultTheme from "./theme.css";

const TooltipButton = Tooltip(Button);
const TooltipImage = Tooltip(Image);
const TooltipFontIcon = Tooltip(Icon);

const isImage = string => /\.(gif|jpg|jpe?g|tiff|png)$/i.test(string);

@themr("TooltipIcon", defaultTheme)
class TooltipIcon extends React.Component {
  static defaultProps = {
    tooltipPosition: "top",
    absolute: false
  };

  static propTypes = {
    icon: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,
    floating: PropTypes.bool,
    to: PropTypes.string,
    absolute: PropTypes.bool,
    tooltip: PropTypes.any.isRequired,
    tooltipPosition: PropTypes.oneOf([
      "vertical",
      "horizontal",
      "bottom",
      "top",
      "left",
      "right"
    ]),
    theme: PropTypes.object
  };

  constructor(props) {
    super(props);
  }

  render() {
    const { theme, icon, to, absolute, ...otherProps } = this.props;

    const childrenHasTooltip = !to;
    const ImageTag = childrenHasTooltip ? TooltipImage : Image;
    const IconTag = childrenHasTooltip ? TooltipFontIcon : Icon;
    const iconProps = childrenHasTooltip ? otherProps : {};

    const iconElement = isImage(icon) ? (
      <ImageTag
        theme={theme}
        src={icon}
        alt={this.props.tooltip}
        {...iconProps}
      />
    ) : (
      <IconTag theme={theme} icon={icon} {...iconProps} />
    );

    return to ? (
      <Link to={to} absolute={absolute} theme={theme}>
        <TooltipButton theme={theme} {...otherProps}>
          {iconElement}
        </TooltipButton>
      </Link>
    ) : (
      iconElement
    );
  }
}

export default TooltipIcon;
