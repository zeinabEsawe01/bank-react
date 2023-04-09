import React from 'react'
import './transaction.css'


export default function Transaction({transaction, deleteTransaction}) {
  return (
    <div>
        {transaction.kind === 'Deposit' ? <div className="transaction">
        <h2>{transaction.vendor}</h2>
        <h3>{transaction.category}</h3>
        <h4 className='deposit'>{transaction.amount}</h4>
        <button className='deleteTran' onClick={()=>deleteTransaction(transaction._id)}>Delete</button>
        </div>
         : <div className="transaction ">
            <h2>{transaction.vendor}</h2>
            <h3>{transaction.category}</h3>
            <h4 className='withdraw'>{transaction.amount}</h4>
            <button className='deleteTran' onClick={()=>deleteTransaction(transaction._id)}>Delete</button>
         </div>
     }
    </div>
  )
}
