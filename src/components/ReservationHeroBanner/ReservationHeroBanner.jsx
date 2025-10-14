import React from 'react'
import './ReservationHeroBanner.css'

const ReservationHeroBanner = () => {
  console.log('ReservationHeroBanner component loaded')
  
  return (
    <div className="reservation-hero-banner">
      <div className="reservation-hero-content">
        <h1 className="reservation-hero-title">Reserve a Premium Table</h1>
        <p className="reservation-hero-subtitle">
          Discover and book premium dining effortlessly. pick a restaurant and confirm your reservation in seconds.
        </p>
      </div>
    </div>
  )
}

export default ReservationHeroBanner
