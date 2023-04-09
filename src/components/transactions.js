import React from 'react'
import Transaction from './transaction'

export default function Transactions({transactions, deleteTransaction}) {
  return (
    <div>
      {transactions.map((transaction) => <Transaction transaction ={transaction} deleteTransaction={deleteTransaction}/>)}
    </div>
  )
}
