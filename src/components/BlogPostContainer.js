import React from "react"
import Head from "react-helmet"
import PropTypes from "prop-types"
import { createContainer, query, BodyRenderer } from "@phenomic/preset-react-app/lib/client"

// multi layouts @see https://github.com/phenomic/phenomic/blob/master/packages/preset-react-app/docs/getting-started/7.md @todo !

import PageError from "./PageError"
import Layout from "./Layout"

const BlogPost = ({ hasError, page }) => {
  if (hasError) {
    return <PageError error={ page.error } />
  }

  return (
    <Layout>
      <div>
        {page.node && (
          <article>
            <Head>
              <title>{ page.node.title }</title>
              <meta name="description" content={ "" /* page.node.body.slice(0, 50)*/ } />
            </Head>
            <h1>{ page.node.title }</h1>
            <BodyRenderer>{ page.node.body }</BodyRenderer>
          </article>
        )}
      </div>
    </Layout>
  )
}

BlogPost.propTypes = {
  hasError: PropTypes.bool,
  page: PropTypes.object
}

const BlogPostContainer = createContainer(BlogPost, (props) => ({
  page: query({ collection: "posts", id: props.params.splat }),
}))

export default BlogPostContainer
