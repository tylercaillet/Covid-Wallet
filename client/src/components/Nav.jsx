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
        <img src='https://www.uchealth.com/content/dam/uchealth/images/media-room/covid-19/new-covid-19-strain.jpg/jcr:content/renditions/cq5dam.web.767.431.jpg' alt='website logo' className='logo'/>
        <img src='https://cdn.shopify.com/s/files/1/0623/8034/3544/products/AirTagSlideWallet-CarbonFiber_720x.jpg?v=1642725309' alt='website logo' className='wallet-logo'/>
       
    </div>
   </div> )   
}


export default Nav












