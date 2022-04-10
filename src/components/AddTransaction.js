import React,{useState} from 'react'

export const AddTransaction = () => {
  const [text,setText] = useState('');
  const [amount,setAmount] = useState(0);

  const textHandler = (e) => {
    console.log(e.target.value)
    setText(e.target.value)
  }

  const amountHandler = (e) => {
    console.log(e.target.value)
    setAmount(e.target.value)
  }

  return (
    <>
    <h3>Add new transaction</h3>
      <form>
        <div className="form-control">
          <label htmlFor='text'>Text</label>
          <input type="text" onChange={textHandler} placeholder='Enter Text...' value={text} />
        </div>
        <div className="form-control">
          <label htmlFor='amount'
            >Amount <br />
            (negative - expense, positive - income)</label
          >
          <input type="number" value={amount} onChange={amountHandler} placeholder="Enter amount..." />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  )
}
