import React, { useState } from 'react'
import './FeaturedKitchens.css'

const FeaturedKitchens = () => {
  const [currentKitchen, setCurrentKitchen] = useState(0)

  const featuredKitchens = [
    {
      id: 1,
      title: 'The Rustic Spoon',
      description: 'A farm-to-table gem focusing on seasonal, local produce in a charming, cozy setting.',
      location: 'Florence, Italy',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 2,
      title: 'Spice Route Kitchen',
      description: 'Authentic Indian flavors with modern techniques in a vibrant, colorful atmosphere.',
      location: 'Mumbai, India',
      image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 3,
      title: 'Coastal Haven',
      description: 'Mediterranean cuisine with fresh seafood and stunning ocean views.',
      location: 'Santorini, Greece',
      image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    }
  ]

  const nextKitchen = () => {
    setCurrentKitchen((prev) => (prev + 1) % featuredKitchens.length)
  }

  const prevKitchen = () => {
    setCurrentKitchen((prev) => (prev - 1 + featuredKitchens.length) % featuredKitchens.length)
  }

  return (
    <div className="featured-kitchens-section">
      <div className="container">
        <h2 className="featured-title">Featured Kitchens</h2>
        <div className="featured-kitchen-carousel">
          <div className="carousel-card">
            <div className="carousel-image">
              <img src={featuredKitchens[currentKitchen].image} alt={featuredKitchens[currentKitchen].title} />
              <button className="nav-arrow nav-arrow-left" onClick={prevKitchen}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
            <div className="carousel-content">
              <h3 className="kitchen-title">{featuredKitchens[currentKitchen].title}</h3>
              <p className="kitchen-description">{featuredKitchens[currentKitchen].description}</p>
              <div className="kitchen-location">
                <span className="location-icon">
                  <svg width="12" height="16" viewBox="0 0 12 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 0C2.7 0 0 2.7 0 6C0 10.5 6 16 6 16S12 10.5 12 6C12 2.7 9.3 0 6 0ZM6 8C4.9 8 4 7.1 4 6C4 4.9 4.9 4 6 4C7.1 4 8 4.9 8 6C8 7.1 7.1 8 6 8Z" fill="none" stroke="#666" strokeWidth="1.2"/>
                  </svg>
                </span>
                <span className="location-text">{featuredKitchens[currentKitchen].location}</span>
              </div>
              <button className="view-kitchen-btn">View Kitchen</button>
              <button className="nav-arrow nav-arrow-right" onClick={nextKitchen}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
          <div className="carousel-indicators">
            {featuredKitchens.map((_, index) => (
              <button
                key={index}
                className={`indicator ${index === currentKitchen ? 'active' : ''}`}
                onClick={() => setCurrentKitchen(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeaturedKitchens
