import React, { useState } from 'react'
import './RestaurantGrid.css'
import ReservationSidebar from '../ReservationSidebar/ReservationSidebar'

const RestaurantGrid = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [selectedRestaurant, setSelectedRestaurant] = useState(null)
  const restaurants = [
    {
      id: 1,
      name: 'Sakura Sushi Bar',
      cuisine: 'Japanese',
      location: 'Clifton',
      rating: 4.8,
      reviews: 317,
      image: 'https://images.unsplash.com/photo-1579952363873-27d3bfad9c0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      times: ['7:30 PM', '8:30 PM', '9:30 PM']
    },
    {
      id: 2,
      name: 'The Grand Bistro',
      cuisine: 'Italian',
      location: 'DHA Phase 6',
      rating: 4.7,
      reviews: 383,
      image: 'https://images.unsplash.com/photo-1551218808-94e220e084d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      times: ['7:30 PM', '8:00 PM', '8:30 PM']
    },
    {
      id: 3,
      name: 'Olive Tree Cafe',
      cuisine: 'Mediterranean',
      location: 'DHA Phase 6',
      rating: 4.6,
      reviews: 110,
      image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      times: ['7:30 PM', '8:00 PM', '8:30 PM']
    },
    {
      id: 4,
      name: 'Lahori Delights',
      cuisine: 'Pakistani',
      location: 'Gulshan-e-Iqbal',
      rating: 4.5,
      reviews: 250,
      image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      times: ['7:30 PM', '8:00 PM', '8:30 PM']
    },
    {
      id: 5,
      name: 'Spicy Wok House',
      cuisine: 'Chinese',
      location: 'Clifton',
      rating: 4.3,
      reviews: 271,
      image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      times: ['7:00 PM', '8:00 PM', '9:00 PM']
    },
    {
      id: 6,
      name: 'Curry Haven',
      cuisine: 'Indian',
      location: 'Bahria Town',
      rating: 4.1,
      reviews: 272,
      image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      times: ['6:30 PM', '7:30 PM', '8:30 PM']
    }
  ]

  return (
    <div className="restaurant-grid-section">
      <div className="container">
        <div className="restaurant-grid">
          {restaurants.map(restaurant => (
            <div className="restaurant-card" key={restaurant.id}>
              <div className="card-image">
                <img src={restaurant.image} alt={restaurant.name} />
                <div className="premium-badge">Premium Table Available</div>
              </div>
              <div className="card-content">
                <h3 className="restaurant-name">{restaurant.name}</h3>
                <p className="restaurant-info">{restaurant.cuisine} • {restaurant.location}</p>
                <div className="rating">
                  <span className="star">⭐</span>
                  <span className="rating-value">{restaurant.rating}</span>
                  <span className="reviews">({restaurant.reviews} reviews)</span>
                </div>
                <div className="time-slots">
                  {restaurant.times.map((time, index) => (
                    <span key={index} className="time-slot">{time}</span>
                  ))}
                </div>
                <div className="card-actions">
                  <button 
                    className="reserve-btn"
                    onClick={() => {
                      setSelectedRestaurant(restaurant)
                      setSidebarOpen(true)
                    }}
                  >
                    Reserve Now
                  </button>
                  <button className="details-btn">View Details</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <ReservationSidebar 
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        restaurant={selectedRestaurant}
      />
    </div>
  )
}

export default RestaurantGrid
