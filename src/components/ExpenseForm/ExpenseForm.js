import React from "react";
import ButtonHandler from "../ButtonHandler";
import FormTitle from "../FormTitle";
import ErrorForm from "../ErrorForm";
import shortid from "shortid";
import PropTypes from "prop-types";

const ExpenseForm = ({
  expenseDescription,
  setExpenseDescription,
  expenseToSend,
  setExpenseToSend,
  setExpenseSaved,
  expenseSaved,
  error,
  setError
}) => {
  const sendExpenseData = e => {
    e.preventDefault();
    let fieldsAreValid =
      isNaN(expenseToSend) ||
      expenseToSend < 1 ||
      expenseDescription.trim() === ""
        ? false
        : true;

    if (!fieldsAreValid) {
      setError(true);
      return;
    } else {
      setError(false);
      setExpenseSaved([
        ...expenseSaved,
        {
          amount: expenseToSend,
          description: expenseDescription,
          id: shortid.generate()
        }
      ]);
    }
  };

  return (
    <form>
      {error ? (
        <ErrorForm message="Ups! complete correctly all fields" />
      ) : null}
      <FormTitle title="Add your debts" />
      <label>Debt name</label>
      <input
        type="text"
        className="u-full-width"
        placeholder="example: 'car insurance'"
        value={expenseDescription}
        onChange={e => setExpenseDescription(e.target.value)}
      />
      <label>Debt amount</label>
      <input
        type="number"
        className="u-full-width"
        placeholder="example: 'car insurance'"
        value={expenseToSend}
        onChange={e => setExpenseToSend(parseInt(e.target.value))}
      />
      <ButtonHandler callback={sendExpenseData} buttonTitle="Next step" />
    </form>
  );
};
ExpenseForm.propTypes = {
  expenseDescription: PropTypes.string.isRequired,
  setExpenseDescription: PropTypes.func.isRequired,
  expenseToSend: PropTypes.number.isRequired,
  setExpenseToSend: PropTypes.func.isRequired,
  setExpenseSaved: PropTypes.func.isRequired,
  expenseSaved: PropTypes.array,
  error: PropTypes.bool,
  setError: PropTypes.func
};

export default ExpenseForm;
