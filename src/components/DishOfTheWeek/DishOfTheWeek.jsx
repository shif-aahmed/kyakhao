import React from 'react';
import './DishOfTheWeek.css';

const DishOfTheWeek = () => {
  const culinarySpaces = [
    {
      id: 1,
      name: "Bistro Lumiere",
      location: "Paris, France",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop"
    },
    {
      id: 2,
      name: "Spice Route",
      location: "Mumbai, India",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop"
    },
    {
      id: 3,
      name: "Coastal Haven",
      location: "Santorini, Greece",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop"
    },
    {
      id: 4,
      name: "Terra Cotta",
      location: "Rome, Italy",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop"
    },
    {
      id: 5,
      name: "Zen Plate",
      location: "Tokyo, Japan",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop"
    },
    {
      id: 6,
      name: "Azure Coast Kitchen",
      location: "Nice, France",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop"
    }
  ];

  return (
    <section className="dish-of-week">
      <div className="container">
        <div className="spaces-section">
          <h2 className="spaces-title">Our Culinary Spaces</h2>
          <div className="spaces-grid">
            {culinarySpaces.map((space) => (
              <div key={space.id} className="space-card">
                <div className="space-image-container">
                  <img 
                    src={space.image} 
                    alt={space.name}
                    className="space-image"
                  />
                  <div className="space-title-overlay">
                    {space.name}
                  </div>
                </div>
                <div className="space-location">
                  <span className="location-icon">📍</span>
                  <span className="location-text">{space.location}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DishOfTheWeek;
