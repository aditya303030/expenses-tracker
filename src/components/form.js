import React from "react";

const Form = ({setInputText,inputText,setExpense,expense,setAmount,amount,currentAmount,setCurrentAmount}) => {
    const inputTextHandler = (e) => {
        console.log(e.target.value)
        setInputText(e.target.value)
    }

    const inputAmountHandler = (e) => {
        console.log(e.target.value)
        setAmount(e.target.value)
    }
    
    const submitInputHandler = (e) => {
        e.preventDefault();
        setExpense([
            ...expense,{text:inputText,expense_amount:amount,necessary:false,id:Math.random()}
        ])
        setCurrentAmount([
            ...currentAmount,{currentvalue:amount}
        ])
        
        setInputText("");
        setAmount("");
    }

    const currentAmountHandler = () => {
        return Object.values(currentAmount).reduce((total, value) => total + value, 0)
        
    }
    console.log(currentAmountHandler())
    return (
        <form className="expense-form">
            <input placeholder="Add expense" onChange={inputTextHandler} className="input-text" value={inputText}/>
            <input placeholder="Amount" onChange={inputAmountHandler} className="input-text" /> 
            <p className="w-32 border p-1">{currentAmountHandler()}</p>
            <button onClick={submitInputHandler} type="submit" className="expense-button">
                <i className="fas fa-plus-square" >Add</i>
            </button>
            <select className="expense-select">
                <option value="all">All</option>
                <option value="necessary">Necessary</option>
                <option value="unnecessary">Unnecessary</option>
            </select>
        </form>
    )
}

export default Form;