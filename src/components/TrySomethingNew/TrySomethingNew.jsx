import React from 'react';
import AIFusionSuggestion from '../AIFusionSuggestion/AIFusionSuggestion';
import './TrySomethingNew.css';

const TrySomethingNew = ({ onVideoClick }) => {
  const fusionDishes = [
    {
      id: 1,
      title: "Kimchi Carnitas Tacos",
      category: "Korean-Mexican",
      description: "A vibrant blend of spicy kimchi, tender carnitas, and fresh cilantro lime crema. Bold flavors in every bite!",
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      author: "Fusion Kitchen",
      views: "850K views",
      timeAgo: "2 days ago",
      duration: "12:30"
    },
    {
      id: 2,
      title: "Mediterranean Sushi Bowl",
      category: "Mediterranean-Japanese",
      description: "Fresh sashimi-grade salmon, quinoa, cucumber, olives, and a zesty tahini-miso dressing. A healthy twist on tradition.",
      image: "https://images.unsplash.com/photo-1551892374-ecf8754cf8b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      author: "Healthy Fusion",
      views: "720K views",
      timeAgo: "3 days ago",
      duration: "15:45"
    },
    {
      id: 3,
      title: "Green Curry Pasta Alfredo",
      category: "Italian-Thai",
      description: "Creamy Alfredo meets fragrant green curry. Al dente pasta coated in a rich, spicy, and herbaceous sauce.",
      image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      author: "Spice Fusion",
      views: "680K views",
      timeAgo: "1 day ago",
      duration: "18:20"
    }
  ];

  return (
    <div className="try-something-new-container">
      <div className="try-something-new-header">
        <h2 className="try-something-new-title">Try Something New</h2>
        <p className="try-something-new-subtitle">
          Discover our curated selection of innovative fusion dishes, guaranteed to excite your palate.
        </p>
      </div>
      
      <div className="fusion-dishes-grid">
        {fusionDishes.map((dish) => (
          <div key={dish.id} className="fusion-dish-card">
            <div className="fusion-dish-image">
              <img src={dish.image} alt={dish.title} />
            </div>
            
            <div className="fusion-dish-content">
              <div className="fusion-dish-category">{dish.category}</div>
              <h3 className="fusion-dish-title">{dish.title}</h3>
              <p className="fusion-dish-description">{dish.description}</p>
              
              <div className="fusion-dish-actions">
                <button 
                  className="view-dish-btn"
                  onClick={() => onVideoClick(dish)}
                >
                  View Dish
                </button>
                <button className="learn-more-btn">Learn More</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <AIFusionSuggestion />
    </div>
  );
};

export default TrySomethingNew;
