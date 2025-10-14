import React from 'react';
import './ExploreHeroBanner.css';

const ExploreHeroBanner = () => {
  return (
    <div className="explore-hero-banner">
      {/* Background Image */}
      <div className="explore-hero-background">
        <img 
          src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80" 
          alt="Food background"
        />
        {/* Light overlay */}
        <div className="explore-hero-overlay"></div>
      </div>

      {/* Content */}
      <div className="explore-hero-content">
        <div className="explore-hero-text">
          {/* Main Heading */}
          <h1 className="explore-hero-heading">
            Explore Culinary Delights
          </h1>
          
          {/* Subtitle */}
          <p className="explore-hero-subtitle">
            Discover the best dishes and restaurants in your city.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ExploreHeroBanner;
