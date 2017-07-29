/* eslint-disable react/no-multi-comp */
import React from "react";
import Head from "react-helmet";
import PropTypes from "prop-types";

import {
  createContainer,
  query,
  BodyRenderer
} from "@phenomic/preset-react-app/lib/client";
import Layout from "Layout/Page";
import ErrorPage from "Templates/ErrorPage";
import Link from "Elements/Link";
import Title from "Elements/Title";
import TooltipIcon from "Elements/TooltipIcon";

import styles from "./index.css";
import tooltipIconTheme from "./tooltipIcon.css";

const HomePageComponent = ({ hasError, page }) => {
  if (hasError) {
    return <ErrorPage error={page.error} />;
  }

  return (
    <Layout>
      <div className={styles.container}>
        {page.node &&
          <article className={styles.article}>
            <Head>
              <title>
                {"medfreeman"}
              </title>
              <meta name="description" content={""} />
              <html className={styles.background} />
            </Head>
            <BodyRenderer
              components={{
                Icon: ownProps =>
                  <TooltipIcon theme={tooltipIconTheme} {...ownProps} />,
                h1: ownProps =>
                  <Title
                    className={styles.h1}
                    spanClass={styles.h1__text}
                    {...ownProps}
                  />,
                h2: ownProps =>
                  <Title
                    className={styles.h2}
                    spanClass={styles.h2__text}
                    level={2}
                    {...ownProps}
                  />,
                p: ownProps => <p className={styles.text} {...ownProps} />,
                a: ownProps => {
                  const { href, ...otherProps } = ownProps;
                  return <Link to={href} {...otherProps} />;
                },
                ul: ownProps => <ul className={styles.ul} {...ownProps} />,
                li: ownProps => <li className={styles.li} {...ownProps} />
              }}
            >
              {page.node.body}
            </BodyRenderer>
          </article>}
      </div>
    </Layout>
  );
};

HomePageComponent.propTypes = {
  hasError: PropTypes.bool,
  page: PropTypes.object
};

const HomePage = createContainer(HomePageComponent, props => ({
  page: query({ collection: "pages", id: "home", ...props })
}));

export default HomePage;
