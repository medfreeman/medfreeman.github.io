/* eslint import/max-dependencies: 0 */
import React from "react"
import { Router, Route, browserHistory } from "react-router"
import { createApp, renderApp } from "@phenomic/preset-react-app/lib/client"
import "typeface-roboto"

import Html from "plugins/plugin-renderer-react/HTML"
import ErrorPage from "Templates/ErrorPage"
import HomePage from "Templates/HomePage"
import Page from "Templates/Page"
import Portfolio from "Templates/Portfolio"

import "./src/index.global.css"
import "./fonts/medfreeman.font"

const routes = () => (
  <Router history={ browserHistory }>
    <Route path="/" component={ HomePage } />
    <Route path="/portfolio" component={ Portfolio } />
    <Route path="/*" component={ Page } />
    <Route path="*" component={ ErrorPage } />
  </Router>
)

export default createApp(routes, Html)

if (module.hot) {
  module.hot.accept(() => renderApp(routes))
}
