/* eslint-disable react/no-multi-comp */
import React from "react"
import Head from "react-helmet"
import PropTypes from "prop-types"

import { createContainer, query, BodyRenderer } from "@phenomic/preset-react-app/lib/client"
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

const Page = (properties) => {
  const id = properties.params.splat
  /* Nasty hack until
     https://github.com/phenomic/phenomic/issues/1093
     is closed
  */
  if (id === "home") {
    return ( <PageComponent hasError page={ { error: {} } } /> )
  } else {
    return createContainer(
      PageComponent,
      query({ collection: "pages", id, ...properties })
    )
  }
}

export default Page
