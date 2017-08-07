import React from "react";
import PropTypes from "prop-types";
import { themr } from "react-css-themr";

@themr("Li")
class Li extends React.Component {
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
      <li className={theme.li}>
        {children}
      </li>
    );
  }
}

export default Li;
