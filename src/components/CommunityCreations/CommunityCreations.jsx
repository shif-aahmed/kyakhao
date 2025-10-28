import React from 'react';
import './CommunityCreations.css';

const CommunityCreations = () => {
  const recipes = [
    {
      id: 1,
      title: "Spicy Tuna Sushi Burrito",
      creator: "Chef Fusionista",
      avatar: "https://via.placeholder.com/32/cccccc/000000?text=CF",
      cuisine: "Japanese-Mexican",
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd1871?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 2,
      title: "Banh Mi Inspired Burger",
      creator: "Taste Explorer",
      avatar: "https://via.placeholder.com/32/cccccc/000000?text=TE",
      cuisine: "French-Vietnamese",
      rating: 4.5,
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 3,
      title: "Jerk Chicken Chow Mein",
      creator: "Global Palate",
      avatar: "https://via.placeholder.com/32/cccccc/000000?text=GP",
      cuisine: "Caribbean-Chinese",
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1563379091339-03246963d4d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 4,
      title: "Tom Yum Risotto",
      creator: "Spice Innovator",
      avatar: "https://via.placeholder.com/32/cccccc/000000?text=SI",
      cuisine: "Thai-Italian",
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 5,
      title: "Injera Beef Brisket Wrap",
      creator: "Culture Plate",
      avatar: "https://via.placeholder.com/32/cccccc/000000?text=CP",
      cuisine: "Ethiopian-American",
      rating: 4.6,
      image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 6,
      title: "Mole Ramen",
      creator: "Fusion Fiend",
      avatar: "https://via.placeholder.com/32/cccccc/000000?text=FF",
      cuisine: "Mexican-Japanese",
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    }
  ];

  const StarRating = ({ rating }) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span key={i} className={`star ${i <= Math.floor(rating) ? 'filled' : ''}`}>
          ★
        </span>
      );
    }
    return (
      <div className="rating">
        {stars}
        <span className="rating-number">{rating}</span>
      </div>
    );
  };

  return (
    <div className="community-creations-container">
      <div className="community-creations-grid">
        {recipes.map((recipe) => (
          <div key={recipe.id} className="recipe-card">
            <div className="recipe-image">
              <img src={recipe.image} alt={recipe.title} />
            </div>
            
            <div className="recipe-content">
              <div className="recipe-creator">
                <img src={recipe.avatar} alt={recipe.creator} className="creator-avatar" />
                <span className="creator-name">{recipe.creator}</span>
              </div>
              
              <div className="recipe-cuisine">
                <span className="cuisine-tag">{recipe.cuisine}</span>
              </div>
              
              <h3 className="recipe-title">{recipe.title}</h3>
              
              <div className="recipe-rating">
                <StarRating rating={recipe.rating} />
              </div>
              
              <button className="view-recipe-btn">View Recipe</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommunityCreations;
