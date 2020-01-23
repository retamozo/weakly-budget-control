import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { checkAmount } from "../../helpers/helpers";

const ControlBudget = ({
  amountAccumulated,
  budget,
  expensesRegistered,
  setAmountAccumulated
}) => {
  let amount = expensesRegistered.reduce((accum, current) => {
    return accum + current.amount;
  }, 0);

  useEffect(() => {
    setAmountAccumulated(budget - amount);
  });

  return (
    <>
      <div className="alert alert-primary">
        Initial Budget: <strong>$ {budget}</strong>
      </div>
      <div className={checkAmount(budget, amountAccumulated)}>
        Remaining : <strong>$ {amountAccumulated} </strong>
      </div>
    </>
  );
};

ControlBudget.propTypes = {
  amountAccumulated: PropTypes.number,
  budget: PropTypes.number.isRequired,
  expensesRegistered: PropTypes.array,
  setAmountAccumulate: PropTypes.number
};
export default ControlBudget;
