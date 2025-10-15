import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faShoppingCart, faCheck, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import './ExploreDishes.css';

const ExploreDishes = () => {
  const [selectedDish, setSelectedDish] = useState(null);
  const [quantity, setQuantity] = useState(1);
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
    setQuantity(1);
  };

  const closeModal = () => {
    setSelectedDish(null);
    setQuantity(1);
  };

  const handleQuantityChange = (newQuantity) => {
    if (newQuantity >= 1) {
      setQuantity(newQuantity);
    }
  };

  const handleConfirmAddToCart = () => {
    alert(`Added ${quantity} x ${selectedDish.name} to cart!`);
    closeModal();
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
            <div key={dish.id} className="dish-card">
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
                    onClick={() => handleAddToCart(dish)}
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
      {selectedDish && (
        <div className="cart-modal-overlay" onClick={closeModal}>
          <div className="cart-modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3 className="modal-title">
                <FontAwesomeIcon icon={faShoppingCart} className="cart-icon" />
                Add to Cart
              </h3>
              <button className="close-btn" onClick={closeModal}>
                <FontAwesomeIcon icon={faTimes} />
              </button>
            </div>
            
            <div className="modal-content">
              <div className="dish-details">
                <div className="dish-image-large">
                  <img src={selectedDish.image} alt={selectedDish.name} />
                </div>
                
                <div className="dish-info-large">
                  <h4 className="dish-name-large">{selectedDish.name}</h4>
                  <p className="dish-restaurant-large">{selectedDish.restaurant}</p>
                  <div className="dish-price-large">{selectedDish.price}</div>
                </div>
              </div>
              
              <div className="quantity-section">
                <label className="quantity-label">Quantity:</label>
                <div className="quantity-controls">
                  <button 
                    className="quantity-btn"
                    onClick={() => handleQuantityChange(quantity - 1)}
                    disabled={quantity <= 1}
                  >
                    <FontAwesomeIcon icon={faMinus} />
                  </button>
                  <span className="quantity-value">{quantity}</span>
                  <button 
                    className="quantity-btn"
                    onClick={() => handleQuantityChange(quantity + 1)}
                  >
                    <FontAwesomeIcon icon={faPlus} />
                  </button>
                </div>
              </div>
              
              <div className="total-section">
                <div className="total-label">Total:</div>
                <div className="total-price">
                  ${(parseFloat(selectedDish.price.replace('$', '')) * quantity).toFixed(2)}
                </div>
              </div>
              
              <div className="modal-actions">
                <button className="cancel-btn" onClick={closeModal}>
                  Cancel
                </button>
                <button className="confirm-add-btn" onClick={handleConfirmAddToCart}>
                  <FontAwesomeIcon icon={faCheck} className="check-icon" />
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ExploreDishes;
