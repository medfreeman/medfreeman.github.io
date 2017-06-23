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
            <meta name="description" content={ "" } />
            <html className={ styles.background }/>
          </Head>
          <h1 className={ styles.title }>
            <span className={ styles.title__text }>
              { "I'm a software and devOps engineer" }
            </span>
          </h1>
          <a className={ styles.text } href="mailto:mehdi.lahlou.ml@gmail.com">
            { "Hire Me!" }
          </a>
        </article>
      </div>
    </Layout>
  )
}

export default HomePage
