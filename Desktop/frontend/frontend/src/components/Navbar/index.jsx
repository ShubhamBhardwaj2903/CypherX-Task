import React, { useState } from 'react';
import './navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="assets/logo.png" alt="CloudErp Logo" />
      </div>
      <div className={`navbar-menu ${isOpen ? 'open' : ''}`}>
        <ul className="navbar-menu-list">
          <li className="navbar-item">
            Products <span className="dropdown-icon">&#9662;</span>
          </li>
          <li className="navbar-item">
            Solutions <span className="dropdown-icon">&#9662;</span>
          </li>
          <li className="navbar-item">Customer stories</li>
          <li className="navbar-item">Support & Resources</li>
          <li className="navbar-item">Services</li>
          <li className="navbar-item">Login</li>
        </ul>
        <button className="demo-button">Schedule a Demo</button>
      </div>
      <div className="navbar-toggle" onClick={toggleMenu}>
        <span className="navbar-toggle-icon">&#9776;</span>
      </div>
    </nav>
  );
};

export default Navbar;
