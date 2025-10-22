import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faFacebookF, 
  faTwitter, 
  faInstagram, 
  faLinkedinIn 
} from '@fortawesome/free-brands-svg-icons';
import logo from '../../assets/logo.png';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Main Content Area */}
        <div className="footer-main">
          {/* Brand Section */}
          <div className="brand-section">
            <div className="logo-container">
              <img src={logo} alt="KyaKhao Logo" className="footer-logo" />
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
                <li><a href="#" className="nav-link">Pricing</a></li>
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
