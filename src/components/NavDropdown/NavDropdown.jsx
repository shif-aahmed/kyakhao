import React, { useState } from 'react';
import './NavDropdown.css';

const NavDropdown = ({ isOpen, onClose }) => {
  const [items, setItems] = useState([
    {
      id: 1,
      name: 'Split Remedy Split End Shampoo',
      price: 140,
      quantity: 1,
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=100&h=100&fit=crop&crop=center'
    },
    {
      id: 2,
      name: 'Split Remedy Split End Shampoo',
      price: 140,
      quantity: 1,
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=100&h=100&fit=crop&crop=center'
    },
    {
      id: 3,
      name: 'Split Remedy Split End Shampoo',
      price: 140,
      quantity: 1,
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=100&h=100&fit=crop&crop=center'
    },
    {
      id: 4,
      name: 'Split Remedy Split End Shampoo',
      price: 140,
      quantity: 1,
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=100&h=100&fit=crop&crop=center'
    }
  ]);

  const updateQuantity = (id, change) => {
    setItems(items.map(item => {
      if (item.id === id) {
        const newQuantity = Math.max(1, item.quantity + change);
        return { ...item, quantity: newQuantity };
      }
      return item;
    }));
  };

  const removeItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  const subtotal = items.reduce((total, item) => total + (item.price * item.quantity), 0);
  const shipping = 40;
  const total = subtotal + shipping;

  if (!isOpen) return null;

  return (
    <div className="nav-dropdown-overlay" onClick={onClose}>
      <div className="nav-dropdown" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="nav-dropdown-header">
          <span className="item-count">{items.length} Items Added</span>
          <button className="close-btn" onClick={onClose}>Close</button>
        </div>

        {/* Items List */}
        <div className="nav-dropdown-items">
          {items.map((item) => (
            <div key={item.id} className="nav-dropdown-item">
              <div className="item-image">
                <img src={item.image} alt={item.name} />
              </div>
              <div className="item-details">
                <h4 className="item-name">{item.name}</h4>
                <button className="remove-btn" onClick={() => removeItem(item.id)}>×</button>
                <div className="item-controls">
                  <span className="item-price">Tk. {item.price}</span>
                  <div className="quantity-controls">
                    <button 
                      className="quantity-btn" 
                      onClick={() => updateQuantity(item.id, -1)}
                    >-</button>
                    <span className="quantity">{item.quantity}</span>
                    <button 
                      className="quantity-btn" 
                      onClick={() => updateQuantity(item.id, 1)}
                    >+</button>
                  </div>
                  <span className="item-total">Tk. {(item.price * item.quantity).toFixed(2)}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary */}
        <div className="nav-dropdown-summary">
          <div className="summary-row">
            <span>Subtotal</span>
            <span>Tk. {subtotal.toFixed(2)}</span>
          </div>
          <div className="summary-row">
            <span>Shipping</span>
            <span>Tk. {shipping.toFixed(2)}</span>
          </div>
          <div className="summary-row total-row">
            <span>Cart Total</span>
            <span>Tk. {total.toFixed(2)}</span>
          </div>
        </div>

        {/* Place Order Button */}
        <button className="place-order-btn">PLACE ORDER</button>
      </div>
    </div>
  );
};

export default NavDropdown;




