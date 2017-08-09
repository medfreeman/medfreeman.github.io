import React from "react";
import PropTypes from "prop-types";
import { themr } from "react-css-themr";

@themr("Header")
class Header extends React.Component {
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
      <header className={theme.header}>
        {children}
      </header>
    );
  }
}

export default Header;
