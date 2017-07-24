/* eslint import/max-dependencies: 0 */
/* eslint-disable react/jsx-no-bind */
import React from "react"
import PropTypes from "prop-types"
import { reduxForm, Field, SubmissionError } from "redux-form"
import cx from "classnames"
import emailValidator from "email-validator"
import { Input } from "react-toolbox/lib/input"
import { Button } from "react-toolbox/lib/button"

import Icon from "Elements/Icon"

import Captcha from "./Captcha.js"
import validate from "./validate.js"
import styles from "./index.css"
import textTheme from "./textarea.css"
import buttonTheme from "./button.css"

class ContactForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = this.idle
    const { email } = props
    if( !email || !emailValidator.validate(email) ) {
      console.error("You must specify an email as prop to 'ContactForm' component")
      return
    }
    this.postUrl = `https://formspree.io/${email}`
  }

  renderInputField = ({ input, meta: { touched, error }, ...props }) => (
    <Input
      { ...input }
      { ...props }
      error={ touched && error }
    />
  )

  handleSubmit = (values) => {
    this.setState(this.load)
    console.log(JSON.stringify(values, ["name", "email", "message"]))

    return fetch(
      this.postUrl,
      {
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({
          name: values.name,
          email: values.email,
          message: values.message
        }, ["_subject", "name", "email", "message"])
      }
    )
      .then(() => new Promise( (resolve) => {
        this.setState(this.success)
        resolve(true)
      }))
      .catch((res) => new Promise( (resolve, reject) => {
        this.setState(this.idle)
        const error = res.statusText
          ? `${res.status}: ${res.statusText}`
          : res.status
        reject(
          new SubmissionError({
            _error: error
          })
        )
      }))
  }

  idle = {
    submitButton: {
      icon: "send",
      iconClassName: "",
      disabled: false
    },
    success: ""
  }

  load = {
    submitButton: {
      icon: "loading",
      iconClassName: "mf-spin",
      disabled: false
    },
    success: ""
  }

  success = {
    submitButton: {
      icon: "done",
      iconClassName: "",
      disabled: true
    },
    success: "Thank you!"
  }

  render () {
    return (
      <form
        action={ this.postUrl }
        method="POST"
        noValidate
        onSubmit={ this.props.handleSubmit(this.handleSubmit) }
      >
        <Field
          type="text"
          name="name"
          label="Name"
          required
          icon={ <Icon icon="person" /> }
          component={ this.renderInputField }
        />
        <Field
          type="email"
          name="email"
          label="Email address"
          required
          error={ <span>{ "Error" }</span> }
          icon={ <Icon icon="at" /> }
          component={ this.renderInputField } />
        <Field
          type="text"
          name="message"
          label="Message"
          required
          multiline
          theme={ textTheme }
          icon={ <Icon icon="email" /> }
          component={ this.renderInputField } />
        <Field
          name="captcharesponse"
          component={ Captcha }
        />
        <div className={ styles.actionContainer }>
          <span className={
            cx(
              styles.message,
              this.props.error ? styles.error : styles.success
            ) }
          >
            { this.props.error || this.state.success }
          </span>
          <Button
            type="submit"
            raised
            theme={ buttonTheme }
            disabled={ this.state.submitButton.disabled }
            icon={
              <Icon
                icon={ this.state.submitButton.icon }
                className={ this.state.submitButton.iconClassName } />
            } />
        </div>
      </form>
    )
  }
}

ContactForm.propTypes = {
  email: PropTypes.string,
  error: PropTypes.string,
  handleSubmit: PropTypes.func
}

export default reduxForm({
  form: "contact",
  validate
})( ContactForm )
