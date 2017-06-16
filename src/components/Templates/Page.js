import React from "react"
import Head from "react-helmet"
import PropTypes from "prop-types"

import { createContainer, query, BodyRenderer } from "../../presets/preset-react-app/client"
import Layout from "../Layout/Page"

import ErrorPage from "./ErrorPage"

const PageComponent = ({ hasError, page }) => {
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

PageComponent.propTypes = {
  hasError: PropTypes.bool,
  page: PropTypes.object
}

const Page = createContainer(PageComponent, (props) => ({
  page: query({ collection: "pages", id: props.params.splat || "home", ...props }),
}))

export default Page
