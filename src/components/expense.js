import React from "react";

const Expense = ({text,expense_amount}) => {
  return (
    <div className="expense">
      <li className="expenses expense-name">{text}</li>
      <li key="uniqueId1" className="expenses expense-amount">{expense_amount}</li>
      <button className="btn complete-btn">Paid</button>
      <button className="btn complete-btn">Due</button>
    </div>
  )
}

export default Expense;