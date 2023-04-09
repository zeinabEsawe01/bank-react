import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'

function BankNavbar({balance}) {
  return (
      <div>
        <nav className="navbar">
      <Link to="/">
        <div className="navbar-link">Transaction</div>
        </Link>
        <Link to="/operations">
        <div className="navbar-link">Operations</div>
      </Link>
      <Link to="/breakDown">
      <div className="navbar-link">BreakDown</div>
      </Link>
      <div>{balance < 500 ? 
      <div className='navbar-link'> Balance: <p className='red'>{balance}</p></div> : 
      <div className="navbar-link">Balance:<p className='green'>{balance}</p> </div>
      }</div>
    </nav>
      </div>
  );
}

export default BankNavbar;