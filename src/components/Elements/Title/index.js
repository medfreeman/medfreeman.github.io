import React from "react";
import PropTypes from "prop-types";
import { themr } from "react-css-themr";

@themr("Title", null, { composeTheme: "softly" })
class Title extends React.Component {
  static propTypes = {
    children: PropTypes.node,
    level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]).isRequired,
    theme: PropTypes.object
  };

  static defaultProps = {
    level: 1
  };

  constructor(props) {
    super(props);
  }
  render() {
    const { theme, level } = this.props;
    const Tag = `h${level}`;
    const children = React.Children.map(this.props.children, child => {
      if (
        React.isValidElement(child) &&
        child.props.className === "phenomic-HeadingAnchor"
      ) {
        return null;
      } else {
        return (
          <span className={theme[`${Tag}__span`]}>
            {child}
          </span>
        );
      }
    });

    return (
      <Tag className={theme[Tag]}>
        {children}
      </Tag>
    );
  }
}

export default Title;
