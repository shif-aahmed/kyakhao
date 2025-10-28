import React, { useRef } from "react";
import "./ExploreOurFood.css";

const ExploreOurFood = () => {
  const categories = [
    {
      id: 1,
      title: "Biryani Delights",
      description: "Discover fresh flavors",
      image:
        "https://images.unsplash.com/photo-1701579231305-d84d8af9a3fd?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1974",
    },
    {
      id: 2,
      title: "Pizza & Pasta",
      description: "Discover fresh flavors",
      image:
        "https://images.unsplash.com/photo-1552580715-4d9bc27f1e2f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2045",
    },
    {
      id: 3,
      title: "Healthy Bowls",
      description: "Discover fresh flavors",
      image:
        "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=300&h=200&fit=crop",
    },
    {
      id: 4,
      title: "Grilled Goodness",
      description: "Discover smoky flavors",
      image:
        "https://plus.unsplash.com/premium_photo-1663036447682-8f0d918adbed?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1974",
    },
    {
      id: 5,
      title: "Dessert Dreams",
      description: "Sweet treats for you",
      image:
        "https://images.unsplash.com/photo-1505253758473-96b7015fcd40?w=300&h=200&fit=crop",
    },
  ];

  const sliderRef = useRef(null);

  // optional: autoplay scroll
  React.useEffect(() => {
    const interval = setInterval(() => {
      if (sliderRef.current) {
        sliderRef.current.scrollBy({ left: 320, behavior: "smooth" });
        // if reached end, scroll back to start
        if (
          sliderRef.current.scrollLeft + sliderRef.current.offsetWidth >=
          sliderRef.current.scrollWidth
        ) {
          sliderRef.current.scrollTo({ left: 0, behavior: "smooth" });
        }
      }
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="explore-our-food-section">
      <div className="explore-food-container">
        <h2 className="explore-food-title">Explore Our Featured Categories</h2>

        <div className="explore-food-slider" ref={sliderRef}>
          {categories.map((category) => (
            <div key={category.id} className="explore-food-card">
              <div className="explore-food-image-container">
                <img
                  src={category.image}
                  alt={category.title}
                  className="explore-food-image"
                />
              </div>
              <div className="explore-food-content">
                <h3 className="explore-food-card-title">{category.title}</h3>
                <p className="explore-food-description">
                  {category.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExploreOurFood;
