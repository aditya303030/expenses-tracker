import React from "react";

const Form = ({setInputText,inputText,setExpense,expense}) => {
    const inputTextHandler = (e) => {
        console.log(e.target.value)
        setInputText(e.target.value)
    }
    const submitInputHandler = (e) => {
        e.preventDefault();
        setExpense([
            ...expense,{text:inputText,necessary:false,id:Math.random()}
        ])
        setInputText("")
    }
    return (
        <form className="expense-form">
            <input placeholder="Add expense" onChange={inputTextHandler} className="input-text" value={inputText}/>
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