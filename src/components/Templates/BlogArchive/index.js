import React from "react";
import PropTypes from "prop-types";
import Head from "react-helmet";
import { createContainer, query } from "@phenomic/preset-react-app/lib/client";

import pkg from "package.json";
import Page from "Templates/Page";
import ErrorPage from "Templates/ErrorPage";
import Title from "Elements/Title"
import Link from "Elements/Link";

import styles from "./index.css";

const BlogArchiveComponent = ({ hasError, posts, isLoading, page }) => {
  return hasError
    ? <ErrorPage error={page.error} />
    : !isLoading &&
      <Page title={`Blog | ${pkg.name}`} description={"Blog Archive"}>
        <div>
          <Head>
            <html className={styles.background} />
          </Head>
          {posts &&
            posts.node &&
            posts.node.list &&
            posts.node.list.map(post =>
              <Title level={2} key={post.id}>
                <Link to={`/blog/${post.id}`}>
                  {post.title || post.id}
                </Link>
              </Title>
            )}
          <p>
            {posts &&
              posts.node &&
              posts.node.hasNextPage &&
              <Link to={`/blog/after/${posts.node.next}`}>
                {"Older posts"}
              </Link>}
          </p>
        </div>
      </Page>;
};

BlogArchiveComponent.propTypes = {
  hasError: PropTypes.bool,
  posts: PropTypes.object,
  isLoading: PropTypes.bool,
  page: PropTypes.object
};

const BlogArchive = createContainer(BlogArchiveComponent, props => ({
  posts: query({ collection: "posts", limit: 5, after: props.params.after })
}));

export default BlogArchive;
