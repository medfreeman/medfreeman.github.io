import React from "react";
import Head from "react-helmet";
import PropTypes from "prop-types";
import {
  createContainer,
  query,
  BodyRenderer
} from "@phenomic/preset-react-app/lib/client";

import pkg from "package.json";
import Page from "Templates/Page";
import ErrorPage from "Templates/ErrorPage";
import BlogPostHeader from "Partials/BlogPostHeader";

import styles from "./index.css";

const BlogPostComponent = ({ hasError, isLoading, page }) => {
  return hasError
    ? <ErrorPage error={page.error} />
    : !isLoading &&
      <Page
        title={`${page.node.title} | ${pkg.name}`}
        description={"Blog Archive"}
      >
        <div>
          <Head>
            <html className={styles.background} />
          </Head>
          {!isLoading &&
            <article>
              <BlogPostHeader post={page.node} />
              <BodyRenderer>
                {page.node.body}
              </BodyRenderer>
            </article>}
        </div>
      </Page>;
};

BlogPostComponent.propTypes = {
  hasError: PropTypes.bool,
  isLoading: PropTypes.bool,
  page: PropTypes.object
};

const BlogPost = createContainer(BlogPostComponent, props => ({
  page: query({ collection: "posts", id: props.params.splat })
}));

export default BlogPost;
