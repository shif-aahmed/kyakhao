import React from 'react';
import './FeaturedCreator.css';

const FeaturedCreator = () => {
  return (
    <div className="featured-creator-container">
      <div className="featured-creator-content">
        <div className="featured-creator-quote">
          <p className="quote-text">
            "Food is not just sustenance, it's a story, an experience,
            a journey. Share yours."
          </p>
          <p className="quote-attribution">
            — Chef Isabella Rossi, Featured Creator
          </p>
        </div>
        
        <button className="explore-channel-btn">
          Explore Isabella's Channel
        </button>
      </div>
    </div>
  );
};

export default FeaturedCreator;
