import React from 'react';
import './RecipeCards.css';

const RecipeCards = () => {
  return (
    <div className="recipe-cards">
      <div className="recipe-cards-container">
        {/* First Card - Spicy Tofu Stir-fry */}
        <div className="recipe-card">
          <div className="recipe-card-image">
            <img 
              src="https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=300&h=200&fit=crop&crop=center" 
              alt="Spicy Tofu Stir-fry"
              className="recipe-card-img"
            />
          </div>
          <div className="recipe-card-content">
            <h3 className="recipe-card-title">Spicy Tofu Stir-fry</h3>
            <p className="recipe-card-description">
              Flavorful tofu and vegetable stir-fry with a fiery chili garlic sauce
            </p>
            <button className="recipe-card-button">View Details</button>
          </div>
        </div>

        {/* Second Card - Chicken Enchiladas */}
        <div className="recipe-card">
          <div className="recipe-card-image">
            <img 
              src="https://images.unsplash.com/photo-1730878423239-0fd430bbac37?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=880" 
              alt="Chicken Enchiladas"
              className="recipe-card-img"
            />
          </div>
          <div className="recipe-card-content">
            <h3 className="recipe-card-title">Chicken Enchiladas</h3>
            <p className="recipe-card-description">
              Classic Mexican chicken enchiladas baked in a rich red chili
            </p>
            <button className="recipe-card-button">View Details</button>
          </div>
        </div>

        {/* Third Card - Beef & Broccoli */}
        <div className="recipe-card">
          <div className="recipe-card-image">
            <img 
              src="https://images.unsplash.com/photo-1610053190980-ee7ef0438949?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1081" 
              alt="Beef & Broccoli"
              className="recipe-card-img"
            />
          </div>
          <div className="recipe-card-content">
            <h3 className="recipe-card-title">Beef & Broccoli</h3>
            <p className="recipe-card-description">
              Tender beef slices with broccoli florets in a savory brown sauce
            </p>
            <button className="recipe-card-button">View Details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeCards;
