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
      thumbnail: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1169",
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
                <div className="trending-author-info">
                  <div className="trending-author-avatar">👨‍🍳</div>
                  <span className="trending-author">{video.author}</span>
                </div>
                <div className="trending-meta-row">
                  <div className="trending-category-tag">{video.category}</div>
                  <p className="trending-stats">{video.views} • {video.timeAgo}</p>
                </div>
                
                <div className="trending-actions">
                  <button 
                    className="trending-watch-btn"
                    onClick={() => onVideoClick(video)}
                  >
                    Watch Now
                  </button>
                  <button className="trending-like-btn">
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
    </div>
  );
};

export default TrendingNow;
