/* eslint-disable react/jsx-no-bind */
import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  reduxForm,
  reset,
  propTypes as reduxFormPropTypes,
  Field,
  SubmissionError
} from "redux-form";
import cx from "classnames";
import emailValidator from "email-validator";
import { Input } from "react-toolbox/lib/input";
import { Button } from "react-toolbox/lib/button";

import Icon from "Elements/Icon";

import Captcha from "./Captcha";
import validate from "./validate";
import styles from "./index.css";
import textTheme from "./textarea.css";
import buttonTheme from "./button.css";

const handleSubmitSuccess = (result, dispatch) =>
  setTimeout(() => {
    dispatch(reset("contact"));
  }, 4000);

class ContactForm extends React.Component {
  static propTypes = {
    ...reduxFormPropTypes,
    email: PropTypes.string.isRequired,
    recaptchaSiteKey: PropTypes.string,
    language: PropTypes.oneOf([
      "en",
      "es",
      "nl",
      "ja",
      "fr",
      "it",
      "de",
      "pl",
      "sk",
      "ru",
      "uk",
      "pt"
    ]),
    subject: PropTypes.string,
    successMessage: PropTypes.string
  };

  constructor(props) {
    super(props);

    const { email } = props;
    if (!email || !emailValidator.validate(email)) {
      console.error(
        "You must specify an email as prop to 'ContactForm' component"
      );
      return;
    }
    this.postUrl = `https://formspree.io/${email}`;
  }

  componentWillMount() {
    if (!this.props.destroyOnUnmount) {
      this.props.change("captcharesponse", null);
    }
  }

  handleSubmit = values =>
    fetch(this.postUrl, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      method: "POST",
      body: JSON.stringify(
        {
          _subject: values._subject,
          name: values.name,
          email: values.email,
          message: values.message
        },
        ["_subject", "name", "email", "message"]
      )
    })
      .then(
        () =>
          new Promise(resolve => {
            resolve(true);
          })
      )
      .catch(
        res =>
          new Promise((resolve, reject) => {
            const error = res.statusText
              ? `${res.status}: ${res.statusText}`
              : res.status;
            reject(
              new SubmissionError({
                _error: error
              })
            );
          })
      );

  renderInputField = ({ input, meta: { touched, error }, icon, ...props }) => {
    if (icon) {
      props.icon = <Icon icon={icon} />;
    }
    return <Input {...input} {...props} error={touched && error} />;
  };

  render() {
    return (
      <form
        action={this.postUrl}
        method="POST"
        noValidate
        onSubmit={this.props.handleSubmit(this.handleSubmit)}
      >
        <Field
          type="hidden"
          name="_language"
          component={this.renderInputField}
        />
        <Field
          type="hidden"
          name="_subject"
          component={this.renderInputField}
        />
        <Field
          type="text"
          name="name"
          label="Name"
          required
          icon="person"
          component={this.renderInputField}
        />
        <Field
          type="email"
          name="email"
          label="Email address"
          required
          icon="at"
          component={this.renderInputField}
        />
        <Field
          type="text"
          name="message"
          label="Message"
          required
          multiline
          theme={textTheme}
          icon="email"
          component={this.renderInputField}
        />
        {this.props.recaptchaSiteKey &&
          <div className={styles.action__container}>
            <span className={styles.captcha__spacer} />
            <Field
              name="captcharesponse"
              required
              component={Captcha}
              className={styles.captcha}
              errorClass={styles.captcha__error}
              siteKey={this.props.recaptchaSiteKey}
              locale={this.props.locale}
            />
          </div>}
        <div className={styles.action__container}>
          <span
            className={cx(
              styles.message,
              this.props.error ? styles.error : styles.success
            )}
          >
            {this.props.error ||
              (this.props.submitSucceeded && this.props.successMessage)}
          </span>
          <Button
            type="submit"
            raised
            theme={buttonTheme}
            disabled={this.props.submitSucceeded}
            icon={
              <Icon
                icon={
                  (this.props.submitting && "loading") ||
                  (this.props.submitSucceeded && "done") ||
                  "send"
                }
                className={(this.props.submitting && "mf-spin") || ""}
              />
            }
          />
        </div>
      </form>
    );
  }
}

export default connect(
  (state, ownProps) => ({
    initialValues: {
      _subject: ownProps.subject || "",
      _language: ownProps.language || ""
    }
  }),
  null
)(
  reduxForm({
    form: "contact",
    validate,
    enableReinitialize: true,
    keepDirtyOnReinitialize: true,
    onSubmitSuccess: handleSubmitSuccess
  })(ContactForm)
);
