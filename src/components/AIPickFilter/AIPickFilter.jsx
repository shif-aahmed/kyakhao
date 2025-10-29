import React, { useState } from 'react';
import './AIPickFilter.css';

const AIPickFilter = ({ setRecipeSuggestion, setFilteredRecipes }) => {
  const [selectedMood, setSelectedMood] = useState('Happy');
  const [moodSlider, setMoodSlider] = useState(25);
  const [dietaryNeeds, setDietaryNeeds] = useState({
    vegetarian: true,
    vegan: false,
    glutenFree: false,
    keto: false
  });
  const [selectedCuisine, setSelectedCuisine] = useState('Italian');
  const [flavorProfiles, setFlavorProfiles] = useState({
    spicy: false,
    sweet: false,
    savory: true,
    tangy: false
  });
  const [loading, setLoading] = useState(false);

  // ✅ Local static fallback suggestions (same as in RecipeSuggestion)
  const fallbackSuggestions = [
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
    }
  ];

  const handleMoodChange = (mood) => setSelectedMood(mood);
  const handleDietaryChange = (diet) => {
    setDietaryNeeds(prev => ({ ...prev, [diet]: !prev[diet] }));
  };
  const handleCuisineChange = (cuisine) => setSelectedCuisine(cuisine);
  const handleFlavorChange = (flavor) => {
    setFlavorProfiles(prev => ({ ...prev, [flavor]: !prev[flavor] }));
  };
  const handleSliderChange = (value) => setMoodSlider(value);

  const applyFilters = async () => {
    setLoading(true);
    const apiKey = '35b1e2a92ccf414f9cea47f95f4b4879'; // your Spoonacular key

    // Build query dynamically
    let query = selectedCuisine;
    if (flavorProfiles.spicy) query += ',spicy';
    if (flavorProfiles.sweet) query += ',sweet';
    if (flavorProfiles.savory) query += ',savory';
    if (flavorProfiles.tangy) query += ',tangy';

    let diet = '';
    if (dietaryNeeds.vegan) diet = 'vegan';
    else if (dietaryNeeds.vegetarian) diet = 'vegetarian';
    else if (dietaryNeeds.keto) diet = 'ketogenic';
    else if (dietaryNeeds.glutenFree) diet = 'gluten free';

    try {
      const res = await fetch(
        `https://api.spoonacular.com/recipes/complexSearch?query=${query}&diet=${diet}&number=5&addRecipeInformation=true&apiKey=${apiKey}`
      );
      const data = await res.json();

      if (data.results && data.results.length > 0) {
        // Set main suggestion (first recipe)
        const mainRecipe = data.results[0];
        setRecipeSuggestion({
          title: mainRecipe.title,
          image: mainRecipe.image,
          summary: mainRecipe.summary?.replace(/<\/?[^>]+(>|$)/g, '') || 'No description available.',
        });

        // Set filtered recipes for cards (all recipes)
        const recipesForCards = data.results.map(recipe => ({
          id: recipe.id,
          title: recipe.title,
          description: recipe.summary?.replace(/<\/?[^>]+(>|$)/g, '').substring(0, 100) + '...' || 'A delicious dish you\'ll love to try!',
          image: recipe.image,
        }));
        setFilteredRecipes(recipesForCards);
      } else {
        // No API results — use fallback recipes
        const randomRecipe = fallbackSuggestions[Math.floor(Math.random() * fallbackSuggestions.length)];
        setRecipeSuggestion(randomRecipe);
        
        // Use fallback suggestions for cards
        const fallbackCards = fallbackSuggestions.slice(0, 3).map((recipe, index) => ({
          id: index + 1,
          title: recipe.title,
          description: recipe.summary.substring(0, 100) + '...',
          image: recipe.image,
        }));
        setFilteredRecipes(fallbackCards);
      }
    } catch (err) {
      console.error('Error fetching recipe:', err);
      // API failed — use fallback recipes
      const randomRecipe = fallbackSuggestions[Math.floor(Math.random() * fallbackSuggestions.length)];
      setRecipeSuggestion(randomRecipe);
      
      // Use fallback suggestions for cards
      const fallbackCards = fallbackSuggestions.slice(0, 3).map((recipe, index) => ({
        id: index + 1,
        title: recipe.title,
        description: recipe.summary.substring(0, 100) + '...',
        image: recipe.image,
      }));
      setFilteredRecipes(fallbackCards);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="ai-pick-filter">
      <div className="ai-pick-filter-card">
        <h2 className="ai-pick-filter-title">Tell Us What You Crave</h2>

        <div className="ai-pick-filter-content">
          <div className="ai-pick-filter-row">
            {/* Mood */}
            <div className="ai-pick-filter-section">
              <h3 className="ai-pick-filter-section-title">Your Current Mood</h3>
              <div className="ai-pick-filter-mood-options">
                {['Happy', 'Energetic', 'Relaxed', 'Adventurous'].map(mood => (
                  <div
                    key={mood}
                    className={`ai-pick-filter-mood-option ${selectedMood === mood ? 'selected' : ''}`}
                    onClick={() => handleMoodChange(mood)}
                  >
                    <span className="ai-pick-filter-mood-label">{mood}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Dietary Needs */}
            <div className="ai-pick-filter-section">
              <h3 className="ai-pick-filter-section-title">Dietary Needs</h3>
              <div className="ai-pick-filter-checkboxes">
                {Object.keys(dietaryNeeds).map(diet => (
                  <label key={diet} className="ai-pick-filter-checkbox">
                    <input
                      type="checkbox"
                      checked={dietaryNeeds[diet]}
                      onChange={() => handleDietaryChange(diet)}
                    />
                    <span className="ai-pick-filter-checkmark"></span>
                    {diet.charAt(0).toUpperCase() + diet.slice(1)}
                  </label>
                ))}
              </div>
            </div>

            {/* Cuisine */}
            <div className="ai-pick-filter-section">
              <h3 className="ai-pick-filter-section-title">Cuisine Type</h3>
              <div className="ai-pick-filter-cuisine-buttons">
                {['Italian', 'Asian', 'Mexican', 'Indian', 'American', 'Mediterranean'].map(cuisine => (
                  <button
                    key={cuisine}
                    className={`ai-pick-filter-cuisine-btn ${selectedCuisine === cuisine ? 'selected' : ''}`}
                    onClick={() => handleCuisineChange(cuisine)}
                  >
                    {cuisine}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Flavor Profiles */}
          <div className="ai-pick-filter-section">
            <h3 className="ai-pick-filter-section-title">Flavor Profiles</h3>
            <div className="ai-pick-filter-flavor-checkboxes">
              {Object.keys(flavorProfiles).map(flavor => (
                <label key={flavor} className="ai-pick-filter-checkbox">
                  <input
                    type="checkbox"
                    checked={flavorProfiles[flavor]}
                    onChange={() => handleFlavorChange(flavor)}
                  />
                  <span className="ai-pick-filter-checkmark"></span>
                  {flavor.charAt(0).toUpperCase() + flavor.slice(1)}
                </label>
              ))}
            </div>
          </div>
        </div>

        <button className="ai-pick-filter-apply-btn" onClick={applyFilters} disabled={loading}>
          {loading ? 'Loading...' : 'Get Suggestions'}
        </button>
      </div>
    </div>
  );
};

export default AIPickFilter;
