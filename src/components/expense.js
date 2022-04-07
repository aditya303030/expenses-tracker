import React from "react";

const Expense = ({expense,expense_name,setExpense,currentAmount}) => {
  const paidHandler = () => {
    setExpense(expense.map((expense_n)=> {
      if(expense_n.id === expense_name.id) {
        return{
          ...expense_n,paid:!expense_n.paid
        }
      }
      return expense_n;
    }))
  }

  // const deleteHandler = () => {
  //   setExpense(expense.filter((item) =>item.id !==expense_name.id)) 
  // }

  const deleteHandler = () => {
    setExpense(expense.filter((item) =>item.id !==expense_name.id))
  }

  let total_amount = 0;
  for(let i=0;i<currentAmount.length;i++) {
    for(const [key,value] of Object.entries(currentAmount[i])){
      if(!deleteHandler) {  
        total_amount-=parseInt(value)
        console.log('deleted')
      }
      else {
        console.log(key)
        console.log(value)
        total_amount+=parseInt(value)
      }
    }
  }
  console.log(currentAmount)
  return (
    <>
      <ul className="expense" >
        <li className={`expense-name ${expense_name.paid ? "paid" :''}`}>{expense_name.text}</li>
        <li className={`expense-amount ${expense_name.paid ? "paid" :''}`}>{expense_name.expense_amount}</li>
        <button  className="btn paid-btn" onClick={paidHandler}>
          <i className="fas fa-check"></i>
        </button>
        <button onClick={deleteHandler} className="btn trash-btn">
          <i className="fas fa-trash"></i>
        </button>
      </ul>
      <div className='total-amount-container'>
        <div className='total-amount'>Total expenditure: {total_amount}</div>
      </div>
    </>
  )
}


export default Expense;