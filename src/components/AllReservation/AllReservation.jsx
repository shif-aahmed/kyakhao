import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './AllReservation.css';
import SidebarReserveTable from '../SidebarReserveTable/SidebarReserveTable';

const restaurants = [
  {
    id: 1,
    name: 'Sakura Sushi Bar',
    cuisine: 'Japanese',
    location: 'Clifton',
    rating: 4.8,
    reviews: 317,
    timeSlots: ['7:30 PM', '8:30 PM', '9:30 PM'],
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2070',
    premium: true,
  },
  {
    id: 2,
    name: 'The Grand Bistro',
    cuisine: 'Italian',
    location: 'DHA Phase 6',
    rating: 4.7,
    reviews: 363,
    timeSlots: ['7:30 PM', '8:00 PM', '8:30 PM'],
    image: 'https://images.unsplash.com/photo-1652195960911-c9f55224bd89?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1974',
    premium: true,
  },
  {
    id: 3,
    name: 'Olive Tree Cafe',
    cuisine: 'Mediterranean',
    location: 'DHA Phase 6',
    rating: 4.6,
    reviews: 110,
    timeSlots: ['7:00 PM', '8:00 PM', '9:00 PM'],
    image: 'https://images.unsplash.com/photo-1647109063447-e01ab743ee8f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1932',
    premium: true,
  },
  {
    id: 4,
    name: 'Lahori Delights',
    cuisine: 'Pakistani',
    location: 'Gulshan-e-Iqbal',
    rating: 4.5,
    reviews: 259,
    timeSlots: ['7:30 PM', '8:00 PM', '8:30 PM'],
    image: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170',
    premium: true,
  },
  {
    id: 5,
    name: 'Spicy Wok House',
    cuisine: 'Chinese',
    location: 'Clifton',
    rating: 4.2,
    reviews: 271,
    timeSlots: ['7:00 PM', '8:00 PM', '9:00 PM'],
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxfHxjaGluZXNlJTIwcmVzdGF1cmFudHxlbnwwfDB8fHwxNzA2NjkyNjU3fDA&ixlib=rb-4.0.3&q=80&w=1080',
    premium: true,
  },
  {
    id: 6,
    name: 'Curry Haven',
    cuisine: 'Indian',
    location: 'Bahria Town',
    rating: 4.1,
    reviews: 273,
    timeSlots: ['6:30 PM', '7:30 PM', '8:30 PM'],
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjByZXN0YXVyYW50fGVufDB8MHx8fDE3MDY2OTI2NTd8MA&ixlib=rb-4.0.3&q=80&w=1080',
    premium: true,
  },
];

const AllReservation = ({ filters = {}, sortBy = 'Top Rated' }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (sidebarOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [sidebarOpen]);

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

  // Apply filters
  const filtered = React.useMemo(() => {
    return restaurants.filter(r => {
      if (filters.premiumOnly && !r.premium) return false;
      if (typeof filters.minRating === 'number' && r.rating < filters.minRating) return false;
      return true;
    });
  }, [filters]);

  // Apply sorting
  const sorted = React.useMemo(() => {
    const list = [...filtered];
    switch (sortBy) {
      case 'Top Rated':
        return list.sort((a,b) => b.rating - a.rating);
      case 'Price: Low to High':
        // No price in dataset; approximate by reviews ascending
        return list.sort((a,b) => a.reviews - b.reviews);
      case 'Price: High to Low':
        return list.sort((a,b) => b.reviews - a.reviews);
      case 'Newest':
        return list.sort((a,b) => b.id - a.id);
      default:
        return list;
    }
  }, [filtered, sortBy]);

  return (
    <section className="all-reservation-section">
      <div className="container">
        {/* ✅ Added Heading */}
        <h2 className="all-reservation-heading">Top Rated Restaurants Near You</h2>

        <div className="all-reservation-grid">
          {sorted.map((restaurant) => (
            <div key={restaurant.id} className="all-reservation-card">
              <div className="all-reservation-image-container">
                <img src={restaurant.image} alt={restaurant.name} className="all-reservation-image" />
                {restaurant.premium && (
                  <div className="premium-badge">Premium Table Available</div>
                )}
              </div>
              <div className="all-reservation-content">
                <h3 className="restaurant-name">{restaurant.name}</h3>
                <p className="restaurant-info-reservation">{restaurant.cuisine} • {restaurant.location}</p>
                <div className="rating">
                  <svg
                    className="star"
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7.51328 0.00981549C7.60715 0.0229609 7.69874 0.0493455 7.78544 0.0876762L7.91173 0.154415L8.02751 0.237508C8.10047 0.298297 8.16446 0.369103 8.21792 0.44754L8.28988 0.570545L9.83798 3.70594L9.88314 3.78445C9.93285 3.86038 9.99583 3.92704 10.0696 3.98074C10.168 4.05235 10.2829 4.09915 10.4033 4.11684L13.8639 4.62326C14.0058 4.64385 14.1405 4.69411 14.261 4.76982L14.3768 4.85357L14.4789 4.95303C14.5424 5.02379 14.5956 5.10311 14.6373 5.18857L14.6909 5.32074L14.7256 5.45945C14.7503 5.59961 14.7455 5.74424 14.7112 5.88344C14.6653 6.06898 14.5687 6.23809 14.4318 6.37155L14.4312 6.37222L11.9284 8.80948C11.8413 8.89444 11.7758 8.99923 11.738 9.115C11.7004 9.23078 11.6915 9.35419 11.7119 9.47419L12.302 12.9152L12.3171 13.0578C12.322 13.2007 12.2971 13.3436 12.2431 13.4772C12.1712 13.6553 12.0505 13.8099 11.8951 13.9228C11.7396 14.0357 11.5555 14.1025 11.3638 14.1158C11.1722 14.1291 10.9805 14.0883 10.8109 13.998L7.72005 12.3727C7.63924 12.3304 7.55161 12.3032 7.46156 12.2923L7.37064 12.2871C7.24903 12.2871 7.1289 12.3157 7.02123 12.3721L7.0219 12.3727L3.92902 13.998L3.92967 13.9987C3.76016 14.0883 3.56875 14.1287 3.37745 14.1151C3.18623 14.1015 3.00253 14.0349 2.84746 13.9221C2.69236 13.8094 2.57195 13.655 2.50003 13.4772C2.44607 13.3437 2.42122 13.2007 2.4261 13.0578L2.44049 12.9158L3.03067 9.47486L3.04048 9.38461C3.04492 9.29376 3.03275 9.20264 3.0045 9.11567C2.97624 9.02877 2.93255 8.9477 2.8756 8.87682L2.8141 8.80948L0.310756 6.37283L0.311413 6.37222C0.174351 6.23916 0.0769933 6.07079 0.0307164 5.8854C-0.0157541 5.69913 -0.00954862 5.50335 0.0496908 5.32074L0.103344 5.18792C0.166003 5.05936 0.255408 4.94494 0.365716 4.85227L0.481526 4.76786C0.562288 4.71737 0.649756 4.67842 0.741285 4.65205L0.881302 4.62195L4.33926 4.11684L4.42825 4.09786C4.516 4.07402 4.59898 4.03448 4.67295 3.98074C4.77142 3.9092 4.85129 3.81505 4.90523 3.70594L6.452 0.571202L6.45267 0.570545L6.52463 0.44754C6.60476 0.330089 6.70855 0.230004 6.83015 0.154415L6.95645 0.0876762C7.08663 0.0300964 7.22793 0 7.37124 0L7.51328 0.00981549Z" fill="#F59E0B"/>
                  </svg>
                  <span className="rating-value">{restaurant.rating}</span>
                  <span className="review-count">({restaurant.reviews} reviews)</span>
                </div>
                <div className="time-slots">
                  {restaurant.timeSlots.map((slot, index) => (
                    <span key={index} className="time-slot">{slot}</span>
                  ))}
                </div>
                <div className="card-actions">
                  <button 
                    className="reserve-btn" 
                    onClick={(e) => handleReserveClick(restaurant, e)}
                    type="button"
                  >
                    Reserve Now
                  </button>
                <button 
                  className="details-btn"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    navigate(`/restaurant/${restaurant.id}` , { state: { restaurant } });
                  }}
                  type="button"
                >
                  Details
                </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <SidebarReserveTable 
        isOpen={sidebarOpen}
        onClose={handleCloseSidebar}
        restaurant={selectedRestaurant}
      />
    </section>
  );
};

export default AllReservation;
