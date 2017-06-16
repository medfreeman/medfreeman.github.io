import React from "react"
import Head from "react-helmet"
import PropTypes from "prop-types"

// multi layouts @see https://github.com/phenomic/phenomic/blob/master/packages/preset-react-app/docs/getting-started/7.md @todo !

import { createContainer, query, BodyRenderer } from "../../../presets/preset-react-app/client"
import Layout from "../../Layout/Page"
import ErrorPage from "../ErrorPage"

const BlogPostComponent = ({ hasError, page }) => {
  if (hasError) {
    return <ErrorPage error={ page.error } />
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

BlogPostComponent.propTypes = {
  hasError: PropTypes.bool,
  page: PropTypes.object
}

const BlogPost = createContainer(BlogPostComponent, (props) => ({
  page: query({ collection: "posts", id: props.params.splat }),
}))

export default BlogPost
