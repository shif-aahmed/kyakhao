import React from 'react';
import { useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faFacebookF, 
  faTwitter, 
  faInstagram, 
  faLinkedinIn 
} from '@fortawesome/free-brands-svg-icons';
import logoImage from '../../assets/logo.png';
import './Footer.css';

const Footer = () => {
  const location = useLocation();
  const isExplorePage = location.pathname === '/explore';

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Main Content Area */}
        <div className="footer-main">
          {/* Brand Section */}
          <div className="brand-section">
            <div className="logo-container">
              <img src={logoImage} alt="KyaKhao Logo" className="footer-logo" />
            </div>
            <p className="tagline">
              Your ultimate guide to delicious recipes and culinary inspiration.
            </p>
            <div className="social-icons">
              <a href="#" className="social-link">
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a href="#" className="social-link">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="#" className="social-link">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="#" className="social-link">
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
            </div>
          </div>

          {/* Navigation Columns */}
          <div className="nav-columns">
            <div className="nav-column">
              <h3 className="column-title">Product</h3>
              <ul className="column-links">
                <li><a href="#" className="nav-link">Overview</a></li>
                <li><a href="#" className="nav-link">Features</a></li>
                <li><a href="/new-checkout" className="nav-link">Checkout</a></li>
                <li><a href="/faqs" className="nav-link">FAQs</a></li>
              </ul>
            </div>

            <div className="nav-column">
              <h3 className="column-title">Resources</h3>
              <ul className="column-links">
                <li><a href="#" className="nav-link">Blog</a></li>
                <li><a href="#" className="nav-link">Newsletter</a></li>
                <li><a href="#" className="nav-link">Events</a></li>
                <li><a href="#" className="nav-link">Help Center</a></li>
              </ul>
            </div>

            <div className="nav-column">
              <h3 className="column-title">Company</h3>
              <ul className="column-links">
                <li><a href="#" className="nav-link">About Us</a></li>
                <li><a href="#" className="nav-link">Careers</a></li>
                <li><a href="#" className="nav-link">Press</a></li>
                <li><a href="#" className="nav-link">Partners</a></li>
              </ul>
            </div>

            <div className="nav-column">
              <h3 className="column-title">Legal</h3>
              <ul className="column-links">
                <li><a href="#" className="nav-link">Terms</a></li>
                <li><a href="#" className="nav-link">Privacy</a></li>
                <li><a href="#" className="nav-link">Cookies</a></li>
                <li><a href="#" className="nav-link">Licenses</a></li>
              </ul>
            </div>
          </div>

          {/* Red Icon - Only on Explore Page */}
          {isExplorePage && (
            <div className="red-icon-container">
              <div className="red-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 5.5V7.5C15 8.3 14.3 9 13.5 9S12 8.3 12 7.5V5.5L6 7V9L12 7.5V9.5C12 10.3 12.7 11 13.5 11S15 10.3 15 9.5V7.5L21 9ZM12 18C13.1 18 14 18.9 14 20C14 21.1 13.1 22 12 22C10.9 22 10 21.1 10 20C10 18.9 10.9 18 12 18Z" fill="white"/>
                </svg>
              </div>
            </div>
          )}
        </div>

        {/* Separator Line */}
        <div className="footer-separator"></div>

        {/* Copyright Section */}
        <div className="copyright-section">
          <p className="copyright-text">© 2025 KyaKhao. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
