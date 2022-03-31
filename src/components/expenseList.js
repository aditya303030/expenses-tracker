import React from "react";

const ExpenseList = ({expense,setExpense}) => {
  return (
    <div className="expense-container">
      <ul className="expense-list">
        {expense.map(expense_name => (

          // <Expense text = {expense_name.text} expense_amount={expense_name.expense_amount} />
          <ul className="expense" key={expense_name.id}>
            <li className="expenses expense-amount">{expense_name.text}</li>
            <li className="expenses expense-name">{expense_name.expense_amount}</li>
            <button className="btn complete-btn">
              <i className="fas fa-check"></i>
            </button>
            <button className="btn trash-btn">
              <i className="fas fa-trash"></i>
            </button>
          </ul>
        ))}
      </ul>
    </div>
  )
}

export default ExpenseList;