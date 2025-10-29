import React from 'react';
import { useNavigate } from 'react-router-dom';
import './RecipeCardsHorizontal.css';

const RecipeCardsHorizontal = ({ filteredRecipes }) => {
  const navigate = useNavigate();
  // Static fallback recipes (used when no filtered data available)
  const staticRecipes = [
    {
      id: 1,
      title: "Creamy Tomato Pasta",
      image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=300&h=200&fit=crop&crop=center"
    },
    {
      id: 2,
      title: "Spicy Tofu Stir-fry",
      image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=300&h=200&fit=crop&crop=center"
    },
    {
      id: 3,
      title: "Chicken Enchiladas",
      image: "https://images.unsplash.com/photo-1730878423239-0fd430bbac37?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=880"
    },
    {
      id: 4,
      title: "Lentil Soup with Crusty",
      image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=300&h=200&fit=crop&crop=center"
    },
    {
      id: 5,
      title: "Beef & Brocco",
      image: "https://images.unsplash.com/photo-1610053190980-ee7ef0438949?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1081"
    }
  ];

  // Decide which recipes to show
  const recipesToShow = filteredRecipes && filteredRecipes.length > 0 ? filteredRecipes : staticRecipes;

  return (
    <div className="recipe-cards-horizontal">
      <div className="recipe-cards-horizontal-container">
        {recipesToShow.map((recipe, index) => (
          <div key={recipe.id || index} className="recipe-card-horizontal">
            <div className="recipe-card-horizontal-image">
              <img 
                src={recipe.image} 
                alt={recipe.title}
                className="recipe-card-horizontal-img"
              />
            </div>
            <div className="recipe-card-horizontal-content">
              <h3 className="recipe-card-horizontal-title">{recipe.title}</h3>
              <button
                className="recipe-card-horizontal-button"
                onClick={() =>
                  navigate('/recipe', {
                    state: {
                      recipe: {
                        title: recipe.title,
                        image: recipe.image,
                      },
                      related: recipesToShow.filter(r => (r.id || r.title) !== (recipe.id || recipe.title)),
                    },
                  })
                }
              >
                Try This
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecipeCardsHorizontal;





