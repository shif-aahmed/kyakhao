import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import './FoodCard.css';

const FoodCard = ({ item }) => {
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <FontAwesomeIcon key={i} icon={faStar} className="star filled" />
      );
    }

    if (hasHalfStar) {
      stars.push(
        <FontAwesomeIcon key="half" icon={faStar} className="star half" />
      );
    }

    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <FontAwesomeIcon key={`empty-${i}`} icon={faStar} className="star empty" />
      );
    }

    return stars;
  };

  const getTagStyle = (tag) => {
    const tagStyles = {
      "Spicy": { background: "#ff4444", color: "white" },
      "Chef's Special": { background: "#2d5a27", color: "white" },
      "Vegetarian": { background: "#e8f5e8", color: "#2d5a27" },
      "Gluten-Free": { background: "#e3f2fd", color: "#1976d2" },
      "Vegan": { background: "#e8f5e8", color: "#2d5a27" },
      "Organic": { background: "#e8f5e8", color: "#2d5a27" }
    };
    return tagStyles[tag] || { background: "#f5f5f5", color: "#333" };
  };

  return (
    <div className="food-card">
      <div className="food-image">
        <img src={item.image} alt={item.title} />
      </div>
      
      <div className="food-content">
        <h3 className="food-title">{item.title}</h3>
        <p className="food-description">{item.description}</p>
        
        <div className="food-meta">
          <span className="restaurant-name">{item.restaurant}</span>
          <div className="rating">
            {renderStars(item.rating)}
            <span className="rating-value">{item.rating}</span>
          </div>
        </div>
        
        <div className="food-footer">
          <div className="food-tags">
            {item.tags.map((tag, index) => (
              <span
                key={index}
                className="food-tag"
                style={getTagStyle(tag)}
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="price">${item.price}</div>
        </div>
        
        <button className="add-to-cart-btn">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default FoodCard;
