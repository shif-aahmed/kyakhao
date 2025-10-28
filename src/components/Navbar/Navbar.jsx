import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import NavDropdown from '../NavDropdown/NavDropdown';
import PersonalizeModal from '../PersonalizeModal/PersonalizeModal';
import logoImage from '../../assets/logo.png';
import './Navbar.css';

const Navbar = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [showPersonalizeModal, setShowPersonalizeModal] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  const handleAIPickClick = (e) => {
    e.preventDefault();
    try {
      // Remember the page where user initiated AI Picks
      sessionStorage.setItem('tasteOriginPath', location.pathname);
    } catch {
      // ignore storage errors
    }
    setShowPersonalizeModal(true);
    closeMobileMenu();
  };

  const handleCloseModal = () => {
    setShowPersonalizeModal(false);
  };


  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-logo">
          <img src={logoImage} alt="KyaKhao" className="logo-image" />
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className={`mobile-menu-toggle ${isMobileMenuOpen ? 'active' : ''}`}
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Right Icons */}
        <div className="navbar-icons">
          <div className="bell-container" onClick={toggleDropdown}>
            {location.pathname === '/explore' || location.pathname === '/ai-picks' || location.pathname === '/kitchen' || location.pathname === '/reservation' ? (
              <svg className="bell-icon" width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.676 9.65801H7.898C7.82467 9.65801 7.755 9.63601 7.689 9.59201C7.623 9.54801 7.57533 9.49667 7.546 9.43801L3.52 0.220008C3.50533 0.161342 3.465 0.110008 3.399 0.0660076C3.333 0.0220079 3.26333 7.62939e-06 3.19 7.62939e-06H0.242C0.183333 7.62939e-06 0.128333 0.0220079 0.077 0.0660076C0.0256667 0.110008 0 0.168674 0 0.242008V0.968008C0 1.02667 0.0256667 1.08167 0.077 1.13301C0.128333 1.18434 0.183333 1.21001 0.242 1.21001H2.398C2.47133 1.21001 2.541 1.23201 2.607 1.27601C2.673 1.32001 2.71333 1.37134 2.728 1.43001L6.776 10.648C6.79067 10.7067 6.831 10.758 6.897 10.802C6.963 10.846 7.03267 10.868 7.106 10.868H16.676C16.7493 10.868 16.808 10.8423 16.852 10.791C16.896 10.7397 16.918 10.6847 16.918 10.626V9.90001C16.918 9.82667 16.896 9.76801 16.852 9.72401C16.808 9.68001 16.7493 9.65801 16.676 9.65801ZM9.064 12.078C8.56533 12.078 8.14 12.254 7.788 12.606C7.436 12.958 7.26 13.3833 7.26 13.882C7.26 14.3807 7.436 14.8097 7.788 15.169C8.14 15.5283 8.56533 15.708 9.064 15.708C9.56267 15.708 9.99167 15.5283 10.351 15.169C10.7103 14.8097 10.89 14.3807 10.89 13.882C10.89 13.3833 10.714 12.958 10.362 12.606C10.01 12.254 9.57733 12.078 9.064 12.078ZM15.114 12.078C14.6153 12.078 14.1863 12.254 13.827 12.606C13.4677 12.958 13.288 13.3833 13.288 13.882C13.288 14.3807 13.4677 14.8097 13.827 15.169C14.1863 15.5283 14.6153 15.708 15.114 15.708C15.6127 15.708 16.038 15.532 16.39 15.18C16.742 14.828 16.918 14.399 16.918 13.893C16.918 13.387 16.742 12.958 16.39 12.606C16.038 12.254 15.6127 12.078 15.114 12.078ZM19.096 2.42001H6.292C6.21867 2.42001 6.171 2.44201 6.149 2.48601C6.127 2.53001 6.12333 2.58134 6.138 2.64001L6.446 3.41001C6.47533 3.46867 6.523 3.52001 6.589 3.56401C6.655 3.60801 6.71733 3.63001 6.776 3.63001H18.612C18.6707 3.63001 18.733 3.60801 18.799 3.56401C18.865 3.52001 18.9127 3.46867 18.942 3.41001L19.25 2.64001C19.2647 2.58134 19.261 2.53001 19.239 2.48601C19.217 2.44201 19.1693 2.42001 19.096 2.42001ZM17.16 7.23801H8.228C8.16933 7.23801 8.12167 7.26001 8.085 7.30401C8.04833 7.34801 8.04467 7.39934 8.074 7.45801L8.382 8.22801C8.39667 8.28667 8.437 8.33801 8.503 8.38201C8.569 8.42601 8.63867 8.44801 8.712 8.44801H16.676C16.7493 8.44801 16.819 8.42601 16.885 8.38201C16.951 8.33801 16.9913 8.28667 17.006 8.22801L17.314 7.45801C17.3433 7.39934 17.3397 7.34801 17.303 7.30401C17.2663 7.26001 17.2187 7.23801 17.16 7.23801ZM18.128 4.81801H7.26C7.20133 4.81801 7.15367 4.84001 7.117 4.88401C7.08033 4.92801 7.07667 4.97934 7.106 5.03801L7.414 5.80801C7.42867 5.86667 7.469 5.91801 7.535 5.96201C7.601 6.00601 7.67067 6.02801 7.744 6.02801H17.644C17.7173 6.02801 17.787 6.00601 17.853 5.96201C17.919 5.91801 17.9593 5.86667 17.974 5.80801L18.282 5.03801C18.3113 4.97934 18.3077 4.92801 18.271 4.88401C18.2343 4.84001 18.1867 4.81801 18.128 4.81801Z" fill="#000000"/>
              </svg>
            ) : (
              <svg className="bell-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 8C18 6.4087 17.3679 4.88258 16.2426 3.75736C15.1174 2.63214 13.5913 2 12 2C10.4087 2 8.88258 2.63214 7.75736 3.75736C6.63214 4.88258 6 6.4087 6 8C6 15 3 17 3 17H21C21 17 18 15 18 8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M13.73 21C13.5542 21.3031 13.3019 21.5547 12.9982 21.7295C12.6946 21.9044 12.3504 21.9965 12 21.9965C11.6496 21.9965 11.3054 21.9044 11.0018 21.7295C10.6982 21.5547 10.4458 21.3031 10.27 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            )}
            <div className="notification-badge"></div>
          </div>
          <Link to="/signin" className="sign-in-btn">Sign In</Link>
        </div>

        {/* Navigation Links */}
        <div className={`navbar-links ${isMobileMenuOpen ? 'active' : ''}`}>
          <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`} onClick={closeMobileMenu}>Home</Link>
          <Link to="/explore" className={`nav-link ${location.pathname === '/explore' ? 'active' : ''}`} onClick={closeMobileMenu}>Explore</Link>
          <button className={`nav-link ${location.pathname === '/ai-picks' ? 'active' : ''}`} onClick={handleAIPickClick}>AI Picks</button>
          <Link to="/kitchen" className={`nav-link ${location.pathname === '/kitchen' ? 'active' : ''}`} onClick={closeMobileMenu}>Kitchen</Link>
          <Link to="/reservation" className={`nav-link ${location.pathname === '/reservation' ? 'active' : ''}`} onClick={closeMobileMenu}>Reservation</Link>
          <Link to="/contact" className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`} onClick={closeMobileMenu}>Contact</Link>
        </div>
      </div>
      
      {/* NavDropdown */}
      <NavDropdown isOpen={isDropdownOpen} onClose={closeDropdown} />
      
      {/* Personalize Modal */}
      <PersonalizeModal
        isOpen={showPersonalizeModal}
        onClose={handleCloseModal}
      />
    </nav>
  );
};

export default Navbar;
