import React from 'react';
import './Navbar.scss';
import logo from '../assets/LaunchX-logo.png';

function Navbar() {
  return (
    <nav className="navbar">
  <div className="navbar-container">
    <div className="logo">
      <img src={logo} alt="LaunchX Logo" className="logo-image" />
    </div>

    <div className="nav-links">
    <a href="#info" data-text="Info">Info</a>
    <a href="#program" data-text="Program">Program</a>
    <a href="#partners" data-text="Partners">Partners</a>
    <a href="#link" data-text="Link">Link</a>
    </div>
  </div>
</nav>
  );
}

export default Navbar;
