import React from "react";
import PropTypes from "prop-types";
import { BodyRenderer as PhenomicBodyRenderer } from "@phenomic/preset-react-app/lib/client";

import P from "Elements/P";
import Ul from "Elements/Ul";
import Li from "Elements/Li";
import Link from "Elements/Link";
import Spacer from "Elements/Spacer";
import Title from "Elements/Title";
import TooltipIcon from "Elements/TooltipIcon";

class BodyRenderer extends React.Component {
  static propTypes = {
    children: PropTypes.object,
    components: PropTypes.objectOf(
      PropTypes.oneOfType([PropTypes.func, PropTypes.element])
    )
  };

  static DEFAULT_COMPONENTS = {
    Icon: TooltipIcon,
    Spacer,
    h1: Title,
    h2: props => <Title level={2} {...props} />,
    h3: props => <Title level={3} {...props} />,
    h4: props => <Title level={4} {...props} />,
    h5: props => <Title level={5} {...props} />,
    h6: props => <Title level={6} {...props} />,
    p: P,
    a: ownProps => {
      const { href, ...otherProps } = ownProps;
      return <Link to={href} {...otherProps} />;
    },
    ul: Ul,
    li: Li
  };

  constructor(props) {
    super(props);
  }

  getComponents() {
    return Object.assign(
      {},
      BodyRenderer.DEFAULT_COMPONENTS,
      this.props.components || {}
    );
  }

  render() {
    const { children } = this.props;
    const components = this.getComponents();

    return (
      <PhenomicBodyRenderer components={components}>
        {children}
      </PhenomicBodyRenderer>
    );
  }
}

export default BodyRenderer;
