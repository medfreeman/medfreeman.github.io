import React from "react"
import "typeface-roboto"
import { Router, Route, Redirect, browserHistory } from "react-router"
import { createApp, renderApp } from "@phenomic/preset-react-app/lib/client"

import "./fonts/medfreeman.font"
import Html from "./src/components/Layout/Html"
import ErrorPage from "./src/components/Templates/ErrorPage"
import BlogArchivePage from "./src/components/Templates/BlogArchivePage"
import BlogPostPage from "./src/components/Templates/BlogPostPage"
import Page from "./src/components/Templates/Page"

const routes = () => (
  <Router history={ browserHistory }>
    <Redirect from="/home" to="/" />
    <Route path="/" component={ Page } />
    <Route path="/blog/" component={ BlogArchivePage } />
    <Route path="/blog/after/:after" component={ BlogArchivePage } />
    <Route path="/blog/*" component={ BlogPostPage } collection="posts" />
    <Route path="/*" component={ Page } />
    <Route path="*" component={ ErrorPage } />
  </Router>
)

export default createApp(routes, Html)

if (module.hot) {
  module.hot.accept(() => renderApp(routes))
}
