import React, { useState } from 'react';
import UniversalDropdown from '../UniversalDropdown/UniversalDropdown';
import './CookingSection.css';

const CookingSection = () => {
  const [selectedCuisine1, setSelectedCuisine1] = useState('');
  const [selectedCuisine2, setSelectedCuisine2] = useState('');
  const [selectedMood, setSelectedMood] = useState('');
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const cuisines = [
    'Italian', 'Mexican', 'Indian', 'Chinese', 'Japanese', 'Korean',
    'Thai', 'French', 'Spanish', 'Mediterranean', 'American', 'Middle Eastern'
  ];

  const moods = [
    'Adventurous', 'Comforting', 'Spicy', 'Light & Fresh', 'Rich & Indulgent',
    'Healthy', 'Quick & Easy', 'Elegant', 'Street Food', 'Traditional'
  ];

  const apiKey = '35b1e2a92ccf414f9cea47f95f4b4879'; // replace with your key

  const handleGenerateSuggestion = async () => {
    if (!selectedCuisine1 || !selectedCuisine2 || !selectedMood) return;

    setLoading(true);
    setError(null);
    setRecipe(null);

    // Combine both cuisines and mood into a query
    const query = `${selectedCuisine1} ${selectedCuisine2} ${selectedMood}`;

    try {
      const res = await fetch(
        `https://api.spoonacular.com/recipes/complexSearch?query=${encodeURIComponent(
          query
        )}&addRecipeInformation=true&number=1&apiKey=${apiKey}`
      );

      if (!res.ok) throw new Error('Failed to fetch recipe');
      const data = await res.json();

      if (data.results && data.results.length > 0) {
        const recipeData = data.results[0];
        setRecipe({
          title: recipeData.title,
          image: recipeData.image,
          summary:
            recipeData.summary?.replace(/<\/?[^>]+(>|$)/g, '') ||
            'No description available.',
          sourceUrl: recipeData.sourceUrl,
        });
      } else {
        setError('No recipes found for this combination. Showing static suggestion.');
        setRecipe(null);
      }
    } catch (err) {
      console.error('Error fetching recipe:', err);
      setError('Something went wrong while fetching recipes.');
      setRecipe(null);
    } finally {
      setLoading(false);
    }
  };

  // 🔹 Multiple static fallback recipes
  const fallbackRecipes = [
    {
      title: "Creamy Garlic Pasta",
      summary: "A comforting bowl of pasta tossed in a rich, creamy garlic sauce topped with parmesan. The smooth, velvety texture pairs perfectly with al dente noodles, making it a satisfying meal for any pasta lover. Garnish with parsley and serve with warm garlic bread for a restaurant-style experience at home.",
      image: "https://images.unsplash.com/photo-1546549032-9571cd6b27df?auto=format&fit=crop&q=80&w=687",
    },
    {
      title: "Thai Green Curry",
      summary: "Spicy and fragrant curry with tender chicken pieces simmered in creamy coconut milk. Packed with fresh herbs, lime, and Thai green chili, it brings an authentic taste of Thailand right to your table. Serve with jasmine rice or noodles for a perfectly balanced and aromatic meal.",
      image: "https://plus.unsplash.com/premium_photo-1723708848554-cc5bdb4e42c3?auto=format&fit=crop&q=80&w=720",
    },
    {
      title: "Avocado Toast Deluxe",
      summary: "Crispy toasted bread layered with smashed avocado, chili flakes, and a poached egg. The creamy avocado perfectly complements the crunch of the toast, while the egg adds a rich, runny texture. Add a drizzle of olive oil and lemon for freshness and an extra burst of flavor.",
      image: "https://images.unsplash.com/photo-1603046891726-36bfd957e0bf?auto=format&fit=crop&q=80&w=687",
    },
    {
      title: "Grilled Lemon Salmon",
      summary: "Perfectly grilled salmon with a squeeze of lemon and fresh herbs for a zesty flavor. The smoky, charred edges balance the bright citrus notes beautifully, creating a dish that’s both light and satisfying. Ideal for summer dinners or healthy meal prep throughout the week.",
      image: "https://images.unsplash.com/photo-1614627293113-e7e68163d958?auto=format&fit=crop&q=80&w=880",
    },
    {
      title: "Mango Smoothie Bowl",
      summary: "A refreshing tropical smoothie topped with granola, coconut flakes, and fresh fruit. The creamy mango base gives it a naturally sweet and silky taste, while the crunchy toppings add texture and nutrition. It’s a vibrant and energizing breakfast option that feels like sunshine in a bowl.",
      image: "https://plus.unsplash.com/premium_photo-1695411846305-f09ef98e1237?auto=format&fit=crop&q=80&w=687",
    },
    {
      title: "Caprese Salad",
      summary: "Fresh mozzarella, juicy tomatoes, and basil drizzled with balsamic glaze. This classic Italian salad bursts with freshness and color, offering a perfect balance of creamy, tangy, and sweet flavors. Serve it as a light appetizer or pair it with crusty bread for a quick, healthy lunch.",
      image: "https://images.unsplash.com/photo-1529312266912-b33cfce2eefd?auto=format&fit=crop&q=80&w=687",
    },
  ];

  // 🔹 Pick random fallback if no API recipe
  const randomFallback =
    fallbackRecipes[Math.floor(Math.random() * fallbackRecipes.length)];

  const displayRecipe = recipe || randomFallback;

  return (
    <div className="cooking-section-container" data-component="cooking-section">
      <div className="cooking-section-content">
        <div className="cooking-section-left">
          <div className="cooking-section-image">
            <img src={displayRecipe.image} alt={displayRecipe.title} />
          </div>
        </div>

        <div className="cooking-section-right">
          <div className="cooking-section-card">
            <h2 className="cooking-section-title">AI Fusion Suggestion</h2>
            <p className="cooking-section-subtitle">
              Let our intelligent chef bot craft your next bold flavor adventure.
              Select your preferred cuisines and mood!
            </p>

            <div className="cooking-section-form">
              <div className="form-row">
                <div className="form-group">
                  <UniversalDropdown
                    label="Cuisine 1"
                    value={selectedCuisine1}
                    options={cuisines}
                    onChange={setSelectedCuisine1}
                    placeholder="Select Cuisine"
                  />
                </div>

                <div className="form-group">
                  <UniversalDropdown
                    label="Cuisine 2"
                    value={selectedCuisine2}
                    options={cuisines}
                    onChange={setSelectedCuisine2}
                    placeholder="Select Cuisine"
                  />
                </div>
              </div>

              <div className="form-group full-width">
                <UniversalDropdown
                  label="Mood"
                  value={selectedMood}
                  options={moods}
                  onChange={setSelectedMood}
                  placeholder="Select Mood"
                />
              </div>

              <button
                className="generate-btn"
                onClick={handleGenerateSuggestion}
                disabled={
                  !selectedCuisine1 || !selectedCuisine2 || !selectedMood || loading
                }
              >
                {loading ? 'Loading...' : 'Generate Suggestion'}
              </button>
            </div>

            {(recipe || error) && (
              <div className="suggestion-card">
                <h3 className="suggestion-title">
                  Suggested Dish: {displayRecipe.title}
                </h3>
                <p className="suggestion-brief">{displayRecipe.summary}</p>
                {displayRecipe.detail && (
                  <p className="suggestion-detail">{displayRecipe.detail}</p>
                )}

                <div className="suggestion-actions">
                  {recipe?.sourceUrl ? (
                    <a
                      href={recipe.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="try-recipe-btn"
                    >
                      Try Recipe
                    </a>
                  ) : (
                    <button className="try-recipe-btn">Try Recipe</button>
                  )}
                  <button className="save-later-btn">Save for Later</button>
                </div>

                {error && <p className="error-text">{error}</p>}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookingSection;
