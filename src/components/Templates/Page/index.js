import React from "react";
import Head from "react-helmet";
import PropTypes from "prop-types";

import Layout from "Layout/";

import styles from "./index.css";

class Page extends React.Component {
  static propTypes = {
    children: PropTypes.node,
    description: PropTypes.string,
    title: PropTypes.string
  };

  static defaultProps = {
    description: "",
    title: ""
  };

  constructor(props) {
    super(props);
  }

  render() {
    const { description, title } = this.props;
    const children = React.Children.map(this.props.children, child => {
      if (React.isValidElement(child) && !child.props.className) {
        return React.cloneElement(child, {
          className: styles.article,
          ...child.props
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
