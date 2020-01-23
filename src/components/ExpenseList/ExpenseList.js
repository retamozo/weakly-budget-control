import React from "react";
import FormTitle from "../FormTitle";
import ExpenseDetail from "./components/ExpenseDetail";
import PropTypes from "prop-types";
import ControlBudget from "../ControlBudget";

const ExpenseList = ({
  expenseSaved,
  finalBudget,
  amountAccumulated,
  setAmountAccumulated
}) => {
  return (
    <>
      <FormTitle title="List of debts" />
      {expenseSaved.length
        ? expenseSaved.map(expense => (
            <ExpenseDetail key={expense.id} data={expense} />
          ))
        : null}
      <ControlBudget
        budget={finalBudget}
        expensesRegistered={expenseSaved}
        amountAccumulated={amountAccumulated}
        setAmountAccumulated={setAmountAccumulated}
      />
    </>
  );
};
ExpenseList.propTypes = {
  expenseSaved: PropTypes.array.isRequired,
  finalBudget: PropTypes.number.isRequired,
  amountAccumulated: PropTypes.number.isRequired,
  setAmountAccumulated: PropTypes.func.isRequired
};
export default ExpenseList;
