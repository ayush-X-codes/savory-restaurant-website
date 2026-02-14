import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"
const Navbar = () => {
  return (
    <nav className='wrapper'>
      <div className='resturent-name'>
        SAVORY
      </div>
      <ul className='nav-links'>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/menu">Menu</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li id='order-btn'><Link to="/Order Now">Order Now</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar
