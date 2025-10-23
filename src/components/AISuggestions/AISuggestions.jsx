import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import './AISuggestions.css';

const AISuggestions = () => {
  const navigate = useNavigate(); // ✅ Hook to handle navigation

  const handleViewSuggestions = () => {
    navigate('/ai-picks'); // ✅ Redirect to /ai-picks
  };
  return (
    <section className="ai-suggestions">
      <div className="container">
        <div className="ai-promo-card">
          <div className="ai-icon">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 12C8 8 12 6 16 8C18 9 20 11 22 12C24 13 26 12 28 10C30 8 32 10 32 14C32 18 30 20 28 22C26 24 24 26 22 28C20 30 18 32 16 34C14 36 12 34 10 32C8 30 6 28 6 24C6 20 6 16 8 12Z" fill="currentColor"/>
              <path d="M20 8C22 6 24 8 26 10C28 12 30 14 32 16C34 18 32 20 30 22C28 24 26 26 24 28C22 30 20 32 18 30C16 28 14 26 12 24C10 22 8 20 10 18C12 16 14 14 16 12C18 10 20 8Z" fill="currentColor"/>
            </svg>
          </div>
          
          <div className="ai-content">
            <h2 className="ai-title">AI-Powered Suggestions for You!</h2>
            <p className="ai-description">
              Let our intelligent system recommend dishes you'll love based on your preferences and order history.
            </p>
            <button className="ai-btn" onClick={handleViewSuggestions}>
              View AI Suggestions
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AISuggestions;
