import React from "react";
import Head from "react-helmet";
import PropTypes from "prop-types";
import { themr } from "react-css-themr";

import Layout from "Layout/";

@themr("Page", null, { composeTheme: false })
class Page extends React.Component {
  static propTypes = {
    children: PropTypes.node,
    description: PropTypes.string,
    title: PropTypes.string,
    theme: PropTypes.object
  };

  static defaultProps = {
    description: "",
    title: ""
  };

  constructor(props) {
    super(props);
  }

  render() {
    const { theme, description, title } = this.props;
    const children = React.Children.map(this.props.children, child => {
      if (React.isValidElement(child)) {
        return React.cloneElement(child, {
          ...child.props,
          className: theme.container
        });
      }
      return child;
    });

    return (
      <Layout>
        <div>
          <Head>
            <title>
              {title}
            </title>
            <meta name="description" content={description} />
          </Head>
          {children}
        </div>
      </Layout>
    );
  }
}

export default Page;
