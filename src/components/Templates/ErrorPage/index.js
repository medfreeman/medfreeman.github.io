import React from "react";
import Head from "react-helmet";
import PropTypes from "prop-types";

import Page from "Templates/Page";

const ErrorPage = ({ error }) => {
  const status = (error && error.status) || 404;
  const message = error && status !== 404 ? error.statusText : "Page not found";

  return (
    <Page title={`${status} - ${message}`}>
      <div>
        <Head>
          <title>
            {message}
          </title>
        </Head>
        <h1>
          {message}
        </h1>
      </div>
    </Page>
  );
};

ErrorPage.propTypes = {
  error: PropTypes.object
};

export default ErrorPage;
