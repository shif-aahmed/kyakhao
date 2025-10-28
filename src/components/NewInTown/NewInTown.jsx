import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faStar, faTimes, faPhone, faClock, faUtensils } from '@fortawesome/free-solid-svg-icons';
import SidebarReserveTable from '../SidebarReserveTable/SidebarReserveTable';
import './NewInTown.css';

const NewInTown = () => {
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [sidebarRestaurant, setSidebarRestaurant] = useState(null);

  const restaurants = [
    {
      id: 1,
      name: "Fusion Bistro",
      cuisine: "Modern Fusion",
      location: "Downtown Arts District",
      rating: 5,
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      phone: "+1 (555) 123-4567",
      hours: "Mon-Sun: 11:00 AM - 10:00 PM",
      description: "Experience the perfect blend of Asian and Western flavors in our modern fusion dishes.",
      menu: [
        { name: "Truffle Ramen", price: "$18", description: "Rich tonkotsu broth with truffle oil" },
        { name: "Korean BBQ Tacos", price: "$16", description: "Marinated beef with kimchi slaw" },
        { name: "Miso Glazed Salmon", price: "$24", description: "Fresh salmon with miso glaze and vegetables" },
        { name: "Duck Confit Bao", price: "$14", description: "Slow-cooked duck in steamed bao bun" }
      ]
    },
    {
      id: 2,
      name: "Mama Mia Pasta",
      cuisine: "Italian",
      location: "Historic Old Town",
      rating: 4,
      image: "https://images.unsplash.com/photo-1551218808-94e220e084d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      phone: "+1 (555) 234-5678",
      hours: "Mon-Sun: 5:00 PM - 11:00 PM",
      description: "Authentic Italian cuisine made with traditional recipes and fresh ingredients.",
      menu: [
        { name: "Spaghetti Carbonara", price: "$19", description: "Classic Roman pasta with eggs and pancetta" },
        { name: "Margherita Pizza", price: "$16", description: "Fresh mozzarella, tomato, and basil" },
        { name: "Osso Buco", price: "$28", description: "Braised veal shanks with risotto" },
        { name: "Tiramisu", price: "$8", description: "Traditional Italian dessert" }
      ]
    },
    {
      id: 3,
      name: "El Fuego Taqueria",
      cuisine: "Mexican",
      location: "Southside Market",
      rating: 5,
      image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      phone: "+1 (555) 345-6789",
      hours: "Mon-Sun: 10:00 AM - 12:00 AM",
      description: "Authentic Mexican street food with bold flavors and fresh ingredients.",
      menu: [
        { name: "Carnitas Tacos", price: "$12", description: "Slow-cooked pork with onions and cilantro" },
        { name: "Chicken Quesadilla", price: "$14", description: "Grilled chicken with cheese and peppers" },
        { name: "Beef Burrito", price: "$16", description: "Large burrito with rice, beans, and beef" },
        { name: "Churros", price: "$6", description: "Fried dough with cinnamon sugar" }
      ]
    }
  ];

  const handleViewMenu = (restaurant) => {
    setSelectedRestaurant(restaurant);
  };

  const handleReserveTable = (restaurant) => {
    setSidebarRestaurant(restaurant);
    setIsSidebarOpen(true);
  };

  const closeModal = () => {
    setSelectedRestaurant(null);
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <FontAwesomeIcon
        key={index}
        icon={faStar}
        className={`star ${index < rating ? 'filled' : 'empty'}`}
      />
    ));
  };

  return (
    <div className="new-in-town-container">
      <div className="new-in-town-content">
        {/* Header Section */}
        <div className="new-in-town-header">
          <div className="header-text">
            <h2 className="new-in-town-title">New in Town</h2>
            <p className="new-in-town-subtitle">
              Be the first to explore the hottest new restaurants and cafes making waves.
            </p>
          </div>
        </div>

        {/* Restaurant Cards */}
        <div className="restaurants-grid">
          {restaurants.map((restaurant) => (
            <div key={restaurant.id} className="restaurant-card">
              <div className="restaurant-image">
                <img src={restaurant.image} alt={restaurant.name} />
              </div>
              
              <div className="restaurant-info">
                <h3 className="restaurant-name">{restaurant.name}</h3>
                <p className="restaurant-cuisine">{restaurant.cuisine}</p>
                
                <div className="restaurant-location">
                  <FontAwesomeIcon icon={faMapMarkerAlt} className="location-icon" />
                  <span>{restaurant.location}</span>
                </div>
                
                <div className="restaurant-rating">
                  {renderStars(restaurant.rating)}
                </div>
                
                <div className="restaurant-actions">
                  <button className="view-menu-btn" onClick={() => handleViewMenu(restaurant)}>View Menu</button>
                  <button className="reserve-table-btn" onClick={() => handleReserveTable(restaurant)}>Reserve Table</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Menu Modal */}
      {selectedRestaurant && (
        <div className="menu-modal-overlay" onClick={closeModal}>
          <div className="menu-modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3 className="modal-title">{selectedRestaurant.name} Menu</h3>
              <button className="close-btn" onClick={closeModal}>
                <FontAwesomeIcon icon={faTimes} />
              </button>
            </div>
            
            <div className="modal-content">
              <div className="restaurant-info-section">
                <div className="restaurant-image-large">
                  <img src={selectedRestaurant.image} alt={selectedRestaurant.name} />
                </div>
                
                <div className="restaurant-details">
                  <h4 className="restaurant-name-large">{selectedRestaurant.name}</h4>
                  <p className="restaurant-cuisine-large">{selectedRestaurant.cuisine}</p>
                  <p className="restaurant-description">{selectedRestaurant.description}</p>
                  
                  <div className="restaurant-info-grid">
                    <div className="info-item">
                      <FontAwesomeIcon icon={faMapMarkerAlt} className="info-icon" />
                      <span>{selectedRestaurant.location}</span>
                    </div>
                    <div className="info-item">
                      <FontAwesomeIcon icon={faPhone} className="info-icon" />
                      <span>{selectedRestaurant.phone}</span>
                    </div>
                    <div className="info-item">
                      <FontAwesomeIcon icon={faClock} className="info-icon" />
                      <span>{selectedRestaurant.hours}</span>
                    </div>
                    <div className="info-item">
                      <FontAwesomeIcon icon={faStar} className="info-icon" />
                      <span>{selectedRestaurant.rating} Stars</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="menu-section">
                <h4 className="menu-title">
                  <FontAwesomeIcon icon={faUtensils} className="menu-icon" />
                  Menu Items
                </h4>
                <div className="menu-items">
                  {selectedRestaurant.menu.map((item, index) => (
                    <div key={index} className="menu-item">
                      <div className="menu-item-info">
                        <h5 className="menu-item-name">{item.name}</h5>
                        <p className="menu-item-description">{item.description}</p>
                      </div>
                      <div className="menu-item-price">{item.price}</div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      )}

      {/* Sidebar Reserve Table */}
      <SidebarReserveTable
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
        restaurant={sidebarRestaurant}
      />
    </div>
  );
};

export default NewInTown;
