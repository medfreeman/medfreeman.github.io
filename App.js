import React from 'react'
import { Router, Route, browserHistory } from 'react-router'
import { createApp, renderApp } from '@phenomic/preset-react-app/lib/client'

import Html from './src/components/Html'
import PageError from './src/components/PageError'

import BlogPostContainer from './src/components/BlogPostContainer'
import HomeContainer from './src/components/HomeContainer'

const routes = () => (
  <Router history={ browserHistory }>
    <Route path="/" component={ HomeContainer } />
    <Route path="/after/:after" component={ HomeContainer } />
    <Route path="/blog/*" component={ BlogPostContainer } collection="posts" />
    <Route path="*" component={PageError} />
  </Router>
)

export default createApp(routes, Html)

if (module.hot) {
  module.hot.accept(() => renderApp(routes))
}
