import React from "react"
import Head from "react-helmet"

import Layout from "../../Layout/Page"

import styles from "./index.css"

const HomePage = () => {

  return (
    <Layout>
      <div className={ styles.container }>
        <article className={ styles.article }>
          <Head>
            <title>{ "Home" }</title>
            <meta name="description" content={ "" /* page.node.body.slice(0, 50)*/ } />
            <html className={ styles.background }/>
          </Head>
          <h1 className={ styles.title }>
            <span className={ styles.title__text }>
              { "I'm a software and devOps engineer" }
            </span>
          </h1>
          <p className={ styles.text }>
            { "Hire Me!" }
          </p>
        </article>
      </div>
    </Layout>
  )
}

export default HomePage
