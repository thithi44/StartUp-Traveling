import React, { useState } from 'react'
import './Navbar.css'
import logo from '../logo.png'
import { Link } from 'react-router-dom';

export default function Navbar() {

   const [menu,setMenu] = useState("Home");
  
    return (
    <div className='navbar'>
      <div className="nav-logo">
         <img src={logo} alt="Start Up logo" width={250} />
      </div>
         <ul className="nav-menu">
            <li onClick={()=>{setMenu("Home")}}><Link style={{ textDecoration: 'none'}} to='/'>Home</Link>{menu==="Home"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("About Us")}}><Link style={{textDecoration: 'none'}} to='/AboutUs'>About Us</Link>{menu==="About Us"?<hr/>:<></>} </li>
            <li onClick={()=>{setMenu("Packages")}}><Link style={{textDecoration: 'none'}} to='/Packages'>Packages</Link>{menu==="Packages"?<hr/>:<></>} </li>
            <li onClick={()=>{setMenu("Guiders")}}><Link style={{textDecoration: 'none'}} to='/Guiders'>Guiders</Link>{menu==="Guiders"?<hr/>:<></>} </li>
            <li onClick={()=>{setMenu("Contact Us")}}><Link style={{textDecoration: 'none'}} to='/ContactUs'>Contact Us</Link>{menu==="Contact Us"?<hr/>:<></>}</li>
         </ul>
      <div className="nav-login">
        <Link style={{textDecoration: 'none'}} to='/LoginSignup'> <button>Login</button></Link>
      </div>
    </div>
  )
}
