import React from 'react';
import './Navbar.scss';

function Navbar() {
  return (
    <nav className="navbar">
  <div className="navbar-container">
    <div className="logo">
      <img src="https://res.cloudinary.com/daf9up52k/image/upload/v1747733532/LaunchX-logo_ynnvn5.png" alt="LaunchX Logo" className="logo-image" />
    </div>

    <div className="nav-links">
    <a href="#info" data-text="Info">Info</a>
    <a href="#program" data-text="Program">Program</a>
    <a href="#partners" data-text="Partners">Partners</a>
    <a href="https://docs.google.com/forms/d/e/1FAIpQLSfq001sSWRWhORsBVKgfUd8n914g1N3iUF5PiKM4Dd0eX6u6g/viewform" data-text="Register">Register</a>
    </div>
  </div>
</nav>
  );
}

export default Navbar;
