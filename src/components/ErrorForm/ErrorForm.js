import React from "react";
import PropTypes from "prop-types";

const ErrorForm = ({ message }) => {
  return <div className="alert alert-danger error">{message}</div>;
};

ErrorForm.propTypes = {
  message: PropTypes.string.isRequired
};

export default ErrorForm;
