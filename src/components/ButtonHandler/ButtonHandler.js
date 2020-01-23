import React from "react";
import PropTypes from "prop-types";

const ButtonHandler = ({ callback, buttonTitle }) => {
  return (
    <button
      type="submit"
      className="button-primary u-full-width"
      value="define your budget"
      onClick={callback}
    >
      {buttonTitle}
    </button>
  );
};

ButtonHandler.propTypes = {
  callback: PropTypes.func.isRequired,
  buttonTitle: PropTypes.string.isRequired
};

export default ButtonHandler;
