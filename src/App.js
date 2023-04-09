import logo from './logo.svg';
import './App.css';
import BankNavbar from './components/bankNavbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Operations from './components/operations';
import Breakdown from './components/breakdown';
import Transactions from './components/transactions';
import $ from 'jquery';
import { useEffect, useState } from 'react';

function App() {

const [transactions, setTransactions] = useState([]);
const [balance, setBalance] = useState(0)

useEffect(() => {
  let isMounted = true;

  const getTransactions = async () => {
    const data = await $.get('http://localhost:4800/transactions');
    if(isMounted) {
    setTransactions(data)
    updateBalance(transactions)
    }
};
getTransactions();
  return () => {
    isMounted = false;
  };
}, [transactions,balance]);


const saveTransactions = function(transaction){
  return $.post('http://localhost:4800/transaction', transaction)
  
}

const deleteTransaction = function(id){
    $.ajax({
        url: `http://localhost:4800/transaction/${id}`,
        type: 'DELETE',
        success: function(result) {
            console.log(result);
        },
        error: function (xhr, text, error) {
            console.log(xhr.responseText);
          },
    });
}

const getCatagoriesSum = async function(){
  return $.get("http://localhost:4800/transactions/categories")
  .then(data => {
    return data;
  })
  .catch(err => {
    console.error(err);
  });
}

const updateBalance = function(transactions){
  let newBalance = 0
  transactions.forEach(t => { console.log(t.kind + " " + t.amount);
    t.kind = 'Deposit' ? newBalance += t.amount : newBalance -= t.amount
  })
  setBalance(newBalance)
}

return (
    <Router>
    <div className="App">
     <BankNavbar balance={balance}/>
    </div>
    <Routes>
    <Route path="/" element={<Transactions transactions = {transactions} deleteTransaction={deleteTransaction}/>} />
    <Route path="/operations" element={<Operations saveTransactions = {saveTransactions}/>} />
    <Route path="/breakdown" element={<Breakdown getCatagoriesSum={getCatagoriesSum}/>} />
    </Routes>
</Router>
  );
}

export default App;
