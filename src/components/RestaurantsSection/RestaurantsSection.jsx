import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import SidebarReserveTable from '../SidebarReserveTable/SidebarReserveTable';
import './RestaurantsSection.css';

const RestaurantsSection = () => {
  const trendingRef = useRef(null);
  const newRef = useRef(null);
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);

  const trendingRestaurants = [
    {
      id: 1,
      name: "The Golden Spoon",
      cuisine: "Italian",
      location: "Downtown",
      rating: 4.8,
      reviews: 1200,
      price: "$25-35",
      image: "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=300&h=200&fit=crop",
      badges: ["Premium", "Trending"],
      tags: ["1.2 km", "family-friendly", "outdoor"]
    },
    {
      id: 2,
      name: "Spice Route",
      cuisine: "Indian",
      location: "Uptown",
      rating: 4.5,
      reviews: 850,
      price: "$15-25",
      image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=300&h=200&fit=crop",
      badges: ["New"],
      tags: ["0.8 km", "halal", "live kitchen"]
    },
    {
      id: 3,
      name: "Ocean Delight",
      cuisine: "Seafood",
      location: "Coastal Area",
      rating: 4.7,
      reviews: 1500,
      price: "$30-45",
      image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=300&h=200&fit=crop",
      badges: ["Premium"],
      tags: ["2.5 km", "outdoor"]
    },
    {
      id: 4,
      name: "Green Oasis",
      cuisine: "Vegan",
      location: "Suburbia",
      rating: 4.6,
      reviews: 700,
      price: "$8-15",
      image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=300&h=200&fit=crop",
      badges: [],
      tags: ["3.1 km", "family-friendly"]
    },
    {
      id: 5,
      name: "Burger Palace",
      cuisine: "American",
      location: "City Center",
      rating: 4.3,
      reviews: 950,
      price: "$12-20",
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=300&h=200&fit=crop",
      badges: ["Trending"],
      tags: ["0.5 km", "family-friendly"]
    },
    {
      id: 6,
      name: "Sushi Master",
      cuisine: "Japanese",
      location: "Financial District",
      rating: 4.9,
      reviews: 1800,
      price: "$35-50",
      image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=300&h=200&fit=crop",
      badges: ["Premium", "New"],
      tags: ["1.8 km", "outdoor", "live kitchen"]
    },
    {
      id: 7,
      name: "Taco Fiesta",
      cuisine: "Mexican",
      location: "Old Town",
      rating: 4.3,
      reviews: 600,
      price: "$8-15",
      image: "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=300&h=200&fit=crop",
      badges: [],
      tags: ["0.7 km", "family-friendly"]
    },
    {
      id: 8,
      name: "Pizza Corner",
      cuisine: "Italian",
      location: "Market Square",
      rating: 4.4,
      reviews: 800,
      price: "$15-25",
      image: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=300&h=200&fit=crop",
      badges: ["Trending"],
      tags: ["1.1 km", "delivery"]
    }
  ];

  const newRestaurants = [
    {
      id: 9,
      name: "Green Oasis",
      cuisine: "Vegan",
      location: "Suburbia",
      rating: 4.6,
      reviews: 700,
      price: "$8-15",
      image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=300&h=200&fit=crop",
      badges: [],
      tags: ["3.1 km", "family-friendly"]
    },
    {
      id: 10,
      name: "Burger Haven",
      cuisine: "American",
      location: "City Center",
      rating: 4.2,
      reviews: 950,
      price: "$15-25",
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=300&h=200&fit=crop",
      badges: ["Trending"],
      tags: ["0.5 km", "family-friendly"]
    },
    {
      id: 11,
      name: "Sushi Zen",
      cuisine: "Japanese",
      location: "Financial District",
      rating: 4.9,
      reviews: 1800,
      price: "$30-45",
      image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=300&h=200&fit=crop",
      badges: ["Premium", "New"],
      tags: ["1.8 km", "outdoor", "live kitchen"]
    },
    {
      id: 12,
      name: "Taco Fiesta",
      cuisine: "Mexican",
      location: "Old Town",
      rating: 4.3,
      reviews: 600,
      price: "$8-15",
      image: "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=300&h=200&fit=crop",
      badges: [],
      tags: ["0.7 km", "family-friendly"]
    },
    {
      id: 13,
      name: "Noodle House",
      cuisine: "Asian",
      location: "Chinatown",
      rating: 4.5,
      reviews: 450,
      price: "$15-25",
      image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=300&h=200&fit=crop",
      badges: ["New"],
      tags: ["1.3 km", "comfort food"]
    },
    {
      id: 14,
      name: "BBQ Station",
      cuisine: "American",
      location: "Industrial District",
      rating: 4.7,
      reviews: 1100,
      price: "$30-45",
      image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=300&h=200&fit=crop",
      badges: ["Premium"],
      tags: ["2.2 km", "outdoor", "smoking"]
    },
    {
      id: 15,
      name: "Curry Corner",
      cuisine: "Indian",
      location: "Little India",
      rating: 4.4,
      reviews: 750,
      price: "$15-25",
      image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=300&h=200&fit=crop",
      badges: ["Trending"],
      tags: ["1.5 km", "spicy", "halal"]
    },
    {
      id: 16,
      name: "Cafe Delight",
      cuisine: "Cafe",
      location: "Arts Quarter",
      rating: 4.1,
      reviews: 320,
      price: "$8-15",
      image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=300&h=200&fit=crop",
      badges: ["New"],
      tags: ["0.9 km", "cozy", "wifi"]
    }
  ];

  const handleReserveClick = (restaurant, event) => {
    event.preventDefault();
    event.stopPropagation();
    setSelectedRestaurant(restaurant);
    setSidebarOpen(true);
  };

  const handleCloseSidebar = () => {
    setSidebarOpen(false);
    setSelectedRestaurant(null);
  };

  const RestaurantCard = ({ restaurant }) => (
    <div className="restaurant-card">
      <div className="restaurant-image">
        <img src={restaurant.image} alt={restaurant.name} />
        {restaurant.badges.map((badge, index) => (
          <div key={index} className={`badge ${badge.toLowerCase().replace(' ', '-')}`}>
            {badge}
          </div>
        ))}
      </div>
      <div className="restaurant-info">
        <h3 className="restaurant-name">{restaurant.name}</h3>
        <p className="restaurant-details">{restaurant.cuisine} • {restaurant.location}</p>
        <div className="restaurant-rating">
          <FontAwesomeIcon icon={faStar} className="star-icon" />
          <span className="rating-res">{restaurant.rating}</span>
          <span className="reviews">({restaurant.reviews} reviews)</span>
        </div>
        <p className="price-range">{restaurant.price}</p>
        <div className="restaurant-tags">
          {restaurant.tags.map((tag, index) => (
            <span key={index} className="tag">{tag}</span>
          ))}
        </div>
        <div className="restaurant-actions">
          <button 
            className="view-details-btn"
            onClick={() => navigate(`/restaurant/${restaurant.id}`)}
          >
            Details
          </button>
          <button 
            className="reserve-btn"
            onClick={(e) => handleReserveClick(restaurant, e)}
            type="button"
          >
            Reserve
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="restaurants-section">
      <div className="container">
        {/* Top Trending Restaurants */}
        <div className="restaurants-category">
          <h2 className="category-title">Top Trending Restaurants</h2>
          <div className="restaurants-slider" ref={trendingRef}>
            {trendingRestaurants.map(restaurant => (
              <RestaurantCard key={restaurant.id} restaurant={restaurant} />
            ))}
          </div>
        </div>

        {/* New & Noteworthy */}
        <div className="restaurants-category">
          <h2 className="category-title">New & Noteworthy</h2>
          <div className="restaurants-slider" ref={newRef}>
            {newRestaurants.map(restaurant => (
              <RestaurantCard key={restaurant.id} restaurant={restaurant} />
            ))}
          </div>
        </div>

        {/* Duplicate Top Trending Restaurants */}
        <div className="restaurants-category">
          <h2 className="category-title">Top Trending Restaurants</h2>
          <div className="restaurants-slider" ref={trendingRef}>
            {trendingRestaurants.map(restaurant => (
              <RestaurantCard key={`duplicate-${restaurant.id}`} restaurant={restaurant} />
            ))}
          </div>
        </div>
      </div>

      <SidebarReserveTable 
        isOpen={sidebarOpen}
        onClose={handleCloseSidebar}
        restaurant={selectedRestaurant}
      />
    </div>
  );
};

export default RestaurantsSection;