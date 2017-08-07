import React from "react";
import { Router, Route, browserHistory } from "react-router";
import { createApp, renderApp } from "@phenomic/preset-react-app/lib/client";
import "typeface-roboto";

import HomePage from "Templates/HomePage";
import BlogArchive from "Templates/BlogArchive";
import BlogPost from "Templates/BlogPost";
import Portfolio from "Templates/Portfolio";
import ContactPage from "Templates/ContactPage";
import ErrorPage from "Templates/ErrorPage";

import ReduxProvider from "./src/ReduxProvider";
import ThemeProvider from "./src/ThemeProvider";
import Html from "./src/HTML";
import "./src/index.global.css";
import "./fonts/medfreeman.font";

const routes = () =>
  <ReduxProvider>
    <ThemeProvider>
      <Router history={browserHistory}>
        <Route path="/" component={HomePage} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/blog/" component={BlogArchive} />
        <Route path="/blog/after/:after" component={BlogArchive} />
        <Route path="/blog/*" component={BlogPost} />
        <Route path="/contact" component={ContactPage} />
        <Route path="*" component={ErrorPage} />
      </Router>
    </ThemeProvider>
  </ReduxProvider>;

export default createApp(routes, Html);

if (module.hot) {
  module.hot.accept(() => renderApp(routes));
}
