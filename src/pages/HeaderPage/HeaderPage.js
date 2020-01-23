import React from "react";
import Header from "../../components/Header";
import PropTypes from "prop-types";

const HeaderPage = ({ title }) => <Header title={title} />;

HeaderPage.propTypes = {
  title: PropTypes.string.isRequired
};
export default HeaderPage;
