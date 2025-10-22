import React from 'react';
import './ContactHeroBanner.css';

const ContactHeroBanner = () => {
  return (
    <div className="contact-hero-banner">
      {/* Background Image */}
      <div className="contact-hero-background">
        <img 
          src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80" 
          alt="Kitchen background"
        />
        {/* Semi-transparent overlay */}
        <div className="contact-hero-overlay"></div>
      </div>

      {/* Content */}
      <div className="contact-hero-content">
        <div className="contact-hero-text">
          {/* Main Heading */}
          <h1 className="contact-hero-heading">
            Contact Us
          </h1>
          
          {/* Description Paragraphs */}
          <div className="contact-hero-description">
            <p className="contact-description-text">
              Get in touch with us for any questions or support
            </p>
            <p className="contact-description-text">
              We're here to help you with your food journey!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactHeroBanner;
