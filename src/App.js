import React,{useState} from 'react';
import './App.css';
import Form from './components/form';
import ExpenseList from './components/expenseList';

function App() {
  //states
  const [inputText,setInputText] = useState("");
  const [expense,setExpense] = useState([]);
  // const [] = ([])
  return (
    <div className="header-container">
      <div className='header'>
        <h1>Expenses tracker</h1>
      </div>
      <Form expense ={expense} setExpense = {setExpense} inputText = {inputText} setInputText={setInputText} />
      <ExpenseList expense = {expense} />
    </div>
  );
}

export default App;
