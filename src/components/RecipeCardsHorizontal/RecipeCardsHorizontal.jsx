import React from 'react';
import './RecipeCardsHorizontal.css';

const RecipeCardsHorizontal = () => {
  return (
    <div className="recipe-cards-horizontal">
      <div className="recipe-cards-horizontal-container">
        {/* Card 1: Creamy Tomato Pasta */}
        <div className="recipe-card-horizontal">
          <div className="recipe-card-horizontal-image">
            <img 
              src="https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=300&h=200&fit=crop&crop=center" 
              alt="Creamy Tomato Pasta"
              className="recipe-card-horizontal-img"
            />
          </div>
          <div className="recipe-card-horizontal-content">
            <h3 className="recipe-card-horizontal-title">Creamy Tomato Pasta</h3>
            <button className="recipe-card-horizontal-button">Try This</button>
          </div>
        </div>

        {/* Card 2: Spicy Tofu Stir-fry */}
        <div className="recipe-card-horizontal">
          <div className="recipe-card-horizontal-image">
            <img 
              src="https://images.unsplash.com/photo-1512058564366-18510be2db19?w=300&h=200&fit=crop&crop=center" 
              alt="Spicy Tofu Stir-fry"
              className="recipe-card-horizontal-img"
            />
          </div>
          <div className="recipe-card-horizontal-content">
            <h3 className="recipe-card-horizontal-title">Spicy Tofu Stir-fry</h3>
            <button className="recipe-card-horizontal-button">Try This</button>
          </div>
        </div>

        {/* Card 3: Chicken Enchiladas */}
        <div className="recipe-card-horizontal">
          <div className="recipe-card-horizontal-image">
            <img 
              src="https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=300&h=200&fit=crop&crop=center" 
              alt="Chicken Enchiladas"
              className="recipe-card-horizontal-img"
            />
          </div>
          <div className="recipe-card-horizontal-content">
            <h3 className="recipe-card-horizontal-title">Chicken Enchiladas</h3>
            <button className="recipe-card-horizontal-button">Try This</button>
          </div>
        </div>

        {/* Card 4: Lentil Soup with Crusty */}
        <div className="recipe-card-horizontal">
          <div className="recipe-card-horizontal-image">
            <img 
              src="https://images.unsplash.com/photo-1547592166-23ac45744acd?w=300&h=200&fit=crop&crop=center" 
              alt="Lentil Soup with Crusty"
              className="recipe-card-horizontal-img"
            />
          </div>
          <div className="recipe-card-horizontal-content">
            <h3 className="recipe-card-horizontal-title">Lentil Soup with Crusty</h3>
            <button className="recipe-card-horizontal-button">Try This</button>
          </div>
        </div>

        {/* Card 5: Beef & Brocco */}
        <div className="recipe-card-horizontal">
          <div className="recipe-card-horizontal-image">
            <img 
              src="https://images.unsplash.com/photo-1563379091339-03246963d4d0?w=300&h=200&fit=crop&crop=center" 
              alt="Beef & Brocco"
              className="recipe-card-horizontal-img"
            />
          </div>
          <div className="recipe-card-horizontal-content">
            <h3 className="recipe-card-horizontal-title">Beef & Brocco</h3>
            <button className="recipe-card-horizontal-button">Try This</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeCardsHorizontal;

