import React, { useState } from 'react';
import TasteSurvey from '../TasteSurvey/TasteSurvey';
import icon from '../../assets/image.png'
import './TasteSurveyModal.css';

const TasteSurveyModal = ({ isOpen, onClose, onStartSurvey }) => {
  const [showSurvey, setShowSurvey] = useState(false);

  const handleStartSurvey = () => {
    setShowSurvey(true);
  };

  const handleSurveyComplete = (surveyData) => {
    console.log('Survey completed with data:', surveyData);
    setShowSurvey(false);
    // You can add logic here to handle the completed survey data
    // For now, we'll just close the modal
    onStartSurvey();
  };

  const handleClose = () => {
    setShowSurvey(false);
    onClose();
  };

  if (!isOpen) return null;

  if (showSurvey) {
    return (
      <TasteSurvey
        isOpen={true}
        onClose={handleClose}
        onComplete={handleSurveyComplete}
      />
    );
  }

  return (
    <div className="taste-survey-modal-overlay" onClick={onClose}>
      <div className="taste-survey-modal-container" onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <button className="taste-survey-modal-close-btn" onClick={onClose}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        {/* Icon */}
        <div className="taste-survey-modal-icon">
<img src={icon} alt="" />
        </div>

        {/* Title */}
        <h2 className="taste-survey-modal-title">Let's Know Your Taste</h2>

        {/* Subtitle */}
        <p className="taste-survey-modal-subtitle">
          Answer a few quick questions so we can recommend dishes you'll love.
        </p>

        {/* Start Survey Button */}
        <button className="taste-survey-modal-btn" onClick={handleStartSurvey}>
          Start Survey
        </button>
      </div>
    </div>
  );
};

export default TasteSurveyModal;
