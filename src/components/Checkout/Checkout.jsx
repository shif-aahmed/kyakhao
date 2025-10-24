import React, { useState } from 'react';
import logoImage from '../../assets/logo.png';
import './Checkout.css';

const Checkout = () => {
  // State for cart items
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Spicy Mushroom Pasta",
      price: 12.00,
      quantity: 2,
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=100&h=100&fit=crop"
    },
    {
      id: 2,
      name: "Gourmet Burger",
      price: 12.00,
      quantity: 2,
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=100&h=100&fit=crop"
    },
    {
      id: 3,
      name: "Shrimp Scampi",
      price: 9.00,
      quantity: 1,
      image: "https://images.unsplash.com/photo-1559847844-5315695dadae?w=100&h=100&fit=crop"
    },
    {
      id: 4,
      name: "Spicy Mushroom Pasta",
      price: 22.00,
      quantity: 2,
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=100&h=100&fit=crop"
    },
    {
      id: 5,
      name: "Gourmet Burger",
      price: 22.00,
      quantity: 2,
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=100&h=100&fit=crop"
    }
  ]);

  // Function to update quantity
  const updateQuantity = (id, change) => {
    setCartItems(prevItems => 
      prevItems.map(item => 
        item.id === id 
          ? { ...item, quantity: Math.max(1, item.quantity + change) }
          : item
      )
    );
  };

  // Function to remove item
  const removeItem = (id) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  // Calculate totals
  const subtotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  const tax = subtotal * 0.1; // 10% tax
  const total = subtotal + tax;
  return (
    <div className="checkout-page">
      {/* Header */}
      <header className="checkout-header">
        <div className="header-content">
          <div className="logo">
            <img src={logoImage} alt="KyaKhao" className="logo-image" />
          </div>
          
          <nav className="header-nav">
            <a href="#" className="nav-link">Home</a>
            <a href="#" className="nav-link">Explore</a>
            <a href="#" className="nav-link">AI Pick</a>
            <a href="#" className="nav-link">Kitchen</a>
            <a href="#" className="nav-link">Reservation</a>
            <a href="#" className="nav-link">Contact</a>
          </nav>
          
          <div className="header-actions">
            <button className="search-btn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 21L16.514 16.506L21 21ZM19 10.5C19 15.194 15.194 19 10.5 19C5.806 19 2 15.194 2 10.5C2 5.806 5.806 2 10.5 2C15.194 2 19 5.806 19 10.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button className="signin-btn">Sign In</button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="checkout-hero-section">
        <div className="hero-background">
          <img src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&h=600&fit=crop" alt="Kitchen background" />
        </div>
        <div className="hero-content">
          <h1 className="hero-title">Cart Page</h1>
          <p className="hero-subtitle">Review your order before checkout. If you have any <br />questions, we’re here to assist you!</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="checkout-main-content">
        <div className="checkout-container">
          <div className="checkout-grid">
            {/* Left Column - Cart Items */}
            <div className="cart-items-section">
              <div className="cart-table">
                <div className="table-header">
                  <div className="header-item">Item</div>
                  <div className="header-item">Price</div>
                  <div className="header-item">Quantity</div>
                  <div className="header-item">Subtotal</div>
                  <div className="header-item">Remove</div>
                </div>
                
                {/* Cart Items */}
                {cartItems.map((item) => (
                  <div key={item.id} className="cart-item-row">
                    <div className="item-details">
                      <div className="item-image-placeholder">
                        {item.image ? (
                          <img src={item.image} alt={item.name} />
                        ) : (
                          <div className="placeholder-icon">🍝</div>
                        )}
                      </div>
                      <span className="item-name">{item.name}</span>
                    </div>
                    <div className="item-price">${item.price.toFixed(2)}</div>
                    <div className="quantity-selector">
                      <button 
                        className="quantity-btn" 
                        onClick={() => updateQuantity(item.id, -1)}
                      >-</button>
                      <span className="quantity-display">{item.quantity}</span>
                      <button 
                        className="quantity-btn" 
                        onClick={() => updateQuantity(item.id, 1)}
                      >+</button>
                    </div>
                    <div className="item-subtotal">${(item.price * item.quantity).toFixed(2)}</div>
                    <button 
                      className="remove-item-btn"
                      onClick={() => removeItem(item.id)}
                    >×</button>
                  </div>
                ))}
              </div>
              
              {/* Cart Actions */}
              <div className="cart-actions">
                <a href="#" className="back-link">Back</a>
                <button className="cancel-order-btn">Cancel Order</button>
              </div>
            </div>
            
            {/* Right Column - Order Summary */}
            <div className="order-summary-section">
              {/* Coupon Section */}
              <div className="coupon-section">
                <h3 className="coupon-title">Coupon Code</h3>
                <input type="text" placeholder="Enter your Coupon Code" className="coupon-input" />
                <button className="apply-coupon-btn">Apply Your Coupon</button>
              </div>
              
              {/* Order Summary */}
              <div className="order-summary">
                <h3 className="summary-title">Order Summary</h3>
                <div className="summary-item">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="summary-item">
                  <span>Delivery</span>
                  <span>$2.00</span>
                </div>
                <div className="summary-item">
                  <span>Tax</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
                <div className="summary-item total-row">
                  <span>Total</span>
                  <span>${(total + 2.00).toFixed(2)}</span>
                </div>
              </div>
              
              {/* Payment Method */}
              <div className="payment-section">
                <h3 className="payment-title">Payment Method</h3>
                <div className="payment-inputs">
                  <div className="payment-input-placeholder"></div>
                  <div className="payment-input-placeholder"></div>
                  <div className="payment-input-placeholder"></div>
                  <div className="payment-input-placeholder"></div>
                  <div className="payment-input-placeholder"></div>
                </div>
                <button className="proceed-btn">Apply Your Coupon</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
