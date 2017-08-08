import React from "react";
import PropTypes from "prop-types";
import {
  createContainer,
  query,
  BodyRenderer
} from "@phenomic/preset-react-app/lib/client";

import pkg from "package.json";
import Page from "Templates/Page";
import ErrorPage from "Templates/ErrorPage";

import bodyComponents from "./bodyComponents";
import PageTheme from "./theme.css";

const HomePageComponent = ({ hasError, isLoading, page }) => {
  return hasError
    ? <ErrorPage error={page.error} />
    : <Page title={pkg.name} theme={PageTheme}>
        <article>
          {!isLoading &&
            <BodyRenderer components={bodyComponents}>
              {page.node.body}
            </BodyRenderer>}
        </article>
      </Page>;
};

HomePageComponent.propTypes = {
  hasError: PropTypes.bool,
  isLoading: PropTypes.bool,
  page: PropTypes.object
};

const HomePage = createContainer(HomePageComponent, props => ({
  page: query({ collection: "pages", id: "home", ...props })
}));

export default HomePage;
