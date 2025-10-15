import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy, faCheck } from '@fortawesome/free-solid-svg-icons';
import './Deals.css';

const Deals = () => {
  const [copiedCodes, setCopiedCodes] = useState({});

  const deals = [
    {
      id: 1,
      title: "Delicious Pizza Deal",
      description: "Get 2 Large Pizzas for the price of 1 at Pizza Palace. Perfect for family dinner!",
      couponCode: "PIZZADEAL50",
      expirationDate: "12/31/2024",
      isPopular: true
    },
    {
      id: 2,
      title: "Coffee & Croissant Combo",
      description: "Enjoy a fresh brew and a pastry at Cafe Daily. Start your day right!",
      couponCode: "CAFEDESK10",
      expirationDate: "11/15/2024",
      isPopular: false
    },
    {
      id: 3,
      title: "Sushi Night Special",
      description: "20% off all Sushi rolls and Sashimi platters every Tuesday and Thursday.",
      couponCode: "SUSHI20OFF",
      expirationDate: "01/30/2025",
      isPopular: true
    },
    {
      id: 4,
      title: "Burger Bonanza",
      description: "Buy one burger, get one free at The Burger Hub. Valid on all classic burgers.",
      couponCode: "BBHUBOGO",
      expirationDate: "10/20/2024",
      isPopular: false
    },
    {
      id: 5,
      title: "Dessert Delight",
      description: "Sweeten your meal with a complimentary dessert at The Sweet Spot. Any dessert of your choice.",
      couponCode: "SWEETFREE",
      expirationDate: "12/01/2024",
      isPopular: false
    },
    {
      id: 6,
      title: "Healthy Meal Prep",
      description: "15% off your first order from Green Grub meal delivery service. Eat healthy, live better!",
      couponCode: "GREENGRUB15",
      expirationDate: "09/30/2024",
      isPopular: true
    }
  ];

  const handleCopyCode = (code, id) => {
    navigator.clipboard.writeText(code);
    setCopiedCodes(prev => ({ ...prev, [id]: true }));
    setTimeout(() => {
      setCopiedCodes(prev => ({ ...prev, [id]: false }));
    }, 2000);
  };

  const handleApplyCoupon = (deal) => {
    alert(`Coupon ${deal.couponCode} applied successfully!`);
  };

  return (
    <div className="deals-container">
      <div className="deals-content">
        <div className="deals-header">
          <h2 className="deals-title">Deals</h2>
        </div>
        
        <div className="deals-grid">
          {deals.map((deal) => (
            <div key={deal.id} className="deal-card">
              {deal.isPopular && (
                <div className="popular-tag">Popular Offer</div>
              )}
              
              <h3 className="deal-title">{deal.title}</h3>
              <p className="deal-description">{deal.description}</p>
              
              <div className="coupon-section">
                <div className="coupon-code-field">
                  <span className="coupon-code">{deal.couponCode}</span>
                  <button 
                    className="copy-btn"
                    onClick={() => handleCopyCode(deal.couponCode, deal.id)}
                  >
                    <FontAwesomeIcon 
                      icon={copiedCodes[deal.id] ? faCheck : faCopy} 
                      className="copy-icon"
                    />
                  </button>
                </div>
              </div>
              
              <div className="expiration-date">
                Expires: {deal.expirationDate}
              </div>
              
              <button 
                className="apply-coupon-btn"
                onClick={() => handleApplyCoupon(deal)}
              >
                Apply Coupon
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Deals;
