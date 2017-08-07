import React from "react";
import PropTypes from "prop-types";
import { themr } from "react-css-themr";

@themr("Image")
class Image extends React.Component {
  static propTypes = {
    alt: PropTypes.string,
    children: PropTypes.node,
    className: PropTypes.string,
    src: PropTypes.string,
    theme: PropTypes.object
  };

  constructor(props) {
    super(props);
  }

  render() {
    const { alt, src, className, theme, children, ...otherProps } = this.props;

    return (
      <span className={theme.image} data-react-toolbox="image" {...otherProps}>
        <img src={src} alt={alt} className={className} />
        {children}
      </span>
    );
  }
}

export default Image;
