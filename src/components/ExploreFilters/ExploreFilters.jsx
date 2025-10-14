import React, { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import './ExploreFilters.css';

// Custom Dropdown Component
const CustomDropdown = ({ label, value, options, onChange, placeholder }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleOptionClick = (optionValue) => {
    onChange(optionValue);
    setIsOpen(false);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="filter-group">
      <label className="filter-label">{label}</label>
      <div className="custom-dropdown-container" ref={dropdownRef}>
        <div 
          className="custom-dropdown-header"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="dropdown-selected">{value}</span>
          <FontAwesomeIcon 
            icon={faChevronDown} 
            className={`dropdown-arrow ${isOpen ? 'open' : ''}`} 
          />
        </div>
        {isOpen && (
          <div className="custom-dropdown-options">
            {options.map((option) => (
              <div
                key={option.value}
                className={`dropdown-option ${value === option.value ? 'selected' : ''}`}
                onClick={() => handleOptionClick(option.value)}
              >
                {option.label}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

const ExploreFilters = ({ onFiltersChange }) => {
  const [filters, setFilters] = useState({
    mood: 'All Moods',
    calories: [0, 2000],
    price: [5, 100],
    cuisine: 'All Cuisines',
    mealType: 'All Meal Types',
    dietary: 'All Dietary',
    spiceLevel: 0,
    portionSize: 'All Sizes'
  });

  // Dropdown options
  const dropdownOptions = {
    mood: [
      { value: 'All Moods', label: 'All Moods' },
      { value: 'Happy', label: 'Happy' },
      { value: 'Sad', label: 'Sad' },
      { value: 'Energetic', label: 'Energetic' },
      { value: 'Cozy', label: 'Cozy' },
      { value: 'Romantic', label: 'Romantic' },
      { value: 'Adventurous', label: 'Adventurous' }
    ],
    cuisine: [
      { value: 'All Cuisines', label: 'All Cuisines' },
      { value: 'Italian', label: 'Italian' },
      { value: 'Pakistani', label: 'Pakistani' },
      { value: 'Thai', label: 'Thai' },
      { value: 'Chinese', label: 'Chinese' },
      { value: 'Indian', label: 'Indian' },
      { value: 'Mexican', label: 'Mexican' },
      { value: 'Japanese', label: 'Japanese' },
      { value: 'American', label: 'American' }
    ],
    mealType: [
      { value: 'All Meal Types', label: 'All Meal Types' },
      { value: 'Breakfast', label: 'Breakfast' },
      { value: 'Lunch', label: 'Lunch' },
      { value: 'Dinner', label: 'Dinner' },
      { value: 'Snacks', label: 'Snacks' },
      { value: 'Desserts', label: 'Desserts' }
    ],
    dietary: [
      { value: 'All Dietary', label: 'All Dietary' },
      { value: 'Vegetarian', label: 'Vegetarian' },
      { value: 'Vegan', label: 'Vegan' },
      { value: 'Gluten-Free', label: 'Gluten-Free' },
      { value: 'Keto', label: 'Keto' },
      { value: 'Halal', label: 'Halal' },
      { value: 'Kosher', label: 'Kosher' }
    ],
    portionSize: [
      { value: 'All Sizes', label: 'All Sizes' },
      { value: 'Small', label: 'Small' },
      { value: 'Medium', label: 'Medium' },
      { value: 'Large', label: 'Large' },
      { value: 'Extra Large', label: 'Extra Large' }
    ]
  };

  const handleDropdownChange = (filterName, value) => {
    setFilters(prev => ({
      ...prev,
      [filterName]: value
    }));
  };

  const handleSliderChange = (filterName, value) => {
    setFilters(prev => ({
      ...prev,
      [filterName]: value
    }));
  };

  const handleRangeChange = (filterName, index, value) => {
    setFilters(prev => ({
      ...prev,
      [filterName]: prev[filterName].map((val, i) => i === index ? parseInt(value) : val)
    }));
  };

  const applyFilters = () => {
    console.log('Applied filters:', filters);
    onFiltersChange(filters);
  };

  const clearFilters = () => {
    const clearedFilters = {
      mood: 'All Moods',
      calories: [0, 2000],
      price: [5, 100],
      cuisine: 'All Cuisines',
      mealType: 'All Meal Types',
      dietary: 'All Dietary',
      spiceLevel: 0,
      portionSize: 'All Sizes'
    };
    setFilters(clearedFilters);
    onFiltersChange(clearedFilters);
  };

  return (
    <div className="explore-filters">
      <div className="filters-container">
        {/* Row 1 */}
        <div className="filter-row">
          <CustomDropdown
            label="Mood"
            value={filters.mood}
            options={dropdownOptions.mood}
            onChange={(value) => handleDropdownChange('mood', value)}
          />

          <CustomDropdown
            label="Cuisine Type"
            value={filters.cuisine}
            options={dropdownOptions.cuisine}
            onChange={(value) => handleDropdownChange('cuisine', value)}
          />
        </div>

        {/* Row 2 */}
        <div className="filter-row">
          <CustomDropdown
            label="Meal Type"
            value={filters.mealType}
            options={dropdownOptions.mealType}
            onChange={(value) => handleDropdownChange('mealType', value)}
          />

          <div className="filter-group">
            <label className="filter-label">Price Range: ${filters.price[0]} - ${filters.price[1]}</label>
            <div className="slider-container">
              <input
                type="range"
                min="5"
                max="200"
                value={filters.price[0]}
                onChange={(e) => handleRangeChange('price', 0, e.target.value)}
                className="range-slider"
                style={{
                  background: `linear-gradient(to right, #00bcd4 0%, #00bcd4 ${((filters.price[0] - 5) / (200 - 5)) * 100}%, #e0f7fa ${((filters.price[0] - 5) / (200 - 5)) * 100}%, #e0f7fa 100%)`
                }}
              />
              <input
                type="range"
                min="5"
                max="200"
                value={filters.price[1]}
                onChange={(e) => handleRangeChange('price', 1, e.target.value)}
                className="range-slider"
                style={{
                  background: `linear-gradient(to right, #00bcd4 0%, #00bcd4 ${((filters.price[1] - 5) / (200 - 5)) * 100}%, #e0f7fa ${((filters.price[1] - 5) / (200 - 5)) * 100}%, #e0f7fa 100%)`
                }}
              />
            </div>
          </div>
        </div>

        {/* Row 3 */}
        <div className="filter-row">
          <CustomDropdown
            label="Dietary"
            value={filters.dietary}
            options={dropdownOptions.dietary}
            onChange={(value) => handleDropdownChange('dietary', value)}
          />

          <div className="filter-group">
            <label className="filter-label">Calories Range: {filters.calories[0]} - {filters.calories[1]}</label>
            <div className="slider-container">
              <input
                type="range"
                min="0"
                max="3000"
                value={filters.calories[0]}
                onChange={(e) => handleRangeChange('calories', 0, e.target.value)}
                className="range-slider"
                style={{
                  background: `linear-gradient(to right, #00bcd4 0%, #00bcd4 ${(filters.calories[0] / 3000) * 100}%, #e0f7fa ${(filters.calories[0] / 3000) * 100}%, #e0f7fa 100%)`
                }}
              />
              <input
                type="range"
                min="0"
                max="3000"
                value={filters.calories[1]}
                onChange={(e) => handleRangeChange('calories', 1, e.target.value)}
                className="range-slider"
                style={{
                  background: `linear-gradient(to right, #00bcd4 0%, #00bcd4 ${(filters.calories[1] / 3000) * 100}%, #e0f7fa ${(filters.calories[1] / 3000) * 100}%, #e0f7fa 100%)`
                }}
              />
            </div>
          </div>
        </div>

        {/* Row 4 */}
        <div className="filter-row">
          <div className="filter-group">
            <label className="filter-label">Spice Level: {filters.spiceLevel} / 5</label>
            <div className="slider-container">
              <input
                type="range"
                min="0"
                max="5"
                value={filters.spiceLevel}
                onChange={(e) => handleSliderChange('spiceLevel', parseInt(e.target.value))}
                className="single-slider"
                style={{
                  background: `linear-gradient(to right, #00bcd4 0%, #00bcd4 ${(filters.spiceLevel / 5) * 100}%, #e0f7fa ${(filters.spiceLevel / 5) * 100}%, #e0f7fa 100%)`
                }}
              />
            </div>
          </div>

          <CustomDropdown
            label="Portion Size"
            value={filters.portionSize}
            options={dropdownOptions.portionSize}
            onChange={(value) => handleDropdownChange('portionSize', value)}
          />
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

export default ExploreFilters;
