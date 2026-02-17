import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className='wrapper'>
      <div className='resturent-name'>
        SAVORY
      </div>

      {/* Custom Hamburger Bars */}
      <div 
        className={`hamburger-bars ${isOpen ? 'active' : ''}`} 
        onClick={toggleMenu}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
        <li><Link to="/" onClick={closeMenu}>Home</Link></li>
        <li><Link to="/menu" onClick={closeMenu}>Menu</Link></li>
        <li><Link to="/contact" onClick={closeMenu}>Contact</Link></li>
        <li id='order-btn'><Link to="/order">Order Now</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar