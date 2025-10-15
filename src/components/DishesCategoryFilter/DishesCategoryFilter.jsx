import React, { useState } from 'react';
import './DishesCategoryFilter.css';

const DishesCategoryFilter = ({ onCategoryChange, onUploadClick }) => {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Reviews', 'Recipes', 'Travel', 'Culture', 'Trending'];

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
    onCategoryChange(category);
  };

  const handleUploadClick = () => {
    onUploadClick();
  };

  return (
    <div className="dishes-category-filter-container">
      <div className="dishes-category-buttons">
        {categories.map((category) => (
          <button
            key={category}
            className={`dishes-category-button ${activeCategory === category ? 'active' : ''}`}
            onClick={() => handleCategoryClick(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <button className="upload-video-button" onClick={handleUploadClick}>
        Upload Video
      </button>
    </div>
  );
};

export default DishesCategoryFilter;
