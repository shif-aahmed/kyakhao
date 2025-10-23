import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AddToCartModal.css';

const AddToCartModal = ({ isOpen, onClose, dish }) => {
  const navigate = useNavigate();
  const [selectedSize, setSelectedSize] = useState('S');
  const [quantity, setQuantity] = useState(1);

  const relatedItems = [
    { name: "Grilled Platter", price: "$19.00" },
    { name: "Eggstasy Omelet", price: "$14.00" },
    { name: "Scramble Shine", price: "$36.00" }
  ];

  const totalPrice = (parseFloat(dish?.price || '0') * quantity).toFixed(0);

  const handleBuyNow = () => {
    // Close the modal first
    onClose();
    // Navigate to checkout page
    navigate('/checkout');
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <button className="close-btn" onClick={onClose}>×</button>
        
        <div className="modal-body">
          {/* Left Section - Image */}
          <div className="modal-image-section">
            <img 
              src={dish?.image || "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop"} 
              alt={dish?.title || dish?.name || "Dish"}
              className="modal-dish-image"
            />
          </div>

          {/* Right Section - Content */}
          <div className="modal-content-section">
            {/* Dish Title */}
            <h2 className="modal-dish-title">{dish?.title || dish?.name || "Chess Mashala"}</h2>
            
            {/* Description */}
            <p className="modal-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
            </p>

            {/* Size Selection */}
            <div className="size-section">
              <label className="size-label">Size</label>
              <div className="size-buttons">
                {['S', 'M', 'L'].map((size) => (
                  <button
                    key={size}
                    className={`size-btn ${selectedSize === size ? 'selected' : ''}`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Related Items */}
            <div className="related-items">
              <div className="related-cards">
                {relatedItems.map((item, index) => (
                  <div key={index} className="related-card">
                    <div className="related-card-image">
                      {/* Image placeholder - can be replaced with actual images */}
                    </div>
                    <div className="related-card-content">
                      <div className="related-item-name">{item.name}</div>
                      <div className="related-item-price">{item.price}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quantity and Purchase */}
            <div className="purchase-section">
              <div className="quantity-selector">
                <button 
                  className="quantity-btn" 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                >
                  -
                </button>
                <span className="quantity-display">{quantity}</span>
                <button 
                  className="quantity-btn" 
                  onClick={() => setQuantity(quantity + 1)}
                >
                  +
                </button>
              </div>
              
              <div className="purchase-actions">
                <button className="buy-now-btn" onClick={handleBuyNow}>Buy Now</button>
                <div className="total-price">${totalPrice}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddToCartModal;
