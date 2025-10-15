import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faUser } from '@fortawesome/free-solid-svg-icons';
import logo from '../../assets/logo.png';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-logo">
          <img src={logo} alt="KuaKhao" className="logo-image" />
        </div>

        {/* Navigation Links */}
        <div className="navbar-links">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/explore" className="nav-link">Explore</Link>
          <Link to="/ai-picks" className="nav-link">AI Picks</Link>
          <Link to="/kitchen" className="nav-link">Kitchen</Link>
          <Link to="/reservation" className="nav-link">Reservation</Link>

        </div>


        {/* Right Icons */}
        <div className="navbar-icons">
          <FontAwesomeIcon icon={faBell} className="navbar-icon" />
          <FontAwesomeIcon icon={faUser} className="navbar-icon" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
