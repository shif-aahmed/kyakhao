import React, { useState } from 'react';
import './PopularFusionTags.css';

const PopularFusionTags = () => {
  const [selectedTag, setSelectedTag] = useState('Korean BBQ');

  const fusionTags = [
    'Korean BBQ',
    'Mediterranean',
    'Spicy',
    'Vegan-Friendly',
    'Dessert Fusion',
    'Comfort Food',
    'Street Food',
    'Fine Dining',
    'Asian Fusion',
    'Mexican-Italian',
    'Indian-Chinese',
    'Thai-Mexican'
  ];

  const handleTagClick = (tag) => {
    setSelectedTag(tag);
    console.log('Selected tag:', tag);
  };

  return (
    <div className="popular-fusion-tags-container">
      <div className="fusion-tags-content">
        <div className="fusion-tags-header">
          <h2 className="fusion-tags-title">Popular Fusion Tags</h2>
          <p className="fusion-tags-subtitle">
            Find dishes by trending flavor combinations.
          </p>
        </div>
        
        <div className="fusion-tags-list">
          {fusionTags.map((tag, index) => (
            <button
              key={index}
              className={`fusion-tag ${selectedTag === tag ? 'active' : ''}`}
              onClick={() => handleTagClick(tag)}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularFusionTags;
