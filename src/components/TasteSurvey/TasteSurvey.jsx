import React, { useState } from 'react';
import './TasteSurvey.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faLeaf, faDollarSign, faStar } from '@fortawesome/free-solid-svg-icons';

const TasteSurvey = ({ isOpen, onClose, onComplete }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedCuisine, setSelectedCuisine] = useState('');
  const [selectedSpiceLevel, setSelectedSpiceLevel] = useState('');
  const [selectedFoodPreference, setSelectedFoodPreference] = useState('');

  const cuisineOptions = [
    'Pakistani',
    'Chinese', 
    'Italian',
    'BBQ/Grill',
    'Fusion',
    'I like everything'
  ];

  const spiceLevels = [
    'Mild',
    'Medium',
    'Spicy',
    'Extra Spicy'
  ];

  const foodPreferenceOptions = [
    { label: 'Taste & Flavor', icon: faHeart },
    { label: 'Healthy / Low Calories', icon: faLeaf },
    { label: 'Budget Friendly', icon: faDollarSign },
    { label: 'Premium Experience', icon: faStar }
  ];

  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    } else {
      // Survey completed
      onComplete({
        cuisine: selectedCuisine,
        spiceLevel: selectedSpiceLevel,
        foodPreference: selectedFoodPreference
      });
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSkip = () => {
    onComplete({
      cuisine: selectedCuisine,
      spiceLevel: selectedSpiceLevel,
      foodPreference: selectedFoodPreference
    });
  };

  const handleOptionSelect = (option) => {
    if (currentStep === 1) {
      setSelectedCuisine(option);
    } else if (currentStep === 2) {
      setSelectedSpiceLevel(option);
    } else if (currentStep === 3) {
      setSelectedFoodPreference(option);
    }
  };

  const getCurrentOptions = () => {
    if (currentStep === 1) return cuisineOptions;
    if (currentStep === 2) return spiceLevels;
    if (currentStep === 3) return foodPreferenceOptions;
    return [];
  };

  const getCurrentQuestion = () => {
    if (currentStep === 1) return "Which type of cuisine do you enjoy the most?";
    if (currentStep === 2) return "What spice level do you usually prefer?";
    if (currentStep === 3) return "What matters the most when choosing food?";
    return "";
  };

  const getCurrentSelection = () => {
    if (currentStep === 1) return selectedCuisine;
    if (currentStep === 2) return selectedSpiceLevel;
    if (currentStep === 3) return selectedFoodPreference;
    return '';
  };

  if (!isOpen) return null;

  return (
    <div className="taste-survey-overlay" onClick={onClose}>
      <div className="taste-survey-container" onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <button className="taste-survey-close-btn" onClick={onClose}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        {/* Progress Indicator */}
        <div className="taste-survey-progress">
          {currentStep}/3
        </div>

        {/* Question */}
        <h2 className="taste-survey-question">
          {getCurrentQuestion()}
        </h2>

        {/* Options Grid */}
        <div className={`taste-survey-options ${currentStep === 2 || currentStep === 3 ? 'vertical-layout' : ''}`}>
          {getCurrentOptions().map((option, index) => (
            <button
              key={index}
              className={`taste-survey-option ${
                getCurrentSelection() === (typeof option === 'string' ? option : option.label) ? 'selected' : ''
              }`}
              onClick={() => handleOptionSelect(typeof option === 'string' ? option : option.label)}
            >
              {currentStep === 3 && typeof option === 'object' ? (
                <>
                  <FontAwesomeIcon icon={option.icon} className="taste-survey-option-icon" />
                  {option.label}
                </>
              ) : (
                option
              )}
            </button>
          ))}
        </div>

        {/* Navigation */}
        <div className="taste-survey-navigation">
          <button 
            className="taste-survey-next-btn"
            onClick={handleNext}
            disabled={!getCurrentSelection()}
          >
            {currentStep === 3 ? 'Finish Survey' : 'Next'}
          </button>
          {currentStep > 1 && (
            <button className="taste-survey-back-btn" onClick={handleBack}>
              Back
            </button>
          )}
          {currentStep === 1 && (
            <button className="taste-survey-skip-btn" onClick={handleSkip}>
              Skip
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default TasteSurvey;
