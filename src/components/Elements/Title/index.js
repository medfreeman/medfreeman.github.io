import React from "react";
import PropTypes from "prop-types";

class Title extends React.Component {
  constructor(props) {
    super(props);
    this.children = React.Children.map(this.props.children, child => {
      if (typeof child === "string") {
        return (
          <span className={this.props.spanClass}>
            {child}
          </span>
        );
      } else if (
        React.isValidElement(child) &&
        child.props.className === "phenomic-HeadingAnchor"
      ) {
        return null;
      }
      return child;
    });
    this.Tag = `h${this.props.level}`;
  }
  render() {
    return (
      <this.Tag className={this.props.className}>
        {this.children}
      </this.Tag>
    );
  }
}

Title.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]).isRequired,
  spanClass: PropTypes.string
};

Title.defaultProps = {
  level: 1
};

export default Title;
