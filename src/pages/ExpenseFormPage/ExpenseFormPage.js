import React, { useState } from "react";
import ExpenseForm from "../../components/ExpenseForm";
import ExpenseList from "../../components/ExpenseList";
import PropTypes from "prop-types";

const ExpenseFormPage = ({ finalBudget, setFinalBudget }) => {
  const [expenseDescription, setExpenseDescription] = useState("");
  const [expenseToSend, setExpenseToSend] = useState(0);
  const [expenseSaved, setExpenseSaved] = useState([]);
  const [error, setError] = useState(false);
  const [amountAccumulated, setAmountAccumulated] = useState(0);

  return (
    <div className="contenido-principal contenido">
      <div className="row">
        <div className="one-half column">
          <ExpenseForm
            expenseDescription={expenseDescription}
            setExpenseDescription={setExpenseDescription}
            expenseToSend={expenseToSend}
            setExpenseToSend={setExpenseToSend}
            error={error}
            setError={setError}
            expenseSaved={expenseSaved}
            setExpenseSaved={setExpenseSaved}
          />
        </div>
        <div className="one-half column">
          <ExpenseList
            finalBudget={finalBudget}
            setFinalBudget={setFinalBudget}
            expenseSaved={expenseSaved}
            setAmountAccumulated={setAmountAccumulated}
            amountAccumulated={amountAccumulated}
          />
        </div>
      </div>
    </div>
  );
};

ExpenseFormPage.propTypes = {
  finalBudget: PropTypes.number.isRequired,
  setFinalBudget: PropTypes.func.isRequired
};

export default ExpenseFormPage;
