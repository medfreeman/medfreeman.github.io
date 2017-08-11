import React from "react";
import PropTypes from "prop-types";

import Header from "Elements/Header";
import P from "Elements/P";
import Title from "Elements/Title";
import Link from "Elements/Link";

import theme from "./theme.css";

const BlogPostHeader = ({ post }) => {
  const title = post.id
    ? <Link to={`/blog/${post.id}`} theme={theme}>
        {post.title || post.id}
      </Link>
    : post.title;

  return (
    <Header theme={theme}>
      <Title level={2} theme={theme}>
        {title}
      </Title>
      <P theme={theme}>
        {post.date}
      </P>
    </Header>
  );
};

BlogPostHeader.propTypes = {
  post: PropTypes.object
};

export default BlogPostHeader;
