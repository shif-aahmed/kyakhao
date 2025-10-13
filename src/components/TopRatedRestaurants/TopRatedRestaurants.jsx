import React from 'react';
import './TopRatedRestaurants.css';

const TopRatedRestaurants = () => {
  const restaurants = [
    {
      id: 1,
      name: "Spice Route Kitchen",
      cuisine: "Indian, Mughlai",
      rating: "4.8 (1k+ reviews)",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 2,
      name: "The Italian Table",
      cuisine: "Italian, European",
      rating: "4.7 (1k+ reviews)",
      image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 3,
      name: "Sushi Zen Garden",
      cuisine: "Japanese, Asian",
      rating: "4.9 (1k+ reviews)",
      image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 4,
      name: "Mediterranean Bites",
      cuisine: "Mediterranean, Greek",
      rating: "4.6 (1k+ reviews)",
      image: "https://images.unsplash.com/photo-1551218808-94e220e084d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 5,
      name: "Burger Bonanza",
      cuisine: "American, Fast Food",
      rating: "4.5 (1k+ reviews)",
      image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 6,
      name: "Green Leaf Cafe",
      cuisine: "Healthy, Vegan",
      rating: "4.8 (1k+ reviews)",
      image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    }
  ];

  return (
    <section className="top-rated-restaurants">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Top-Rated Restaurants Near You</h2>
          <a href="#" className="see-all-link">See All Restaurants</a>
        </div>
        
        <div className="restaurants-grid">
          {restaurants.map((restaurant) => (
            <div key={restaurant.id} className="restaurant-card">
              <div className="restaurant-image">
                <img 
                  src={restaurant.image} 
                  alt={restaurant.name}
                />
              </div>
              <div className="restaurant-info">
                <h3 className="restaurant-name">{restaurant.name}</h3>
                <p className="restaurant-cuisine">{restaurant.cuisine}</p>
                <div className="restaurant-rating">
                  <span className="star">★</span>
                  <span className="rating-text">{restaurant.rating}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopRatedRestaurants;
