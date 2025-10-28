import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import './FilterSection.css';

const FilterSection = () => {
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
    <div className="filter-section-container">
      <div className="filter-card">
        {/* First Row - Two Dropdowns */}
        <div className="filter-row">
          <div className="filter-group">
            <label className="filter-label">All Cuisines</label>
            <div className="dropdown-container">
              <button className="dropdown-button">
                <span>{selectedCuisine}</span>
                <FontAwesomeIcon icon={faChevronDown} className="dropdown-icon" />
              </button>
              <div className="dropdown-menu">
                {cuisines.map((cuisine) => (
                  <button
                    key={cuisine}
                    className={`dropdown-option ${selectedCuisine === cuisine ? 'selected' : ''}`}
                    onClick={() => handleCuisineChange(cuisine)}
                  >
                    {cuisine}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="filter-group">
            <label className="filter-label">All Meal Types</label>
            <div className="dropdown-container">
              <button className="dropdown-button">
                <span>{selectedMealType}</span>
                <FontAwesomeIcon icon={faChevronDown} className="dropdown-icon" />
              </button>
              <div className="dropdown-menu">
                {mealTypes.map((mealType) => (
                  <button
                    key={mealType}
                    className={`dropdown-option ${selectedMealType === mealType ? 'selected' : ''}`}
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
        <div className="filter-row">
          <div className="filter-group">
            <label className="filter-label">All Dietary</label>
            <div className="dropdown-container">
              <button className="dropdown-button">
                <span>{selectedDietary}</span>
                <FontAwesomeIcon icon={faChevronDown} className="dropdown-icon" />
              </button>
              <div className="dropdown-menu">
                {dietaryOptions.map((dietary) => (
                  <button
                    key={dietary}
                    className={`dropdown-option ${selectedDietary === dietary ? 'selected' : ''}`}
                    onClick={() => handleDietaryChange(dietary)}
                  >
                    {dietary}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="filter-group price-range-group">
            <label className="filter-label">Price Range: ${priceRange[0]} - ${priceRange[1]}</label>
            <div className="slider-container">
              <input
                type="range"
                min="5"
                max="100"
                value={priceRange[0]}
                onChange={(e) => handlePriceRangeChange(e.target.value)}
                className="range-slider"
              />
            </div>
          </div>
        </div>

        {/* Third Row - Spice Level Slider */}
        <div className="filter-row">
          <div className="filter-group spice-level-group">
            <label className="filter-label">Spice Level: {spiceLevel} / 5</label>
            <div className="slider-container">
              <input
                type="range"
                min="0"
                max="5"
                value={spiceLevel}
                onChange={(e) => handleSpiceLevelChange(e.target.value)}
                className="range-slider"
              />
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="filter-actions">
          <button className="apply-filters-btn" onClick={applyFilters}>
            Apply Filters
          </button>
          <button className="clear-filters-btn" onClick={clearFilters}>
            Clear Filters
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterSection;




