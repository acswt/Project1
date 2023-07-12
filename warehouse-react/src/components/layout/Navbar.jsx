import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <a href="#" className="navbar-brand">Warehouse Manager</a>
      <ul className="navbar-menu">
        <li className="navbar-item">
          <a href="#" className="navbar-link">Home</a>
        </li>
        <li className="navbar-item">
          <a href="#" className="navbar-link">About</a>
        </li>
        <li className="navbar-item">
          <a href="#" className="navbar-link">Services</a>
        </li>
        <li className="navbar-item">
          <a href="#" className="navbar-link">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;