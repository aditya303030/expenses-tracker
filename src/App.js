import React,{useState,useEffect} from 'react';
import './App.css';
import Form from './components/form';

function App() {
  //states
  const [inputText,setInputText] = useState("");
  return (
    <div className="header-container">
      <div className='header'>
        <h1>Expenses tracker</h1>
      </div>
      <Form inputText = {inputText} setInputText={setInputText} />
    </div>
  );
}

export default App;
