import React from "react";

const Expense = ({text}) => {
  return (
    <div className="expense">
      <li>{text}</li>
    </div>
  )
}

export default Expense;