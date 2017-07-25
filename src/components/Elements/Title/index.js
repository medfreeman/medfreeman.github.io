import React from "react";
import PropTypes from "prop-types";

const Title = props => {
  const children = React.Children.map(
    props.children,
    child =>
      typeof child === "string"
        ? <span className={props.spanClass}>
            {child}
          </span>
        : null
  );

  return (
    <h1 className={props.className}>
      {children}
    </h1>
  );
};

Title.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  spanClass: PropTypes.string
};

export default Title;
