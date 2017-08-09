import React from "react";
import PropTypes from "prop-types";

import Header from "Elements/Header";
import Title from "Elements/Title";
import Link from "Elements/Link";

import linkTheme from "./theme.css";

const BlogPostHeader = ({ post }) => {
  const title = post.id
    ? <Link to={`/blog/${post.id}`} theme={linkTheme}>
        {post.title || post.id}
      </Link>
    : post.title;

  return (
    <Header>
      <Title level={2}>
        {title}
      </Title>
      <p>
        {post.date}
      </p>
    </Header>
  );
};

BlogPostHeader.propTypes = {
  post: PropTypes.object
};

export default BlogPostHeader;
