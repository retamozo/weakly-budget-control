import React from "react";
import BudgetForm from "./components/BudgetForm";

const WeaklyBudget = (props) => {
  return (
    <div className="contenido-principal contenido">
      <BudgetForm {...props} />
    </div>
  );
};

export default WeaklyBudget;
