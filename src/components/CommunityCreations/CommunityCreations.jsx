import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import './CommunityCreations.css';

const CommunityCreations = () => {
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const handleViewRecipe = (recipe) => {
    setSelectedRecipe(recipe);
  };

  const closeModal = () => {
    setSelectedRecipe(null);
  };

  const communityRecipes = [
    {
      id: 1,
      title: "Spicy Tuna Sushi Burrito",
      creator: "Chef Fusionista",
      cuisine: "Japanese-Mexican",
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
    },
    {
      id: 2,
      title: "Banh Mi Inspired Burger",
      creator: "Taste Explorer",
      cuisine: "French-Vietnamese",
      rating: 4.5,
      image: "https://images.unsplash.com/photo-1551892374-ecf8754cf8b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
    },
    {
      id: 3,
      title: "Jerk Chicken Chow Mein",
      creator: "Global Palace",
      cuisine: "Caribbean-Chinese",
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
    },
    {
      id: 4,
      title: "Tom Yum Risotto",
      creator: "Spice Innovator",
      cuisine: "Thai-Italian",
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
    },
    {
      id: 5,
      title: "Injera Beef Brisket Wrap",
      creator: "Culture Plate",
      cuisine: "Ethiopian-American",
      rating: 4.6,
      image: "https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
    },
    {
      id: 6,
      title: "Mole Ramen",
      creator: "Fusion Fiend",
      cuisine: "Mexican-Japanese",
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
    }
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <FontAwesomeIcon
        key={index}
        icon={faStar}
        className={`star ${index < Math.floor(rating) ? 'filled' : 'empty'}`}
      />
    ));
  };

  return (
    <div className="community-creations-container">
      <div className="community-creations-header">
        <h2 className="community-creations-title">Community Creations</h2>
        <p className="community-creations-subtitle">
          Explore unique fusion recipes shared by our vibrant community.
        </p>
      </div>

      <div className="community-recipes-grid">
        {communityRecipes.map((recipe) => (
          <div key={recipe.id} className="recipe-card">
            <div className="recipe-image">
              <img src={recipe.image} alt={recipe.title} />
            </div>
            
            <div className="recipe-content">
              <div className="recipe-creator">
                <img src={recipe.avatar} alt={recipe.creator} className="creator-avatar" />
                <span className="creator-name">{recipe.creator}</span>
              </div>
              
              <div className="recipe-cuisine">{recipe.cuisine}</div>
              
              <h3 className="recipe-title">{recipe.title}</h3>
              
              <div className="recipe-rating">
                <div className="stars">
                  {renderStars(recipe.rating)}
                </div>
                <span className="rating-number">{recipe.rating}</span>
              </div>
              
              <button 
                className="view-recipe-btn"
                onClick={() => handleViewRecipe(recipe)}
              >
                View Recipe
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Recipe Modal */}
      {selectedRecipe && (
        <div className="recipe-modal-overlay" onClick={closeModal}>
          <div className="recipe-modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2 className="modal-title">{selectedRecipe.title}</h2>
              <button className="close-btn" onClick={closeModal}>×</button>
            </div>
            
            <div className="modal-content">
              <div className="modal-image">
                <img src={selectedRecipe.image} alt={selectedRecipe.title} />
              </div>
              
              <div className="modal-details">
                <div className="chef-info">
                  <img src={selectedRecipe.avatar} alt={selectedRecipe.creator} className="chef-avatar" />
                  <div>
                    <h3>{selectedRecipe.creator}</h3>
                    <span className="cuisine-tag">{selectedRecipe.cuisine}</span>
                  </div>
                </div>
                
                <div className="rating-section">
                  <div className="stars">
                    {renderStars(selectedRecipe.rating)}
                  </div>
                  <span className="rating-text">{selectedRecipe.rating}/5 stars</span>
                </div>
                
                <div className="recipe-description">
                  <h4>About This Recipe</h4>
                  <p>
                    This innovative fusion dish combines the best of {selectedRecipe.cuisine.split('-')[0]} and {selectedRecipe.cuisine.split('-')[1]} cuisines. 
                    Created by {selectedRecipe.creator}, this recipe has earned a {selectedRecipe.rating}-star rating from our community.
                  </p>
                  
                  <h4>Key Ingredients</h4>
                  <ul>
                    <li>Fresh ingredients from both culinary traditions</li>
                    <li>Authentic spices and seasonings</li>
                    <li>Creative fusion techniques</li>
                    <li>Premium quality proteins and vegetables</li>
                  </ul>
                  
                  <h4>Cooking Time</h4>
                  <p>Prep: 30 minutes | Cook: 45 minutes | Total: 1 hour 15 minutes</p>
                </div>
              </div>
            </div>
            
            <div className="modal-actions">
              <button className="save-recipe-btn">Save Recipe</button>
              <button className="share-recipe-btn">Share</button>
              <button className="cook-now-btn">Start Cooking</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CommunityCreations;
