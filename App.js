import React from "react"
import "typeface-roboto"
import { Router, Route, Redirect, browserHistory } from "react-router"
import { createApp, renderApp } from "@phenomic/preset-react-app/lib/client"

import "./fonts/medfreeman.font"
import Html from "./src/components/Layout/Html"
import ErrorPage from "./src/components/Templates/ErrorPage"
import BlogArchive from "./src/components/Templates/BlogArchive"
import BlogPost from "./src/components/Templates/BlogPost"
import Page from "./src/components/Templates/Page"

const routes = () => (
  <Router history={ browserHistory }>
    <Redirect from="/home" to="/" />
    <Route path="/" component={ Page } />
    <Route path="/blog/" component={ BlogArchive } />
    <Route path="/blog/after/:after" component={ BlogArchive } />
    <Route path="/blog/*" component={ BlogPost } collection="posts" />
    <Route path="/*" component={ Page } />
    <Route path="*" component={ ErrorPage } />
  </Router>
)

export default createApp(routes, Html)

if (module.hot) {
  module.hot.accept(() => renderApp(routes))
}
