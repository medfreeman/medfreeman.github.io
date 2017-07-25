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

import styles from "./index.css";

const PageComponent = ({ hasError, page }) => {
  if (hasError) {
    return <ErrorPage error={{}} />;
  }

  return (
    <Layout>
      <div className={styles.container}>
        {page.node &&
          <article className={styles.article}>
            <Head>
              <title>
                {page.node.title + " | medfreeman"}
              </title>
              <meta
                name="description"
                content={"" /* page.node.body.slice(0, 50)*/}
              />
            </Head>
            <BodyRenderer>
              {page.node.body}
            </BodyRenderer>
          </article>}
      </div>
    </Layout>
  );
};

PageComponent.propTypes = {
  hasError: PropTypes.bool,
  page: PropTypes.object
};

const Page = createContainer(PageComponent, props => ({
  /*
    Nasty hack until
    https://github.com/phenomic/phenomic/issues/1093
    is closed
  */
  page:
    props.params.splat === "home"
      ? {}
      : query({ collection: "pages", id: props.params.splat, ...props })
}));

export default Page;
