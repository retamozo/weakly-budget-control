import React from "react";
import PropTypes from "prop-types";


const ExpenseDetail = ({ data }) => {
  const { amount, description } = data;
  return (
    <ul className="gastos-realizados">
      <li>
        <p>
          {description}
          <span className="gasto ">$ {amount}</span>
        </p>
      </li>
    </ul>
  );
};

ExpenseDetail.propTypes = {
  data: PropTypes.object.isRequired
};

export default ExpenseDetail;
