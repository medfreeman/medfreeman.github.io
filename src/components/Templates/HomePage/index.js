/* eslint-disable import/max-dependencies */
import React from "react"
import Head from "react-helmet"
import PropTypes from "prop-types"

import { createContainer, query, BodyRenderer } from "@phenomic/preset-react-app/lib/client"
import Layout from "Layout/Page"
import ErrorPage from "Templates/ErrorPage"
import Title from "Elements/Title"
import TooltipIcon from "Elements/TooltipIcon"

import styles from "./index.css"
import buttonTheme from "./button.css"

const HomePageComponent = ({ hasError, page }) => {
  if (hasError) {
    return <ErrorPage error={ page.error } />
  }

  return (
    <Layout>
      <div className={ styles.container }>
        {page.node && (
          <article className={ styles.article }>
            <BodyRenderer
              components={ {
                Icon: (props) => TooltipIcon(
                  {
                    theme: buttonTheme,
                    ...props
                  }
                ),
                h1: (props) => Title(
                  {
                    className: styles.title,
                    spanClass: styles.title__text,
                    ...props
                  }
                )
              } }
            >
              { page.node.body }
            </BodyRenderer>
            <Head>
              <title>{ "medfreeman" }</title>
              <meta name="description" content={ "" } />
              <html className={ styles.background }/>
            </Head>
            <p className={ styles.text }>
              <a className={ styles.text__link } href="mailto:mlahlou@protonmail.ch">
                { "Hire Me!" }
              </a>
            </p>
          </article>
        )}
      </div>
    </Layout>
  )
}

HomePageComponent.propTypes = {
  hasError: PropTypes.bool,
  page: PropTypes.object
}

const HomePage = createContainer(HomePageComponent, (props) => ({
  page: query({ collection: "pages", id: "home", ...props }),
}))

export default HomePage
