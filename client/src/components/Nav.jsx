import { Link } from 'react-router-dom'
import React from 'react'


const Nav = () => {
   return ( <div>
         
    <div className='nav-container'>
        <img src='https://www.uchealth.com/content/dam/uchealth/images/media-room/covid-19/new-covid-19-strain.jpg/jcr:content/renditions/cq5dam.web.767.431.jpg' alt='website logo' className='logo'/>
        <div>
            <Link to = '/' className='link'> Login </Link>
            <Link to = '/userOne' className='link'> Sign up </Link>
        </div>
    </div>
   </div> )   
}


export default Nav












