import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './TasteSurveyCompletion.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faChevronDown } from '@fortawesome/free-solid-svg-icons';

const TasteSurveyCompletion = ({ isOpen, onClose, onViewSuggestions, onEditPreferences, surveyData }) => {
  const navigate = useNavigate();

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleShowSuggestions = () => {
    onClose(); // Close the modal first
    navigate('/ai-picks'); // Navigate to AI Picks page
  };

  if (!isOpen) return null;

  const getCuisineText = (cuisine) => {
    if (cuisine === 'Pakistani') return 'Pakistani & Indian';
    if (cuisine === 'Chinese') return 'Chinese & Asian';
    if (cuisine === 'Italian') return 'Italian & Mediterranean';
    if (cuisine === 'BBQ/Grill') return 'BBQ & Grilled';
    if (cuisine === 'Fusion') return 'Fusion & Modern';
    if (cuisine === 'I like everything') return 'All Cuisines';
    return cuisine;
  };

  const getSpiceText = (spice) => {
    if (spice === 'Mild') return 'Mild';
    if (spice === 'Medium') return 'Medium';
    if (spice === 'Spicy') return 'Spicy';
    if (spice === 'Extra Spicy') return 'Extra Spicy';
    return spice;
  };

  const getFoodPreferenceText = (preference) => {
    if (preference === 'Taste & Flavor') return 'Taste & Flavor';
    if (preference === 'Healthy / Low Calories') return 'Healthy & Low Calories';
    if (preference === 'Budget Friendly') return 'Budget Friendly';
    if (preference === 'Premium Experience') return 'Premium Experience';
    return preference;
  };

  return (
    <div className="taste-survey-completion-overlay" onClick={onClose}>
      <div className="taste-survey-completion-container" onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <button className="taste-survey-completion-close-btn" onClick={onClose}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        {/* Success Icon */}
        <div className="taste-survey-completion-icon">
          <FontAwesomeIcon icon={faCheck} />
        </div>

        {/* Title */}
        <h2 className="taste-survey-completion-title">You're All Set!</h2>

        {/* Subtitle */}
        <p className="taste-survey-completion-subtitle">
          Your taste profile is ready. Get personalized dish suggestions now.
        </p>

        {/* Taste Profile Button */}
        <button className="taste-survey-completion-profile-btn">
          Your Taste Profile
        </button>

        {/* Preferences Section */}
        <div className="taste-survey-completion-preferences">
          <div className="taste-survey-completion-preference">
            <div className="taste-survey-completion-preference-content">
              <label>Cuisine Preference</label>
              <p className="taste-survey-completion-preference-value">
                {getCuisineText(surveyData?.cuisine || 'Italian')}
              </p>
            </div>
            <div className="taste-survey-completion-dropdown">
              <FontAwesomeIcon icon={faChevronDown} className="taste-survey-completion-edit-icon" />
            </div>
          </div>

          <div className="taste-survey-completion-preference">
            <div className="taste-survey-completion-preference-content">
              <label>Spice Level</label>
              <p className="taste-survey-completion-preference-value">
                {getSpiceText(surveyData?.spiceLevel || 'Medium')}
              </p>
            </div>
            <div className="taste-survey-completion-dropdown">
              <FontAwesomeIcon icon={faChevronDown} className="taste-survey-completion-edit-icon" />
            </div>
          </div>

          <div className="taste-survey-completion-preference">
            <div className="taste-survey-completion-preference-content">
              <label>Food Priority</label>
              <p className="taste-survey-completion-preference-value">
                {getFoodPreferenceText(surveyData?.foodPreference || 'Taste & Flavor')}
              </p>
            </div>
            <div className="taste-survey-completion-dropdown">
              <FontAwesomeIcon icon={faChevronDown} className="taste-survey-completion-edit-icon" />
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="taste-survey-completion-actions">
          <button 
            className="taste-survey-completion-suggestions-btn"
            onClick={handleShowSuggestions}
          >
            Show My Suggestions
          </button>
          <button 
            className="taste-survey-completion-edit-btn"
            onClick={onEditPreferences}
          >
            Edit Preferences
          </button>
        </div>
      </div>
    </div>
  );
};

export default TasteSurveyCompletion;
