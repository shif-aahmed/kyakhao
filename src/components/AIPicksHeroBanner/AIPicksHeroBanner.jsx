import React from 'react';
import './AIPicksHeroBanner.css';

const AIPicksHeroBanner = () => {
  return (
    <div className="ai-picks-hero-banner">
      {/* Background Image */}
      <div className="ai-picks-hero-background">
        <img 
          src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
          alt="Food background"
        />
        {/* Heavy overlay for faded effect */}
        <div className="ai-picks-hero-overlay"></div>
      </div>

      {/* Content */}
      <div className="ai-picks-hero-content">
        <div className="ai-picks-hero-text">
          {/* Main Heading */}
          <h1 className="ai-picks-hero-heading">
            Delicious Discoveries Await
          </h1>
          
          {/* Subtitle 1 */}
          <p className="ai-picks-hero-subtitle">
            Get personalized meal ideas based on your mood and taste
          </p>
          
          {/* Subtitle 2 */}
          <p className="ai-picks-hero-subtitle">
            KyaKhao AI makes choosing your next dish effortless.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AIPicksHeroBanner;
