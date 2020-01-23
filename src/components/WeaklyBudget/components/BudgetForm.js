import React from "react";
import Error from "../../ErrorForm/ErrorForm";
import ButtonHandler from "../../ButtonHandler";

const BudgetForm = ({
  setFinalBudget,
  error,
  setError,
  setBudgetDefined,
  budgetTyped,
  setBudgetTyped,
  setBudgetFormVisible
}) => {
  const handleBudget = e => {
    let valueTyped = parseInt(e.target.value);
    if (isNaN(valueTyped)) setError(true);
    else setError(false);
    setBudgetTyped(valueTyped);
  };
  const handleFinalBudget = e => {
    e.preventDefault();
    if (budgetTyped < 1 || isNaN(budgetTyped)) {
      setError(true);
      return;
    } else {
      setError(false);
      setBudgetDefined(budgetTyped);
      setFinalBudget(budgetTyped);
      setBudgetFormVisible(false);
    }
  };

  const errorMessage = error ? <Error message="Please, enter a valid budget" /> : null;

  return (
    <form>
      {errorMessage}
      <input
        type="number"
        className="u-full-width"
        placeholder="Please, enter your budget"
        onChange={handleBudget}
      />
      <ButtonHandler
        callback={handleFinalBudget}
        buttonTitle="Set your budget"
      />
    </form>
  );
};

export default BudgetForm;
