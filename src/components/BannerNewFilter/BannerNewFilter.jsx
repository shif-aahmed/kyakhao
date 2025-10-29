import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import './BannerNewFilter.css';

const BannerNewFilter = ({ onFiltersChange }) => {
  const [selectedCuisine, setSelectedCuisine] = useState('All Cuisines');
  const [selectedMealType, setSelectedMealType] = useState('All Meal Types');
  const [selectedDietary, setSelectedDietary] = useState('All Dietary');
  const [selectedPortion, setSelectedPortion] = useState('All Portions');
  const [selectedFlavor, setSelectedFlavor] = useState('All Flavors');
  const [priceRange, setPriceRange] = useState([5, 100]);
  const [caloriesRange, setCaloriesRange] = useState([50, 1000]);
  const [spiceLevel, setSpiceLevel] = useState(0);

  // ✅ New: Track which dropdown is open
  const [openDropdown, setOpenDropdown] = useState(null);

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

  const portionOptions = [
    'All Portions', 'Small', 'Medium', 'Large', 'Family Size'
  ];

  const flavorProfiles = [
    'All Flavors', 'Sweet', 'Savory', 'Spicy', 'Umami', 'Sour', 'Bitter', 'Tangy', 'Mild'
  ];

  const toggleDropdown = (type) => {
    setOpenDropdown(openDropdown === type ? null : type);
  };

  const handleCuisineChange = (cuisine) => {
    setSelectedCuisine(cuisine);
    setOpenDropdown(null);
  };

  const handleMealTypeChange = (mealType) => {
    setSelectedMealType(mealType);
    setOpenDropdown(null);
  };

  const handleDietaryChange = (dietary) => {
    setSelectedDietary(dietary);
    setOpenDropdown(null);
  };

  const handlePortionChange = (portion) => {
    setSelectedPortion(portion);
    setOpenDropdown(null);
  };

  const handleFlavorChange = (flavor) => {
    setSelectedFlavor(flavor);
    setOpenDropdown(null);
  };

  const handlePriceRangeChange = (value, type) => {
    if (type === 'min') {
      setPriceRange([parseInt(value), priceRange[1]]);
    } else {
      setPriceRange([priceRange[0], parseInt(value)]);
    }
  };
  const handleCaloriesRangeChange = (value) => setCaloriesRange([parseInt(value), 1000]);
  const handleSpiceLevelChange = (value) => setSpiceLevel(parseInt(value));

  const clearFilters = () => {
    setSelectedCuisine('All Cuisines');
    setSelectedMealType('All Meal Types');
    setSelectedDietary('All Dietary');
    setSelectedPortion('All Portions');
    setSelectedFlavor('All Flavors');
    setPriceRange([5, 100]);
    setCaloriesRange([50, 1000]);
    setSpiceLevel(0);
    onFiltersChange(null);
  };

  const applyFilters = () => {
    const filterData = {
      cuisine: selectedCuisine,
      mealType: selectedMealType,
      dietary: selectedDietary,
      portionSize: selectedPortion,
      flavorProfile: selectedFlavor,
      price: priceRange,
      calories: caloriesRange,
      spiceLevel,
    };
    
    console.log('Filters applied:', filterData);
    onFiltersChange(filterData);
  };

  return (
    <div className="banner-new-filter">
      <div className="banner-new-filter-container">
        <div className="banner-new-filter-card">

          {/* Dropdown Rows */}
          <div className="banner-new-filter-row">
            {/* Cuisine */}
            <div className="banner-new-filter-group">
              <label className="banner-new-filter-label">Cuisine Type</label>
              <div className="banner-new-filter-dropdown-container">
                <button
                  className="banner-new-filter-dropdown-button"
                  onClick={() => toggleDropdown('cuisine')}
                >
                  <span>{selectedCuisine}</span>
                  <FontAwesomeIcon
                    icon={faChevronDown}
                    className={`banner-new-filter-dropdown-icon ${openDropdown === 'cuisine' ? 'rotated' : ''}`}
                  />
                </button>
                {openDropdown === 'cuisine' && (
                  <div className="banner-new-filter-dropdown-menu open">
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
                )}
              </div>
            </div>

            {/* Meal Type */}
            <div className="banner-new-filter-group">
              <label className="banner-new-filter-label">Meal Type</label>
              <div className="banner-new-filter-dropdown-container">
                <button
                  className="banner-new-filter-dropdown-button"
                  onClick={() => toggleDropdown('mealType')}
                >
                  <span>{selectedMealType}</span>
                  <FontAwesomeIcon
                    icon={faChevronDown}
                    className={`banner-new-filter-dropdown-icon ${openDropdown === 'mealType' ? 'rotated' : ''}`}
                  />
                </button>
                {openDropdown === 'mealType' && (
                  <div className="banner-new-filter-dropdown-menu open">
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
                )}
              </div>
            </div>
          </div>

          {/* Second Row */}
          <div className="banner-new-filter-row">
            {/* Dietary */}
            <div className="banner-new-filter-group">
              <label className="banner-new-filter-label">Dietary Needs</label>
              <div className="banner-new-filter-dropdown-container">
                <button
                  className="banner-new-filter-dropdown-button"
                  onClick={() => toggleDropdown('dietary')}
                >
                  <span>{selectedDietary}</span>
                  <FontAwesomeIcon
                    icon={faChevronDown}
                    className={`banner-new-filter-dropdown-icon ${openDropdown === 'dietary' ? 'rotated' : ''}`}
                  />
                </button>
                {openDropdown === 'dietary' && (
                  <div className="banner-new-filter-dropdown-menu open">
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
                )}
              </div>
            </div>

            {/* Portion */}
            <div className="banner-new-filter-group">
              <label className="banner-new-filter-label">Portion Size</label>
              <div className="banner-new-filter-dropdown-container">
                <button
                  className="banner-new-filter-dropdown-button"
                  onClick={() => toggleDropdown('portion')}
                >
                  <span>{selectedPortion}</span>
                  <FontAwesomeIcon
                    icon={faChevronDown}
                    className={`banner-new-filter-dropdown-icon ${openDropdown === 'portion' ? 'rotated' : ''}`}
                  />
                </button>
                {openDropdown === 'portion' && (
                  <div className="banner-new-filter-dropdown-menu open">
                    {portionOptions.map((portion) => (
                      <button
                        key={portion}
                        className={`banner-new-filter-dropdown-option ${selectedPortion === portion ? 'selected' : ''}`}
                        onClick={() => handlePortionChange(portion)}
                      >
                        {portion}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Third Row */}
          <div className="banner-new-filter-row">
            <div className="banner-new-filter-group">
              <label className="banner-new-filter-label">Flavor Profile</label>
              <div className="banner-new-filter-dropdown-container">
                <button
                  className="banner-new-filter-dropdown-button"
                  onClick={() => toggleDropdown('flavor')}
                >
                  <span>{selectedFlavor}</span>
                  <FontAwesomeIcon
                    icon={faChevronDown}
                    className={`banner-new-filter-dropdown-icon ${openDropdown === 'flavor' ? 'rotated' : ''}`}
                  />
                </button>
                {openDropdown === 'flavor' && (
                  <div className="banner-new-filter-dropdown-menu open">
                    {flavorProfiles.map((flavor) => (
                      <button
                        key={flavor}
                        className={`banner-new-filter-dropdown-option ${selectedFlavor === flavor ? 'selected' : ''}`}
                        onClick={() => handleFlavorChange(flavor)}
                      >
                        {flavor}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Price Range Sliders */}
          <div className="banner-new-filter-row">
            <div className="banner-new-filter-group banner-new-filter-price-range-group">
              <label className="banner-new-filter-label">Price Range: ${priceRange[0]} - ${priceRange[1]}</label>
              <div className="banner-new-filter-dual-slider">
                <div className="banner-new-filter-slider-group">
                  <label className="banner-new-filter-slider-label">Min: ${priceRange[0]}</label>
                  <input
                    type="range"
                    min="5"
                    max="100"
                    value={priceRange[0]}
                    onChange={(e) => handlePriceRangeChange(e.target.value, 'min')}
                    className="banner-new-filter-range-slider"
                  />
                </div>
                <div className="banner-new-filter-slider-group">
                  <label className="banner-new-filter-slider-label">Max: ${priceRange[1]}</label>
                  <input
                    type="range"
                    min="5"
                    max="100"
                    value={priceRange[1]}
                    onChange={(e) => handlePriceRangeChange(e.target.value, 'max')}
                    className="banner-new-filter-range-slider"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="banner-new-filter-row">
            <div className="banner-new-filter-group banner-new-filter-calories-group">
              <label className="banner-new-filter-label">Calories Range: {caloriesRange[0]} - {caloriesRange[1]} kcal</label>
              <input
                type="range"
                min="50"
                max="1000"
                value={caloriesRange[0]}
                onChange={(e) => handleCaloriesRangeChange(e.target.value)}
                className="banner-new-filter-range-slider"
              />
            </div>
          </div>

          <div className="banner-new-filter-row">
            <div className="banner-new-filter-group banner-new-filter-spice-level-group">
              <label className="banner-new-filter-label">Spice Level: {spiceLevel} / 5</label>
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

          {/* Buttons */}
          <div className="banner-new-filter-row">
            <div className="banner-new-filter-actions">
              <button className="banner-new-filter-apply-btn" onClick={applyFilters}>Apply Filters</button>
              <button className="banner-new-filter-clear-btn" onClick={clearFilters}>Clear Filters</button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default BannerNewFilter;

