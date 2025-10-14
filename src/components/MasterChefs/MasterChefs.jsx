import React, { useState } from 'react'
import './MasterChefs.css'

const MasterChefs = () => {
  const [currentChefSet, setCurrentChefSet] = useState(0)

  const chefSets = [
    [
      {
        id: 1,
        name: 'Chef Isabella Rossi',
        specialty: 'Modern Italian Cuisine',
        quote: 'Food is love, beautifully plated and shared with joy.',
        image: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80'
      },
      {
        id: 2,
        name: 'Chef Isabella Rossi',
        specialty: 'Modern Italian Cuisine',
        quote: 'Food is love, beautifully plated and shared with joy.',
        image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80'
      }
    ],
    [
      {
        id: 3,
        name: 'Chef Pierre Dubois',
        specialty: 'French Classics',
        quote: 'Cooking is an art that brings people together.',
        image: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80'
      },
      {
        id: 4,
        name: 'Chef Priya Sharma',
        specialty: 'Indian Spice Master',
        quote: 'Aromatic spices create memories that last forever.',
        image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80'
      }
    ],
    [
      {
        id: 5,
        name: 'Chef Yuki Tanaka',
        specialty: 'Japanese Artistry',
        quote: 'Precision and passion create culinary masterpieces.',
        image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80'
      },
      {
        id: 6,
        name: 'Chef Maria Santos',
        specialty: 'Latin American Flavors',
        quote: 'Spices and stories from my grandmother\'s kitchen.',
        image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80'
      }
    ]
  ]

  const nextChefSet = () => {
    setCurrentChefSet((prev) => (prev + 1) % chefSets.length)
  }

  const prevChefSet = () => {
    setCurrentChefSet((prev) => (prev - 1 + chefSets.length) % chefSets.length)
  }

  return (
    <div className="master-chefs-section">
      <div className="container">
        <h2 className="chefs-title">Meet Our Master Chefs</h2>
        <div className="chefs-carousel">
          <button className="nav-arrow nav-arrow-left" onClick={prevChefSet}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          
          <div className="chefs-grid">
            {chefSets[currentChefSet].map(chef => (
              <div className="chef-card" key={chef.id}>
                <div className="chef-image">
                  <img src={chef.image} alt={chef.name} />
                </div>
                <div className="chef-content">
                  <h3 className="chef-name">{chef.name}</h3>
                  <p className="chef-specialty">{chef.specialty}</p>
                  <p className="chef-quote">"{chef.quote}"</p>
                </div>
              </div>
            ))}
          </div>
          
          <button className="nav-arrow nav-arrow-right" onClick={nextChefSet}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
        
        <div className="carousel-indicators">
          {chefSets.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === currentChefSet ? 'active' : ''}`}
              onClick={() => setCurrentChefSet(index)}
            />
          ))}
        </div>
        
        {/* Call to Action Section */}
        <div className="cta-section">
          <h2 className="cta-title">Ready for Your Culinary Adventure?</h2>
          <p className="cta-subtitle">Book your unforgettable kitchen visit today and unlock new flavors.</p>
          <button className="cta-button">Get Started</button>
        </div>
      </div>
    </div>
  )
}

export default MasterChefs
