/* eslint import/max-dependencies: 0 */
import React from "react"
import { Router, Route, browserHistory } from "react-router"
import { createApp, renderApp } from "@phenomic/preset-react-app/lib/client"
import { Provider } from "react-redux"
import { createStore, combineReducers } from "redux"
import { reducer as reduxFormReducer } from "redux-form"
import "typeface-roboto"

import HomePage from "Templates/HomePage"
import ContactPage from "Templates/ContactPage"
import Portfolio from "Templates/Portfolio"
import Page from "Templates/Page"

import Html from "./src/HTML"
import "./src/index.global.css"
import "./fonts/medfreeman.font"

const reducer = combineReducers({
  form: reduxFormReducer
})

const routes = () => (
  <Provider store={ createStore(reducer) }>
    <Router history={ browserHistory }>
      <Route path="/" component={ HomePage } />
      <Route path="/portfolio" component={ Portfolio } />
      <Route path="/contact" component={ ContactPage } />
      <Route path="*" component={ Page } />
    </Router>
  </Provider>
)

export default createApp(routes, Html)

if (module.hot) {
  module.hot.accept(() => renderApp(routes))
}
