import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faGift, faShoppingCart, faStar } from '@fortawesome/free-solid-svg-icons';
import './Benefits.css';

const Benefits = () => {
  const benefits = [
    {
      id: 1,
      icon: faSearch,
      title: "Discover Deals",
      description: "Browse through a curated selection of exclusive offers tailored just for you."
    },
    {
      id: 2,
      icon: faGift,
      title: "Claim Rewards",
      description: "Simply tap to claim your desired coupon code or loyalty benefit."
    },
    {
      id: 3,
      icon: faShoppingCart,
      title: "Dine & Save",
      description: "Present your coupon at checkout or enjoy automatic loyalty savings."
    },
    {
      id: 4,
      icon: faStar,
      title: "Earn Points",
      description: "Collect loyalty points with every purchase and climb the tier ranks."
    }
  ];

  return (
    <div className="benefits-container">
      <div className="benefits-content">
        <div className="benefits-header">
          <h2 className="benefits-title">How to Redeem Your Benefits</h2>
        </div>
        
        <div className="benefits-grid">
          {benefits.map((benefit, index) => (
            <div key={benefit.id} className="benefit-card">
              <div className="benefit-icon-container">
                <FontAwesomeIcon icon={benefit.icon} className="benefit-icon" />
                {index < benefits.length - 1 && <div className="benefit-connector"></div>}
              </div>
              
              <div className="benefit-content">
                <h3 className="benefit-title">{benefit.title}</h3>
                <p className="benefit-description">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Benefits;
