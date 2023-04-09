import React from 'react'
import { useState } from 'react'
import './operations.css'

export default function Operations({saveTransactions}) {

  const [transaction, setTransaction] = useState({
    amount: '',
    category: '',
    vendor: '',
    kind:''
  });

  const handleInputChange = event => {
    const { name, value } = event.target;
    setTransaction({
      ...transaction,
      [name]: value
    });
  };

  const handleSubmit = (event,kind) => {
    event.preventDefault();
    let newTransaction = transaction
    newTransaction.kind = kind
    if(kind === 'Withdraw'){
      newTransaction.amount = newTransaction.amount*(-1)
    }
    saveTransactions(newTransaction)
      .then(() => {
        setTransaction({
        amount: '',
        category: '',
        vendor: '',
        kind:''
      })
        alert("Inserted Successfully")
      })
  };


  return (
    <div className='operations'>
       <form>
      <input name="amount" type='number' value={transaction.amount} onChange={handleInputChange} placeholder='Transaction amount'/>
      <input name="vendor" value={transaction.vendor} onChange={handleInputChange} placeholder='Transaction vendor'/>
      <input name="category" value={transaction.category} onChange={handleInputChange} placeholder='Transaction category'/>
      <button onClick={(e)=>handleSubmit(e,"Deposit")} type="submit" className="btn deposit-btn">Deposit</button>
      <button onClick={(e)=>handleSubmit(e,"Withdraw")} type="submit" className="btn withdraw-btn">Withdraw</button>
    </form>
       </div>
  )
}
