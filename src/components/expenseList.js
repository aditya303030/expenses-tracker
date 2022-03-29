import React from "react";
import Expense from "./expense";

const ExpenseList = ({expense}) => {
  return (
    <div className="expense-container">
      <ul className="expense-list">
        {expense.map((expense_name) => (
          <Expense text = {expense_name.text} />
        ))};
      </ul>
    </div>
  )
}

export default ExpenseList;