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
            <title>{ "medfreeman" }</title>
            <meta name="description" content={ "" } />
            <html className={ styles.background }/>
          </Head>
          <h1 className={ styles.title }>
            <span className={ styles.title__text }>
              { "I'm a software and devOps engineer" }
            </span>
          </h1>
          <p className={ styles.text }>
            <a className={ styles.text__link } href="mailto:mehdi.lahlou.ml@gmail.com">
              { "Hire Me!" }
            </a>
          </p>
        </article>
      </div>
    </Layout>
  )
}

export default HomePage
