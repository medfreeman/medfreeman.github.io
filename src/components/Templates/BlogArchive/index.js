import React from "react";
import PropTypes from "prop-types";
import { createContainer, query } from "@phenomic/preset-react-app/lib/client";

import pkg from "package.json";
import Page from "Templates/Page";
import ErrorPage from "Templates/ErrorPage";
import BlogPostHeader from "Partials/BlogPostHeader";
import Link from "Elements/Link";

import PageTheme from "./theme.css";

const BlogArchiveComponent = ({ hasError, posts, isLoading, page }) => {
  return hasError ? (
    <ErrorPage error={page.error} />
  ) : (
    !isLoading && (
      <Page
        title={`Blog | ${pkg.name}`}
        description={"Blog Archive"}
        theme={PageTheme}
      >
        <div>
          {posts &&
            posts.node &&
            posts.node.list &&
            posts.node.list.map(post => (
              <article key={post.id}>
                <BlogPostHeader post={post} />
              </article>
            ))}
          <p>
            {posts &&
              posts.node &&
              posts.node.hasNextPage && (
                <Link to={`/blog/after/${posts.node.next}`}>
                  {"Older posts"}
                </Link>
              )}
          </p>
        </div>
      </Page>
    )
  );
};

BlogArchiveComponent.propTypes = {
  hasError: PropTypes.bool,
  posts: PropTypes.object,
  isLoading: PropTypes.bool,
  page: PropTypes.object
};

const BlogArchive = createContainer(BlogArchiveComponent, props => ({
  posts: query({ path: "posts", limit: 5, after: props.params.after })
}));

export default BlogArchive;
