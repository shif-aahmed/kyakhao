import React from 'react';
import './ExploreOurFood.css';

const ExploreOurFood = () => {
  const categories = [
    {
      id: 1,
      title: "Biryani Delights",
      description: "Discover fresh flavors",
      image: "https://images.unsplash.com/photo-1563379091339-03246963d4d4?w=300&h=200&fit=crop"
    },
    {
      id: 2,
      title: "Pizza & Pasta",
      description: "Discover fresh flavors",
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=300&h=200&fit=crop"
    },
    {
      id: 3,
      title: "Healthy Bowls",
      description: "Discover fresh flavors",
      image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=300&h=200&fit=crop"
    }
  ];

  return (
    <section className="explore-our-food-section">
      <div className="explore-food-container">
        <h2 className="explore-food-title">Explore Our Featured Categories</h2>
        <div className="explore-food-cards-container">
          <div className="explore-food-cards">
            {categories.map((category) => (
              <div key={category.id} className="explore-food-card">
                <div className="explore-food-image-container">
                  <img 
                    src={category.image} 
                    alt={category.title}
                    className="explore-food-image"
                  />
                </div>
                <div className="explore-food-content">
                  <h3 className="explore-food-card-title">{category.title}</h3>
                  <p className="explore-food-description">{category.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExploreOurFood;
