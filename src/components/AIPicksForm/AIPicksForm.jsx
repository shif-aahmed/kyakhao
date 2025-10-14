import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faSun, 
  faCloud, 
  faLightbulb,
  faHeart,
  faBookmark,
  faStar,
  faClock
} from '@fortawesome/free-regular-svg-icons';
import { 
  faBolt,
  faShoppingCart,
  faArrowLeft
} from '@fortawesome/free-solid-svg-icons';
import './AIPicksForm.css';

const AIPicksForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [mood, setMood] = useState('Happy');
  const [dietary, setDietary] = useState(['Vegetarian']);
  const [cuisine, setCuisine] = useState('Italian');
  const [flavors, setFlavors] = useState(['Savory']);
  const [timeOfDay, setTimeOfDay] = useState('Lunch');
  const [aiSuggestions, setAiSuggestions] = useState([]);
  const [bestMatch, setBestMatch] = useState(null);
  const [favorites, setFavorites] = useState([]);

  const moodOptions = [
    { id: 'Happy', icon: faSun, color: '#FF8C00' },
    { id: 'Energetic', icon: faBolt, color: '#333' },
    { id: 'Relaxed', icon: faCloud, color: '#333' },
    { id: 'Adventurous', icon: faLightbulb, color: '#333' }
  ];

  const dietaryOptions = ['Vegetarian', 'Gluten-Free', 'Vegan', 'Keto'];
  const cuisineOptions = ['Italian', 'Asian', 'Mexican', 'Indian', 'American', 'Mediterranean'];
  const flavorOptions = ['Spicy', 'Sweet', 'Savory', 'Tangy'];
  const timeOptions = ['Breakfast', 'Lunch', 'Dinner', 'Snack'];

  // Large database of food items for AI filtering
  const foodDatabase = [
    {
      id: 1,
      name: "Mediterranean Salmon with Roasted Vegetables",
      restaurant: "Fresh Catch Bistro",
      rating: 4.9,
      price: "$24.99",
      image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=400&h=300&fit=crop",
      matchScore: 98,
      description: "Flaky baked salmon seasoned with herbs, served alongside a colorful medley of roasted zucchini, bell peppers, and cherry tomatoes, drizzled with lemon-dill sauce. A perfect healthy and satisfying meal.",
      tags: ["Healthy", "Mediterranean", "High Protein"],
      cuisine: "Mediterranean",
      dietary: ["Gluten-Free", "Keto"],
      flavors: ["Savory", "Tangy"],
      timeOfDay: ["Lunch", "Dinner"],
      mood: ["Happy", "Relaxed"]
    },
    {
      id: 2,
      name: "Spicy Tofu Stir-fry",
      restaurant: "Asian Fusion",
      rating: 4.6,
      price: "$16.99",
      image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=300&h=200&fit=crop",
      matchScore: 92,
      description: "Crispy tofu with fresh vegetables in a spicy sauce",
      cuisine: "Asian",
      dietary: ["Vegetarian", "Vegan", "Gluten-Free"],
      flavors: ["Spicy"],
      timeOfDay: ["Lunch", "Snack"],
      mood: ["Energetic", "Adventurous"]
    },
    {
      id: 3,
      name: "Chicken Enchiladas",
      restaurant: "Casa Mexicana",
      rating: 4.7,
      price: "$18.99",
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=300&h=200&fit=crop",
      matchScore: 89,
      description: "Traditional Mexican enchiladas with tender chicken",
      cuisine: "Mexican",
      dietary: ["Gluten-Free"],
      flavors: ["Spicy", "Savory"],
      timeOfDay: ["Lunch", "Dinner"],
      mood: ["Happy", "Energetic"]
    },
    {
      id: 4,
      name: "Beef & Broccoli",
      restaurant: "Golden Dragon",
      rating: 4.5,
      price: "$19.99",
      image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=300&h=200&fit=crop",
      matchScore: 87,
      description: "Tender beef with fresh broccoli in savory sauce",
      cuisine: "Asian",
      dietary: ["Keto"],
      flavors: ["Savory"],
      timeOfDay: ["Dinner"],
      mood: ["Happy", "Relaxed"]
    },
    {
      id: 5,
      name: "Creamy Tomato Pasta",
      restaurant: "Bella Italia",
      rating: 4.4,
      price: "$14.99",
      image: "https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?w=300&h=200&fit=crop",
      matchScore: 85,
      description: "Rich and creamy tomato pasta",
      cuisine: "Italian",
      dietary: ["Vegetarian"],
      flavors: ["Sweet", "Savory"],
      timeOfDay: ["Breakfast", "Dinner"],
      mood: ["Happy", "Relaxed"]
    },
    {
      id: 6,
      name: "Lentil Soup with Crusty Bread",
      restaurant: "Healthy Bites",
      rating: 4.3,
      price: "$12.99",
      image: "https://images.unsplash.com/photo-1547592180-85f173990554?w=300&h=200&fit=crop",
      matchScore: 83,
      description: "Hearty lentil soup served with fresh bread",
      cuisine: "Indian",
      dietary: ["Vegetarian", "Vegan"],
      flavors: ["Tangy", "Savory"],
      timeOfDay: ["Breakfast", "Snack"],
      mood: ["Relaxed"]
    },
    {
      id: 7,
      name: "Margherita Pizza",
      restaurant: "Bella Italia",
      rating: 4.8,
      price: "$12.99",
      image: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=300&h=200&fit=crop",
      matchScore: 95,
      description: "Classic Italian pizza with fresh mozzarella and basil",
      cuisine: "Italian",
      dietary: ["Vegetarian"],
      flavors: ["Savory"],
      timeOfDay: ["Lunch", "Dinner"],
      mood: ["Happy", "Relaxed"]
    },
    {
      id: 8,
      name: "Pasta Carbonara",
      restaurant: "Roma Trattoria",
      rating: 4.6,
      price: "$15.99",
      image: "https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?w=300&h=200&fit=crop",
      matchScore: 88,
      description: "Creamy pasta with pancetta and parmesan cheese",
      cuisine: "Italian",
      dietary: ["Gluten-Free"],
      flavors: ["Savory"],
      timeOfDay: ["Dinner"],
      mood: ["Happy", "Relaxed"]
    },
    {
      id: 9,
      name: "Risotto Milanese",
      restaurant: "Casa Milano",
      rating: 4.7,
      price: "$18.99",
      image: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=300&h=200&fit=crop",
      matchScore: 82,
      description: "Creamy saffron risotto with parmesan",
      cuisine: "Italian",
      dietary: ["Vegetarian", "Gluten-Free"],
      flavors: ["Savory"],
      timeOfDay: ["Dinner"],
      mood: ["Happy", "Relaxed"]
    },
    {
      id: 10,
      name: "Chicken Tikka Masala",
      restaurant: "Spice Palace",
      rating: 4.8,
      price: "$17.99",
      image: "https://images.unsplash.com/photo-1563379091339-03246963d4d0?w=300&h=200&fit=crop",
      matchScore: 91,
      description: "Tender chicken in creamy tomato curry",
      cuisine: "Indian",
      dietary: ["Gluten-Free"],
      flavors: ["Spicy", "Savory"],
      timeOfDay: ["Lunch", "Dinner"],
      mood: ["Energetic", "Adventurous"]
    },
    {
      id: 11,
      name: "Vegetable Biryani",
      restaurant: "Spice Palace",
      rating: 4.5,
      price: "$16.99",
      image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=300&h=200&fit=crop",
      matchScore: 86,
      description: "Fragrant basmati rice with mixed vegetables",
      cuisine: "Indian",
      dietary: ["Vegetarian", "Vegan"],
      flavors: ["Spicy", "Savory"],
      timeOfDay: ["Lunch", "Dinner"],
      mood: ["Happy", "Energetic"]
    },
    {
      id: 12,
      name: "Pad Thai",
      restaurant: "Thai Garden",
      rating: 4.7,
      price: "$15.99",
      image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=300&h=200&fit=crop",
      matchScore: 89,
      description: "Stir-fried rice noodles with shrimp and vegetables",
      cuisine: "Asian",
      dietary: ["Gluten-Free"],
      flavors: ["Spicy", "Sweet", "Tangy"],
      timeOfDay: ["Lunch", "Dinner"],
      mood: ["Energetic", "Adventurous"]
    },
    {
      id: 13,
      name: "Fish Tacos",
      restaurant: "Casa Mexicana",
      rating: 4.4,
      price: "$14.99",
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=300&h=200&fit=crop",
      matchScore: 84,
      description: "Grilled fish with cabbage slaw in corn tortillas",
      cuisine: "Mexican",
      dietary: ["Gluten-Free"],
      flavors: ["Spicy", "Tangy"],
      timeOfDay: ["Lunch", "Dinner"],
      mood: ["Happy", "Energetic"]
    },
    {
      id: 14,
      name: "Caesar Salad",
      restaurant: "Garden Fresh",
      rating: 4.2,
      price: "$13.99",
      image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=300&h=200&fit=crop",
      matchScore: 78,
      description: "Crisp romaine lettuce with parmesan and croutons",
      cuisine: "American",
      dietary: ["Vegetarian"],
      flavors: ["Savory", "Tangy"],
      timeOfDay: ["Lunch"],
      mood: ["Happy", "Relaxed"]
    },
    {
      id: 15,
      name: "BBQ Ribs",
      restaurant: "Smokehouse",
      rating: 4.9,
      price: "$22.99",
      image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=300&h=200&fit=crop",
      matchScore: 93,
      description: "Slow-cooked ribs with tangy BBQ sauce",
      cuisine: "American",
      dietary: ["Keto"],
      flavors: ["Spicy", "Sweet", "Savory"],
      timeOfDay: ["Dinner"],
      mood: ["Happy", "Energetic"]
    }
  ];

  const handleDietaryChange = (option) => {
    setDietary(prev => 
      prev.includes(option) 
        ? prev.filter(item => item !== option)
        : [...prev, option]
    );
  };

  const handleCuisineChange = (option) => {
    setCuisine(option);
  };

  const handleFlavorChange = (option) => {
    setFlavors(prev => 
      prev.includes(option) 
        ? prev.filter(item => item !== option)
        : [...prev, option]
    );
  };

  const generateFilteredSuggestions = () => {
    // Score all items based on how well they match user preferences
    let scoredSuggestions = foodDatabase.map(item => {
      let matchCount = 0;
      let totalFilters = 0;
      
      // Count cuisine match
      if (cuisine && cuisine !== 'All Cuisines') {
        totalFilters++;
        if (item.cuisine === cuisine) matchCount++;
      }
      
      // Count dietary matches
      if (dietary.length > 0) {
        totalFilters++;
        if (dietary.some(diet => item.dietary && item.dietary.includes(diet))) matchCount++;
      }
      
      // Count flavor matches
      if (flavors.length > 0) {
        totalFilters++;
        if (flavors.some(flavor => item.flavors && item.flavors.includes(flavor))) matchCount++;
      }
      
      // Count time of day match
      if (timeOfDay) {
        totalFilters++;
        if (item.timeOfDay && item.timeOfDay.includes(timeOfDay)) matchCount++;
      }
      
      // Count mood match
      if (mood) {
        totalFilters++;
        if (item.mood && item.mood.includes(mood)) matchCount++;
      }
      
      // Calculate match percentage
      const matchPercentage = totalFilters > 0 ? (matchCount / totalFilters) * 100 : 100;
      const baseScore = Math.floor(matchPercentage);
      const randomBonus = Math.floor(Math.random() * 10);
      
      return {
        ...item,
        matchScore: Math.min(100, baseScore + randomBonus)
      };
    });
    
    // Sort by match score (highest first)
    scoredSuggestions.sort((a, b) => b.matchScore - a.matchScore);
    
    // Always return at least 8 suggestions for the grid
    return scoredSuggestions.slice(0, 8);
  };

  const handleSubmit = () => {
    console.log('Form submitted:', { mood, dietary, cuisine, flavors, timeOfDay });
    
    // Generate filtered suggestions based on user preferences
    const filteredSuggestions = generateFilteredSuggestions();
    
    setCurrentStep(2);
    setAiSuggestions(filteredSuggestions);
    
    // Set best match (highest score)
    const best = filteredSuggestions.reduce((prev, current) => 
      prev.matchScore > current.matchScore ? prev : current
    );
    setBestMatch(best);
  };

  const handleOrderNow = (item) => {
    alert(`Ordering ${item.name} from ${item.restaurant}!`);
  };

  const handleAddToFavorites = (item) => {
    setFavorites(prev => [...prev, item]);
    alert(`${item.name} added to favorites!`);
  };

  const handleReviewLater = (item) => {
    alert(`${item.name} saved for review later!`);
  };

  const resetForm = () => {
    setCurrentStep(1);
    setAiSuggestions([]);
    setBestMatch(null);
  };

  // Step 1: Form
  const renderStep1 = () => (
    <div className="ai-picks-form">
      <div className="form-container">
        <h2 className="form-title">Tell Us What You Crave</h2>
        
        <div className="form-cards">
          {/* Mood Card */}
          <div className="form-card">
            <h3 className="card-title">Your Current Mood</h3>
            <div className="mood-options">
              {moodOptions.map((option) => (
                <div key={option.id} className="mood-option" onClick={() => setMood(option.id)}>
                  <FontAwesomeIcon 
                    icon={option.icon} 
                    className={`mood-icon ${mood === option.id ? 'active' : ''}`}
                  />
                  <span 
                    className={`mood-label ${mood === option.id ? 'active' : ''}`}
                  >
                    {option.id}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Dietary Needs Card */}
          <div className="form-card">
            <h3 className="card-title">Dietary Needs</h3>
            <div className="checkbox-grid">
              {dietaryOptions.map((option) => (
                <label key={option} className="checkbox-item">
                  <input
                    type="checkbox"
                    checked={dietary.includes(option)}
                    onChange={() => handleDietaryChange(option)}
                    className="checkbox-input"
                  />
                  <span className="checkbox-label">{option}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Cuisine Type Card - Now contains Time of Day content */}
          <div className="form-card">
            <h3 className="card-title">Time of Day</h3>
            <div className="time-options">
              {timeOptions.map((option) => (
                <button
                  key={option}
                  className={`time-button ${timeOfDay === option ? 'selected' : ''}`}
                  onClick={() => setTimeOfDay(option)}
                >
                  <FontAwesomeIcon icon={faClock} className="time-icon" />
                  {option}
                </button>
              ))}
            </div>
          </div>

          {/* Flavor Profiles Card - Now contains Cuisine Type content */}
          <div className="form-card flavor-card">
            <h3 className="card-title">Cuisine Type</h3>
            <div className="cuisine-buttons">
              {cuisineOptions.map((option) => (
                <button
                  key={option}
                  className={`cuisine-button ${cuisine === option ? 'selected' : ''}`}
                  onClick={() => handleCuisineChange(option)}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>

          {/* Time of Day Card - Now contains Flavor Profiles content */}
          <div className="form-card">
            <h3 className="card-title">Flavor Profiles</h3>
            <div className="flavor-checkboxes">
              {flavorOptions.map((option) => (
                <label key={option} className="flavor-checkbox-item">
                  <input
                    type="checkbox"
                    checked={flavors.includes(option)}
                    onChange={() => handleFlavorChange(option)}
                    className="checkbox-input"
                  />
                  <span className="checkbox-label">{option}</span>
                </label>
              ))}
            </div>
          </div>
        </div>

        <button className="submit-button" onClick={handleSubmit}>
          Apply Filters & Get Suggestions
        </button>
      </div>
    </div>
  );

  // Step 2: AI Suggestions
  const renderStep2 = () => (
    <div className="ai-suggestions">
      <div className="suggestions-container">
        <div className="suggestions-header">
          <button className="back-button" onClick={resetForm}>
            <FontAwesomeIcon icon={faArrowLeft} />
            Back to Preferences
          </button>
          <h2 className="suggestions-title">AI Generated Suggestions</h2>
          <p className="suggestions-subtitle">Based on your preferences: {mood} mood, {cuisine} cuisine, {timeOfDay}</p>
        </div>

        {/* Best Match Section */}
        <div className="best-match-section">
          {bestMatch && (
            <div className="best-match-card">
              <div className="best-match-image">
                <img src={bestMatch.image} alt={bestMatch.name} />
                <div className="best-match-badge">Best Match</div>
                <div className="best-match-tags">
                  {bestMatch.tags && bestMatch.tags.map((tag, index) => (
                    <span key={index} className="best-match-tag">{tag}</span>
                  ))}
                </div>
              </div>
              <div className="best-match-content">
                <h3 className="best-match-name">{bestMatch.name}</h3>
                <p className="best-match-description">{bestMatch.description}</p>
                <button 
                  className="best-match-cook-button"
                  onClick={() => handleOrderNow(bestMatch)}
                >
                  Cook This Now
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Other Suggestions Grid */}
        <div className="other-suggestions-container">
          {/* First Row - 3 cards with descriptions */}
          <div className="other-suggestions-row">
            {aiSuggestions.slice(1, 4).map((item, index) => (
              <div key={item.id} className="other-suggestion-card top-row">
                <div className="other-suggestion-image">
                  <img src={item.image} alt={item.name} />
                </div>
                <div className="other-suggestion-content">
                  <h4 className="other-suggestion-name">{item.name}</h4>
                  <p className="other-suggestion-description">{item.description}</p>
                  <button 
                    className="other-suggestion-button view-details"
                    onClick={() => handleOrderNow(item)}
                  >
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Second Row - 5 cards without descriptions */}
          <div className="other-suggestions-row">
            {aiSuggestions.slice(4).map((item, index) => (
              <div key={item.id} className="other-suggestion-card bottom-row">
                <div className="other-suggestion-image">
                  <img src={item.image} alt={item.name} />
                </div>
                <div className="other-suggestion-content">
                  <h4 className="other-suggestion-name">{item.name}</h4>
                  <button 
                    className="other-suggestion-button try-this"
                    onClick={() => handleOrderNow(item)}
                  >
                    Try This
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  return currentStep === 1 ? renderStep1() : renderStep2();
};

export default AIPicksForm;