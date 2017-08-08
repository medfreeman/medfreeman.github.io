/* eslint-disable react/no-multi-comp */
import React from "react";
import PropTypes from "prop-types";
import { createContainer, query } from "@phenomic/preset-react-app/lib/client";

import pkg from "package.json";
import Page from "Templates/Page";
import ErrorPage from "Templates/ErrorPage";
import ContactForm from "Elements/ContactForm";
import BodyRenderer from "Elements/BodyRenderer";

const ContactPageComponent = ({ hasError, isLoading, page }) => {
  return hasError
    ? <ErrorPage error={page.error} />
    : !isLoading &&
      <Page title={`${page.node.title} | ${pkg.name}`}>
        <article>
          <BodyRenderer>
            {page.node.body}
          </BodyRenderer>
          <ContactForm
            email="mlahlou@protonmail.ch"
            recaptchaSiteKey={RECAPTCHA_SITE_KEY}
            subject="[medfreeman.github.io] New message!"
            successMessage="Thank you!"
            language="en"
            destroyOnUnmount={false}
          />
        </article>
      </Page>;
};

ContactPageComponent.propTypes = {
  hasError: PropTypes.bool,
  isLoading: PropTypes.bool,
  page: PropTypes.object
};

const ContactPage = createContainer(ContactPageComponent, props => ({
  page: query({ collection: "pages", id: "contact", ...props })
}));

export default ContactPage;
