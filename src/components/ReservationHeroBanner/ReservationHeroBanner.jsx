import React from 'react'
import './ReservationHeroBanner.css'

const ReservationHeroBanner = () => {
  console.log('ReservationHeroBanner component loaded')
  
  return (
    <div className="reservation-hero-banner">
      {/* Background Image */}
      <div className="reservation-hero-background">
        <img 
          src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
          alt="Restaurant background"
        />
        {/* Light overlay */}
        <div className="reservation-hero-overlay"></div>
      </div>

      {/* Content */}
      <div className="reservation-hero-content">
        <div className="reservation-hero-text">
          <h1 className="reservation-hero-title">Reserve a Premium Table</h1>
          <p className="reservation-hero-subtitle">
            Discover and book premium dining effortlessly. pick a restaurant and confirm your reservation in seconds.
          </p>
        </div>
      </div>
    </div>
  )
}

export default ReservationHeroBanner
