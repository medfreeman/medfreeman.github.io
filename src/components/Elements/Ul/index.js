import React from "react";
import PropTypes from "prop-types";
import { themr } from "react-css-themr";

@themr("Ul")
class Ul extends React.Component {
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
      <ul className={theme.ul}>
        {children}
      </ul>
    );
  }
}

export default Ul;
