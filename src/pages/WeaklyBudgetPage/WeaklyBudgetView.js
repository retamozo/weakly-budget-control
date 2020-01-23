import React, { useState } from "react";
import WeaklyBudget from "../../components/WeaklyBudget";
import PropTypes from "prop-types";

const WeaklyBudgetPage = props => {
  const [budgetTyped, setBudgetTyped] = useState(0);
  const [budgetDefined, setBudgetDefined] = useState(0);
  const [error, setError] = useState(false);

  return (
    <WeaklyBudget
      {...props}
      budgetDefined={budgetDefined}
      setBudgetDefined={setBudgetDefined}
      budgetTyped={budgetTyped}
      setBudgetTyped={setBudgetTyped}
      error={error}
      setError={setError}
    />
  );
};
WeaklyBudget.propTypes = {
  initialBudget: PropTypes.number,
  setInitialBudget: PropTypes.func
};

export default WeaklyBudgetPage;
