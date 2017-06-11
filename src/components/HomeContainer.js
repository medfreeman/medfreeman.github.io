import React from "react"
import Head from "react-helmet"
import PropTypes from "prop-types"
import { createContainer, query } from "@phenomic/preset-react-app/lib/client"
import { Link } from "react-router"

import Layout from "./Layout"

const Home =  ({ posts }) => (
  <Layout>
    <div>
      <Head>
        <title>{ "Hello world" }</title>
        <meta name="description" content="Everything is awaysome!" />
      </Head>
      <h1>{ "Home" }</h1>
      <ul>
        { posts && posts.node && posts.node.list &&
          posts.node.list.map((post) => (
            <li key={ post.id }>
              <Link to={ `/blog/${ post.id }` }>{ post.title || post.id }</Link>
            </li>
          ))
        }
      </ul>
      <p>
        {
          posts && posts.node && posts.node.hasNextPage &&
          <Link to={ `/after/${ posts.node.next }` }>{ "Older posts" }</Link>
        }
      </p>
    </div>
  </Layout>
)

Home.propTypes = {
  posts: PropTypes.object
}

const HomeContainer = createContainer(Home, (props) => ({
  posts: query({ collection: "posts", limit: 5, after: props.params.after }),
}))

export default HomeContainer
