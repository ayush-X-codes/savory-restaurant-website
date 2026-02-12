import React from 'react'
import "../App.css"
const Navbar = () => {
  return (
    <nav className='wrapper'>
      <div className='resturent-name'>
        SAVORY
      </div>
      <ul className='nav-links'>
        <li><a href="/home">Home</a></li>
        <li><a href="/menu">Menu</a></li>
        <li><a href="/contact">Contact</a></li>
        <li id='order-btn'><a href="/Order Now">Order Now</a></li>
      </ul>
    </nav>
  )
}

export default Navbar
