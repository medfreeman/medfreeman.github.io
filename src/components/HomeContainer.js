import React from "react"
import Head from "react-helmet"
import PropTypes from "prop-types"
import { createContainer, query } from "@phenomic/preset-react-app/lib/client"

import BodyRenderer from "./BodyRenderer"
import PageError from "./PageError"
import Layout from "./Layout"

const Home = ({ hasError, page }) => {
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

Home.propTypes = {
  hasError: PropTypes.bool,
  page: PropTypes.object
}

const HomeContainer = createContainer(Home, (props) => ({
  page: query({ collection: "pages", id: "home", ...props }),
}))

export default HomeContainer
