import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faVideo,             // Vlogs
  faBowlFood,          // Taste Fusion
  faUtensils,          // Restaurants
  faFireFlameCurved,   // Trending
  faTags,              // Deals
  faMagnifyingGlass,   // Search Icon
} from "@fortawesome/free-solid-svg-icons";
import './HeroBanner.css';

const HeroBanner = ({ activeTab, setActiveTab }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { name: 'Search All', icon: faMagnifyingGlass },
    { name: 'Vlogs', icon: faVideo },
    { name: 'Taste Fusion', icon: faBowlFood },
    { name: 'Restaurants', icon: faUtensils },
    { name: 'Trending', icon: faFireFlameCurved },
    { name: 'Deals', icon: faTags },
  ];

  const handleCategoryClick = (categoryName) => {
    setActiveTab(categoryName);
  };

  return (
    <div className="hero-banner">
      {/* Background Image */}
      <div className="hero-background">
        <img
          src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
          alt="Food background"
        />
        <div className="hero-overlay"></div>
      </div>

      {/* Content */}
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-heading">What's cooking today?</h1>

          {/* Navigation Categories */}
          <div className="nav-categories">
            {categories.map((category) => (
              <button
                key={category.name}
                className={`nav-category ${activeTab === category.name ? 'active' : ''}`}
                onClick={() => handleCategoryClick(category.name)}
              >
                <FontAwesomeIcon icon={category.icon} className="category-icon" />
                <span className="category-name">{category.name}</span>
              </button>
            ))}
          </div>

          {/* Search Bar */}
          <div className="search-container">
            <div className="search-bar">
              <FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon" />
              <input
                type="text"
                placeholder="Search dishes, cuisines, restaurants, or moods..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-input"
              />
              <button className="search-button">
                <span className="search-text">Search</span>
                <FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon-btn" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
