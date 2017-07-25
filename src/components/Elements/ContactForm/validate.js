import emailValidator from "email-validator";

const validate = values => {
  const errors = {};
  if (!values.name) {
    errors.name = "Required";
  }
  if (!values.email) {
    errors.email = "Required";
  } else if (!emailValidator.validate(values.email)) {
    errors.email = "Invalid email address";
  }
  if (!values.message) {
    errors.message = "Required";
  }
  if (!values.captcharesponse) {
    errors.captcharesponse = "Please confirm you are not a robot";
  }
  return errors;
};

export default validate;
