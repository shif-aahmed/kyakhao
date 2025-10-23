import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faSearch, 
  faUtensils, 
  faCamera, 
  faStore, 
  faPlane, 
  faUser,
  faSearch as faSearchIcon
} from '@fortawesome/free-solid-svg-icons';
import './HeroBanner.css';

const HeroBanner = ({ activeTab, setActiveTab }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { name: 'Search All', icon: 'custom-house' },
    { name: 'Dishes', icon: faUtensils },
    { name: 'Things to Do', icon: faCamera },
    { name: 'Restaurants', icon: faStore },
    { name: 'Deals', icon: faPlane },
    { name: 'AI Picks', icon: faUser }
  ];

  const handleCategoryClick = (categoryName) => {
    setActiveTab(categoryName);
  };

  return (
    <div className="hero-banner">
      {/* Background Image */}
      <div className="hero-background">
        <img 
          src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80" 
          alt="Food background"
        />
        {/* Light overlay */}
        <div className="hero-overlay"></div>
      </div>

      {/* Content */}
      <div className="hero-content">
        <div className="hero-text">
          {/* Main Heading */}
          <h1 className="hero-heading">
            What's cooking today?
          </h1>
          
          {/* Navigation Categories */}
          <div className="nav-categories">
            {categories.map((category) => (
              <button
                key={category.name}
                className={`nav-category ${activeTab === category.name ? 'active' : ''}`}
                onClick={() => handleCategoryClick(category.name)}
              >
                {category.icon === 'custom-house' ? (
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="category-icon">
                    <path fillRule="evenodd" clipRule="evenodd" d="M9.889 1.5421C9.84787 1.51458 9.79949 1.49989 9.75 1.49989C9.70051 1.49989 9.65213 1.51458 9.611 1.5421L1.611 6.8751C1.57682 6.89796 1.5488 6.92891 1.52944 6.96519C1.51008 7.00147 1.49997 7.04197 1.5 7.0831V17.5481C1.5 17.6861 1.612 17.7981 1.75 17.7981H17.75C17.8163 17.7981 17.8799 17.7718 17.9268 17.7249C17.9737 17.678 18 17.6144 18 17.5481V7.0831C18 7.04197 17.9899 7.00147 17.9706 6.96519C17.9512 6.92891 17.9232 6.89796 17.889 6.8751L9.889 1.5421ZM8.779 0.294095C9.06653 0.102333 9.40439 0 9.75 0C10.0956 0 10.4335 0.102333 10.721 0.294095L18.721 5.6271C19.208 5.9521 19.5 6.4981 19.5 7.0831V17.5481C19.5 18.0122 19.3156 18.4573 18.9874 18.7855C18.6592 19.1137 18.2141 19.2981 17.75 19.2981H1.75C1.52019 19.2981 1.29262 19.2528 1.0803 19.1649C0.867984 19.0769 0.675066 18.948 0.512563 18.7855C0.350061 18.623 0.221157 18.4301 0.133211 18.2178C0.0452652 18.0055 0 17.7779 0 17.5481V7.0831C0 6.4981 0.292 5.9521 0.78 5.6271L8.779 0.294095Z" fill="currentColor"/>
                  </svg>
                ) : (
                  <FontAwesomeIcon icon={category.icon} className="category-icon" />
                )}
                <span className="category-name">{category.name}</span>
              </button>
            ))}
          </div>
          
          {/* Search Bar */}
          <div className="search-container">
            <div className="search-bar">
              <FontAwesomeIcon icon={faSearch} className="search-icon" />
              <input
                type="text"
                placeholder="Search dishes, cuisines, restaurants, or moods..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-input"
              />
              <button className="search-button">
                <span className="search-text">Search</span>
                <FontAwesomeIcon icon={faSearchIcon} className="search-icon-btn" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;