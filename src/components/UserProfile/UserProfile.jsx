import React, { useState } from 'react';
import './UserProfile.css';

const UserProfile = () => {
  const [couponCode, setCouponCode] = useState('');

  const handleCouponSubmit = (e) => {
    e.preventDefault();
    if (couponCode.trim()) {
      alert(`Coupon "${couponCode}" redeemed successfully!`);
      setCouponCode('');
    } else {
      alert('Please enter a valid coupon code');
    }
  };

  const handleViewRewards = () => {
    alert('Opening your rewards dashboard...');
  };

  return (
    <div className="user-profile-container">
      <div className="user-profile-content">
        <div className="user-profile-grid">
          {/* Coupon Redemption Card */}
          <div className="coupon-card">
            <h3 className="coupon-title">Redeem Your Coupon</h3>
            <form onSubmit={handleCouponSubmit} className="coupon-form">
              <input
                type="text"
                placeholder="Enter coupon code"
                value={couponCode}
                onChange={(e) => setCouponCode(e.target.value)}
                className="coupon-input"
              />
              <button type="submit" className="unlock-discount-btn">
                Unlock Discount
              </button>
            </form>
          </div>

          {/* User Profile Card */}
          <div className="profile-card">
            <div className="profile-header">
              <div className="user-avatar">
                <img 
                  src="https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80" 
                  alt="Alice Johnson" 
                />
              </div>
              <div className="user-info">
                <h4 className="user-name">Alice Johnson</h4>
                <span className="member-badge">Gold Member</span>
              </div>
            </div>
            
            <div className="points-section">
              <p className="points-text">Total Points: 1250</p>
            </div>
            
            <button className="view-rewards-btn" onClick={handleViewRewards}>
              View My Rewards
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
