import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import './FilterSection.css';

const FilterSection = () => {
  const [activeTab, setActiveTab] = useState('New in Town');
  const [selectedCuisine, setSelectedCuisine] = useState('');
  const [priceRange, setPriceRange] = useState([20, 80]);
  const [spiceLevel, setSpiceLevel] = useState(1);
  const [rating, setRating] = useState(3);
  const [showFilters, setShowFilters] = useState(true);

  const tabs = ['New in Town', 'Trending Dishes', 'Underrated Picks'];
  
  const cuisines = [
    'Italian', 'Mexican', 'Indian', 'Chinese', 'Japanese', 'Korean', 
    'Thai', 'French', 'Spanish', 'Mediterranean', 'American', 'Middle Eastern'
  ];

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleCuisineChange = (cuisine) => {
    setSelectedCuisine(cuisine);
  };

  const handlePriceRangeChange = (index, value) => {
    const newRange = [...priceRange];
    newRange[index] = parseInt(value);
    setPriceRange(newRange);
  };

  const handleSpiceLevelChange = (value) => {
    setSpiceLevel(parseInt(value));
  };

  const handleRatingChange = (value) => {
    setRating(parseInt(value));
  };

  const clearFilters = () => {
    setSelectedCuisine('');
    setPriceRange([20, 80]);
    setSpiceLevel(1);
    setRating(3);
  };

  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  return (
    <div className="filter-section-container">
      <div className="filter-section-content">
        {/* Navigation and Filter Container */}
        <div className="nav-filter-container">
          {/* Navigation Tabs */}
          <div className="nav-tabs">
            {tabs.map((tab) => (
              <button
                key={tab}
                className={`nav-tab ${activeTab === tab ? 'active' : ''}`}
                onClick={() => handleTabClick(tab)}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Filter Button */}
          <div className="filter-button-container">
            <button className="filter-button" onClick={toggleFilters}>
              <FontAwesomeIcon icon={faFilter} className="filter-icon" />
              Filter
            </button>
          </div>
        </div>

        {/* Filter Section */}
        <div className="filter-panel">
          <div className="filter-content">
            {/* Cuisine Dropdown */}
            <div className="filter-group">
              <label className="filter-label">Cuisine</label>
              <div className="cuisine-dropdown">
                <button className="cuisine-button">
                  <span>{selectedCuisine || 'Cuisine'}</span>
                  <FontAwesomeIcon icon={faChevronDown} className="dropdown-icon" />
                </button>
                <div className="cuisine-options">
                  {cuisines.map((cuisine) => (
                    <button
                      key={cuisine}
                      className={`cuisine-option ${selectedCuisine === cuisine ? 'selected' : ''}`}
                      onClick={() => handleCuisineChange(cuisine)}
                    >
                      {cuisine}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Price Range Slider */}
            <div className="filter-group">
              <label className="filter-label">Price Range: ${priceRange[0]} - ${priceRange[1]}</label>
              <div className="slider-container">
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={priceRange[0]}
                  onChange={(e) => handlePriceRangeChange(0, e.target.value)}
                  className="slider"
                />
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={priceRange[1]}
                  onChange={(e) => handlePriceRangeChange(1, e.target.value)}
                  className="slider"
                />
              </div>
            </div>

            {/* Spice Level Slider */}
            <div className="filter-group">
              <label className="filter-label">Spice Level: 1 - {spiceLevel}</label>
              <div className="slider-container">
                <input
                  type="range"
                  min="1"
                  max="5"
                  value={spiceLevel}
                  onChange={(e) => handleSpiceLevelChange(e.target.value)}
                  className="slider"
                />
              </div>
            </div>

            {/* Rating Slider */}
            <div className="filter-group">
              <label className="filter-label">Rating: {rating} - 5 Stars</label>
              <div className="slider-container">
                <input
                  type="range"
                  min="1"
                  max="5"
                  value={rating}
                  onChange={(e) => handleRatingChange(e.target.value)}
                  className="slider"
                />
              </div>
            </div>

            {/* Clear Filters Button */}
            <div className="filter-group">
              <button className="clear-filters-btn" onClick={clearFilters}>
                Clear Filters
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterSection;
