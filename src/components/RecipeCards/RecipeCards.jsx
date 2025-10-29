import React from 'react';
import { useNavigate } from 'react-router-dom';
import './RecipeCards.css';

const RecipeCards = ({ filteredRecipes }) => {
  const navigate = useNavigate();
  // Static fallback recipes (used when no filtered data available)
  const staticRecipes = [
    {
      id: 1,
      title: "Spicy Tofu Stir-fry",
      description: "Flavorful tofu and vegetable stir-fry with a fiery chili garlic sauce",
      image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=300&h=200&fit=crop&crop=center",
    },
    {
      id: 2,
      title: "Chicken Enchiladas",
      description: "Classic Mexican chicken enchiladas baked in a rich red chili",
      image: "https://images.unsplash.com/photo-1730878423239-0fd430bbac37?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=880",
    },
    {
      id: 3,
      title: "Beef & Broccoli",
      description: "Tender beef slices with broccoli florets in a savory brown sauce",
      image: "https://images.unsplash.com/photo-1610053190980-ee7ef0438949?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1081",
    },
  ];

  // Decide which recipes to show
  const recipesToShow = filteredRecipes && filteredRecipes.length > 0 ? filteredRecipes : staticRecipes;

  return (
    <div className="recipe-cards">
      <div className="recipe-cards-container">
        {recipesToShow.map((recipe, index) => (
          <div key={recipe.id || index} className="recipe-card">
            <div className="recipe-card-image">
              <img
                src={recipe.image}
                alt={recipe.title}
                className="recipe-card-img"
              />
            </div>
            <div className="recipe-card-content">
              <h3 className="recipe-card-title">{recipe.title}</h3>
              <p className="recipe-card-description">
                {recipe.description || "A delicious dish you’ll love to try!"}
              </p>
              <button
                className="recipe-card-button"
                onClick={() =>
                  navigate('/recipe', {
                    state: {
                      recipe: {
                        title: recipe.title,
                        image: recipe.image,
                        summary: recipe.description,
                      },
                      related: recipesToShow.filter(r => (r.id || r.title) !== (recipe.id || recipe.title)),
                    },
                  })
                }
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecipeCards;
