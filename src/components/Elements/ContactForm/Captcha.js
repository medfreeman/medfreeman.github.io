/* eslint-disable react/jsx-no-bind */
import React from "react";
import PropTypes from "prop-types";
import ReCAPTCHA from "react-google-recaptcha";

import styles from "./index.css";

const Captcha = props =>
  <div className={styles.captcha}>
    <ReCAPTCHA
      sitekey={RECAPTCHA_SITE_KEY}
      onChange={response => props.input.onChange(response)}
    />
    <span className={styles.captcha__error}>
      {props.meta.touched && props.meta.error}
    </span>
  </div>;

Captcha.propTypes = {
  input: PropTypes.object.isRequired,
  meta: PropTypes.shape({
    error: PropTypes.string,
    touched: PropTypes.bool
  })
};

export default Captcha;
