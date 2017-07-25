import React from "react";
import Head from "react-helmet";
import PropTypes from "prop-types";

const ErrorPage = ({ error }) => {
  const status = (error && error.status) || 404;
  const message = error && status !== 404 ? error.statusText : "Page not found";

  return (
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
  );
};

ErrorPage.propTypes = {
  error: PropTypes.object
};

export default ErrorPage;
