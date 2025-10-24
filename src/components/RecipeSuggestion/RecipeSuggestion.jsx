import React from 'react';
import './RecipeSuggestion.css';

const RecipeSuggestion = () => {
  return (
    <div className="recipe-suggestion">
      <div className="recipe-suggestion-card">
        {/* Left Section - Image */}
        <div className="recipe-suggestion-image-section">
          <div className="recipe-suggestion-image">
            <img 
              src="https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&h=500&fit=crop&crop=center" 
              alt="Mediterranean Salmon with Roasted Vegetables"
              className="recipe-suggestion-main-image"
            />
          </div>
        </div>

        {/* Right Section - Content */}
        <div className="recipe-suggestion-content">
          <div className="recipe-suggestion-label">Best Match</div>
          
          <h2 className="recipe-suggestion-title">
            Mediterranean Salmon with Roasted Vegetables
          </h2>
          
          <p className="recipe-suggestion-description">
            Flaky baked salmon seasoned with herbs, served alongside a colorful medley of roasted zucchini, bell peppers, and cherry tomatoes, drizzled with lemon-dill sauce. A perfect healthy and satisfying meal.
          </p>
          
          <div className="recipe-suggestion-cta">
            Cook This Now
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeSuggestion;
