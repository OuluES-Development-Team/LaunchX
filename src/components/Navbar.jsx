import React from 'react';
import './Navbar.scss';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a className="logo" href='#'>
          <img src="https://res.cloudinary.com/daf9up52k/image/upload/v1747733532/LaunchX-logo_ynnvn5.png" alt="LaunchX Logo" className="logo-image" />
        </a>

        <div className="nav-links">
          <a href="#about" className="nav-link" data-text="About">About</a>
          <a href="#schedule" className="nav-link" data-text="Schedule">Schedule</a>
          <a href="#sponsors" className="nav-link" data-text="Sponsors">Sponsors</a>
          <a 
            href="https://kide.app/events/9dabd7c4-135e-477c-a29c-9edb146a7a7e" 
            className="nav-link" 
            id="register-button"
            data-text="Register" 
            target="_blank"
            rel="noopener noreferrer">Register</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;