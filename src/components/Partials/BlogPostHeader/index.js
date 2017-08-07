import React from "react";
import PropTypes from "prop-types";

import Title from "Elements/Title";
import Link from "Elements/Link";

const BlogPostHeader = ({ post }) => {
  const title = post.id
    ? <Link to={`/blog/${post.id}`}>
        {post.title || post.id}
      </Link>
    : post.title;

  return (
    <header>
      <Title level={2}>
        {title}
      </Title>
      <p>
        {post.date}
      </p>
    </header>
  );
};

BlogPostHeader.propTypes = {
  post: PropTypes.object
};

export default BlogPostHeader;
