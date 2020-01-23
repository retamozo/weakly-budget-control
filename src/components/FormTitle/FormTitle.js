import React from "react";
import PropTypes from 'prop-types'

const FormTitle = ({ title }) => <h2>{title}</h2>;

FormTitle.propTypes = {
    title: PropTypes.string.isRequired
}

export default FormTitle;
