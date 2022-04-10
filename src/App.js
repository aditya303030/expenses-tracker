import React from 'react';
import './App.css';
import Header from './components/header';
import Balance from './components/balance';
import {Expenses} from './components/expenses';
import {TransactionsList} from './components/transactionsList';
import { AddTransaction } from './components/AddTransaction';

function App() {
  return (
    <div className="header-container">
      <Header />
      <div className='container'>
        <Balance />
        <Expenses />
        <TransactionsList />
        <AddTransaction />
      </div>
    </div>
  );
}

export default App;
