import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faCheck, faGift, faStar, faCrown } from '@fortawesome/free-solid-svg-icons';
import './LoyaltyTiers.css';

const LoyaltyTiers = () => {
  const [selectedTier, setSelectedTier] = useState(null);

  const tiers = [
    {
      id: 1,
      name: "Silver",
      subtitle: "Join now to unlock!",
      color: "#4a5568",
      benefits: [
        "1x points on all purchases",
        "Exclusive monthly discounts",
        "Birthday treat"
      ],
      progress: 30,
      progressText: "30% towards next tier"
    },
    {
      id: 2,
      name: "Gold",
      subtitle: "Join now to unlock!",
      color: "#ff6b35",
      benefits: [
        "2x points on all purchases",
        "Priority booking access",
        "Complimentary dessert with every meal",
        "Birthday bonus"
      ],
      progress: 60,
      progressText: "60% towards next tier"
    },
    {
      id: 3,
      name: "Platinum",
      subtitle: "Join now to unlock!",
      color: "#3b82f6",
      benefits: [
        "3x points on all purchases",
        "Dedicated concierge service",
        "Free delivery on all orders",
        "Exclusive event invitations"
      ],
      progress: 90,
      progressText: "90% towards next tier"
    }
  ];

  const handleJoinLoyalty = (tier) => {
    setSelectedTier(tier);
  };

  const closeModal = () => {
    setSelectedTier(null);
  };

  const handleConfirmJoin = () => {
    alert(`Successfully joined ${selectedTier.name} loyalty program!`);
    closeModal();
  };

  const getTierIcon = (tierName) => {
    switch(tierName) {
      case 'Silver': return faCheck;
      case 'Gold': return faGift;
      case 'Platinum': return faCrown;
      default: return faStar;
    }
  };

  return (
    <div className="loyalty-tiers-container">
      <div className="loyalty-tiers-content">
        <div className="loyalty-tiers-header">
          <h2 className="loyalty-tiers-title">Our Loyalty Program Tiers</h2>
        </div>
        
        <div className="loyalty-tiers-grid">
          {tiers.map((tier) => (
            <div key={tier.id} className="loyalty-tier-card">
              <div className="tier-header">
                <h3 className="tier-name" style={{ color: tier.color }}>
                  {tier.name}
                </h3>
                <p className="tier-subtitle">{tier.subtitle}</p>
              </div>
              
              <div className="tier-benefits">
                <ul className="benefits-list">
                  {tier.benefits.map((benefit, index) => (
                    <li key={index} className="benefit-item">
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="tier-progress">
                <div className="progress-bar">
                  <div 
                    className="progress-fill"
                    style={{ width: `${tier.progress}%` }}
                  ></div>
                </div>
                <p className="progress-text">{tier.progressText}</p>
              </div>
              
              <button 
                className="join-loyalty-btn"
                onClick={() => handleJoinLoyalty(tier)}
              >
                Join Loyalty Program
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Loyalty Program Modal */}
      {selectedTier && (
        <div className="loyalty-modal-overlay" onClick={closeModal}>
          <div className="loyalty-modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3 className="modal-title">
                <FontAwesomeIcon 
                  icon={getTierIcon(selectedTier.name)} 
                  className="tier-modal-icon"
                  style={{ color: selectedTier.color }}
                />
                Join {selectedTier.name} Loyalty Program
              </h3>
              <button className="close-btn" onClick={closeModal}>
                <FontAwesomeIcon icon={faTimes} />
              </button>
            </div>
            
            <div className="modal-content">
              <div className="tier-info-section">
                <div className="tier-badge" style={{ backgroundColor: selectedTier.color }}>
                  <FontAwesomeIcon 
                    icon={getTierIcon(selectedTier.name)} 
                    className="tier-badge-icon"
                  />
                  <span className="tier-badge-text">{selectedTier.name}</span>
                </div>
                
                <div className="tier-description">
                  <p>You're about to join our {selectedTier.name.toLowerCase()} loyalty program and unlock exclusive benefits!</p>
                </div>
              </div>
              
              <div className="benefits-preview">
                <h4 className="benefits-preview-title">Your Benefits:</h4>
                <ul className="benefits-preview-list">
                  {selectedTier.benefits.map((benefit, index) => (
                    <li key={index} className="benefit-preview-item">
                      <FontAwesomeIcon icon={faCheck} className="benefit-check" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="progress-preview">
                <div className="progress-preview-bar">
                  <div 
                    className="progress-preview-fill"
                    style={{ width: `${selectedTier.progress}%` }}
                  ></div>
                </div>
                <p className="progress-preview-text">{selectedTier.progressText}</p>
              </div>
              
              <div className="modal-actions">
                <button className="cancel-btn" onClick={closeModal}>
                  Cancel
                </button>
                <button className="confirm-join-btn" onClick={handleConfirmJoin}>
                  <FontAwesomeIcon icon={faCheck} className="confirm-icon" />
                  Join {selectedTier.name} Program
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoyaltyTiers;
