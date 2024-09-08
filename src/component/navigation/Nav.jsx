import React from 'react'
import './Nav.css'
const Nav = () => {
  return (
    <div className='Navbar'>
       <img src="./logo.png" alt="Logo" className='logo' />

        <ul className="navbarmenu">
            <li>Home</li>
            <li>Alert History</li>
            <li>Notification</li>
            <li>Readings</li>

         </ul>
             <div className="navbarright">
                <img src="" alt="" /> 
                <div className="searchicon">
                       <input type="text" placeholder="Search.."/>
                 </div>
                 <button>Search</button>
             </div>
        
    </div>
  )
}
export default Nav;
