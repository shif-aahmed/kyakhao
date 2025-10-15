import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBrain } from '@fortawesome/free-solid-svg-icons';
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
            <FontAwesomeIcon icon={faBrain} />
          </div>
          
          <div className="ai-content">
            <h2 className="ai-title">AI Suggestions</h2>
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
