import React from "react";
import PropTypes from "prop-types";
import { createContainer, query } from "@phenomic/preset-react-app/lib/client";

import pkg from "package.json";
import Page from "Templates/Page";
import ErrorPage from "Templates/ErrorPage";
import BodyRenderer from "Elements/BodyRenderer";

import PageTheme from "./theme.css";

const HomePageComponent = ({ hasError, isLoading, page }) => {
  return hasError ? (
    <ErrorPage error={page.error} />
  ) : (
    <Page title={pkg.name} theme={PageTheme}>
      <article>
        {!isLoading && <BodyRenderer>{page.node.body}</BodyRenderer>}
      </article>
    </Page>
  );
};

HomePageComponent.propTypes = {
  hasError: PropTypes.bool,
  isLoading: PropTypes.bool,
  page: PropTypes.object
};

const HomePage = createContainer(HomePageComponent, () => ({
  page: query({ path: "pages", id: "home" })
}));

export default HomePage;
