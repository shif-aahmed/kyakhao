import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faStar, 
  faHeart, 
  faShare, 
  faMinus, 
  faPlus,
  faArrowLeft,
  faArrowRight
} from '@fortawesome/free-solid-svg-icons';
import { 
  faFacebook,
  faTwitter,
  faInstagram,
  faPinterest
} from '@fortawesome/free-brands-svg-icons';
import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons';
import './DishDetail.css';

const DishDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [activeTab, setActiveTab] = useState('description');

  // Sample dish data - in real app, this would come from API
  const dishData = {
    1: {
      id: 1,
      name: "Spicy Mushroom Pasta",
      rating: 4.8,
      reviews: 127,
      price: 13.50,
      availability: "In Stock",
      description: "Aromatic mushrooms cooked in a creamy, spicy sauce with garlic and herbs. Perfectly tossed with pasta for a bold, flavorful bite!",
      images: [
        "https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1551892374-ecf8754cf8b0?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=800&h=600&fit=crop"
      ],
      restaurant: "Pasta Palace",
      cuisine: "Italian",
      prepTime: "25 mins",
      tags: ["Spicy", "Vegetarian", "Chef's Special"]
    },
    2: {
      id: 2,
      name: "Butter Chicken",
      rating: 4.7,
      reviews: 89,
      price: 18.99,
      availability: "In Stock",
      description: "Creamy tomato-based curry with tender chicken pieces, a North Indian classic that's rich in flavor and perfect with naan bread.",
      images: [
        "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1565299585323-38174c4a4b0e?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1551892374-ecf8754cf8b0?w=800&h=600&fit=crop"
      ],
      restaurant: "Punjabi Dhaba",
      cuisine: "Indian",
      prepTime: "30 mins",
      tags: ["Spicy", "Non-Vegetarian", "Popular"]
    },
    3: {
      id: 3,
      name: "Margherita Pizza",
      rating: 4.5,
      reviews: 156,
      price: 14.50,
      availability: "In Stock",
      description: "Classic Italian pizza with fresh mozzarella, tomato sauce, and basil. Simple yet delicious, made with authentic ingredients.",
      images: [
        "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1565299585323-38174c4a4b0e?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=800&h=600&fit=crop"
      ],
      restaurant: "Pizzeria Roma",
      cuisine: "Italian",
      prepTime: "20 mins",
      tags: ["Vegetarian", "Classic", "Fresh"]
    }
  };

  const dish = dishData[id];

  if (!dish) {
    return (
      <div className="dish-not-found">
        <h2>Dish not found</h2>
        <p>Dish ID: {id}</p>
        <button onClick={() => navigate('/')}>Go back to home</button>
      </div>
    );
  }

  const handleQuantityChange = (change) => {
    const newQuantity = quantity + change;
    if (newQuantity >= 1) {
      setQuantity(newQuantity);
    }
  };

  const handleAddToCart = () => {
    // Add to cart logic
    console.log('Added to cart:', { dish, quantity });
  };

  const handleWishlist = () => {
    setIsWishlisted(!isWishlisted);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: dish.name,
        text: `Check out ${dish.name} from ${dish.restaurant}`,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
    }
  };

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<FontAwesomeIcon key={i} icon={faStar} className="star filled" />);
    }

    if (hasHalfStar) {
      stars.push(<FontAwesomeIcon key="half" icon={faStar} className="star half" />);
    }

    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<FontAwesomeIcon key={`empty-${i}`} icon={faStar} className="star empty" />);
    }

    return stars;
  };

  return (
    <div className="dish-detail-page">
      {/* Hero Section */}
      <div className="dish-hero-section">
        <div className="hero-background">
          <img src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&h=600&fit=crop" alt="Kitchen background" />
        </div>
        <div className="hero-content">
          <h1 className="hero-title">Shop Details</h1>
          <div className="hero-subtitle">
            <p>Explore our menu and discover your next favorite dish. Have questions?</p>
            <p>We're here to assist you every step of the way!</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="dish-detail-container">
        <div className="dish-detail-content">
          {/* Left Side - Images */}
          <div className="dish-images-section">
            <div className="main-image-container">
              <img src={dish.images[0]} alt={dish.name} className="main-image" />
              <button className="nav-btn prev-btn">
                <FontAwesomeIcon icon={faArrowLeft} />
              </button>
              <button className="nav-btn next-btn">
                <FontAwesomeIcon icon={faArrowRight} />
              </button>
            </div>
            
            <div className="thumbnail-images">
              {dish.images.slice(0, 4).map((image, index) => (
                <div key={index} className="thumbnail">
                  <img src={image} alt={`${dish.name} ${index + 1}`} />
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Product Info */}
          <div className="dish-info-section">
            <h1 className="dish-name">{dish.name}</h1>
            
            <div className="rating-section">
              <div className="stars">
                {renderStars(dish.rating)}
              </div>
              <span className="rating-text">({dish.reviews} Reviews)</span>
              <a href="#reviews" className="write-review-link">Write a Review</a>
            </div>

            <div className="price-section">
              <span className="price">${dish.price}</span>
            </div>

            <div className="availability">
              <span className="availability-label">Availability:</span>
              <span className="availability-status">{dish.availability}</span>
            </div>

            <div className="description">
              <p>{dish.description}</p>
            </div>

            <div className="quantity-section">
              <label className="quantity-label">Quantity:</label>
              <div className="quantity-selector">
                <button 
                  className="quantity-btn minus"
                  onClick={() => handleQuantityChange(-1)}
                >
                  <FontAwesomeIcon icon={faMinus} />
                </button>
                <input 
                  type="number" 
                  value={quantity} 
                  readOnly
                  className="quantity-input"
                />
                <button 
                  className="quantity-btn plus"
                  onClick={() => handleQuantityChange(1)}
                >
                  <FontAwesomeIcon icon={faPlus} />
                </button>
              </div>
            </div>

            <div className="action-buttons">
              <button className="add-to-cart-btn" onClick={handleAddToCart}>
                Add To Cart
              </button>
              <button 
                className="wishlist-btn"
                onClick={handleWishlist}
              >
                <FontAwesomeIcon icon={isWishlisted ? faHeart : faHeartRegular} />
                Add To Wishlist
              </button>
            </div>

            <div className="social-share">
              <span className="social-label">Social Share:</span>
              <div className="social-icons">
                <button className="social-btn facebook">
                  <FontAwesomeIcon icon={faFacebook} />
                </button>
                <button className="social-btn twitter">
                  <FontAwesomeIcon icon={faTwitter} />
                </button>
                <button className="social-btn instagram">
                  <FontAwesomeIcon icon={faInstagram} />
                </button>
                <button className="social-btn pinterest">
                  <FontAwesomeIcon icon={faPinterest} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Product Information Section */}
      <div className="product-info-section">
        <div className="product-info-container">
          {/* Tabs */}
          <div className="product-tabs">
            <button 
              className={`tab-btn ${activeTab === 'description' ? 'active' : ''}`}
              onClick={() => setActiveTab('description')}
            >
              Product Description
            </button>
            <button 
              className={`tab-btn ${activeTab === 'specification' ? 'active' : ''}`}
              onClick={() => setActiveTab('specification')}
            >
              Specification
            </button>
            <button 
              className={`tab-btn ${activeTab === 'reviews' ? 'active' : ''}`}
              onClick={() => setActiveTab('reviews')}
            >
              (4) Reviews
            </button>
          </div>

          {/* Tab Content */}
          <div className="tab-content">
            {activeTab === 'description' && (
              <div className="description-content">
                <p className="product-description">
                  Indulge in the bold flavors of our Spicy Mushroom Pasta – a perfect fusion of heat and creaminess. Fresh mushrooms are sautéed with garlic, chili flakes, and herbs, then blended into a rich, spicy sauce that coats every strand of pasta. Ideal for those who crave a kick in every bite, this dish delivers warmth, comfort, and irresistible taste in one bowl.
                </p>
                
                <h3 className="key-features-title">Key Features</h3>
                <ul className="key-features-list">
                  <li>Loaded with fresh, sautéed mushrooms</li>
                  <li>Infused with chili flakes for a spicy kick</li>
                  <li>Flavored with garlic and aromatic herbs</li>
                  <li>Rich and creamy sauce perfectly coats the pasta</li>
                  <li>Vegetarian-friendly and full of bold taste</li>
                  <li>Ideal for lunch or dinner with a spicy twist</li>
                </ul>
              </div>
            )}

            {activeTab === 'specification' && (
              <div className="specification-content">
                <h3>Product Specifications</h3>
                <div className="spec-table">
                  <div className="spec-row">
                    <span className="spec-label">Cuisine Type:</span>
                    <span className="spec-value">Italian</span>
                  </div>
                  <div className="spec-row">
                    <span className="spec-label">Preparation Time:</span>
                    <span className="spec-value">25 minutes</span>
                  </div>
                  <div className="spec-row">
                    <span className="spec-label">Spice Level:</span>
                    <span className="spec-value">Medium-Hot</span>
                  </div>
                  <div className="spec-row">
                    <span className="spec-label">Dietary:</span>
                    <span className="spec-value">Vegetarian</span>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'reviews' && (
              <div className="reviews-content">
                <h3>Customer Reviews</h3>
                <div className="reviews-list">
                  <div className="review-item">
                    <div className="review-header">
                      <span className="reviewer-name">Sarah M.</span>
                      <div className="review-rating">★★★★★</div>
                    </div>
                    <p className="review-text">Absolutely delicious! The perfect balance of spice and creaminess.</p>
                  </div>
                  <div className="review-item">
                    <div className="review-header">
                      <span className="reviewer-name">John D.</span>
                      <div className="review-rating">★★★★☆</div>
                    </div>
                    <p className="review-text">Great flavor, though a bit too spicy for my taste. Still very good!</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DishDetail;
