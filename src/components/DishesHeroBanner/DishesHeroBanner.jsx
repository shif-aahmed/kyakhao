import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faSearch, 
  faUtensils, 
  faMapMarkerAlt, 
  faStore, 
  faTag, 
  faRobot,
  faSearch as faSearchIcon
} from '@fortawesome/free-solid-svg-icons';
import './DishesHeroBanner.css';

const DishesHeroBanner = ({ activeTab, setActiveTab }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { name: 'Search All', icon: faSearch },
    { name: 'Dishes', icon: faUtensils },
    { name: 'Things to Do', icon: faMapMarkerAlt },
    { name: 'Restaurants', icon: faStore },
    { name: 'Deals', icon: faTag },
    { name: 'AI Picks', icon: faRobot }
  ];

  return (
    <div className="dishes-hero-banner">
      {/* Background Image */}
      <div className="dishes-hero-background">
        <img 
          src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80" 
          alt="Food background"
        />
        {/* Light overlay */}
        <div className="dishes-hero-overlay"></div>
      </div>

      {/* Content */}
      <div className="dishes-hero-content">
        <div className="dishes-hero-text">
          {/* Main Heading */}
          <h1 className="dishes-hero-heading">
            Discover Amazing Dishes
          </h1>
          
          {/* Navigation Categories */}
          <div className="dishes-nav-categories">
            {categories.map((category) => (
              <button
                key={category.name}
                className={`dishes-nav-category ${activeTab === category.name ? 'active' : ''}`}
                onClick={() => setActiveTab(category.name)}
              >
                <FontAwesomeIcon icon={category.icon} className="dishes-category-icon" />
                <span className="dishes-category-name">{category.name}</span>
              </button>
            ))}
          </div>
          
          {/* Search Bar */}
          <div className="dishes-search-container">
            <div className="dishes-search-bar">
              <FontAwesomeIcon icon={faSearch} className="dishes-search-icon" />
              <input
                type="text"
                placeholder="Search dishes, cuisines, restaurants, or moods..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="dishes-search-input"
              />
              <button className="dishes-search-button">
                <span className="dishes-search-text">Search</span>
                <FontAwesomeIcon icon={faSearchIcon} className="dishes-search-icon-btn" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DishesHeroBanner;
