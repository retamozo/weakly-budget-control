import React, { useState } from "react";
import HeaderPage from "./pages/HeaderPage";
import WeaklyBudgetPage from "./pages/WeaklyBudgetPage";
import ExpenseFormPage from "./pages/ExpenseFormPage";
import "./style/app.css";

function App() {
  const [finalBudget, setFinalBudget] = useState(0);

  const [budgetFormVisible, setBudgetFormVisible] = useState(true);

  return (
    <div className="container">
      <div className="row">
        <HeaderPage title="Weakly spending manager" />
      </div>
      {budgetFormVisible && (
        <div className="row">
          <WeaklyBudgetPage
            finalBudget={finalBudget}
            setFinalBudget={setFinalBudget}
            setBudgetFormVisible={setBudgetFormVisible}
          />
        </div>
      )}
      {!budgetFormVisible && (
        <div className="row">
          <ExpenseFormPage
            finalBudget={finalBudget}
            setFinalBudget={setFinalBudget}
          />
        </div>
      )}
    </div>
  );
}

export default App;
