import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faShoppingCart, faCheck, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import AddToCartModal from '../AddToCartModal/AddToCartModal';
import './ExploreDishes.css';

const ExploreDishes = () => {
  const navigate = useNavigate();
  const [selectedDish, setSelectedDish] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dishes = [
    {
      id: 1,
      name: "Spicy Basil Noodles",
      restaurant: "Gourmet Garden",
      price: "$14.99",
      image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 2,
      name: "Classic Margherita Pizza",
      restaurant: "Pizzeria Del Sol",
      price: "$16.50",
      image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 3,
      name: "Seafood Paella",
      restaurant: "Ocean's Catch",
      price: "$22.00",
      image: "https://images.unsplash.com/photo-1551218808-94e220e084d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 4,
      name: "Chocolate Lava Cake",
      restaurant: "Pastry Paradise",
      price: "$8.99",
      image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 5,
      name: "Green Curry Tofu",
      restaurant: "Vegan Vibes",
      price: "$13.75",
      image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 6,
      name: "Truffle Fries",
      restaurant: "Gourmet Garden",
      price: "$7.50",
      image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 7,
      name: "Fresh Ahi Poke Bowl",
      restaurant: "Ocean's Catch",
      price: "$18.25",
      image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 8,
      name: "Chicken Tikka Masala",
      restaurant: "Spice Route",
      price: "$17.00",
      image: "https://images.unsplash.com/photo-1563379091339-03246963d4d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 9,
      name: "Spicy Pork Ramen",
      restaurant: "Noodle House",
      price: "$15.50",
      image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 10,
      name: "Classic Falafel Wrap",
      restaurant: "Mediterranean Bites",
      price: "$10.35",
      image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    }
  ];

  const handleAddToCart = (dish) => {
    setSelectedDish(dish);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedDish(null);
  };

  const handleCardClick = (dish) => {
    console.log('ExploreDishes card clicked, navigating to:', `/dish/${dish.id}`);
    navigate(`/dish/${dish.id}`);
  };

  return (
    <div className="explore-dishes-container">
      <div className="explore-dishes-content">
        {/* Header */}
        <div className="explore-dishes-header">
          <h2 className="explore-dishes-title">Explore Dishes</h2>
        </div>

        {/* Dishes Grid */}
        <div className="dishes-grid">
          {dishes.map((dish) => (
            <div key={dish.id} className="dish-card" onClick={() => handleCardClick(dish)}>
              <div className="dish-image">
                <img src={dish.image} alt={dish.name} />
              </div>
              
              <div className="dish-info">
                <h3 className="dish-name">{dish.name}</h3>
                <p className="dish-restaurant">{dish.restaurant}</p>
                
                <div className="dish-footer">
                  <span className="dish-price">{dish.price}</span>
                  <button 
                    className="add-to-cart-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleAddToCart(dish);
                    }}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Add to Cart Modal */}
      <AddToCartModal 
        isOpen={isModalOpen}
        onClose={closeModal}
        dish={selectedDish}
      />
    </div>
  );
};

export default ExploreDishes;
