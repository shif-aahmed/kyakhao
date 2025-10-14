import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBrain } from '@fortawesome/free-solid-svg-icons';
import './AISuggestions.css';

const AISuggestions = () => {
  const handleViewSuggestions = () => {
    // Scroll to AI suggestions section or navigate to suggestions page
    const suggestionsSection = document.getElementById('ai-suggestions-detailed');
    if (suggestionsSection) {
      suggestionsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="ai-suggestions">
      <div className="container">
        <div className="ai-promo-card">
          <div className="ai-icon">
            <FontAwesomeIcon icon={faBrain} />
          </div>
          
          <div className="ai-content">
            <h2 className="ai-title">Home AI Suggestions</h2>
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
