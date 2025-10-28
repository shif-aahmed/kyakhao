import React, { useState } from 'react';
import './AIPickFilter.css';

const AIPickFilter = () => {
  const [selectedMood, setSelectedMood] = useState('Happy');
  const [moodSlider, setMoodSlider] = useState(25);
  const [dietaryNeeds, setDietaryNeeds] = useState({
    vegetarian: true,
    vegan: false,
    glutenFree: false,
    keto: false
  });
  const [selectedCuisine, setSelectedCuisine] = useState('Italian');
  const [flavorProfiles, setFlavorProfiles] = useState({
    spicy: false,
    sweet: false,
    savory: true,
    tangy: false
  });

  const handleMoodChange = (mood) => {
    setSelectedMood(mood);
  };

  const handleDietaryChange = (diet) => {
    setDietaryNeeds(prev => ({
      ...prev,
      [diet]: !prev[diet]
    }));
  };

  const handleCuisineChange = (cuisine) => {
    setSelectedCuisine(cuisine);
  };

  const handleFlavorChange = (flavor) => {
    setFlavorProfiles(prev => ({
      ...prev,
      [flavor]: !prev[flavor]
    }));
  };

  const handleSliderChange = (value) => {
    setMoodSlider(value);
  };

  const applyFilters = () => {
    console.log('Filters applied:', {
      mood: selectedMood,
      moodSlider,
      dietaryNeeds,
      cuisine: selectedCuisine,
      flavorProfiles
    });
  };

  return (
    <div className="ai-pick-filter">
      <div className="ai-pick-filter-card">
        <h2 className="ai-pick-filter-title">Tell Us What You Crave</h2>
        
        <div className="ai-pick-filter-content">
          {/* Top Row */}
          <div className="ai-pick-filter-row">
            {/* Your Current Mood */}
            <div className="ai-pick-filter-section">
              <h3 className="ai-pick-filter-section-title">Your Current Mood</h3>
              <div className="ai-pick-filter-mood-options">
                <div 
                  className={`ai-pick-filter-mood-option ${selectedMood === 'Happy' ? 'selected' : ''}`}
                  onClick={() => handleMoodChange('Happy')}
                >
                  <div className="ai-pick-filter-mood-icon happy">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="10" cy="10" r="8" fill="rgb(156, 163, 175)"/>
                      <path d="M7 9C7 9.55228 7.44772 10 8 10C8.55228 10 9 9.55228 9 9C9 8.44772 8.55228 8 8 8C7.44772 8 7 8.44772 7 9Z" fill="white"/>
                      <path d="M11 9C11 9.55228 11.4477 10 12 10C12.5523 10 13 9.55228 13 9C13 8.44772 12.5523 8 12 8C11.4477 8 11 8.44772 11 9Z" fill="white"/>
                      <path d="M6 12C6 12.5523 6.44772 13 7 13H13C13.5523 13 14 12.5523 14 12C14 11.4477 13.5523 11 13 11H7C6.44772 11 6 11.4477 6 12Z" fill="white"/>
                    </svg>
                  </div>
                  <span className="ai-pick-filter-mood-label">Happy</span>
                </div>
                
                <div 
                  className={`ai-pick-filter-mood-option ${selectedMood === 'Energetic' ? 'selected' : ''}`}
                  onClick={() => handleMoodChange('Energetic')}
                >
                  <div className="ai-pick-filter-mood-icon">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10 2L12.5 7.5L18 8L14 12L15 18L10 15L5 18L6 12L2 8L7.5 7.5L10 2Z" fill="#9ca3af"/>
                    </svg>
                  </div>
                  <span className="ai-pick-filter-mood-label">Energetic</span>
                </div>
                
                <div 
                  className={`ai-pick-filter-mood-option ${selectedMood === 'Relaxed' ? 'selected' : ''}`}
                  onClick={() => handleMoodChange('Relaxed')}
                >
                  <div className="ai-pick-filter-mood-icon">
                    <svg width="30" height="22" viewBox="0 0 30 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M26.5968 13.9648C26.5968 12.7302 26.1061 11.5466 25.233 10.6736C24.4147 9.85526 23.3236 9.37207 22.1731 9.31501L21.9418 9.30982H19.5611C18.9733 9.30969 18.4552 8.92359 18.287 8.36034C17.8642 6.9422 17.0549 5.66835 15.9504 4.68339C14.846 3.69867 13.4887 3.04019 12.0319 2.78191C10.5749 2.52375 9.07449 2.67572 7.69894 3.22091C6.32323 3.76619 5.12597 4.68414 4.24146 5.87052C3.35713 7.05684 2.82047 8.46581 2.69065 9.93971C2.56082 11.4139 2.84279 12.8954 3.50631 14.2181C4.16985 15.5409 5.18892 16.6528 6.44817 17.4301C7.7072 18.2073 9.15732 18.6193 10.6369 18.6198L21.9418 18.6198C23.1765 18.6198 24.3602 18.1289 25.233 17.256C26.1061 16.383 26.5968 15.1995 26.5968 13.9648ZM29.2568 13.9648C29.2568 15.9046 28.4866 17.765 27.1151 19.1368C25.7432 20.5086 23.8819 21.2798 21.9418 21.2798L10.6369 21.2798C8.66383 21.2793 6.72957 20.7303 5.05062 19.6939C3.37165 18.6575 2.01417 17.1741 1.12946 15.4104C0.244742 13.6467 -0.132082 11.6715 0.0410389 9.7059C0.214205 7.74081 0.929758 5.86242 2.10878 4.28076C3.28817 2.69886 4.88527 1.47497 6.71962 0.747949C8.5538 0.0211176 10.5541 -0.180909 12.4968 0.163468C14.4396 0.507898 16.2481 1.38564 17.7207 2.69878C18.9419 3.78785 19.8911 5.14125 20.5014 6.64982H21.9418L22.3043 6.65891C24.1125 6.74848 25.8289 7.50666 27.1151 8.79285C28.4866 10.1646 29.2568 12.025 29.2568 13.9648Z" fill="#9ca3af"/>
                    </svg>
                  </div>
                  <span className="ai-pick-filter-mood-label">Relaxed</span>
                </div>
                
                <div 
                  className={`ai-pick-filter-mood-option ${selectedMood === 'Adventurous' ? 'selected' : ''}`}
                  onClick={() => handleMoodChange('Adventurous')}
                >
                  <div className="ai-pick-filter-mood-icon">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10 2L12.5 7.5L18 8L14 12L15 18L10 15L5 18L6 12L2 8L7.5 7.5L10 2Z" fill="#9ca3af"/>
                    </svg>
                  </div>
                  <span className="ai-pick-filter-mood-label">Adventurous</span>
                </div>
              </div>

            </div>

            {/* Dietary Needs */}
            <div className="ai-pick-filter-section">
              <h3 className="ai-pick-filter-section-title">Dietary Needs</h3>
              <div className="ai-pick-filter-checkboxes">
                <label className="ai-pick-filter-checkbox">
                  <input
                    type="checkbox"
                    checked={dietaryNeeds.vegetarian}
                    onChange={() => handleDietaryChange('vegetarian')}
                  />
                  <span className="ai-pick-filter-checkmark"></span>
                  Vegetarian
                </label>
                
                <label className="ai-pick-filter-checkbox">
                  <input
                    type="checkbox"
                    checked={dietaryNeeds.vegan}
                    onChange={() => handleDietaryChange('vegan')}
                  />
                  <span className="ai-pick-filter-checkmark"></span>
                  Vegan
                </label>
                
                <label className="ai-pick-filter-checkbox">
                  <input
                    type="checkbox"
                    checked={dietaryNeeds.glutenFree}
                    onChange={() => handleDietaryChange('glutenFree')}
                  />
                  <span className="ai-pick-filter-checkmark"></span>
                  Gluten-Free
                </label>
                
                <label className="ai-pick-filter-checkbox">
                  <input
                    type="checkbox"
                    checked={dietaryNeeds.keto}
                    onChange={() => handleDietaryChange('keto')}
                  />
                  <span className="ai-pick-filter-checkmark"></span>
                  Keto
                </label>
              </div>
            </div>

            {/* Cuisine Type */}
            <div className="ai-pick-filter-section">
              <h3 className="ai-pick-filter-section-title">Cuisine Type</h3>
              <div className="ai-pick-filter-cuisine-buttons">
                <button 
                  className={`ai-pick-filter-cuisine-btn ${selectedCuisine === 'Italian' ? 'selected' : ''}`}
                  onClick={() => handleCuisineChange('Italian')}
                >
                  Italian
                </button>
                <button 
                  className={`ai-pick-filter-cuisine-btn ${selectedCuisine === 'Asian' ? 'selected' : ''}`}
                  onClick={() => handleCuisineChange('Asian')}
                >
                  Asian
                </button>
                <button 
                  className={`ai-pick-filter-cuisine-btn ${selectedCuisine === 'Mexican' ? 'selected' : ''}`}
                  onClick={() => handleCuisineChange('Mexican')}
                >
                  Mexican
                </button>
                <button 
                  className={`ai-pick-filter-cuisine-btn ${selectedCuisine === 'Indian' ? 'selected' : ''}`}
                  onClick={() => handleCuisineChange('Indian')}
                >
                  Indian
                </button>
                <button 
                  className={`ai-pick-filter-cuisine-btn ${selectedCuisine === 'American' ? 'selected' : ''}`}
                  onClick={() => handleCuisineChange('American')}
                >
                  American
                </button>
                <button 
                  className={`ai-pick-filter-cuisine-btn ${selectedCuisine === 'Mediterranean' ? 'selected' : ''}`}
                  onClick={() => handleCuisineChange('Mediterranean')}
                >
                  Mediterranean
                </button>
              </div>
            </div>
          </div>

          {/* Flavor Profiles */}
          <div className="ai-pick-filter-section">
            <h3 className="ai-pick-filter-section-title">Flavor Profiles</h3>
            <div className="ai-pick-filter-flavor-checkboxes">
              <label className="ai-pick-filter-checkbox">
                <input
                  type="checkbox"
                  checked={flavorProfiles.spicy}
                  onChange={() => handleFlavorChange('spicy')}
                />
                <span className="ai-pick-filter-checkmark"></span>
                Spicy
              </label>
              
              <label className="ai-pick-filter-checkbox">
                <input
                  type="checkbox"
                  checked={flavorProfiles.sweet}
                  onChange={() => handleFlavorChange('sweet')}
                />
                <span className="ai-pick-filter-checkmark"></span>
                Sweet
              </label>
              
              <label className="ai-pick-filter-checkbox">
                <input
                  type="checkbox"
                  checked={flavorProfiles.savory}
                  onChange={() => handleFlavorChange('savory')}
                />
                <span className="ai-pick-filter-checkmark"></span>
                Savory
              </label>
              
              <label className="ai-pick-filter-checkbox">
                <input
                  type="checkbox"
                  checked={flavorProfiles.tangy}
                  onChange={() => handleFlavorChange('tangy')}
                />
                <span className="ai-pick-filter-checkmark"></span>
                Tangy
              </label>
            </div>
          </div>
        </div>

        {/* Apply Button */}
        <button className="ai-pick-filter-apply-btn" onClick={applyFilters}>
          Apply Filters & Get Suggestions
        </button>
      </div>
    </div>
  );
};

export default AIPickFilter;
