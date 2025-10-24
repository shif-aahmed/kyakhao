import React from 'react'
import './KitchenDetailHeroBanner.css'

const KitchenDetailHeroBanner = () => {
  return (
    <div className="kitchen-detail-hero-banner">
      {/* Background Image */}
      <div className="kitchen-detail-hero-background">
        <img 
          src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
          alt="Kitchen background"
        />
        {/* Light overlay */}
        <div className="kitchen-detail-hero-overlay"></div>
      </div>

      {/* Content */}
      <div className="kitchen-detail-hero-content">
        <div className="kitchen-detail-hero-text">
          <h1 className="kitchen-detail-hero-title">Discover Culinary Journeys</h1>
          <p className="kitchen-detail-hero-subtitle">
            Explore unique kitchen tours and master classes from world-renowned chefs.
          </p>
        </div>
      </div>
    </div>
  )
}

export default KitchenDetailHeroBanner
