import React from "react"
import Head from "react-helmet"
import PropTypes from "prop-types"

import { createContainer, query, BodyRenderer } from "../../../presets/preset-react-app/client"
import Layout from "../../Layout/Page"
import ErrorPage from "../ErrorPage"
import Gallery from "../../Elements/Gallery"

const PortfolioComponent = ({ hasError, page }) => {
  if (hasError) {
    return <ErrorPage error={ page.error } />
  }

  return (
    <Layout>
      <div>
        {page.node &&(
          <article>
            <Head>
              <title>{ page.node.title }</title>
              <meta name="description" content={ "" /* page.node.body.slice(0, 50)*/ } />
            </Head>
            <BodyRenderer>{ page.node.body }</BodyRenderer>
            <Gallery elements={ page.node.gallery ? page.node.gallery : [] } />
          </article>
        )}
      </div>
    </Layout>
  )
}

PortfolioComponent.propTypes = {
  hasError: PropTypes.bool,
  page: PropTypes.shape({
    node: PropTypes.shape({
      gallery: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string.isRequired,
        subtitle: PropTypes.string,
        year: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
      })).isRequired,
    })
  }),
}

const Portfolio = createContainer(PortfolioComponent, (props) => ({
  page: query({ collection: "pages", id: "portfolio", ...props }),
}))

export default Portfolio
