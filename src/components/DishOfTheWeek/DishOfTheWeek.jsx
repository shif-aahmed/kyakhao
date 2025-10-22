import React, { useState } from 'react';
import './DishOfTheWeek.css';

const DishOfTheWeek = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const dishes = [
    {
      id: 1,
      name: "Biryani Delights",
      description: "Discover fresh flavors",
      image: "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?w=400&h=300&fit=crop",
      price: "$18.99",
      rating: "4.8 (89 reviews)",
      badge: "🔥 Trending"
    },
    {
      id: 2,
      name: "Pizza & Pasta",
      description: "Discover fresh flavors",
      image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&h=300&fit=crop",
      price: "$22.99",
      rating: "4.7 (156 reviews)",
      badge: "⭐ Popular"
    },
    {
      id: 3,
      name: "Healthy Bowls",
      description: "Discover fresh flavors",
      image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop",
      price: "$16.99",
      rating: "4.9 (203 reviews)",
      badge: "🌱 Fresh"
    },
    {
      id: 4,
      name: "Desserts & Sweets",
      description: "Discover fresh flavors",
      image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&h=300&fit=crop",
      price: "$12.99",
      rating: "4.6 (127 reviews)",
      badge: "🍰 Sweet"
    },
    {
      id: 5,
      name: "Asian Fusion",
      description: "Discover fresh flavors",
      image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop",
      price: "$19.99",
      rating: "4.7 (142 reviews)",
      badge: "🥢 Fusion"
    },
    {
      id: 6,
      name: "BBQ & Grilled",
      description: "Discover fresh flavors",
      image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=400&h=300&fit=crop",
      price: "$24.99",
      rating: "4.8 (98 reviews)",
      badge: "🔥 BBQ"
    },
    {
      id: 7,
      name: "Seafood Specials",
      description: "Discover fresh flavors",
      image: "https://images.unsplash.com/photo-1559847844-5315695dadae?w=400&h=300&fit=crop",
      price: "$28.99",
      rating: "4.9 (167 reviews)",
      badge: "🐟 Fresh"
    },
    {
      id: 8,
      name: "Street Food",
      description: "Discover fresh flavors",
      image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&h=300&fit=crop",
      price: "$14.99",
      rating: "4.6 (89 reviews)",
      badge: "🌮 Street"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % dishes.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + dishes.length) % dishes.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section className="dish-of-week">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Explore Our Featured Categories</h2>
          <div className="carousel-controls">
            <button className="carousel-btn prev-btn" onClick={prevSlide}>
              ❮
            </button>
            <button className="carousel-btn next-btn" onClick={nextSlide}>
              ❯
            </button>
          </div>
        </div>
        
        <div className="carousel-container">
          <div className="carousel-wrapper">
            <div 
              className="carousel-track" 
              style={{ transform: `translateX(-${currentSlide * 25}%)` }}
            >
              {dishes.map((dish) => (
                <div key={dish.id} className="dish-card">
                  <div className="dish-image-container">
                    <img 
                      src={dish.image} 
                      alt={dish.name}
                      className="dish-image"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    <div className="image-fallback" style={{display: 'none'}}>
                      🍽️
                    </div>
                  </div>
                  
                  <div className="dish-content">
                    <h3 className="dish-name">{dish.name}</h3>
                    <p className="dish-description">{dish.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default DishOfTheWeek;
