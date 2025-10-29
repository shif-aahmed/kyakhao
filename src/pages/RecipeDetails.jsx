import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faClock, faUtensils } from '@fortawesome/free-solid-svg-icons';
import './RecipeDetails.css';

const RecipeDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const recipe = location.state?.recipe;

  if (!recipe) {
    return (
      <div style={{ padding: '2rem' }}>
        <h2>Recipe not found</h2>
        <button onClick={() => navigate(-1)}>Go Back</button>
      </div>
    );
  }

  // Fallbacks to render a complete page if some fields are missing
  const title = recipe.title || 'Delicious Recipe';
  const summary = recipe.summary || 'Enjoy this chef-curated dish with rich flavors and simple steps to cook at home.';
  const image = recipe.image;
  const rating = Number(recipe.rating || 4.6);
  const reviews = recipe.reviews || 245;
  const chef = recipe.chef || 'Chef Isabella';
  const cuisine = recipe.cuisine || 'Italian';
  const tags = recipe.tags || ['Italian', 'Spicy', 'Dinner', 'Vegetarian', 'Quick'];
  const prepTime = recipe.prepTime || '25 mins';
  const ingredients = recipe.ingredients || [
    'Penne Pasta (400g)',
    'Garlic (4 cloves, minced)',
    'Fresh Basil (1/2 cup, chopped)',
    'Olive Oil (3 tbsp)',
    'San Marzano Tomatoes (800g can, crushed)',
    'Red Chili Flakes (1/2 tsp, or to taste)',
    'Parmesan Cheese (1/4 cup, grated)',
    'Salt & Black Pepper (to taste)'
  ];
  const method = recipe.method || [
    'Cook the penne pasta according to package directions until al dente. Reserve 1 cup of pasta water, then drain the pasta.',
    'While pasta cooks, heat olive oil in a large skillet over medium heat. Add minced garlic and red chili flakes. Sauté for 1 minute until fragrant, being careful not to burn the garlic.',
    'Pour in the crushed San Marzano tomatoes, season with salt and pepper. Bring to a simmer, then reduce heat to low and cook for 15–20 minutes, stirring occasionally, until the sauce thickens.',
    'Add the drained pasta to the sauce. Toss well to coat. If the sauce is too thick, add a splash of the reserved pasta water until desired consistency is reached.',
    'Stir in the fresh chopped basil. Serve immediately, garnished with grated Parmesan cheese and extra basil leaves.'
  ];

  const related = (location.state?.related || []).filter(r => r.image && r.title).slice(0, 4);

  const renderStars = (value) => {
    const full = Math.floor(value);
    const arr = [];
    for (let i = 0; i < full; i++) arr.push(<FontAwesomeIcon key={`s${i}`} icon={faStar} className="recipe-details-star filled" />);
    while (arr.length < 5) arr.push(<FontAwesomeIcon key={`e${arr.length}`} icon={faStar} className="recipe-details-star empty" />);
    return arr;
  };

  return (
    <div className="recipe-details-page">
      <div className="recipe-details-hero">
        <button
          className="recipe-details-back-btn"
          onClick={() => navigate(-1)}
          aria-label="Go back"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <img src={image} alt={title} className="recipe-details-hero-img" />
        <div className="recipe-details-hero-info">
          <h1 className="recipe-details-title">{title}</h1>
          <div className="recipe-details-meta">
            <span className="recipe-details-rating">
              {renderStars(rating)}
              <span className="recipe-details-rating-value">{rating.toFixed(1)}</span>
              <span className="recipe-details-reviews">({reviews} Reviews)</span>
            </span>
            <span className="recipe-details-dot" />
            <span className="recipe-details-cuisine">{cuisine}</span>
          </div>
          <div className="recipe-details-tags">
            {tags.map((t, i) => (
              <span key={i} className="recipe-details-tag">{t}</span>
            ))}
          </div>
        </div>
      </div>

      <div className="recipe-details-container">
        <div className="recipe-details-header">
          <div className="recipe-details-author-meta">
            <span>By {chef}</span>
            <span className="recipe-details-meta-item"><FontAwesomeIcon icon={faClock} />{prepTime}</span>
            <span className="recipe-details-meta-item"><FontAwesomeIcon icon={faUtensils} />Serves 2</span>
          </div>
        </div>

        <p className="recipe-details-summary">{summary}</p>

        <div className="recipe-details-sections">
          <div className="recipe-details-card">
            <div className="recipe-details-card-header">Ingredients</div>
            <ul className="recipe-details-ingredients">
              {ingredients.map((ing, idx) => (
                <li key={idx} className="recipe-details-ingredient-item">
                  <span className="recipe-details-ingredient-bullet" />
                  <span className="recipe-details-ingredient-text">{ing}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="recipe-details-card">
            <div className="recipe-details-card-header">Method</div>
            <ol className="recipe-details-method">
              {method.map((step, idx) => (
                <li key={idx} className="recipe-details-method-step">{step}</li>
              ))}
            </ol>
          </div>
        </div>

        {related.length > 0 && (
          <div className="recipe-details-related-section">
            <h2 className="recipe-details-related-title">Related Dishes</h2>
            <div className="recipe-details-related-grid">
              {related.map((item, idx) => (
                <div key={item.id || idx} className="recipe-details-related-card">
                  <div className="recipe-details-related-card-image">
                    <img src={item.image} alt={item.title} />
                  </div>
                  <div className="recipe-details-related-card-body">
                    <div className="recipe-details-related-card-title">{item.title}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default RecipeDetails;


