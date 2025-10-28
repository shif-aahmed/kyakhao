import React, { useState } from 'react';
import UniversalDropdown from '../UniversalDropdown/UniversalDropdown';
import './CookingSection.css';

const CookingSection = () => {
  const [selectedCuisine1, setSelectedCuisine1] = useState('');
  const [selectedCuisine2, setSelectedCuisine2] = useState('');
  const [selectedMood, setSelectedMood] = useState('');
  const [showSuggestion, setShowSuggestion] = useState(false);

  console.log('CookingSection rendered, showSuggestion:', showSuggestion);

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
      setShowSuggestion(true);
      console.log('Generating suggestion...');
    }
  };

  return (
    <div className="cooking-section-container" data-component="cooking-section">
      <div className="cooking-section-content">
        <div className="cooking-section-left">
          <div className="cooking-section-image">
            <img 
              src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
              alt="Delicious Fusion Dish" 
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

            {showSuggestion && (
              <div className="suggestion-card">
                <h3 className="suggestion-title">Suggested Dish: Kimchi Paella</h3>
                <p className="suggestion-brief">
                  A daring blend of Spanish paella tradition with the bold, fermented flavors of Korean kimchi.
                </p>
                <p className="suggestion-detail">
                  Imagine succulent shrimp and chorizo mingling with vibrant red kimchi, saffron-infused rice, and a hint of gochujang. Topped with a crispy rice crust (socarrat) and fresh scallions. Perfect for a adventurous dinner party.
                </p>
                <div className="suggestion-actions">
                  <button className="try-recipe-btn">Try Recipe</button>
                  <button className="save-later-btn">Save for Later</button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookingSection;
