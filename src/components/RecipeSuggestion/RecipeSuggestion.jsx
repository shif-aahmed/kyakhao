import React from 'react';
import { useNavigate } from 'react-router-dom';
import './RecipeSuggestion.css';

const RecipeSuggestion = ({ recipeSuggestion }) => {
  const navigate = useNavigate();
  // ✅ Static fallback suggestions (used if API fails or not yet called)
  const fallbackSuggestions = [
    {
      title: "Creamy Garlic Pasta",
      summary: "A comforting bowl of pasta tossed in a rich, creamy garlic sauce topped with parmesan. The smooth, velvety texture pairs perfectly with al dente noodles, making it a satisfying meal for any pasta lover. Garnish with parsley and serve with warm garlic bread for a restaurant-style experience at home.",
      image: "https://images.unsplash.com/photo-1546549032-9571cd6b27df?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687",
    },
    {
      title: "Thai Green Curry",
      summary: "Spicy and fragrant curry with tender chicken pieces simmered in creamy coconut milk. Packed with fresh herbs, lime, and Thai green chili, it brings an authentic taste of Thailand right to your table. Serve with jasmine rice or noodles for a perfectly balanced and aromatic meal.",
      image: "https://plus.unsplash.com/premium_photo-1723708848554-cc5bdb4e42c3?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=720",
    },
    {
      title: "Avocado Toast Deluxe",
      summary: "Crispy toasted bread layered with smashed avocado, chili flakes, and a poached egg. The creamy avocado perfectly complements the crunch of the toast, while the egg adds a rich, runny texture. Add a drizzle of olive oil and lemon for freshness and an extra burst of flavor.",
      image: "https://images.unsplash.com/photo-1603046891726-36bfd957e0bf?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687",
    },
    {
      title: "Grilled Lemon Salmon",
      summary: "Perfectly grilled salmon with a squeeze of lemon and fresh herbs for a zesty flavor. The smoky, charred edges balance the bright citrus notes beautifully, creating a dish that’s both light and satisfying. Ideal for summer dinners or healthy meal prep throughout the week.",
      image: "https://images.unsplash.com/photo-1614627293113-e7e68163d958?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=880",
    },
    {
      title: "Mango Smoothie Bowl",
      summary: "A refreshing tropical smoothie topped with granola, coconut flakes, and fresh fruit. The creamy mango base gives it a naturally sweet and silky taste, while the crunchy toppings add texture and nutrition. It’s a vibrant and energizing breakfast option that feels like sunshine in a bowl.",
      image: "https://plus.unsplash.com/premium_photo-1695411846305-f09ef98e1237?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687",
    },
    {
      title: "Caprese Salad",
      summary: "Fresh mozzarella, juicy tomatoes, and basil drizzled with balsamic glaze. This classic Italian salad bursts with freshness and color, offering a perfect balance of creamy, tangy, and sweet flavors. Serve it as a light appetizer or pair it with crusty bread for a quick, healthy lunch.",
      image: "https://images.unsplash.com/photo-1529312266912-b33cfce2eefd?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687",
    }
    ];
    

  // ✅ Pick the first fallback suggestion if API not yet available
  const displaySuggestion = recipeSuggestion || fallbackSuggestions[0];

  return (
    <div className="recipe-suggestion">
      <div className="recipe-suggestion-card">
        <div className="recipe-suggestion-image-section">
          <img 
            src={displaySuggestion.image}
            alt={displaySuggestion.title}
            className="recipe-suggestion-main-image"
          />
        </div>

        <div className="recipe-suggestion-content">
          <div className="recipe-suggestion-label">
            {recipeSuggestion ? "Best Match" : "Chef’s Pick"}
          </div>
          <h2 className="recipe-suggestion-title">{displaySuggestion.title}</h2>
          <p className="recipe-suggestion-description">{displaySuggestion.summary}</p>
          <div
            className="recipe-suggestion-cta"
            onClick={() =>
              navigate('/recipe', {
                state: {
                  recipe: {
                    title: displaySuggestion.title,
                    image: displaySuggestion.image,
                    summary: displaySuggestion.summary,
                  },
                  related: fallbackSuggestions.filter(r => r.title !== displaySuggestion.title),
                },
              })
            }
          >
            Cook This Now
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeSuggestion;
