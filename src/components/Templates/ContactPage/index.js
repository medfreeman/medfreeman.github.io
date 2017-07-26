/* eslint-disable react/no-multi-comp */
import React from "react";
import Head from "react-helmet";
import PropTypes from "prop-types";

import {
  createContainer,
  query,
  BodyRenderer
} from "@phenomic/preset-react-app/lib/client";
import Layout from "Layout/Page";
import ErrorPage from "Templates/ErrorPage";
import ContactForm from "Elements/ContactForm";

import styles from "./index.css";

const ContactPageComponent = ({ hasError, page }) => {
  if (hasError) {
    return <ErrorPage error={page.error} />;
  }

  return (
    <Layout>
      <div className={styles.container}>
        {page.node &&
          <article className={styles.article}>
            <Head>
              <title>
                {page.node.title + " | medfreeman"}
              </title>
              <meta name="description" content={""} />
            </Head>
            <BodyRenderer>
              {page.node.body}
            </BodyRenderer>
            <ContactForm
              email="mlahlou@protonmail.ch"
              recaptchaSiteKey={RECAPTCHA_SITE_KEY}
              successMessage="Thank you!"
              destroyOnUnmount={false}
            />
          </article>}
      </div>
    </Layout>
  );
};

ContactPageComponent.propTypes = {
  hasError: PropTypes.bool,
  page: PropTypes.object
};

const ContactPage = createContainer(ContactPageComponent, props => ({
  page: query({ collection: "pages", id: "contact", ...props })
}));

export default ContactPage;
