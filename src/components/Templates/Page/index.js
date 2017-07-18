import React from "react"
import Head from "react-helmet"
import PropTypes from "prop-types"

import { createContainer, query, BodyRenderer } from "presets/preset-react-app/client"
import Layout from "Layout/Page"
import ErrorPage from "Templates/ErrorPage"
import TooltipIcon from "Elements/TooltipIcon"

import styles from "./index.css"

const PageComponent = ({ hasError, page }) => {
  if (hasError) {
    return <ErrorPage error={ page.error } />
  }

  return (
    <Layout>
      <div className={ styles.container }>
        {page.node && (
          <article>
            <Head>
              <title>{ page.node.title + " | medfreeman" }</title>
              <meta name="description" content={ "" /* page.node.body.slice(0, 50)*/ } />
            </Head>
            <BodyRenderer components={ { Icon: TooltipIcon } }>{ page.node.body }</BodyRenderer>
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
  page: query({ collection: "pages", id: props.params.splat, ...props }),
}))

export default Page
