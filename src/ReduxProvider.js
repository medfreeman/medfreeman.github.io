import React from "react";
import PropTypes from "prop-types";
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";
import { reducer as reduxFormReducer } from "redux-form";

const reducer = combineReducers({
  form: reduxFormReducer
});

const ReduxProvider = props =>
  <Provider store={createStore(reducer)}>
    {props.children}
  </Provider>;

ReduxProvider.propTypes = {
  children: PropTypes.element
};

export default ReduxProvider;
