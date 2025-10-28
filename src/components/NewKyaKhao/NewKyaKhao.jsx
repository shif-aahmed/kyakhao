import React, { useRef, useEffect } from 'react';
import './NewKyaKhao.css';

const NewKyaKhao = () => {
  const newItems = [
    {
      id: 1,
      name: "Spicy Paneer Tikka",
      description: "Creamy paneer in a rich tomato gravy.",
      price: "₹380",
      image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 2,
      name: "Korean BBQ Tacos",
      description: "Fusion tacos with tender bulgogi.",
      price: "₹450",
      image: "https://images.unsplash.com/photo-1697384874147-4e9b086d144d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687"
    },
    {
      id: 3,
      name: "Avocado Toast",
      description: "Healthy and delicious breakfast.",
      price: "₹290",
      image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 4,
      name: "Matcha Latte",
      description: "Refreshing green tea latte.",
      price: "₹200",
      image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 5,
      name: "Butter Chicken Bowl",
      description: "Classic creamy curry perfection.",
      price: "₹420",
      image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2070"
    },
  ];

  const sliderRef = useRef(null);

  // optional auto-scroll effect
  useEffect(() => {
    const interval = setInterval(() => {
      if (sliderRef.current) {
        sliderRef.current.scrollBy({ left: 320, behavior: 'smooth' });
        if (
          sliderRef.current.scrollLeft + sliderRef.current.offsetWidth >=
          sliderRef.current.scrollWidth
        ) {
          sliderRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        }
      }
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="new-kyakhao">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">New on KyaKhao</h2>
          <a href="/explore" className="view-all-link">View All New Items</a>
        </div>

        {/* Changed only this part */}
        <div className="items-slider" ref={sliderRef}>
          {newItems.map((item) => (
            <div key={item.id} className="item-card">
              <div className="item-image">
                <img src={item.image} alt={item.name} />
              </div>
              <div className="item-info">
                <h3 className="item-name">{item.name}</h3>
                <p className="item-description">{item.description}</p>
                <div className="item-price">{item.price}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewKyaKhao;
