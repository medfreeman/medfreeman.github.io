/* eslint import/max-dependencies: 0 */
import React from "react"
import { Router, Route, browserHistory } from "react-router"
import { createApp, renderApp } from "@phenomic/preset-react-app/lib/client"
import "typeface-roboto"

import Html from "./src/plugins/plugin-renderer-react/HTML"
import ErrorPage from "./src/components/Templates/ErrorPage"
import HomePage from "./src/components/Templates/HomePage"
import Page from "./src/components/Templates/Page"
import Portfolio from "./src/components/Templates/Portfolio"
import "./fonts/medfreeman.font"
import "./src/index.global.css"

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
