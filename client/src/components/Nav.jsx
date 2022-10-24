import { Link } from 'react-router-dom'
import React from 'react'

const Nav = () => {
    <div className='nav-container'>
        <img src='/images/logo.png' alt='website logo' className='logo'/>
        <div>
            <Link to = '/' className='link'> Login </Link>
            <Link to = '/userOne' className='link'> Sign up </Link>
        </div>
    </div>
}


export default Nav












