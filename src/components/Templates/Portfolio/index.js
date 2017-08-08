import React from "react";
import PropTypes from "prop-types";
import { createContainer, query } from "@phenomic/preset-react-app/lib/client";

import pkg from "package.json";
import Page from "Templates/Page";
import ErrorPage from "Templates/ErrorPage";
import Gallery from "Elements/Gallery";
import BodyRenderer from "Elements/BodyRenderer";

import PageTheme from "./theme.css";

const PortfolioComponent = ({ hasError, isLoading, page }) => {
  return hasError
    ? <ErrorPage error={page.error} />
    : !isLoading &&
      <Page title={`${page.node.title} | ${pkg.name}`} theme={PageTheme}>
        <article>
          <BodyRenderer>
            {page.node.body}
          </BodyRenderer>
          <Gallery elements={page.node.gallery ? page.node.gallery : []} />
        </article>
      </Page>;
};

PortfolioComponent.propTypes = {
  hasError: PropTypes.bool,
  isLoading: PropTypes.bool,
  page: PropTypes.shape({
    node: PropTypes.shape({
      gallery: PropTypes.arrayOf(
        PropTypes.shape({
          title: PropTypes.string.isRequired,
          subtitle: PropTypes.string,
          year: PropTypes.string.isRequired,
          url: PropTypes.string.isRequired,
          image: PropTypes.string.isRequired
        })
      ).isRequired
    })
  })
};

const Portfolio = createContainer(PortfolioComponent, props => ({
  page: query({ collection: "pages", id: "portfolio", ...props })
}));

export default Portfolio;
