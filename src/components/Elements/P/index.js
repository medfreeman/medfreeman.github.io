import React from "react";
import PropTypes from "prop-types";
import { themr } from "react-css-themr";

@themr("P")
class P extends React.Component {
  static propTypes = {
    children: PropTypes.node,
    theme: PropTypes.object
  };

  constructor(props) {
    super(props);
  }

  render() {
    const { theme, children } = this.props;

    return (
      <p className={theme.p}>
        {children}
      </p>
    );
  }
}

export default P;
