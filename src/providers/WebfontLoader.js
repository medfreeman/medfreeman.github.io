import { Component } from "react";
import PropTypes from "prop-types";

const isBrowser = typeof window !== "undefined";
const WebFont = isBrowser ? require("webfontloader") : null;

const statuses = {
  inactive: "inactive",
  active: "active",
  loading: "loading"
};

const noop = () => {};

class WebfontLoader extends Component {
  state = {
    status: undefined
  };

  componentDidMount() {
    this.loadFonts();
  }

  componentDidUpdate(prevProps, prevState) {
    const { onStatus, config } = this.props;

    if (prevState.status !== this.state.status) {
      onStatus(this.state.status);
    }

    if (prevProps.config !== config) {
      this.loadFonts();
    }
  }

  handleLoading = () => {
    this.setState({ status: statuses.loading });
  };

  handleActive = () => {
    this.setState({ status: statuses.active });
  };

  handleInactive = () => {
    this.setState({ status: statuses.inactive });
  };

  loadFonts = () => {
    isBrowser &&
      WebFont.load({
        ...this.props.config,
        loading: this.handleLoading,
        active: this.handleActive,
        inactive: this.handleInactive
      });
  };

  render() {
    const { children } = this.props;
    return children || null;
  }
}

WebfontLoader.propTypes = {
  config: PropTypes.object.isRequired,
  children: PropTypes.element,
  onStatus: PropTypes.func
};

WebfontLoader.defaultProps = {
  onStatus: noop
};

export default WebfontLoader;
