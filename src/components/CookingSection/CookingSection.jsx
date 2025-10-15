import React, { useState } from 'react';
import UniversalDropdown from '../UniversalDropdown/UniversalDropdown';
import './CookingSection.css';

const CookingSection = () => {
  const [selectedCuisine1, setSelectedCuisine1] = useState('');
  const [selectedCuisine2, setSelectedCuisine2] = useState('');
  const [selectedMood, setSelectedMood] = useState('');

  const cuisines = [
    'Italian', 'Mexican', 'Indian', 'Chinese', 'Japanese', 'Korean', 
    'Thai', 'French', 'Spanish', 'Mediterranean', 'American', 'Middle Eastern'
  ];

  const moods = [
    'Adventurous', 'Comforting', 'Spicy', 'Light & Fresh', 'Rich & Indulgent',
    'Healthy', 'Quick & Easy', 'Elegant', 'Street Food', 'Traditional'
  ];

  const handleGenerateSuggestion = () => {
    if (selectedCuisine1 && selectedCuisine2 && selectedMood) {
      // Generate suggestion logic here
      console.log('Generating suggestion...');
    }
  };

  return (
    <div className="cooking-section-container">
      <div className="cooking-section-content">
        <div className="cooking-section-left">
          <div className="cooking-section-image">
            <img 
              src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
              alt="Cooking Section" 
            />
          </div>
        </div>
        
        <div className="cooking-section-right">
          <div className="cooking-section-card">
            <h2 className="cooking-section-title">AI Fusion Suggestion</h2>
            <p className="cooking-section-subtitle">
              Let our intelligent chef bot craft your next bold flavor adventure. Select your preferred cuisines and mood!
            </p>
            
            <div className="cooking-section-form">
              <div className="form-row">
                <div className="form-group">
                  <UniversalDropdown
                    label="Cuisine 1"
                    value={selectedCuisine1}
                    options={cuisines}
                    onChange={setSelectedCuisine1}
                    placeholder="Select Cuisine"
                  />
                </div>
                
                <div className="form-group">
                  <UniversalDropdown
                    label="Cuisine 2"
                    value={selectedCuisine2}
                    options={cuisines}
                    onChange={setSelectedCuisine2}
                    placeholder="Select Cuisine"
                  />
                </div>
              </div>
              
              <div className="form-group full-width">
                <UniversalDropdown
                  label="Mood"
                  value={selectedMood}
                  options={moods}
                  onChange={setSelectedMood}
                  placeholder="Select Mood"
                />
              </div>
              
              <button 
                className="generate-btn"
                onClick={handleGenerateSuggestion}
                disabled={!selectedCuisine1 || !selectedCuisine2 || !selectedMood}
              >
                Generate Suggestion
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookingSection;
