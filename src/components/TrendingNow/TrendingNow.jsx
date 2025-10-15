import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faPlay } from '@fortawesome/free-solid-svg-icons';
import './TrendingNow.css';

const TrendingNow = ({ onVideoClick }) => {
  const trendingVideos = [
    {
      id: 1,
      title: "Authentic Italian Pizza Recipe from Scratch",
      author: "Marco's Kitchen",
      views: "1.1M views",
      timeAgo: "3 days ago",
      duration: "08:45",
      thumbnail: "https://images.unsplash.com/photo-1551892374-ecf8754cf8b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      category: "Recipes"
    },
    {
      id: 2,
      title: "Authentic Italian Pizza Recipe from Scratch",
      author: "Marco's Kitchen",
      views: "1.1M views",
      timeAgo: "3 days ago",
      duration: "08:45",
      thumbnail: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      category: "Recipes"
    }
  ];

  return (
    <div className="trending-now-container">
      <div className="trending-now-header">
        <h2 className="trending-now-title">Trending Now</h2>
      </div>
      
      <div className="trending-now-content">
        <div className="trending-cards-container">
          {trendingVideos.map((video) => (
            <div key={video.id} className="trending-card">
              <div className="trending-thumbnail">
                <img src={video.thumbnail} alt={video.title} />
                <div className="trending-duration">{video.duration}</div>
                <div className="trending-play-overlay">
                  <FontAwesomeIcon icon={faPlay} className="trending-play-icon" />
                </div>
              </div>
              
              <div className="trending-content">
                <h3 className="trending-title">{video.title}</h3>
                <div className="trending-meta">
                  <div className="trending-category-tag">{video.category}</div>
                  <div className="trending-author-info">
                    <div className="trending-author-avatar">👨‍🍳</div>
                    <span className="trending-author">{video.author}</span>
                  </div>
                </div>
                <p className="trending-stats">{video.views} • {video.timeAgo}</p>
                
                <div className="trending-actions">
                  <button 
                    className="trending-watch-btn"
                    onClick={() => onVideoClick(video)}
                  >
                    Watch Now
                  </button>
                  <button className="trending-like-btn">
                    <FontAwesomeIcon icon={faHeart} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrendingNow;
