import { Link } from 'react-router-dom'
import React from 'react'


const Nav = () => {
   return ( <div>
         
    <div className='nav-container'>
    <header>
        <nav>
        <div>
            <Link to = '/' className='Link'> Home </Link>
            <Link to = '/login' className='link'> Login </Link>
            <Link to = '/createUser' className='link'> Sign up </Link>
            <h1 className="Covid">Welcome to your Covid Wallet</h1>
        </div>
        </nav>
        </header>
        
       
    </div>
   </div> )   
}


export default Nav












