import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faShare, faPlay, faUser, faCoffee, faFire, faLeaf, faUtensils } from '@fortawesome/free-solid-svg-icons';
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
      category: "Travel",
      icon: faUtensils
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
      category: "Recipes",
      icon: faUtensils
    },
    {
      id: 3,
      title: "Exploring the Rich Flavors of Indian Cuisine",
      author: "Taste Explorer",
      views: "850K views",
      timeAgo: "5 days ago",
      duration: "20:00",
      thumbnail: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      likes: 1100,
      category: "Culture",
      icon: faUser
    },
    {
      id: 4,
      title: "Top 10 Viral Food Challenges You Must Try",
      author: "Foodie Nation",
      views: "3.2M views",
      timeAgo: "2 days ago",
      duration: "10:15",
      thumbnail: "https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      likes: 1500,
      category: "Trending",
      icon: faFire
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
      category: "Reviews",
      icon: faCoffee
    },
    {
      id: 6,
      title: "Quick & Healthy Weeknight Meals",
      author: "Nutrition Hub",
      views: "600K views",
      timeAgo: "6 days ago",
      duration: "07:20",
      thumbnail: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      likes: 650,
      category: "Recipes",
      icon: faLeaf
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
              <div className="dish-creator-info">
                <div className="dish-creator-avatar">
                  <FontAwesomeIcon icon={vlog.icon} />
                </div>
                <p className="dish-author">{vlog.author}</p>
              </div>
              <div className="dish-meta-row">
                <div className="dish-category-tag">{vlog.category}</div>
                <p className="dish-meta">{vlog.views} • {vlog.timeAgo}</p>
              </div>
              
              <div className="dish-actions">
                <button 
                  className="watch-now-btn"
                  onClick={() => onVideoClick(vlog)}
                >
                  Watch Now
                </button>
                <button className="dish-action-btn">
                  <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.4 4.355C13.4 3.55538 13.0822 2.78872 12.5167 2.2233C11.9513 1.65788 11.1846 1.34 10.385 1.34C9.86253 1.34 9.45578 1.41369 9.07971 1.57751C8.69928 1.74321 8.308 2.01943 7.84369 2.48371C7.58206 2.74537 7.15795 2.74537 6.89631 2.48371C6.432 2.01943 6.04072 1.74321 5.66032 1.57751C5.2842 1.41369 4.87748 1.34 4.355 1.34C3.55538 1.34 2.78872 1.65788 2.2233 2.2233C1.65788 2.78872 1.34 3.55538 1.34 4.355C1.34 5.43772 1.95607 6.33706 2.78076 7.19332L7.37 11.7826L11.5909 7.56169L11.9559 7.19272C12.7805 6.32882 13.4 5.43129 13.4 4.355ZM14.74 4.355C14.74 6.19053 13.529 7.5367 12.5331 8.51309L12.5337 8.51369L7.84369 13.2037C7.58206 13.4654 7.15795 13.4654 6.89631 13.2037L2.21414 8.5216L1.82941 8.13815C0.922905 7.20183 0 5.9689 0 4.355C0 3.19998 0.458501 2.09195 1.27522 1.27522C2.09195 0.458501 3.19998 0 4.355 0C5.01172 0 5.6102 0.0938067 6.19556 0.348742C6.6064 0.527699 6.98931 0.778011 7.37 1.09987C7.75069 0.778011 8.1336 0.527699 8.54444 0.348742C9.12982 0.0938067 9.72827 0 10.385 0C11.54 0 12.6481 0.458501 13.4648 1.27522C14.2815 2.09195 14.74 3.19998 14.74 4.355Z" fill="#565D6D"/>
                  </svg>
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
