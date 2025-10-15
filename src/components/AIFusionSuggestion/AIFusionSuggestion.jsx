import React, { useState } from 'react';
import UniversalDropdown from '../UniversalDropdown/UniversalDropdown';
import './AIFusionSuggestion.css';

const AIFusionSuggestion = () => {
  const [selectedCuisine1, setSelectedCuisine1] = useState('');
  const [selectedCuisine2, setSelectedCuisine2] = useState('');
  const [selectedMood, setSelectedMood] = useState('');
  const [suggestion, setSuggestion] = useState(null);

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
      // Generate a random fusion suggestion
      const suggestions = [
        {
          title: "Kimchi Paella",
          description: "A daring blend of Spanish paella tradition with the bold, fermented flavors of Korean kimchi. Imagine succulent shrimp and chorizo mingling with vibrant red kimchi, saffron-infused rice, and a hint of gochujang. Topped with a crispy rice crust (socarrat) and fresh scallions. Perfect for an adventurous dinner party."
        },
        {
          title: "Thai Carbonara",
          description: "Creamy Italian pasta meets the aromatic spices of Thailand. Al dente spaghetti tossed in a rich coconut milk and egg yolk sauce, enhanced with lemongrass, galangal, and a touch of fish sauce. Finished with crispy pancetta, fresh basil, and a sprinkle of red chili flakes for that perfect heat."
        },
        {
          title: "Mexican Ramen",
          description: "A bold fusion of Japanese ramen with Mexican street food flavors. Rich tonkotsu broth infused with chipotle and cumin, topped with tender carnitas, pickled jalapeños, corn, and a perfectly soft-boiled egg. Garnished with cilantro, lime, and crispy tortilla strips."
        }
      ];
      
      const randomSuggestion = suggestions[Math.floor(Math.random() * suggestions.length)];
      setSuggestion(randomSuggestion);
    }
  };

  return (
    <div className="ai-fusion-container">
      <div className="ai-fusion-content">
        <div className="ai-fusion-left">
          <div className="ai-fusion-image">
            <img 
              src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
              alt="AI Fusion Suggestion" 
            />
          </div>
        </div>
        
        <div className="ai-fusion-right">
          <div className="ai-fusion-card">
            <h2 className="ai-fusion-title">AI Fusion Suggestion</h2>
            <p className="ai-fusion-subtitle">
              Let our intelligent chef bot craft your next bold flavor adventure. Select your preferred cuisines and mood!
            </p>
            
            <div className="ai-fusion-form">
              <div className="form-group" style={{display: 'inline-block', width: '92%'}}>
                <UniversalDropdown
                  label="Cuisine 1"
                  value={selectedCuisine1}
                  options={cuisines}
                  onChange={setSelectedCuisine1}
                  placeholder="Select Cuisine"
                />
              </div>
              
              <div className="form-group" style={{display: 'inline-block', width: '92%'}}>
                <UniversalDropdown
                  label="Cuisine 2"
                  value={selectedCuisine2}
                  options={cuisines}
                  onChange={setSelectedCuisine2}
                  placeholder="Select Cuisine"
                />
              </div>
              
              <div className="form-group"style={{display: 'inline-block', width: '9%'}}>
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
            
            {suggestion && (
              <div className="suggestion-result">
                <h3 className="suggestion-title">Suggested Dish: {suggestion.title}</h3>
                <p className="suggestion-description">{suggestion.description}</p>
                
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

export default AIFusionSuggestion;
