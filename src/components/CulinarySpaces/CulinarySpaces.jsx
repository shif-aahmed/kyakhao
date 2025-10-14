import React, { useState } from 'react'
import './CulinarySpaces.css'

const CulinarySpaces = () => {
  const [selectedCuisine, setSelectedCuisine] = useState('All')

  const cuisines = [
    'All', 'Italian', 'Japanese', 'Mexican', 'French', 'Indian', 
    'Mediterranean', 'Thai', 'Vegan', 'Chinese', 'Korean'
  ]

  const culinarySpaces = [
    { 
      id: 1, 
      title: 'Bistro Lumiere', 
      location: 'Paris, France', 
      cuisine: 'French',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80' 
    },
    { 
      id: 2, 
      title: 'Spice Route', 
      location: 'Mumbai, India', 
      cuisine: 'Indian',
      image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80' 
    },
    { 
      id: 3, 
      title: 'Coastal Haven', 
      location: 'Santorini, Greece', 
      cuisine: 'Mediterranean',
      image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80' 
    },
    { 
      id: 4, 
      title: 'Terra Cotta', 
      location: 'Rome, Italy', 
      cuisine: 'Italian',
      image: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80' 
    },
    { 
      id: 5, 
      title: 'Zen Plate', 
      location: 'Tokyo, Japan', 
      cuisine: 'Japanese',
      image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80' 
    },
    { 
      id: 6, 
      title: 'Azure Coast Kitchen', 
      location: 'Nice, France', 
      cuisine: 'French',
      image: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80' 
    },
    { 
      id: 7, 
      title: 'Sakura Sushi', 
      location: 'Osaka, Japan', 
      cuisine: 'Japanese',
      image: 'https://images.unsplash.com/photo-1579952363873-27d3bfad9c0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80' 
    },
    { 
      id: 8, 
      title: 'Taco Libre', 
      location: 'Mexico City, Mexico', 
      cuisine: 'Mexican',
      image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80' 
    },
    { 
      id: 9, 
      title: 'Green Garden', 
      location: 'Bangkok, Thailand', 
      cuisine: 'Thai',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80' 
    },
    { 
      id: 10, 
      title: 'Plant Based', 
      location: 'Los Angeles, USA', 
      cuisine: 'Vegan',
      image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80' 
    },
    { 
      id: 11, 
      title: 'Dragon Palace', 
      location: 'Beijing, China', 
      cuisine: 'Chinese',
      image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80' 
    },
    { 
      id: 12, 
      title: 'Seoul Kitchen', 
      location: 'Seoul, South Korea', 
      cuisine: 'Korean',
      image: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80' 
    }
  ]

  // Filter spaces based on selected cuisine
  const filteredSpaces = selectedCuisine === 'All' 
    ? culinarySpaces 
    : culinarySpaces.filter(space => space.cuisine === selectedCuisine)

  return (
    <div className="culinary-spaces-section">
      <div className="container">
        {/* Explore Cuisines Section */}
        <div className="cuisine-filter-section">
          <h2 className="cuisine-title">Explore Cuisines</h2>
          <div className="cuisine-buttons">
            {cuisines.map((cuisine) => (
              <button
                key={cuisine}
                className={`cuisine-btn ${selectedCuisine === cuisine ? 'active' : ''}`}
                onClick={() => setSelectedCuisine(cuisine)}
              >
                {cuisine}
              </button>
            ))}
          </div>
        </div>

        {/* Our Culinary Spaces Section */}
        <div className="spaces-section">
          <h2 className="spaces-title">Our Culinary Spaces</h2>
          <div className="spaces-grid">
            {filteredSpaces.length > 0 ? (
              filteredSpaces.map(space => (
                <div className="space-card" key={space.id}>
                  <div className="card-image">
                    <img src={space.image} alt={space.title} />
                  </div>
                  <div className="card-content">
                    <h3 className="card-title">{space.title}</h3>
                    <p className="card-location">
                      <span className="location-icon">
                        <svg width="12" height="16" viewBox="0 0 12 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M6 0C2.7 0 0 2.7 0 6C0 10.5 6 16 6 16S12 10.5 12 6C12 2.7 9.3 0 6 0ZM6 8C4.9 8 4 7.1 4 6C4 4.9 4.9 4 6 4C7.1 4 8 4.9 8 6C8 7.1 7.1 8 6 8Z" fill="none" stroke="#666" strokeWidth="1.2"/>
                        </svg>
                      </span>
                      {space.location}
                    </p>
                  </div>
                </div>
              ))
            ) : (
              <div className="no-results">
                <p>No culinary spaces found for {selectedCuisine} cuisine.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CulinarySpaces
