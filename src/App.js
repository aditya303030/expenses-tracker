import React,{useState} from 'react';
import './App.css';
import Form from './components/form';
import ExpenseList from './components/expenseList';

function App() {
  //states
  const [inputText,setInputText] = useState("");
  const [expense,setExpense] = useState([]);
  const [amount,setAmount] = useState();
  const [currentAmount,setCurrentAmount] = useState([]);
  // const []
  let total_amount = 0;
  for(let i=0;i<currentAmount.length;i++) {
    for(const [key,value] of Object.entries(currentAmount[i])) {
      console.log(value)
      total_amount+=parseInt(value)
    }
  }
  return (
    <div className="header-container">
      <div className='header'>
        <h1>Expenses tracker</h1>
      </div>
      <Form currentAmount={currentAmount} amount={amount} setCurrentAmount={setCurrentAmount} setAmount = {setAmount} expense ={expense} setExpense = {setExpense} inputText = {inputText} setInputText={setInputText} />
      <ExpenseList setExpense={setExpense} amount = {amount} expense = {expense} />
      <div className='total-amount-container'>
        <div className='total-amount'>Total expenditure: {total_amount}</div>
      </div>
    </div>
  );
}

export default App;
