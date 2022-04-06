import React from "react";
import Expense from "./expense";

const ExpenseList = ({expense,setExpense,amount,setAmount,currentAmount}) => {
  return (
    <div className="expense-container">
      <ul className="expense-list">
        {expense.map((expense_name) => (
          <Expense key={expense_name.id} currentAmount={currentAmount} setExpense={setExpense} expense = {expense} expense_name = {expense_name}/>
        ))}
      </ul>
    </div>
  )
}

export default ExpenseList;