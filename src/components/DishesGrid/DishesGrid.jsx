import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faShare, faPlay } from '@fortawesome/free-solid-svg-icons';
import './DishesGrid.css';

const DishesGrid = ({ selectedCategory = 'All', onVideoClick }) => {
  const vlogs = [
    {
      id: 1,
      title: "Ultimate Street Food Tour in Bangkok",
      author: "Chef Anya",
      views: "2.5M views",
      timeAgo: "1 week ago",
      duration: "15:30",
      thumbnail: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      likes: 1200,
      category: "Travel"
    },
    {
      id: 2,
      title: "Authentic Italian Pizza Recipe from Scratch",
      author: "Marco's Kitchen",
      views: "1.1M views",
      timeAgo: "3 days ago",
      duration: "08:45",
      thumbnail: "https://images.unsplash.com/photo-1551892374-ecf8754cf8b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      likes: 890,
      category: "Recipes"
    },
    {
      id: 3,
      title: "Exploring the Rich Flavors of Indian Cuisine",
      author: "Taste Explorer",
      views: "980K views",
      timeAgo: "5 days ago",
      duration: "20:00",
      thumbnail: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      likes: 1100,
      category: "Culture"
    },
    {
      id: 4,
      title: "Top 10 Viral Food Challenges You Must Try",
      author: "Foodie Nation",
      views: "2.2M views",
      timeAgo: "2 days ago",
      duration: "10:15",
      thumbnail: "https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      likes: 1500,
      category: "Trending"
    },
    {
      id: 5,
      title: "Best Coffee Shops in New York City",
      author: "Urban Brews",
      views: "750K views",
      timeAgo: "4 days ago",
      duration: "12:00",
      thumbnail: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      likes: 950,
      category: "Reviews"
    },
    {
      id: 6,
      title: "Quick & Healthy Weeknight Meals",
      author: "Nutrition Hub",
      views: "600K views",
      timeAgo: "6 days ago",
      duration: "07:30",
      thumbnail: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      likes: 650,
      category: "Recipes"
    }
  ];

  // Filter vlogs based on selected category
  const filteredVlogs = selectedCategory === 'All' 
    ? vlogs 
    : vlogs.filter(vlog => vlog.category === selectedCategory);

  return (
    <div className="dishes-grid-container">
      <div className="dishes-grid-header">
        <h2 className="dishes-grid-title">
          {selectedCategory === 'All' ? 'All Vlogs' : `${selectedCategory} Vlogs`}
        </h2>
      </div>
      
      <div className="dishes-grid">
        {filteredVlogs.map((vlog) => (
          <div key={vlog.id} className="dish-card">
            <div className="dish-thumbnail">
              <img src={vlog.thumbnail} alt={vlog.title} />
              <div className="dish-duration">{vlog.duration}</div>
              <div className="dish-play-overlay">
                <FontAwesomeIcon icon={faPlay} className="play-icon" />
              </div>
            </div>
            
            <div className="dish-content">
              <h3 className="dish-title">{vlog.title}</h3>
              <p className="dish-author">{vlog.author}</p>
              <div className="dish-category-tag">{vlog.category}</div>
              <p className="dish-meta">{vlog.views} • {vlog.timeAgo}</p>
              
              <div className="dish-actions">
                <button 
                  className="watch-now-btn"
                  onClick={() => onVideoClick(vlog)}
                >
                  Watch Now
                </button>
                <button className="dish-action-btn">
                  <FontAwesomeIcon icon={faHeart} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DishesGrid;
