import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faPlay, faPause, faVolumeUp, faVolumeMute, faExpand } from '@fortawesome/free-solid-svg-icons';
import './VideoPlayer.css';

const VideoPlayer = ({ isOpen, onClose, videoData }) => {
  if (!isOpen || !videoData) return null;

  return (
    <div className="video-player-overlay">
      <div className="video-player-container">
        <div className="video-player-header">
          <h3 className="video-title">{videoData.title}</h3>
          <button className="close-video-button" onClick={onClose}>
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>
        
        <div className="video-player-content">
          <div className="video-wrapper">
            <video 
              className="video-element"
              controls
              autoPlay
              poster={videoData.thumbnail}
            >
              <source src={videoData.videoUrl || "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4"} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          
          <div className="video-info">
            <div className="video-meta">
              <div className="video-author">
                <div className="author-avatar">👨‍🍳</div>
                <span>{videoData.author}</span>
              </div>
              <div className="video-stats">
                <span>{videoData.views}</span>
                <span>•</span>
                <span>{videoData.timeAgo}</span>
              </div>
            </div>
            
            <div className="video-description">
              <p>Experience the authentic flavors and techniques in this amazing cooking video. 
              Learn professional tips and tricks from our featured chef.</p>
            </div>
            
            <div className="video-actions">
              <button className="like-button">
                <FontAwesomeIcon icon={faPlay} />
                Like
              </button>
              <button className="share-button">
                <FontAwesomeIcon icon={faExpand} />
                Share
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
