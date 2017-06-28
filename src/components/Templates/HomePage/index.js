import React from "react"
import Head from "react-helmet"
import joinURL from "url-join"

import Layout from "../../Layout/Page"
import Link from "../../Elements/Link"

import styles from "./index.css"
import buttonTheme from "./button.css"

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
            <Link to={ joinURL( PHENOMIC_URL, "documents/cv_mlahlou_web.pdf") } icon="resume" buttonTheme={ buttonTheme } />
            <Link to="https://github.com/medfreeman/" icon="github" buttonTheme={ buttonTheme } />
          </p>
          <p className={ styles.text }>
            <a className={ styles.text__link } href="mailto:mlahlou@protonmail.ch">
              { "Hire Me!" }
            </a>
          </p>
        </article>
      </div>
    </Layout>
  )
}

export default HomePage
