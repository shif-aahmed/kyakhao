import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import './BannerNewFilter.css';

const BannerNewFilter = () => {
  const [selectedCuisine, setSelectedCuisine] = useState('All Cuisines');
  const [selectedMealType, setSelectedMealType] = useState('All Meal Types');
  const [selectedDietary, setSelectedDietary] = useState('All Dietary');
  const [priceRange, setPriceRange] = useState([5, 100]);
  const [spiceLevel, setSpiceLevel] = useState(0);

  const cuisines = [
    'All Cuisines', 'Italian', 'Mexican', 'Indian', 'Chinese', 'Japanese', 
    'Korean', 'Thai', 'French', 'Spanish', 'Mediterranean', 'American', 'Middle Eastern'
  ];

  const mealTypes = [
    'All Meal Types', 'Breakfast', 'Lunch', 'Dinner', 'Snacks', 'Desserts', 'Beverages'
  ];

  const dietaryOptions = [
    'All Dietary', 'Vegetarian', 'Vegan', 'Gluten-Free', 'Dairy-Free', 'Keto', 'Paleo'
  ];

  const handleCuisineChange = (cuisine) => {
    setSelectedCuisine(cuisine);
  };

  const handleMealTypeChange = (mealType) => {
    setSelectedMealType(mealType);
  };

  const handleDietaryChange = (dietary) => {
    setSelectedDietary(dietary);
  };

  const handlePriceRangeChange = (value) => {
    setPriceRange([parseInt(value), 100]);
  };

  const handleSpiceLevelChange = (value) => {
    setSpiceLevel(parseInt(value));
  };

  const clearFilters = () => {
    setSelectedCuisine('All Cuisines');
    setSelectedMealType('All Meal Types');
    setSelectedDietary('All Dietary');
    setPriceRange([5, 100]);
    setSpiceLevel(0);
  };

  const applyFilters = () => {
    // Handle filter application logic here
    console.log('Filters applied:', {
      cuisine: selectedCuisine,
      mealType: selectedMealType,
      dietary: selectedDietary,
      priceRange,
      spiceLevel
    });
  };

  return (
    <div className="banner-new-filter">
      <div className="banner-new-filter-container">
        <div className="banner-new-filter-card">
          {/* First Row - Two Dropdowns */}
          <div className="banner-new-filter-row">
            <div className="banner-new-filter-group">
              <label className="banner-new-filter-label">All Cuisines</label>
              <div className="banner-new-filter-dropdown-container">
                <button className="banner-new-filter-dropdown-button">
                  <span>{selectedCuisine}</span>
                  <FontAwesomeIcon icon={faChevronDown} className="banner-new-filter-dropdown-icon" />
                </button>
                <div className="banner-new-filter-dropdown-menu">
                  {cuisines.map((cuisine) => (
                    <button
                      key={cuisine}
                      className={`banner-new-filter-dropdown-option ${selectedCuisine === cuisine ? 'selected' : ''}`}
                      onClick={() => handleCuisineChange(cuisine)}
                    >
                      {cuisine}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="banner-new-filter-group">
              <label className="banner-new-filter-label">All Meal Types</label>
              <div className="banner-new-filter-dropdown-container">
                <button className="banner-new-filter-dropdown-button">
                  <span>{selectedMealType}</span>
                  <FontAwesomeIcon icon={faChevronDown} className="banner-new-filter-dropdown-icon" />
                </button>
                <div className="banner-new-filter-dropdown-menu">
                  {mealTypes.map((mealType) => (
                    <button
                      key={mealType}
                      className={`banner-new-filter-dropdown-option ${selectedMealType === mealType ? 'selected' : ''}`}
                      onClick={() => handleMealTypeChange(mealType)}
                    >
                      {mealType}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Second Row - One Dropdown and Price Range */}
          <div className="banner-new-filter-row">
            <div className="banner-new-filter-group">
              <label className="banner-new-filter-label">All Dietary</label>
              <div className="banner-new-filter-dropdown-container">
                <button className="banner-new-filter-dropdown-button">
                  <span>{selectedDietary}</span>
                  <FontAwesomeIcon icon={faChevronDown} className="banner-new-filter-dropdown-icon" />
                </button>
                <div className="banner-new-filter-dropdown-menu">
                  {dietaryOptions.map((dietary) => (
                    <button
                      key={dietary}
                      className={`banner-new-filter-dropdown-option ${selectedDietary === dietary ? 'selected' : ''}`}
                      onClick={() => handleDietaryChange(dietary)}
                    >
                      {dietary}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="banner-new-filter-group banner-new-filter-price-range-group">
              <label className="banner-new-filter-label">Price Range: ${priceRange[0]} - ${priceRange[1]}</label>
              <div className="banner-new-filter-slider-container">
                <input
                  type="range"
                  min="5"
                  max="100"
                  value={priceRange[0]}
                  onChange={(e) => handlePriceRangeChange(e.target.value)}
                  className="banner-new-filter-range-slider"
                />
              </div>
            </div>
          </div>

          {/* Third Row - Spice Level Slider and Buttons */}
          <div className="banner-new-filter-row">
            <div className="banner-new-filter-group banner-new-filter-spice-level-group">
              <label className="banner-new-filter-label">Spice Level: {spiceLevel} / 5</label>
              <div className="banner-new-filter-slider-container">
                <input
                  type="range"
                  min="0"
                  max="5"
                  value={spiceLevel}
                  onChange={(e) => handleSpiceLevelChange(e.target.value)}
                  className="banner-new-filter-range-slider"
                />
              </div>
            </div>

            <div className="banner-new-filter-actions">
              <button className="banner-new-filter-apply-btn" onClick={applyFilters}>
                Apply Filters
              </button>
              <button className="banner-new-filter-clear-btn" onClick={clearFilters}>
                Clear Filters
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerNewFilter;

